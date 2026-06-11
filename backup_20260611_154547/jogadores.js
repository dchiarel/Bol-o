// ============================================================
// Elencos Oficiais Copa do Mundo 2026
// Fonte: Trivela.com.br (validado em 02/06/2026)
// 26 jogadores por seleção
// ============================================================

const ELENCOS_COMPLETOS = {

    // GRUPO A
    'Coreia do Sul': [
        'Kim Seung-gyu', 'Song Bum-keun', 'Jo Hyeon-woo',
        'Kim Moon-hwan', 'Kim Min-jae', 'Kim Tae-hyeon', 'Park Jin-seob', 'Seol Young-woo',
        'Jens Castrop', 'Lee Ki-hyuk', 'Lee Tae-seok', 'Lean Han-beom', 'Cho Yu-min',
        'Kim Jin-gyu', 'Bae Jun-ho', 'Paik Seung-ho', 'Yang Hyun-jun', 'Eom Ji-sung',
        'Lee Kang-in', 'Lee Dong-gyeong', 'Lee Jae-sung', 'Hwang In-beom', 'Hwang Hee-chan',
        'Son Heung-min', 'Oh Hyeong-yu', 'Cho Gue-sung'
    ],
    'México': [
        'Carlos Acevedo', 'Guillermo Ochoa', 'Raúl Rangel',
        'César Montes', 'Edson Álvarez', 'Israel Reyes', 'Jesús Gallardo', 'Johan Vásquez',
        'Jorge Sánchez', 'Mateo Chávez',
        'Álvaro Fidalgo', 'Brian Gutiérrez', 'Luis Romo', 'Erik Lira', 'Gilberto Mora',
        'Luis Chávez', 'Obed Vargas', 'Orbelín Pineda',
        'Alexis Vega', 'Armando González', 'César Huerta', 'Guillermo Martínez',
        'Julián Quiñones', 'Raúl Jiménez', 'Roberto Alvarado', 'Santiago Giménez'
    ],
    'Tchéquia': [
        'Lukas Hornicek', 'Matej Kovar', 'Jindreich Stanek',
        'Vladimir Coufal', 'David Doudera', 'Tomas Holes', 'Robin Hranac', 'Stepan Chaloupek',
        'David Jurasek', 'Ladislav Krejcí', 'Jaroslav Zeleny', 'David Zima',
        'Lukas Cerv', 'Vladimir Darida', 'Lukas Provod', 'Michal Sadilek', 'Hugo Sochurek',
        'Alexandr Sojka', 'Tomas Soucek', 'Pavel Sulc', 'Denis Visinsky',
        'Adam Hlozek', 'Tomas Chory', 'Mojmir Chytil', 'Patrik Schick', 'Jan Kuchta'
    ],
    'África do Sul': [
        'Ronwen Williams', 'Ricardo Goss', 'Sipho Chaine',
        'Khuliso Mudau', 'Nkosinathi Sibisi', 'Ime Okon', 'Khulumani Ndamane', 'Aubrey Modiba',
        'Samukelo Kabini', 'Thabang Matuludi', 'Olwethu Makhanya', 'Kamogelo Sebelebele',
        'Bradley Cross', 'Mbekezeli Mbokazi',
        'Teboho Mokoena', 'Thalente Mbatha', 'Sphephelo Sithole', 'Jayden Adams',
        'Oswin Appollis', 'Iqraam Rayners', 'Tshepang Moremi', 'Relebohile Mofokeng',
        'Evidence Makgopa', 'Themba Zwane', 'Lyle Foster', 'Thapelo Maseko'
    ],

    // GRUPO B
    'Bósnia e Herzegovina': [
        'Nikola Vasilj', 'Martin Zlomislic', 'Osman Hadzikic',
        'Sead Kolasinac', 'Amar Dedic', 'Nihad Mujakic', 'Nikola Katic', 'Tarik Muharemovic',
        'Stjepan Radeljic', 'Dennis Hadzikadunic', 'Nidal Celik',
        'Amir Hadziahmetovic', 'Ivan Sunjic', 'Ivan Basic', 'Dzenis Burnic',
        'Ermin Mahmic', 'Benjamin Tahirovic', 'Amar Memic', 'Armin Gigovic', 'Kerim Alajbegovic',
        'Esmir Bajraktrevic',
        'Ermedin Demirovic', 'Jovo Lukic', 'Samed Bazdar', 'Haris Tabakovic', 'Edin Dzeko'
    ],
    'Canadá': [
        'Maxime Crépeau', 'Owen Goodman', 'Dayne St. Clair',
        'Zorhan Bassong', 'Moïse Bombito', 'Derek Cornelius', 'Alphonso Davies',
        'Luc de Fougerolles', 'Alistair Johnston', 'Alfie Jones', 'Jamie Knight-Lebel',
        'Richie Laryea', 'Ralph Priso', 'Niko Sigur', 'Joel Waterman',
        'Ali Ahmed', 'Tajon Buchanan', 'Mathieu Choinière', 'Stephen Eustáquio',
        'Marcelo Flores', 'Ismael Koné', 'Liam Millar', 'Jayden Nelson',
        'Jonathan David', 'Cyle Larin', 'Tani Oluwaseyi'
    ],
    'Catar': [
        'Salah Zakaria', 'Meshaal Barsham', 'Mahmoud Abunada',
        'Pedro Miguel', 'Sultan Al Brake', 'Ayoub Al-Alawi', 'Lucas Mendes', 'Niall Mason',
        'Ahmed Fathi', 'Jassim Gaber', 'Assim Madibo', 'Abdulaziz Hatem',
        'Karim Boudiaf', 'Mohammed Mannai',
        'Almoez Ali', 'Akram Afif', 'Tahsin Mohammed', 'Edmílson Junior',
        'Ahmed Alaa', 'Hassan Al-Haydos', 'Mubarak Shannan', 'Mohammed Muntari',
        'Yusuf Abdurisag', 'Khalid Salman', 'Abdulkarim Hassan', 'Homam Ahmed'
    ],
    'Suíça': [
        'Marvin Keller', 'Gregor Kobel', 'Yvon Mvogo',
        'Manuel Akanji', 'Auréle Amenda', 'Eray Comert', 'Nico Elvedi',
        'Luca Jaquez', 'Miro Muheim', 'Ricardo Rodriguez', 'Silvan Widmer',
        'Michael Aebischer', 'Zeki Amdouni', 'Remo Freuler', 'Ardon Jashari',
        'Johan Mazambi', 'Fabian Rieder', 'Djibril Sow', 'Granit Xhaka', 'Denis Zakaria',
        'Breel Embolo', 'Christian Fassnacht', 'Cedric Itten', 'Dan Ndoye',
        'Noah Okafor', 'Ruben Vargas'
    ],

    // GRUPO C
    'Brasil': [
        'Alisson', 'Ederson', 'Weverton',
        'Alex Sandro', 'Bremer', 'Danilo', 'Douglas Santos', 'Gabriel Magalhães',
        'Ibañez', 'Leo Pereira', 'Marquinhos', 'Wesley',
        'Bruno Guimarães', 'Casemiro', 'Fabinho', 'Lucas Paquetá',
        'Endrick', 'Gabriel Martinelli', 'Igor Thiago', 'Luiz Henrique',
        'Matheus Cunha', 'Neymar', 'Raphinha', 'Rayan', 'Vini Jr', 'Rodrygo'
    ],
    'Escócia': [
        'Craig Gordon', 'Angus Gunn', 'Liam Kelly',
        'Grant Hanley', 'Jack Hendry', 'Aaron Hickey', 'Dom Hyam', 'Scott McKenna',
        'Nathan Patterson', 'Anthony Ralston', 'Andy Robertson', 'John Souttar', 'Kieran Tierney',
        'Ryan Christie', 'Findlay Curtis', 'Lewis Ferguson', 'Ben Gannon-Doak',
        'Tyler Fletcher', 'John McGinn', 'Kenny McLean', 'Scott McTominay',
        'Che Adams', 'Lyndon Dykes', 'George Hirst', 'Lawrence Shankland', 'Ross Stewart'
    ],
    'Haiti': [
        'Johnny Placide', 'Alexandre Pierre', 'Josué Duverger',
        'Carlens Arcus', 'Wilguens Pauguain', 'Duke Lacroix', 'Martin Experience',
        'JK Duverne', 'Ricardo Ade', 'Hannes Delcroix', 'Keeto Thermoncy',
        'Leverton Pierre', 'Carl-Fred Sainthe', 'Jean-Jacques Danley',
        'Jeanricner Bellegarde', 'Pierre Woodenski', 'Dominique Simon',
        'Louicius Deedson', 'Ruben Providence', 'Josué Casimir', 'Derrick Etienne',
        'Wilson Isidor', 'Duckens Nazon', 'Frantzdy Pierrot', 'Yassin Fortune', 'Lenny Joseph'
    ],
    'Marrocos': [
        'Yassine Bounou', 'Munir El Kajoui', 'Ahmed Reda Tagnaouti',
        'Achraf Hakimi', 'Noussair Mazraoui', 'Anass Salah-Eddine', 'Youssef Belammari',
        'Nayef Aguerd', 'Issa Diop', 'Chadi Riad', 'Redouane Halhal', 'Zakaria El Ouahdi',
        'Azzedine Ounahi', 'Neil El Aynaoui', 'Sofyan Amrabat', 'Ayoub Bouaddi',
        'Samir El Mourabet', 'Bilal El Khannouss', 'Ismaël Saibari',
        'Brahim Díaz', 'Abdessamad Ezzalzouli', 'Yassine Bessime',
        'Chemsdine Talbi', 'Soufiane Rahimi', 'Ayoub El Kaabi', 'Ayoub Amahount'
    ],

    // GRUPO D
    'Austrália': [
        'Patrick Beach', 'Paul Izzo', 'Maty Ryan',
        'Aziz Behich', 'Jordan Bos', 'Cameron Burgess', 'Alessandro Circati',
        'Milos Degenek', 'Jason Geria', 'Lucas Herrington', 'Jacob Italiano',
        'Harry Souttar', 'Kai Trewin',
        'Cameron Devlin', 'Ajdin Hrustic', 'Jackson Irvine', 'Connor Metcalfe',
        'Paul Okon-Engstler', 'Aiden O\'Neill',
        'Nestory Irankunda', 'Mathew Leckie', 'Awer Mabil',
        'Mohamed Toure', 'Nishan Velupillay', 'Cristian Volpato', 'Tete Yengi'
    ],
    'Estados Unidos': [
        'Chris Brady', 'Matt Freese', 'Matt Turner',
        'Alex Freeman', 'Antonee Robinson', 'Auston Trusty', 'Chris Richards',
        'Mark McKenzie', 'Max Arfsten', 'Sergiño Dest', 'Tim Ream',
        'Miles Robinson', 'Joe Scally',
        'Brenden Aaronson', 'Cristian Roldan', 'Gio Reyna', 'Malik Tillman',
        'Tyler Adams', 'Weston McKennie',
        'Alex Zendejas', 'Christian Pulisic', 'Folarin Balogun',
        'Haji Wright', 'Ricardo Pepi', 'Tim Weah'
    ],
    'Paraguai': [
        'Orlando Gill', 'Gatito Fernández', 'Gastón Olveira',
        'Juan José Cáceres', 'José Canale', 'Fabián Balbuena', 'Omar Alderete',
        'Gustavo Gómez', 'Alexandro Maidana', 'Junior Alonso', 'Gustavo Velázquez',
        'Braian Ojeda', 'Damián Bobadilla', 'Andrés Cubas', 'Diego Gómez',
        'Alejandro Romero Gamarra', 'Mauricio Prado', 'Matías Galarza',
        'Ramón Sosa', 'Gustavo Caballero',
        'Miguel Almirón', 'Gabriel Ávalos', 'Isidro Pitta',
        'Álex Arce', 'Julio Enciso', 'Antonio Sanabria'
    ],
    'Turquia': [
        'Altay Bayindir', 'Mert Günok', 'Ugurcan Cakir',
        'Abdulkerim Bardakci', 'Caglar Soyuncu', 'Eren Elmalı', 'Ferdi Kadıoglu',
        'Merih Demiral', 'Mert Müldür', 'Ozan Kabak', 'Sead Akaydin', 'Zeki Celik',
        'Hakan Calhanoglu', 'Ismail Yuksek', 'Kaan Ayhan', 'Orkun Kökçü', 'Salih Ozcan',
        'Arda Güler', 'Barıs Alper Yılmaz', 'Can Uzun', 'Deniz Gül',
        'Irfan Can Kahveci', 'Kenan Yildiz', 'Kerem Akturkoglu',
        'Oguz Aydin', 'Yunus Akgun'
    ],

    // GRUPO E
    'Alemanha': [
        'Oliver Baumann', 'Manuel Neuer', 'Alexander Nubel',
        'Waldemar Anton', 'Nathaniel Brown', 'Pascal Grob', 'Joshua Kimmich',
        'Felix Nmecha', 'Aleksandar Pavlovic', 'David Raum', 'Antonio Rudiger',
        'Nico Schlotterbeck', 'Angelo Stiller', 'Jonathan Tah', 'Malick Thiaw',
        'Nadiem Amiri', 'Leon Goretzka', 'Kai Havertz', 'Lennart Karl',
        'Jamie Leweling', 'Jamal Musiala', 'Leroy Sané',
        'Deniz Undav', 'Florian Wirtz', 'Nick Woltemade', 'Maximilian Beier'
    ],
    'Costa do Marfim': [
        'Yahia Fofana', 'Mohamed Koné', 'Alban Lafont',
        'Emmanuel Agbadou', 'Clément Akpa', 'Ousmane Diomande', 'Guéla Doué',
        'Ghislain Konan', 'Odilon Kossounou', 'Evan Ndicka', 'Wilfried Singo',
        'Seko Fofana', 'Parfait Guiagon', 'Christ Inao Oulaï', 'Franck Kessié',
        'Ibrahim Sangaré', 'Jean Michaël Seri',
        'Simon Adingra', 'Ange-Yoan Bonny', 'Amad Diallo', 'Oumar Diakité',
        'Yan Diomande', 'Evann Guessand', 'Nicolas Pépé',
        'Bazoumana Touré', 'Elye Wahi'
    ],
    'Curaçao': [
        'Tyrick Bodak', 'Trevor Doornbusch', 'Eloy Room',
        'Riechedly Bazoer', 'Joshua Brenet', 'Sherel Floranus', 'Deveron Fonville',
        'Juriën Gaari', 'Armando Obispo', 'Shurandy Sambo', 'Roshon van Eijma',
        'Juninho Bacuna', 'Leandro Bacuna', 'Livano Comenencia', 'Kevin Felida',
        'Arjany Martha', 'Tyrese Noslin', 'Godfried Roemeratoe',
        'Jeremy Antonisse', 'Tahith Chong', 'Kenji Gorre', 'Sontje Hansen',
        'Gervane Kastaneer', 'Brandley Kuwas', 'Jürgen Locadia', 'Jearl Margaritha'
    ],
    'Equador': [
        'Hernán Galíndez', 'Moisés Ramírez', 'Gonzalo Valle',
        'Piero Hincapie', 'Willian Pacho', 'Pervis Estupinan', 'Felix Torres',
        'Joel Ordonez', 'Jackson Porozo', 'Angelo Preciado',
        'Moises Caicedo', 'Alan Franco', 'Kendry Paez', 'Pedro Vite',
        'Jordy Alcivar', 'Denil Castillo', 'Yaimar Medina',
        'Enner Valencia', 'Gonzalo Plata', 'Alan Minda', 'John Yeboah',
        'Kevin Rodriguez', 'Jordy Caicedo', 'Nilson Angulo',
        'Anthony Valencia', 'Jeremy Arevalo'
    ],

    // GRUPO F
    'Países Baixos': [
        'Mark Flekken', 'Robin Roefs', 'Bart Verbruggen',
        'Nathan Aké', 'Denzel Dumfries', 'Jorrel Hato', 'Jurriën Timber',
        'Jan Paul van Hecke', 'Micky van de Ven', 'Virgil van Dijk',
        'Frenkie de Jong', 'Marten de Roon', 'Ryan Gravenberch', 'Teun Koopmeiners',
        'Tijjani Reijnders', 'Guus Til', 'Quinten Timber', 'Mats Wieffer',
        'Brian Brobbey', 'Memphis Depay', 'Cody Gakpo', 'Justin Kluivert',
        'Noa Lang', 'Donyell Malen', 'Crysencio Summerville', 'Wout Weghorst'
    ],
    'Japão': [
        'Zion Suzuki', 'Keisuke Osako', 'Tomoki Hayakawa',
        'Hiroki Ito', 'Junnosuke Suzuki', 'Ayumu Seko', 'Shogo Taniguchi',
        'Tsuyoshi Watanabe', 'Ko Itakura', 'Takehiro Tomiyasu', 'Yukinari Sugawara',
        'Yuto Nagatomo',
        'Daichi Kamada', 'Ao Tanaka', 'Kaishu Sano', 'Wataru Endo',
        'Keito Nakamura', 'Daizen Maeda', 'Ritsu Doan', 'Yuito Suzuki', 'Junya Ito',
        'Ayase Ueda', 'Koki Ogawa', 'Takefusa Kubo'
    ],
    'Suécia': [
        'Kristoffer Nordfeldt', 'Viktor Johansson', 'Jacob Widell Zetterstrom',
        'Daniel Svensson', 'Victor Nilsson Lindelof', 'Emil Holm', 'Isak Hien',
        'Carl Starfelt', 'Gustavo Lagerbielke', 'Gabriel Gudmundsson',
        'Hjalmar Ekdal', 'Elliot Stroud', 'Eric Smith',
        'Taha Ali', 'Yasin Ayari', 'Lucas Bergvall', 'Jesper Karlstrom',
        'Benjamin Nygren', 'Mattias Svanberg', 'Besfort Zeneli',
        'Alexander Bernhardsson', 'Anthony Elanga', 'Viktor Gyökeres',
        'Alexandre Isak', 'Gustavo Nilsson', 'Ken Sema'
    ],
    'Tunísia': [
        'Aymen Dahmen', 'Sabri Ben Hassen', 'Abdelmouhib Chamakh',
        'Yan Valéry', 'Moutaz Neffati', 'Dylan Bronn', 'Raed Chikhaoui',
        'Montassar Talbi', 'Adem Arous', 'Omar Rekik', 'Ali Abdi', 'Mohamed Ben Hmida',
        'Ellyes Skhiri', 'Anis Ben Slimane', 'Rani Khedira', 'Mortadha Ben Ouanes',
        'Ismaël Gharbi', 'Mohamed Hadj-Mahmoud', 'Hannibal Mejbri',
        'Elias Saäd', 'Khalil Ayari', 'Elias Achouri',
        'Sebastian Tounekti', 'Hazem Mastouri', 'Firas Chawat', 'Rayan Elloumi'
    ],

    // GRUPO G
    'Bélgica': [
        'Thibault Courtois', 'Senne Lammens', 'Mike Penders',
        'Timothy Castagne', 'Zeno Debast', 'Koni De Winter', 'Brandon Mechele',
        'Arthur Theate', 'Maxim De Cuyper', 'Thomas Meunier', 'Nathan Ngoy', 'Joaquin Seys',
        'Kevin De Bruyne', 'Amadou Onana', 'Nicolas Raskin', 'Youri Tielemans',
        'Hans Vanaken', 'Axel Witsel',
        'Charles De Ketelaere', 'Mathias Fernandez-Pardo', 'Jeremy Doku',
        'Romelu Lukaku', 'Alexis Saelemaekers', 'Leandro Trossard',
        'Dodi Lukebakio', 'Diego Moreira'
    ],
    'Egito': [
        'Mohamed El Shenawy', 'Mostafa Shobeir', 'El Mahdy Soliman',
        'Mohamed Hany', 'Tarek Alaa', 'Hamdi Fathi', 'Ramy Rabia',
        'Yasser Ibrahim', 'Hossam Abdelmaguid', 'Mohamed Abdelmonem',
        'Ahmed Fatouh', 'Karim Hafez',
        'Marwan Attia', 'Nabil Emad Dunga', 'Mahmoud Saber', 'Ahmed Sayed Zizo',
        'Mahmoud Trezeguet', 'Emam Ashour', 'Mostafa Ziko', 'Ibrahim Adel',
        'Haitham Hassan', 'Mohamed Salah',
        'Omar Marmoush', 'Aktay Abdullah', 'Hamza Abdel Karim', 'Mostafa Mohamed'
    ],
    'Irã': [
        'Alireza Beiranvand', 'Seyed Hossein Hosseini', 'Payam Niazmand',
        'Danial Eiri', 'Ehsan Hajsafi', 'Saleh Hardani', 'Hossein Kanaani',
        'Shoja Khalilzadeh', 'Milad Mohammadi', 'Ali Nemati', 'Ramin Rezaeian',
        'Rouzbeh Cheshmi', 'Saeid Ezatolahi', 'Mehdi Ghaedi', 'Saman Ghoddos',
        'Mohammad Ghorbani', 'Alireza Jahanbakhsh', 'Mohammad Mohebi',
        'Amir Mohammad Razzaghinia', 'Mehdi Torabi', 'Aria Yusefi',
        'Ali Alipour', 'Dennis Dargahi', 'Amirhossein Hosseinzadeh',
        'Mehdi Taremi', 'Shahriar Moghanlou'
    ],
    'Nova Zelândia': [
        'Max Crocombe', 'Alex Paulsen', 'Michael Wood',
        'Tyler Bindon', 'Michael Boxall', 'Liberato Cacace', 'Francis De Vries',
        'Callan Elliot', 'Tim Payne', 'Nando Pijnaker', 'Tommy Smith', 'Finn Surman',
        'Lachlan Bayliss', 'Joe Bell', 'Alex Rufer', 'Marko Stamenic', 'Ryan Thomas',
        'Kosta Barbarouses', 'Matt Garbett', 'Eli Just', 'Callum McCowatt',
        'Ben Old', 'Jesse Randall', 'Sarpreet Singh', 'Ben Waine', 'Chris Wood'
    ],

    // GRUPO H
    'Arábia Saudita': [
        'Ahmed Al Kassar', 'Mohammed Al Owais', 'Nawaf Al Aqidi',
        'Saud Abdulhamid', 'Mohammed Abu Al Shamat', 'Khalid Al Ghannam',
        'Moteb Al Harbi', 'Abdulelah Al Amri', 'Nawaf Boushal',
        'Hassan Kadesh', 'Ali Lajami', 'Ali Majrashi', 'Hassan Tambakti', 'Jehad Thikri',
        'Nasser Al Dawsari', 'Alaa Al Hajji', 'Ziyad Al Johani', 'Musab Al Juwayr',
        'Abdullah Al Khaibari', 'Mohammed Kanno', 'Sultan Mandash', 'Ayman Yahya',
        'Feras Al Brikan', 'Salem Al Dawsari', 'Abdullah Al Hamdan', 'Saleh Al Shehri'
    ],
    'Cabo Verde': [
        'Josimar Dias', 'Márcio da Rosa', 'Carlos Santos',
        'Steven Moreira', 'Wagner Pina', 'Sidny Cabral', 'Logan Costa',
        'Roberto Lopes', 'Kelvin Pires', 'Ianique Tavares', 'Edilson Borges',
        'Jamiro Monteiro', 'Deroy Duarte', 'Kevin Pina', 'Laros Duarte',
        'Telmo Arcanjo', 'Yannick Semedo', 'João Paulo Fernandes',
        'Garry Rodrigues', 'Jovane Cabral', 'Ryan Mendes', 'Nuno da Costa',
        'Dailon Livramento', 'Gilson Benchimol', 'Willy Semedo', 'Hélio Varela'
    ],
    'Espanha': [
        'Unai Simón', 'David Raya', 'Joan García',
        'Marc Cucurella', 'Alex Grimaldo', 'Pau Cubarsí', 'Aymeric Laporte',
        'Marc Pubill', 'Eric García', 'Marcos Llorente', 'Pedro Porro',
        'Pedri', 'Fabián Ruiz', 'Martín Zubimendi', 'Gavi', 'Rodri',
        'Alex Baena', 'Mikel Merino',
        'Mikel Oyarzabal', 'Dani Olmo', 'Nico Williams', 'Yeremy Pino',
        'Ferran Torres', 'Borja Iglesias', 'Víctor Muñoz', 'Lamine Yamal'
    ],
    'Uruguai': [
        'Sergio Rochet', 'Fernando Muslera', 'Santiago Mele',
        'Guillermo Varela', 'Ronald Araújo', 'José María Giménez', 'Santiago Bueno',
        'Sebastián Cáceres', 'Mathías Olivera', 'Joaquín Piquerez', 'Matías Viña',
        'Manuel Ugarte', 'Emiliano Martínez', 'Rodrigo Bentancur', 'Federico Valverde',
        'Agustín Canobbio', 'Giorgian De Arrascaeta', 'Nicolás De La Cruz',
        'Rodrigo Zalazar', 'Facundo Pellistri', 'Maximiliano Araújo',
        'Rodrigo Aguirre', 'Federico Viñas', 'Darwin Núñez',
        'Brian Rodríguez', 'Juan Manuel Sanabria'
    ],

    // GRUPO I
    'França': [
        'Mike Maignan', 'Robin Risser', 'Brice Samba',
        'Lucas Digne', 'Malo Gusto', 'Lucas Hernandez', 'Theo Hernandez',
        'Ibrahima Konaté', 'Jules Koundé', 'Maxence Lacroix',
        'William Saliba', 'Dayot Upamecano',
        'N\'Golo Kanté', 'Manu Koné', 'Adrien Rabiot', 'Aurélien Tchouaméni',
        'Warren Zaïre-Emery',
        'Maghnes Akliouche', 'Bradley Barcola', 'Rayan Cherki', 'Ousmane Dembélé',
        'Désiré Doué', 'Jean-Philippe Mateta', 'Kylian Mbappé',
        'Michael Olise', 'Marcus Thuram'
    ],
    'Iraque': [
        'Fahad Talib', 'Jalal Hassan', 'Ahmed Basil',
        'Hussein Ali', 'Manaf Younis', 'Ahmed Yahya', 'Mustafa Saadoon',
        'Zaid Tahseen', 'Rebin Sulaka', 'Akam Hashim', 'Merchas Doski',
        'Zaid Ismail', 'Frans Putros',
        'Amir Al-Ammari', 'Kevin Yakob', 'Zidane Iqbal', 'Aimar Sher',
        'Ibrahim Bayesh', 'Ahmed Qasem', 'Youssef Amyn', 'Marko Farji',
        'Ali Jassim', 'Ali Al-Hamadi', 'Ali Yousef', 'Aymen Hussein', 'Mohanad Ali'
    ],
    'Noruega': [
        'Orjan Nyland', 'Egil Selvik', 'Sander Tangvik',
        'Krisoffer Ajer', 'Fredrik Bjorkan', 'Henrik Falchener', 'Sondre Langas',
        'Torbjorn Heggem', 'Marcos Holmgren Pedersen', 'Julian Ryerson',
        'David Moller Wolfe', 'Leo Ostigard',
        'Theolonious Aasgaard', 'Fredrik Ausnes', 'Patrick Berg', 'Sander Berge',
        'Oscar Bobb', 'Jens Petter Hauge', 'Antonio Nusa', 'Andreas Schjederup',
        'Morten Thorsby', 'Kristian Thorstvedt', 'Martin Odegaard',
        'Erling Braut Haaland', 'Jorgen Strand Larsen', 'Alexander Sorloth'
    ],
    'Senegal': [
        'Edouard Mendy', 'Yehvann Diouf', 'Mory Diaw',
        'Krepin Diatta', 'Antoine Mendy', 'Abdoulaye Seck', 'Kalidou Koulibaly',
        'Ilay Camara', 'Moussa Niakhate', 'Mamadou Sarr',
        'El-Hadji Malick Diouf', 'Moustapha Mbow', 'Ismail Jakobs',
        'Idrissa Gueye', 'Habib Diarra', 'Pape Matar Sarr', 'Pape Gueye',
        'Lamine Camara', 'Pathe Ciss', 'Bara Ndiaye',
        'Sadio Mane', 'Bamba Dieng', 'Iliman Ndiaye', 'Nicolas Jackson',
        'Assane Diao', 'Ismaila Sarr'
    ],

    // GRUPO J
    'Argentina': [
        'Juan Musso', 'Gerónimo Rulli', 'Emiliano Martínez',
        'Leonardo Balerdi', 'Nicolás Tagliafico', 'Gonzalo Montiel',
        'Lisandro Martínez', 'Cristian Romero', 'Nicolás Otamendi',
        'Facundo Medina', 'Nahuel Molina',
        'Leandro Paredes', 'Rodrigo De Paul', 'Valentin Barco',
        'Giovanni Lo Celso', 'Exequiel Palacios', 'Alexis Mac Allister', 'Enzo Fernández',
        'Julián Álvarez', 'Lionel Messi', 'Nico González', 'Thiago Almada',
        'Giuliano Simeone', 'Nico Paz', 'Franco López', 'Lautaro Martínez'
    ],
    'Argélia': [
        'Luca Zidane', 'Oussama Benbot', 'Abdelatif Ramdane',
        'Rafik Belghali', 'Samir Chergui', 'Rayan Ait-Nouri', 'Jaouen Hadjam',
        'Aissa Mandi', 'Ramy Bensebaini', 'Zineddine Belaid',
        'Achref Abada', 'Mohamed Amine Tougai',
        'Nabil Bentaleb', 'Hicham Boudaqui', 'Houssem Aouar', 'Farès Chaibi',
        'Ibrahim Maza', 'Yacine Titraoui', 'Ramiz Zerrouki',
        'Mohamed Amine Amoura', 'Nadhir Benbouali', 'Adil Boulbina',
        'Farès Ghedjemis', 'Amine Gouri', 'Anis Hadj Moussa', 'Riyad Mahrez'
    ],
    'Áustria': [
        'Alexander Schlager', 'Florian Wiegle', 'Patrick Pentz',
        'David Affengruber', 'Kevin Danso', 'Stefan Posch', 'David Alaba',
        'Philipp Lienhart', 'Phillipp Mwene', 'Alexander Prass', 'Marco Friedl',
        'Michael Svoboda',
        'Xavier Schlager', 'Nicolas Seiwald', 'Marcel Sabitzer', 'Florian Grillitsch',
        'Carney Chukwuemeka', 'Romano Schmid', 'Christoph Baumgartner',
        'Konrad Laimer', 'Patrick Wimmer', 'Paul Wanner',
        'Marko Arnautović', 'Michael Gregoritsch', 'Sasa Kalajdzic', 'Alessandro Schopf'
    ],
    'Jordânia': [
        'Yazeed Abu Laila', 'Abdullah Al-Fakhouri', 'Nour Bani Attiah',
        'Abdallah Nasib', 'Saed Al-Rosan', 'Yazan Al-Arab', 'Saleem Obaid',
        'Mohammad Abualnadi', 'Husam Abu Dahab', 'Ihsan Haddad',
        'Anas Badawi', 'Mohannad Abu Taha', 'Mohammad Abu Hashish',
        'Nour Al-Rawabdeh', 'Nizar Al-Rashdan', 'Ibrahim Sadeh',
        'Rajaei Ayed', 'Amer Jamous', 'Mohammad Al-Dawoud',
        'Mahmoud Al-Mardi', 'Musa Al-Taamari', 'Mohammad Abu Zrayq',
        'Ali Al-Azaizeh', 'Odeh Fakhouri', 'Ibrahim Sabra', 'Ali Olwan'
    ],

    // GRUPO K
    'Colômbia': [
        'Luis Mejía', 'David Ospina', 'Camilo Vargas',
        'Davinson Sánchez', 'Daniel Muñoz', 'Johan Mojica', 'Willian Pacho',
        'Jhon Lucumí', 'Michael Murillo',
        'Richard Ríos', 'James Rodríguez', 'Jhon Arias', 'Jorge Carrascal',
        'Tomás Rincón', 'Yangel Herrera', 'Jefferson Savarino',
        'Luis Díaz', 'Luis Javier Suárez', 'Salomón Rondón',
        'Andrés Gómez', 'Gonzalo Plata', 'John Yeboah',
        'Cucho Hernández', 'Borja', 'Rafael Santos Borré', 'Alfredo Morelos'
    ],
    'Portugal': [
        'Diogo Costa', 'José Sá', 'Rui Silva',
        'Diogo Dalot', 'Matheus Nunes', 'Nelson Semedo', 'João Cancelo',
        'Nuno Mendes', 'Gonçalo Inácio', 'Renato Veiga', 'Rúben Dias', 'Tomás Araújo',
        'Rúben Neves', 'Samu Costa', 'João Neves', 'Vitinha',
        'Bruno Fernandes', 'Bernardo Silva',
        'João Félix', 'Francisco Trincão', 'Francisco Conceição',
        'Pedro Neto', 'Rafael Leão', 'Gonçalo Guedes',
        'Gonçalo Ramos', 'Cristiano Ronaldo'
    ],
    'RD Congo': [
        'Timothy Fayulu', 'Lionel Mpasi', 'Matthieu Epolo',
        'Aaron Wan-Bissaka', 'Gédéon Kalulu', 'Joris Kayembe', 'Arthur Masuaku',
        'Steve Kapuadi', 'Rocky Bushiri', 'Axel Tuanzebe', 'Chancel Mbemba',
        'Dylan Batubinsika',
        'Noah Sadiki', 'Samuel Moutoussamy', 'Edo Kayembe', 'Ngal\'ayel Mukau',
        'Charles Pickel', 'Nathanael Mbuku', 'Brian Cipenga',
        'Theo Bongonda', 'Gael Kakuta',
        'Meschack Elia', 'Fiston Mayele', 'Cédric Bakambu',
        'Simon Banza', 'Yoane Wissa'
    ],
    'Uzbequistão': [
        'Otkir Yusupov', 'Abduvohid Nematov', 'Botirali Ergashev',
        'Abdukodir Husanov', 'Hojiakbar Alijonov', 'Farruh Sayfiyev',
        'Rustam Ashurmatov', 'Umar Eshmurodov', 'Sherzod Nasrullayev',
        'Abdulla Abdullayev', 'Avazbek Olmasaliyev', 'Jahongir Orozov', 'Behruz Karimov',
        'Akmal Mozgovoy', 'Otabek Shukurov', 'Jamshid Iskanderov',
        'Odil Hamrobekov', 'Jaloliddin Masharipov', 'Oston O\'runov',
        'Dostonbek Hamdamov', 'Aziz G\'aniyev', 'Abbosbek Fayzullayev',
        'Eldor Shomurodov', 'Igor Sergeyev', 'Azizbek Omonov', 'Sherzod Esanov'
    ],

    // GRUPO L
    'Croácia': [
        'Dominik Livakovic', 'Dominik Kotarski', 'Ivor Pandur',
        'Josko Gvardiol', 'Duje Caleta-Car', 'Josip Sutalo', 'Josip Stanisic',
        'Marin Pongracic', 'Martin Erlic', 'Luka Vuskovic',
        'Luka Modric', 'Mateo Kovacic', 'Mario Pasalic', 'Nikola Vlasic',
        'Luka Sucic', 'Martin Baturina', 'Kristijan Jakic', 'Petar Sucic',
        'Nikola Moro', 'Toni Fruk',
        'Ivan Perisic', 'Andrej Kramaric', 'Ante Budimir',
        'Marco Pasalic', 'Peter Musa', 'Igor Matanovic'
    ],
    'Gana': [
        'Benjamin Asare', 'Lawrence Ati-Zigi', 'Joseph Anang',
        'Baba Abdul Rahman', 'Gideon Mensah', 'Marvin Senaya', 'Alidu Seidu',
        'Abdul Mumin', 'Jerome Opoku', 'Jonas Adjetey',
        'Kojo Oppong Peprah', 'Derrick Luckassen',
        'Elisha Owusu', 'Thomas Partey', 'Kwasi Sibo', 'Augustine Boakye',
        'Caleb Yirenkyi', 'Abdul Fatawu Issahaku',
        'Christopher Bonsu Baah', 'Ernest Nuamah', 'Antoine Semenyo',
        'Brandon Thomas-Asante', 'Kamal Deen Sulemana',
        'Iñaki Williams', 'Jordan Ayew', 'Mohammed Kudus'
    ],
    'Inglaterra': [
        'Jordan Pickford', 'Dean Henderson', 'James Trafford',
        'Reece James', 'Ezri Konsa', 'Jarell Quansah', 'John Stones',
        'Marc Guehi', 'Dan Burn', 'Nico O\'Reilly', 'Djed Spence', 'Tino Livramento',
        'Declan Rice', 'Elliot Anderson', 'Kobbie Mainoo', 'Jordan Henderson',
        'Morgan Rogers', 'Jude Bellingham', 'Eberechi Eze',
        'Harry Kane', 'Ivan Toney', 'Ollie Watkins', 'Bukayo Saka',
        'Marcus Rashford', 'Anthony Gordon', 'Noni Madueke'
    ],
    'Panamá': [
        'Orlando Mosquera', 'Luis Mejía', 'César Samudio',
        'César Blackman', 'Jorge Gutiérrez', 'Amir Murillo', 'Fidel Escobar',
        'Andrés Andrade', 'Edgardo Fariña', 'José Córdoba', 'Eric Davis',
        'Jiovany Ramos', 'Roderick Miller',
        'Aníbal Godoy', 'Adalberto Carrasquilla', 'Carlos Harvey',
        'Cristian Martínez', 'José Luis Rodríguez', 'César Yanis',
        'Yoel Bárcenas', 'Alberto Quintero', 'Azarías Londoño',
        'Ismael Díaz', 'Cecilio Waterman', 'José Fajardo', 'Tomás Rodríguez'
    ]
};
