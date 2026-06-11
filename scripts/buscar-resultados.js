/**
 * buscar-resultados.js
 * Roda pelo GitHub Actions diariamente às 9h UTC (6h BRT)
 * Busca resultados da Copa 2026 e atualiza resultados_2026.json
 *
 * Fontes (todas GRATUITAS, sem API key):
 *   1. OpenFootball (raw GitHub) — sem cadastro, sem limite, domínio público
 *   2. worldcup26.ir — API REST gratuita com live scores
 *   3. TheSportsDB — gratuita, sem cadastro
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RESULTADOS_PATH = path.join(__dirname, '..', 'resultados_2026.json');

// ============================================================
// MAPEAMENTO DE TIMES: variações de nome → nome no app
// ============================================================
const NOME_MAP = {
    // Português / Inglês / Espanhol
    'brazil': 'Brasil', 'brasil': 'Brasil',
    'argentina': 'Argentina',
    'france': 'França', 'franca': 'França', 'france': 'França',
    'germany': 'Alemanha', 'allemagne': 'Alemanha',
    'england': 'Inglaterra',
    'spain': 'Espanha', 'espana': 'Espanha',
    'portugal': 'Portugal',
    'netherlands': 'Países Baixos', 'holland': 'Países Baixos', 'pays-bas': 'Países Baixos',
    'belgium': 'Bélgica', 'belgique': 'Bélgica',
    'croatia': 'Croácia',
    'senegal': 'Senegal',
    'morocco': 'Marrocos', 'maroc': 'Marrocos',
    'norway': 'Noruega', 'norvege': 'Noruega',
    'sweden': 'Suécia', 'sverige': 'Suécia',
    'mexico': 'México',
    'canada': 'Canadá',
    'usa': 'Estados Unidos', 'united states': 'Estados Unidos', 'us': 'Estados Unidos',
    'south korea': 'Coreia do Sul', 'korea republic': 'Coreia do Sul',
    'czechia': 'Tchéquia', 'czech republic': 'Tchéquia',
    'south africa': 'África do Sul',
    'switzerland': 'Suíça', 'suisse': 'Suíça',
    'austria': 'Áustria',
    'algeria': 'Argélia', 'algerie': 'Argélia',
    'colombia': 'Colômbia',
    'ecuador': 'Equador',
    'japan': 'Japão', 'japon': 'Japão',
    'tunisia': 'Tunísia', 'tunisie': 'Tunísia',
    'iran': 'Irã',
    'new zealand': 'Nova Zelândia',
    'saudi arabia': 'Arábia Saudita', 'arabia saoudite': 'Arábia Saudita',
    'cape verde': 'Cabo Verde',
    'iraq': 'Iraque',
    'jordan': 'Jordânia',
    'ghana': 'Gana',
    'panama': 'Panamá',
    'uruguay': 'Uruguai',
    'paraguay': 'Paraguai',
    'ivory coast': 'Costa do Marfim', "cote d'ivoire": 'Costa do Marfim',
    'curacao': 'Curaçao',
    'turkey': 'Turquia', 'türkiye': 'Turquia',
    'australia': 'Austrália',
    'scotland': 'Escócia',
    'haiti': 'Haiti',
    'bosnia': 'Bósnia e Herzegovina', 'bosnia-herzegovina': 'Bósnia e Herzegovina',
    'qatar': 'Catar',
    'dr congo': 'RD Congo', 'democratic republic of congo': 'RD Congo', 'congo dr': 'RD Congo',
    'uzbekistan': 'Uzbequistão',
};

function normalizarTime(nome) {
    if (!nome) return '';
    const lower = nome.toLowerCase().trim();
    return NOME_MAP[lower] || nome;
}

// ============================================================
// MAPEAMENTO: par de times → gameId no app
// ============================================================
const JOGOS_MAPA = {
    // Grupo A
    'Coreia do Sul|México': 'a1',
    'Tchéquia|África do Sul': 'a2',
    'Coreia do Sul|Tchéquia': 'a3',
    'África do Sul|México': 'a4',
    'México|Tchéquia': 'a5',
    'África do Sul|Coreia do Sul': 'a6',
    // Grupo B
    'Bósnia e Herzegovina|Canadá': 'b1',
    'Catar|Suíça': 'b2',
    'Bósnia e Herzegovina|Catar': 'b3',
    'Suíça|Canadá': 'b4',
    'Canadá|Catar': 'b5',
    'Suíça|Bósnia e Herzegovina': 'b6',
    // Grupo C
    'Brasil|Escócia': 'c1',
    'Haiti|Marrocos': 'c2',
    'Brasil|Haiti': 'c3',
    'Marrocos|Escócia': 'c4',
    'Escócia|Haiti': 'c5',
    'Marrocos|Brasil': 'c6',
    // Grupo D
    'Austrália|Estados Unidos': 'd1',
    'Paraguai|Turquia': 'd2',
    'Austrália|Paraguai': 'd3',
    'Turquia|Estados Unidos': 'd4',
    'Estados Unidos|Paraguai': 'd5',
    'Turquia|Austrália': 'd6',
    // Grupo E
    'Alemanha|Costa do Marfim': 'e1',
    'Curaçao|Equador': 'e2',
    'Alemanha|Curaçao': 'e3',
    'Equador|Costa do Marfim': 'e4',
    'Costa do Marfim|Curaçao': 'e5',
    'Equador|Alemanha': 'e6',
    // Grupo F
    'Países Baixos|Japão': 'f1',
    'Suécia|Tunísia': 'f2',
    'Países Baixos|Suécia': 'f3',
    'Tunísia|Japão': 'f4',
    'Japão|Suécia': 'f5',
    'Tunísia|Países Baixos': 'f6',
    // Grupo G
    'Bélgica|Egito': 'g1',
    'Irã|Nova Zelândia': 'g2',
    'Bélgica|Irã': 'g3',
    'Nova Zelândia|Egito': 'g4',
    'Egito|Irã': 'g5',
    'Nova Zelândia|Bélgica': 'g6',
    // Grupo H
    'Arábia Saudita|Cabo Verde': 'h1',
    'Espanha|Uruguai': 'h2',
    'Arábia Saudita|Espanha': 'h3',
    'Uruguai|Cabo Verde': 'h4',
    'Cabo Verde|Espanha': 'h5',
    'Uruguai|Arábia Saudita': 'h6',
    // Grupo I
    'França|Iraque': 'i1',
    'Noruega|Senegal': 'i2',
    'França|Noruega': 'i3',
    'Senegal|Iraque': 'i4',
    'Iraque|Noruega': 'i5',
    'Senegal|França': 'i6',
    // Grupo J
    'Argentina|Argélia': 'j1',
    'Áustria|Jordânia': 'j2',
    'Argentina|Áustria': 'j3',
    'Jordânia|Argélia': 'j4',
    'Argélia|Áustria': 'j5',
    'Jordânia|Argentina': 'j6',
    // Grupo K
    'Colômbia|Portugal': 'k1',
    'RD Congo|Uzbequistão': 'k2',
    'Colômbia|RD Congo': 'k3',
    'Uzbequistão|Portugal': 'k4',
    'Portugal|RD Congo': 'k5',
    'Uzbequistão|Colômbia': 'k6',
    // Grupo L
    'Croácia|Gana': 'l1',
    'Inglaterra|Panamá': 'l2',
    'Croácia|Inglaterra': 'l3',
    'Panamá|Gana': 'l4',
    'Gana|Inglaterra': 'l5',
    'Panamá|Croácia': 'l6',
};

function encontrarGameId(homeRaw, awayRaw) {
    const home = normalizarTime(homeRaw);
    const away = normalizarTime(awayRaw);
    return JOGOS_MAPA[`${home}|${away}`] || null;
}

// ============================================================
// FONTE 1: OpenFootball (GitHub raw — 100% gratuito, sem cadastro)
// ============================================================
async function buscarOpenFootball() {
    console.log('🔄 Buscando OpenFootball (gratuito, sem API key)...');
    const url = 'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json';
    const res = await fetch(url, {
        headers: { 'User-Agent': 'bolao-copa-2026-bot' }
    });
    if (!res.ok) throw new Error(`OpenFootball HTTP ${res.status}`);
    const data = await res.json();

    const gameResults = {};
    const rounds = data.rounds || data.matches || [];

    rounds.forEach(round => {
        const matches = round.matches || (Array.isArray(round) ? round : []);
        matches.forEach(match => {
            const homeRaw = match.team1 || match.home?.name || match.home;
            const awayRaw = match.team2 || match.away?.name || match.away;
            const score = match.score || match.ft;

            if (!homeRaw || !awayRaw) return;

            const gameId = encontrarGameId(homeRaw, awayRaw);
            if (!gameId) return;

            // Placar pode vir como "2:1" ou { ft: [2, 1] } ou { home: 2, away: 1 }
            let homeGoals = null, awayGoals = null;
            if (score) {
                if (typeof score === 'string') {
                    const parts = score.split(':').map(Number);
                    homeGoals = parts[0]; awayGoals = parts[1];
                } else if (Array.isArray(score.ft)) {
                    homeGoals = score.ft[0]; awayGoals = score.ft[1];
                } else if (score.ft && typeof score.ft === 'string') {
                    const parts = score.ft.split('-').map(Number);
                    homeGoals = parts[0]; awayGoals = parts[1];
                } else if (typeof score.home === 'number') {
                    homeGoals = score.home; awayGoals = score.away;
                }
            }

            if (homeGoals === null || isNaN(homeGoals)) return;

            // Determinar quem avançou (apenas para knockouts — nos grupos não tem)
            let advancedTeam = '';
            if (homeGoals > awayGoals) advancedTeam = normalizarTime(homeRaw);
            else if (awayGoals > homeGoals) advancedTeam = normalizarTime(awayRaw);

            // Cartões vermelhos (se disponível)
            const redCards = { home: [], away: [] };
            (match.goals || []).forEach(g => {
                if (g.type === 'red card' || g.type === 'cartao_vermelho') {
                    const jogador = `${g.name || g.player} (${g.minute || '?'}min)`;
                    if (g.team === 1 || g.side === 'home') redCards.home.push(jogador);
                    else redCards.away.push(jogador);
                }
            });

            gameResults[gameId] = {
                homeGoals, awayGoals, advancedTeam,
                redCards,
                fonte: 'openfootball',
                updatedAt: new Date().toISOString()
            };
        });
    });

    console.log(`✅ OpenFootball: ${Object.keys(gameResults).length} resultados encontrados`);
    return gameResults;
}

// ============================================================
// FONTE 2: worldcup26.ir (gratuito, sem custo)
// ============================================================
async function buscarWorldcup26ir() {
    console.log('🔄 Buscando worldcup26.ir (gratuito)...');
    const res = await fetch('https://worldcup26.ir/get/games', {
        headers: { 'User-Agent': 'bolao-copa-2026-bot' }
    });
    if (!res.ok) throw new Error(`worldcup26.ir HTTP ${res.status}`);
    const data = await res.json();
    const matches = data.games || data.matches || data || [];
    const gameResults = {};

    matches.forEach(match => {
        const homeRaw = match.home_team?.name || match.home?.name || match.team1;
        const awayRaw = match.away_team?.name || match.away?.name || match.team2;
        const gameId = encontrarGameId(homeRaw, awayRaw);
        if (!gameId) return;

        const homeGoals = match.home_score ?? match.score?.home ?? null;
        const awayGoals = match.away_score ?? match.score?.away ?? null;
        if (homeGoals === null) return;

        gameResults[gameId] = {
            homeGoals: parseInt(homeGoals),
            awayGoals: parseInt(awayGoals),
            advancedTeam: homeGoals > awayGoals
                ? normalizarTime(homeRaw)
                : awayGoals > homeGoals
                    ? normalizarTime(awayRaw) : '',
            redCards: { home: [], away: [] },
            fonte: 'worldcup26.ir',
            updatedAt: new Date().toISOString()
        };
    });

    console.log(`✅ worldcup26.ir: ${Object.keys(gameResults).length} resultados`);
    return gameResults;
}

// ============================================================
// FONTE 3: TheSportsDB (gratuito, sem API key)
// ============================================================
async function buscarTheSportsDB() {
    console.log('🔄 Buscando TheSportsDB (gratuito)...');
    // Liga FIFA World Cup 2026 = id 4429
    const url = 'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4429&s=2026';
    const res = await fetch(url, {
        headers: { 'User-Agent': 'bolao-copa-2026-bot' }
    });
    if (!res.ok) throw new Error(`TheSportsDB HTTP ${res.status}`);
    const data = await res.json();
    const events = data.events || [];
    const gameResults = {};

    events.forEach(ev => {
        if (!ev.intHomeScore && ev.intHomeScore !== 0) return; // jogo não realizado
        const gameId = encontrarGameId(ev.strHomeTeam, ev.strAwayTeam);
        if (!gameId) return;

        const homeGoals = parseInt(ev.intHomeScore);
        const awayGoals = parseInt(ev.intAwayScore);

        gameResults[gameId] = {
            homeGoals, awayGoals,
            advancedTeam: homeGoals > awayGoals
                ? normalizarTime(ev.strHomeTeam)
                : awayGoals > homeGoals
                    ? normalizarTime(ev.strAwayTeam) : '',
            redCards: { home: [], away: [] },
            fonte: 'thesportsdb',
            updatedAt: new Date().toISOString()
        };
    });

    console.log(`✅ TheSportsDB: ${Object.keys(gameResults).length} resultados`);
    return gameResults;
}

// ============================================================
// MAIN
// ============================================================
async function main() {
    console.log('⚽ Bolão Copa 2026 — Atualizador de Resultados');
    console.log(`🕐 ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })} (BRT)`);
    console.log('━'.repeat(50));

    // Ler dados existentes
    let dadosAtuais = {
        gameResults: {}, overallResults: {}, knockoutTeams: {}, redCards: {}
    };
    if (fs.existsSync(RESULTADOS_PATH)) {
        try {
            dadosAtuais = JSON.parse(fs.readFileSync(RESULTADOS_PATH, 'utf8'));
        } catch(e) {
            console.log('⚠️ Erro ao ler arquivo existente, criando novo.');
        }
    }

    let novosResultados = {};
    let fonte = 'nenhuma';

    // Tentar cada fonte em ordem
    const fontes = [buscarOpenFootball, buscarWorldcup26ir, buscarTheSportsDB];
    for (const buscarFn of fontes) {
        try {
            novosResultados = await buscarFn();
            if (Object.keys(novosResultados).length > 0) {
                fonte = novosResultados[Object.keys(novosResultados)[0]]?.fonte || 'desconhecida';
                break;
            }
        } catch(e) {
            console.log(`⚠️ Falha: ${e.message}`);
        }
    }

    if (Object.keys(novosResultados).length === 0) {
        console.log('ℹ️ Nenhum resultado novo encontrado (Copa ainda não começou ou APIs offline)');
    }

    // Mesclar com dados anteriores (nunca perde dados já registrados)
    const gameResultsMerged = { ...dadosAtuais.gameResults, ...novosResultados };

    // Acumular cartões vermelhos
    const redCards = { ...(dadosAtuais.redCards || {}) };
    Object.entries(novosResultados).forEach(([gameId, result]) => {
        if (result.redCards?.home?.length || result.redCards?.away?.length) {
            redCards[gameId] = result.redCards;
        }
    });

    // Salvar
    const output = {
        updatedAt: new Date().toISOString(),
        fonte,
        totalJogosComResultado: Object.keys(gameResultsMerged).length,
        gameResults: gameResultsMerged,
        overallResults: dadosAtuais.overallResults || {},
        knockoutTeams: dadosAtuais.knockoutTeams || {},
        redCards
    };

    fs.writeFileSync(RESULTADOS_PATH, JSON.stringify(output, null, 2));

    console.log('━'.repeat(50));
    console.log(`✅ resultados_2026.json salvo`);
    console.log(`📊 Jogos com resultado: ${output.totalJogosComResultado}`);
    console.log(`🔗 Fonte usada: ${fonte}`);
}

main().catch(err => {
    console.error('❌ Erro fatal:', err.message);
    process.exit(1);
});
