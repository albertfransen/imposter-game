// ============================================================
// WOORDENLIJSTEN voor het party guessing game ("30 Seconden")
// ------------------------------------------------------------
// Structuur: elke categorie heeft een naam, emoji en woorden
// gegroepeerd op moeilijkheid (easy / medium / hard).
// Voeg gerust woorden toe of pas ze aan — de app pakt alles
// automatisch op.
// ============================================================

window.WORD_DATA = {

  // ----------------------------------------------------------
  // VOETBALLERS (~300)
  // ----------------------------------------------------------
  footballers: {
    name: "Voetballers",
    emoji: "⚽",
    words: {
      easy: [
        "Johan Cruijff", "Lionel Messi", "Cristiano Ronaldo", "Ronaldinho", "Ronaldo (R9)",
        "Pelé", "Diego Maradona", "Zinedine Zidane", "David Beckham", "Neymar",
        "Kylian Mbappé", "Erling Haaland", "Zlatan Ibrahimović", "Wayne Rooney", "Thierry Henry",
        "Arjen Robben", "Wesley Sneijder", "Robin van Persie", "Ruud van Nistelrooij", "Dennis Bergkamp",
        "Marco van Basten", "Ruud Gullit", "Frank Rijkaard", "Patrick Kluivert", "Edwin van der Sar",
        "Virgil van Dijk", "Frenkie de Jong", "Memphis Depay", "Cody Gakpo", "Matthijs de Ligt",
        "Georginio Wijnaldum", "Dirk Kuyt", "Klaas-Jan Huntelaar", "Rafael van der Vaart", "Daley Blind",
        "Luis Suárez", "Sergio Ramos", "Andrés Iniesta", "Xavi Hernández", "Iker Casillas",
        "Gerard Piqué", "Fernando Torres", "Karim Benzema", "Antoine Griezmann", "Paul Pogba",
        "Eden Hazard", "Kevin De Bruyne", "Romelu Lukaku", "Mohamed Salah", "Sadio Mané",
        "Didier Drogba", "Samuel Eto'o", "Harry Kane", "Steven Gerrard", "Frank Lampard",
        "Gareth Bale", "Luka Modrić", "Robert Lewandowski", "Manuel Neuer", "Thomas Müller",
        "Toni Kroos", "Mesut Özil", "Bastian Schweinsteiger", "Oliver Kahn", "Miroslav Klose",
        "Gianluigi Buffon", "Andrea Pirlo", "Francesco Totti", "Paolo Maldini", "Fabio Cannavaro",
        "Alessandro Del Piero", "Roberto Baggio", "Kaká", "Rivaldo", "Roberto Carlos",
        "Romário", "Sergio Agüero", "Carlos Tevez", "Ángel Di María", "Gonzalo Higuaín",
        "Luís Figo", "Eusébio", "Pepe", "Bruno Fernandes", "Vinícius Júnior",
        "Jude Bellingham", "Lamine Yamal", "Phil Foden", "Bukayo Saka", "Marcus Rashford",
        "Raheem Sterling", "Jack Grealish", "Son Heung-min", "Jamie Vardy", "Mario Balotelli",
        "Franck Ribéry", "N'Golo Kanté", "Olivier Giroud", "Thibaut Courtois", "Vincent Kompany",
        "Xavi Simons", "Nathan Aké", "Denzel Dumfries", "Wout Weghorst", "Steven Berghuis",
        "Steven Bergwijn", "Noa Lang", "Justin Kluivert", "Jeremie Frimpong", "Ryan Gravenberch",
        "Tijjani Reijnders", "Teun Koopmeiners", "Sven Botman", "Jurriën Timber", "Stefan de Vrij",
        "Jasper Cillessen", "Tim Krul", "Michel Vorm", "Jaap Stam", "Frank de Boer",
        "Ronald de Boer", "Ronald Koeman", "Phillip Cocu", "Mark van Bommel", "Nigel de Jong",
        "Ryan Babel", "Ibrahim Afellay", "Eljero Elia", "Luuk de Jong", "Vincent Janssen",
        "Davy Klaassen", "Donny van de Beek", "Quincy Promes", "Hakim Ziyech", "Dušan Tadić",
        "Sébastien Haller", "Antony", "Lisandro Martínez", "Jordy Clasie", "Kevin Strootman"
      ],
      medium: [
        "Clarence Seedorf", "Edgar Davids", "Marc Overmars", "Jimmy Floyd Hasselbaink", "Roy Makaay",
        "Pierre van Hooijdonk", "Giovanni van Bronckhorst", "John Heitinga", "Joris Mathijsen", "André Ooijer",
        "Boudewijn Zenden", "Jan Vennegoor of Hesselink", "Bas Dost", "Ricky van Wolfswinkel", "Jens Toornstra",
        "Johan Neeskens", "Willem van Hanegem", "Rob Rensenbrink", "Johnny Rep", "Ruud Krol",
        "Dani Alves", "Cafu", "Thiago Silva", "Marcelo", "Casemiro",
        "Alisson Becker", "Ederson", "Philippe Coutinho", "Roberto Firmino", "Gabriel Jesus",
        "Rodrygo", "Adriano", "Robinho", "Dida", "Zico",
        "Sócrates", "Garrincha", "Javier Mascherano", "Javier Zanetti", "Esteban Cambiasso",
        "Gabriel Batistuta", "Juan Román Riquelme", "Hernán Crespo", "Juan Sebastián Verón", "Paulo Dybala",
        "Lautaro Martínez", "Julián Álvarez", "Enzo Fernández", "Alexis Mac Allister", "Emiliano Martínez",
        "Rodrigo De Paul", "Diego Forlán", "Edinson Cavani", "Diego Godín", "Federico Valverde",
        "Darwin Núñez", "Alexis Sánchez", "Arturo Vidal", "James Rodríguez", "Radamel Falcao",
        "Carlos Valderrama", "René Higuita", "Luis Díaz", "Hugo Sánchez", "Javier 'Chicharito' Hernández",
        "Rafael Márquez", "Guillermo Ochoa", "Christian Pulisic", "Landon Donovan", "Tim Howard",
        "Clint Dempsey", "Peter Schmeichel", "Kasper Schmeichel", "Christian Eriksen", "Michael Laudrup",
        "Brian Laudrup", "Simon Kjær", "Ole Gunnar Solskjær", "Martin Ødegaard", "Alexander Isak",
        "Dejan Kulusevski", "Victor Lindelöf", "Henrik Larsson", "Freddie Ljungberg", "Emil Forsberg",
        "Andriy Shevchenko", "Oleksandr Zinchenko", "Mykhailo Mudryk", "Wojciech Szczęsny", "Piotr Zieliński",
        "Pavel Nedvěd", "Tomáš Rosický", "Petr Čech", "Marek Hamšík", "Martin Škrtel",
        "Hristo Stoichkov", "Gheorghe Hagi", "Dimitar Berbatov", "Andrei Arshavin", "Davor Šuker",
        "Zvonimir Boban", "Ivan Perišić", "Mateo Kovačić", "Ivan Rakitić", "Mario Mandžukić",
        "Joško Gvardiol", "Marc-André ter Stegen", "Jan Oblak", "Samir Handanović", "Yann Sommer",
        "Granit Xhaka", "Xherdan Shaqiri", "David Alaba", "Marko Arnautović", "Marcel Sabitzer",
        "Sergej Milinković-Savić", "Dušan Vlahović", "Nemanja Vidić", "Nemanja Matić", "Branislav Ivanović",
        "Achraf Hakimi", "Sofyan Amrabat", "Noussair Mazraoui", "Youssef En-Nesyri", "Yassine Bounou",
        "Riyad Mahrez", "Pierre-Emerick Aubameyang", "Victor Osimhen", "Kalidou Koulibaly", "André Onana",
        "Yaya Touré", "Kolo Touré", "Michael Essien", "Asamoah Gyan", "Jay-Jay Okocha",
        "Nwankwo Kanu", "George Weah", "Roger Milla", "Park Ji-sung", "Shinji Kagawa",
        "Keisuke Honda", "Kaoru Mitoma", "Takefusa Kubo", "Declan Rice", "Cole Palmer",
        "Trent Alexander-Arnold", "Jordan Henderson", "Jordan Pickford", "Harry Maguire", "John Stones",
        "Kyle Walker", "Kieran Trippier", "Ollie Watkins", "Michael Owen", "Alan Shearer",
        "Gary Lineker", "Paul Scholes", "Ryan Giggs", "Roy Keane", "Rio Ferdinand",
        "John Terry", "Ashley Cole", "Joe Cole", "Eric Cantona", "George Best"
      ],
      hard: [
        "Sjaak Swart", "Piet Keizer", "Wim Suurbier", "Arie Haan", "Barry Hulshoff",
        "Dennis Rommedahl", "Kenneth Perez", "Andrés Guardado", "Hedwiges Maduro", "Urby Emanuelson",
        "Khalid Boulahrouz", "Wilfred Bouma", "Denny Landzaat", "Jan Wouters", "Wim Kieft",
        "John van 't Schip", "Aron Winter", "Bryan Roy", "Richard Witschge", "Wim Jonk",
        "Glenn Helder", "Gaston Taument", "Regi Blinker", "Ed de Goey", "Hans van Breukelen",
        "Stanley Menzo", "Maarten Stekelenburg", "Kenneth Vermeer", "Jeroen Zoet", "Justin Bijlow",
        "Bart Verbruggen", "Andries Noppert", "Joël Veltman", "Davy Pröpper", "Marten de Roon",
        "Jerdy Schouten", "Joey Veerman", "Guus Til", "Brian Brobbey", "Mexx Meerdink",
        "Kenneth Taylor", "Crysencio Summerville", "Lutsharel Geertruida", "Micky van de Ven", "Quilindschy Hartman",
        "Mats Wieffer", "Santiago Giménez", "Igor Paixão", "Tonny Vilhena", "Anwar El Ghazi",
        "Karim El Ahmadi", "Ibrahim Drešević", "Vito van Crooij", "Michiel Kramer", "Sjaak Polak",
        "Gerald Vanenburg", "Erwin Koeman", "Berry van Aerle", "Adri van Tiggelen", "John Bosman",
        "Peter van Vossen", "Ulrich van Gobbel", "Winston Bogarde", "Michael Reiziger", "Paul Bosvelt",
        "Kevin Hofland", "Barry van Galen", "Ali Boussaboun", "Nourdin Boukhari", "Salomon Kalou",
        "Bonaventure Kalou", "Dries Mertens", "Yannick Carrasco", "Axel Witsel", "Marouane Fellaini",
        "Radja Nainggolan", "Toby Alderweireld", "Jan Vertonghen", "Thomas Vermaelen", "Jérémy Doku",
        "Leandro Trossard", "Youri Tielemans", "Kevin Mirallas", "Mousa Dembélé", "Steven Defour",
        "Claude Makélélé", "Marcel Desailly", "Lilian Thuram", "Laurent Blanc", "Fabien Barthez",
        "Emmanuel Petit", "Robert Pirès", "Sylvain Wiltord", "David Trezeguet", "Youri Djorkaeff",
        "Bixente Lizarazu", "Patrick Vieira", "Nicolas Anelka", "Samir Nasri", "Patrice Evra",
        "Blaise Matuidi", "Aurélien Tchouaméni", "Eduardo Camavinga", "Ousmane Dembélé", "Kingsley Coman",
        "Ferland Mendy", "Mike Maignan", "Fernando Morientes", "Míchel Salgado", "Iván Helguera",
        "Santiago Cañizares", "Rubén Baraja", "Vicente Rodríguez", "Joaquín", "David Albelda",
        "Fernando Hierro", "Míchel", "Emilio Butragueño", "Raúl González", "David Villa",
        "Juan Mata", "Cesc Fàbregas", "Xabi Alonso", "Santi Cazorla", "David Silva",
        "Álvaro Morata", "Marco Asensio", "Dani Carvajal", "Pedri", "Gavi",
        "Rodri", "Mikel Oyarzabal", "Aymeric Laporte", "Unai Simón", "Nico Williams",
        "Christian Vieri", "Filippo Inzaghi", "Gennaro Gattuso", "Alessandro Nesta", "Franco Baresi",
        "Dino Zoff", "Paolo Rossi", "Marco Materazzi", "Luca Toni", "Antonio Cassano",
        "Giorgio Chiellini", "Leonardo Bonucci", "Gianluigi Donnarumma", "Nicolò Barella", "Lorenzo Insigne",
        "Ciro Immobile", "Marco Verratti", "Federico Chiesa", "Mario Kempes", "Daniel Passarella",
        "Franz Beckenbauer", "Gerd Müller", "Lothar Matthäus", "Jürgen Klinsmann", "Rudi Völler",
        "Karl-Heinz Rummenigge", "Michael Ballack", "Philipp Lahm", "Mats Hummels", "Joshua Kimmich",
        "Kai Havertz", "Jamal Musiala", "Florian Wirtz", "Leroy Sané", "Serge Gnabry",
        "Timo Werner", "Marco Reus", "Mario Götze", "İlkay Gündoğan", "Antonio Rüdiger",
        "Bobby Charlton", "Bobby Moore", "Paul Gascoigne", "Matt Le Tissier", "Tony Adams",
        "David Seaman", "Sol Campbell", "Teddy Sheringham", "Robbie Keane", "Aaron Ramsey",
        "Ian Rush", "Rui Costa", "Deco", "Nani", "Ricardo Quaresma",
        "João Félix", "Bernardo Silva", "Rafael Leão", "Rúben Dias", "João Cancelo",
        "Álvaro Recoba", "Sebastián Abreu", "Gary Medel", "Claudio Bravo", "Juan Cuadrado"
      ]
    }
  },

  // ----------------------------------------------------------
  // CLUBS & TRAINERS (~70)
  // ----------------------------------------------------------
  clubs: {
    name: "Clubs & Trainers",
    emoji: "🏟️",
    words: {
      easy: [
        "Ajax", "Feyenoord", "PSV", "AZ", "FC Twente",
        "FC Utrecht", "Vitesse", "sc Heerenveen", "FC Groningen", "Real Madrid",
        "FC Barcelona", "Atlético Madrid", "Manchester United", "Manchester City", "Liverpool",
        "Chelsea", "Arsenal", "Tottenham Hotspur", "Bayern München", "Borussia Dortmund",
        "Juventus", "AC Milan", "Inter Milan", "Napoli", "AS Roma",
        "Paris Saint-Germain", "FC Porto", "Benfica", "Galatasaray", "Fenerbahçe",
        "Boca Juniors", "Al-Nassr", "Inter Miami", "Louis van Gaal", "Ronald Koeman",
        "Guus Hiddink", "Dick Advocaat", "Erik ten Hag", "Arne Slot", "José Mourinho",
        "Pep Guardiola", "Jürgen Klopp", "Sir Alex Ferguson", "Arsène Wenger", "Carlo Ancelotti"
      ],
      medium: [
        "Sparta Rotterdam", "NEC Nijmegen", "Willem II", "Go Ahead Eagles", "NAC Breda",
        "Fortuna Sittard", "Newcastle United", "Aston Villa", "West Ham United", "Everton",
        "Leeds United", "Sevilla", "Valencia", "Athletic Bilbao", "Bayer Leverkusen",
        "Schalke 04", "RB Leipzig", "Lazio", "Fiorentina", "Atalanta",
        "Olympique Marseille", "Olympique Lyon", "AS Monaco", "Sporting Portugal", "Celtic",
        "Rangers", "Beşiktaş", "River Plate", "Flamengo", "Santos",
        "Anderlecht", "Club Brugge", "Red Bull Salzburg", "Rinus Michels", "Frank Rijkaard (trainer)",
        "Peter Bosz", "Diego Simeone", "Antonio Conte", "Thomas Tuchel", "Julian Nagelsmann",
        "Hansi Flick", "Zinédine Zidane (trainer)", "Mikel Arteta", "Unai Emery", "Fabio Capello",
        "Vicente del Bosque", "Joachim Löw", "Marcelo Bielsa", "Rafael Benítez", "Massimiliano Allegri",
        "Giovanni Trapattoni", "Marcello Lippi", "Arrigo Sacchi", "Bert van Marwijk", "Co Adriaanse"
      ],
      hard: [
        "RKC Waalwijk", "PEC Zwolle", "Excelsior", "FC Volendam", "Heracles Almelo",
        "De Graafschap", "Roda JC", "MVV Maastricht", "FC Emmen", "Cambuur Leeuwarden",
        "Foppe de Haan", "Henk ten Cate", "Martin Jol", "Huub Stevens", "Fred Rutten",
        "Gertjan Verbeek", "John van den Brom", "Phillip Cocu (trainer)", "Mario Been", "Aad de Mos"
      ]
    }
  },

  // ----------------------------------------------------------
  // BEROEMDE MENSEN (~150)
  // ----------------------------------------------------------
  famous: {
    name: "Beroemde Mensen",
    emoji: "🌟",
    words: {
      easy: [
        "Michael Jackson", "Madonna", "Beyoncé", "Rihanna", "Adele",
        "Ed Sheeran", "Taylor Swift", "Eminem", "Snoop Dogg", "Kanye West",
        "Justin Bieber", "Ariana Grande", "Billie Eilish", "Dua Lipa", "Bruno Mars",
        "Elvis Presley", "Freddie Mercury", "Bob Marley", "Shakira", "Jennifer Lopez",
        "Lady Gaga", "Britney Spears", "André Hazes", "Marco Borsato", "Guus Meeuwis",
        "Frans Bauer", "Armin van Buuren", "Martin Garrix", "Tiësto", "Leonardo DiCaprio",
        "Brad Pitt", "Angelina Jolie", "Johnny Depp", "Tom Cruise", "Tom Hanks",
        "Will Smith", "Arnold Schwarzenegger", "Sylvester Stallone", "Jackie Chan", "Jim Carrey",
        "Keanu Reeves", "Dwayne 'The Rock' Johnson", "Ryan Reynolds", "Mr. Bean", "Emma Watson",
        "Daniel Radcliffe", "Jennifer Aniston", "George Clooney", "Julia Roberts", "Barack Obama",
        "Donald Trump", "Vladimir Poetin", "Mark Rutte", "Geert Wilders", "Koning Willem-Alexander",
        "Koningin Máxima", "Nelson Mandela", "Albert Einstein", "Vincent van Gogh", "Rembrandt",
        "Pablo Picasso", "Napoleon", "Julius Caesar", "Cleopatra", "Anne Frank",
        "Elon Musk", "Bill Gates", "Steve Jobs", "Mark Zuckerberg", "Jeff Bezos",
        "Oprah Winfrey", "Kim Kardashian", "Max Verstappen", "Lewis Hamilton", "Michael Schumacher",
        "Usain Bolt", "Serena Williams", "Roger Federer", "Rafael Nadal", "Michael Jordan",
        "Muhammad Ali", "Mike Tyson", "Conor McGregor", "Rico Verhoeven", "Michael van Gerwen",
        "Raymond van Barneveld", "Chantal Janzen", "Linda de Mol", "Gerard Joling", "André van Duin",
        "Ali B", "Gordon Ramsay", "MrBeast", "Enzo Knol", "Sinterklaas"
      ],
      medium: [
        "David Bowie", "Prince", "Whitney Houston", "John Lennon", "Paul McCartney",
        "Mick Jagger", "Drake", "50 Cent", "The Weeknd", "Afrojack",
        "Hardwell", "Davina Michelle", "Anouk", "Doutzen Kroes", "Denzel Washington",
        "Morgan Freeman", "Robert De Niro", "Al Pacino", "Ryan Gosling", "Margot Robbie",
        "Scarlett Johansson", "Meryl Streep", "Nicolas Cage", "Samuel L. Jackson", "Carice van Houten",
        "Rutger Hauer", "Joe Biden", "Volodymyr Zelensky", "Angela Merkel", "Emmanuel Macron",
        "Boris Johnson", "Prinses Beatrix", "Koningin Elizabeth", "Koning Charles", "Paus Franciscus",
        "Mahatma Gandhi", "Martin Luther King", "Winston Churchill", "John F. Kennedy", "Abraham Lincoln",
        "Christoffel Columbus", "Leonardo da Vinci", "Isaac Newton", "Willem van Oranje", "Novak Djokovic",
        "LeBron James", "Kobe Bryant", "Tiger Woods", "Epke Zonderland", "Sven Kramer",
        "Ireen Wüst", "Sifan Hassan", "Femke Bol", "Dafne Schippers", "Mathieu van der Poel",
        "Tom Dumoulin", "Matthijs van Nieuwkerk", "Wendy van Dijk", "John de Mol", "Youp van 't Hek",
        "Najib Amhali", "Jandino Asporaat", "David Attenborough", "PewDiePie", "Charlie Chaplin",
        "Marilyn Monroe", "Audrey Hepburn", "Stephen Hawking", "Neil Armstrong", "Buzz Aldrin"
      ],
      hard: [
        "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach", "Frida Kahlo", "Salvador Dalí",
        "Andy Warhol", "Banksy", "Ernest Hemingway", "William Shakespeare", "Roald Dahl",
        "Annie M.G. Schmidt", "Johan Derksen", "René van der Gijp", "Wilfred Genee", "Jack van Gelder",
        "Humberto Tan", "Eva Jinek", "Arjen Lubach", "Herman Finkers", "Freek Vonk",
        "André Kuipers", "Erben Wennemars", "Pieter van den Hoogenband", "Ranomi Kromowidjojo", "Marianne Vos",
        "Annemiek van Vleuten", "Joop van den Ende", "Ruud de Wild", "Frank Sinatra", "Aretha Franklin",
        "Stevie Wonder", "Kurt Cobain", "Amy Winehouse", "Tupac Shakur", "The Notorious B.I.G.",
        "Florence Nightingale", "Marie Curie", "Charles Darwin", "Nikola Tesla", "Alexander Graham Bell"
      ]
    }
  },

  // ----------------------------------------------------------
  // MIX / ALGEMEEN (~200)
  // ----------------------------------------------------------
  mixed: {
    name: "Mix & Algemeen",
    emoji: "🎲",
    words: {
      easy: [
        "Nederland", "België", "Duitsland", "Frankrijk", "Spanje",
        "Italië", "Brazilië", "Japan", "China", "Australië",
        "Egypte", "Marokko", "Turkije", "Verenigde Staten", "Mexico",
        "Amsterdam", "Rotterdam", "Parijs", "Londen", "New York",
        "Barcelona (stad)", "Rome", "Berlijn", "Dubai", "Las Vegas",
        "Ibiza", "Eiffeltoren", "Big Ben", "Vrijheidsbeeld", "Colosseum",
        "Piramides van Egypte", "Chinese Muur", "Mount Everest", "Efteling", "Keukenhof",
        "Titanic", "Star Wars", "Harry Potter", "The Lion King", "Frozen",
        "Shrek", "Finding Nemo", "James Bond", "Batman", "Spider-Man",
        "The Avengers", "Home Alone", "Jurassic Park", "Friends", "Game of Thrones",
        "Stranger Things", "SpongeBob", "Sesamstraat", "Wie is de Mol?", "Expeditie Robinson",
        "Boer Zoekt Vrouw", "Heel Holland Bakt", "olifant", "giraffe", "pinguïn",
        "dolfijn", "krokodil", "kangoeroe", "flamingo", "egel",
        "eekhoorn", "haai", "papegaai", "hamster", "schildpad",
        "pizza", "sushi", "stroopwafel", "bitterbal", "frikandel",
        "kroket", "poffertjes", "hagelslag", "oliebol", "patat met mayo",
        "döner kebab", "taco", "croissant", "pannenkoek", "appeltaart",
        "tandenborstel", "paraplu", "koptelefoon", "magnetron", "stofzuiger",
        "wasmachine", "ladder", "zaklamp", "wekker", "spiegel",
        "Coca-Cola", "McDonald's", "IKEA", "LEGO", "Nike",
        "Adidas", "Apple", "Samsung", "Netflix", "Spotify",
        "YouTube", "Instagram", "TikTok", "Albert Heijn", "HEMA",
        "Heineken", "Ferrari", "schaatsen", "wielrennen", "darten",
        "bowlen", "karaoke", "kamperen", "vissen", "barbecueën",
        "verstoppertje", "trampolinespringen", "zwemles", "Koningsdag", "carnaval"
      ],
      medium: [
        "IJsland", "Zwitserland", "Griekenland", "Argentinië", "Zuid-Afrika",
        "Canada", "Rusland", "India", "Thailand", "Portugal",
        "Tokio", "Sydney", "Rio de Janeiro", "Istanbul", "Maastricht",
        "Giethoorn", "Volendam", "Taj Mahal", "Grand Canyon", "Deltawerken",
        "Rijksmuseum", "Anne Frank Huis", "Noorderlicht", "Bermudadriehoek", "Route 66",
        "The Lord of the Rings", "Pirates of the Caribbean", "Forrest Gump", "The Matrix", "Rocky",
        "Breaking Bad", "The Office", "Squid Game", "Peaky Blinders", "Wednesday",
        "GTST", "Flodder", "New Kids", "De Luizenmoeder", "Temptation Island",
        "luiaard", "octopus", "adelaar", "pauw", "alpaca",
        "stokstaartje", "vleermuis", "kameleon", "zeepaardje", "mier",
        "boerenkool met worst", "erwtensoep", "kapsalon", "tiramisu", "paella",
        "ramen", "bubble tea", "kaasfondue", "loempia", "saté",
        "kruiwagen", "boormachine", "thermometer", "deurbel", "föhn",
        "strijkijzer", "blender", "krultang", "plakband", "nietmachine",
        "Bol.com", "Philips", "Tesla", "Rolex", "Gucci",
        "Red Bull", "Snapchat", "WhatsApp", "PlayStation", "Nintendo",
        "skydiven", "bungeejumpen", "yoga", "touwtrekken", "hoelahoepen",
        "steppen", "suppen", "klimmen", "schaken", "poker",
        "Elfstedentocht", "Nijmeegse Vierdaagse", "TT Assen", "Zwarte Cross", "Lowlands"
      ],
      hard: [
        "Kazachstan", "Madagaskar", "Suriname", "Vaticaanstad", "Liechtenstein",
        "Reykjavik", "Boedapest", "Marrakech", "Machu Picchu", "Stonehenge",
        "Verzonken stad Atlantis", "Kinderdijk", "Hunebedden", "Afsluitdijk", "Euromast",
        "Inception", "Interstellar", "The Godfather", "Pulp Fiction", "Casablanca",
        "Twin Peaks", "Zwartboek", "Turks Fruit", "Ciske de Rat", "Alleen op de Wereld",
        "vogelbekdier", "axolotl", "narwal", "tapir", "wandelende tak",
        "haring happen", "snert", "balkenbrij", "zuurvlees", "poffertjeskraam",
        "hoogslaper", "wattenstaafje", "flessenlikker", "kaasschaaf", "aardappelschilmesje",
        "centrifuge", "sextant", "abacus", "grammofoon", "typemachine",
        "curling", "jeu de boules", "klootschieten", "fierljeppen", "polsstokhoogspringen"
      ]
    }
  }
};
