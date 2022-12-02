/* jshint esversion: 11 */

// Actual (raw)questions unsed for the quiz. Data structure is an array,
// with k,v pair for the queston and a k,v pair for the answers. The
// answers itself are another array, which contain for each answer two
// k,v pairs - one containing the answer and the other correct/wrong definition


const rawQuestions = [
  {
    "question": "Which of the following created and directed the Katamari Damacy series?",
    "answers": [
      {
        "text": "Keita Takahashi",
        "correct": true
      },
      {
        "text": "Hideki Kamiya",
        "correct": false
      },
      {
        "text": "Shu Takumi",
        "correct": false
      },
      {
        "text": "Shinji Mikami",
        "correct": false
      }
    ]
  },
  {
    "question": "Which language is NOT Indo-European?",
    "answers": [
      {
        "text": "Hungarian",
        "correct": true
      },
      {
        "text": "Russian",
        "correct": false
      },
      {
        "text": "Greek",
        "correct": false
      },
      {
        "text": "Latvian",
        "correct": false
      }
    ]
  },
  {
    "question": "Which essential condiment is also known as Japanese horseradish?",
    "answers": [
      {
        "text": "Wasabi",
        "correct": true
      },
      {
        "text": "Mentsuyu",
        "correct": false
      },
      {
        "text": "Karashi",
        "correct": false
      },
      {
        "text": "Ponzu",
        "correct": false
      }
    ]
  },
  {
    "question": "How many zeptometres are inside one femtometre?",
    "answers": [
      {
        "text": "1,000,000",
        "correct": true
      },
      {
        "text": "10",
        "correct": false
      },
      {
        "text": "1,000,000,000",
        "correct": false
      },
      {
        "text": "1000",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
    "answers": [
      {
        "text": "USS Pueblo",
        "correct": true
      },
      {
        "text": "USS North Carolina",
        "correct": false
      },
      {
        "text": "USS Constitution",
        "correct": false
      },
      {
        "text": "USS Indianapolis",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these is NOT the name of an album released by Miami-based producer DJ Khaled?",
    "answers": [
      {
        "text": "Don't Ever Play Yourself",
        "correct": true
      },
      {
        "text": "Major Key",
        "correct": false
      },
      {
        "text": "Suffering From Success",
        "correct": false
      },
      {
        "text": "I Changed A Lot",
        "correct": false
      }
    ]
  },
  {
    "question": "Which band is the longest active band in the world with no breaks or line-up changes?",
    "answers": [
      {
        "text": "U2",
        "correct": true
      },
      {
        "text": "Radiohead",
        "correct": false
      },
      {
        "text": "Rush",
        "correct": false
      },
      {
        "text": "Rolling Stones",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these is a type of stretch/deep tendon reflex?",
    "answers": [
      {
        "text": "Ankle jerk reflex",
        "correct": true
      },
      {
        "text": "Gag reflex",
        "correct": false
      },
      {
        "text": "Pupillary light reflex",
        "correct": false
      },
      {
        "text": "Scratch reflex",
        "correct": false
      }
    ]
  },
  {
    "question": "The starting pistol of the Terrorist team in a competitive match of Counter Strike: Global Offensive is what?",
    "answers": [
      {
        "text": "Glock-18",
        "correct": true
      },
      {
        "text": "Tec-9",
        "correct": false
      },
      {
        "text": "Desert Eagle",
        "correct": false
      },
      {
        "text": "Dual Berretas",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the bloodiest event in United States history, in terms of casualties?",
    "answers": [
      {
        "text": "Battle of Antietam",
        "correct": true
      },
      {
        "text": "Pearl Harbor",
        "correct": false
      },
      {
        "text": "September 11th",
        "correct": false
      },
      {
        "text": "D-Day",
        "correct": false
      }
    ]
  },
  {
    "question": "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
    "answers": [
      {
        "text": "Interphase",
        "correct": true
      },
      {
        "text": "Prophase",
        "correct": false
      },
      {
        "text": "Stasis",
        "correct": false
      },
      {
        "text": "Telophase",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following languages does NOT use gender as a part of its grammar?",
    "answers": [
      {
        "text": "Turkish",
        "correct": true
      },
      {
        "text": "German",
        "correct": false
      },
      {
        "text": "Danish",
        "correct": false
      },
      {
        "text": "Polish",
        "correct": false
      }
    ]
  },
  {
    "question": "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
    "answers": [
      {
        "text": "Unknown Pleasures",
        "correct": true
      },
      {
        "text": "The Dark Side of the Moon",
        "correct": false
      },
      {
        "text": "London Calling",
        "correct": false
      },
      {
        "text": "The Velvet Underground &amp; Nico",
        "correct": false
      }
    ]
  },
  {
    "question": "Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
    "answers": [
      {
        "text": "DING Ning (China)",
        "correct": true
      },
      {
        "text": "LI Xiaoxia (China)",
        "correct": false
      },
      {
        "text": "Ai FUKUHARA (Japan)",
        "correct": false
      },
      {
        "text": "Song KIM (North Korea)",
        "correct": false
      }
    ]
  },
  {
    "question": "What collaborative album was released by Kanye West and Jay-Z in 2011?",
    "answers": [
      {
        "text": "Watch the Throne",
        "correct": true
      },
      {
        "text": "Distant Relatives",
        "correct": false
      },
      {
        "text": "What a Time to be Alive",
        "correct": false
      },
      {
        "text": "Unfinished Business",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the capital of Belarus?",
    "answers": [
      {
        "text": "Minsk",
        "correct": true
      },
      {
        "text": "Warsaw",
        "correct": false
      },
      {
        "text": "Kiev",
        "correct": false
      },
      {
        "text": "Vilnius",
        "correct": false
      }
    ]
  },
  {
    "question": "When was the Tamagotchi digital pet released?",
    "answers": [
      {
        "text": "1996",
        "correct": true
      },
      {
        "text": "1989",
        "correct": false
      },
      {
        "text": "1992",
        "correct": false
      },
      {
        "text": "1990",
        "correct": false
      }
    ]
  },
  {
    "question": "One of the Nintendo Entertainment System voice channels supports playback of sound samples. Which one?",
    "answers": [
      {
        "text": "DMC",
        "correct": true
      },
      {
        "text": "Noise",
        "correct": false
      },
      {
        "text": "Triangle",
        "correct": false
      },
      {
        "text": "Square",
        "correct": false
      }
    ]
  },
  {
    "question": "Which member of &quot;The Beatles&quot; narrated episodes of &quot;Thomas the Tank Engine&quot;?",
    "answers": [
      {
        "text": "Ringo Starr",
        "correct": true
      },
      {
        "text": "George Harrison",
        "correct": false
      },
      {
        "text": "John Lennon",
        "correct": false
      },
      {
        "text": "Paul McCartney",
        "correct": false
      }
    ]
  },
  {
    "question": "Coulrophobia is the irrational fear of what?",
    "answers": [
      {
        "text": "Clowns",
        "correct": true
      },
      {
        "text": "Cemeteries",
        "correct": false
      },
      {
        "text": "Needles",
        "correct": false
      },
      {
        "text": "Tunnels",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these characters is NOT a boss in Crash Bash?",
    "answers": [
      {
        "text": "Ripper Roo",
        "correct": true
      },
      {
        "text": "Papu Papu",
        "correct": false
      },
      {
        "text": "Komodo brothers",
        "correct": false
      },
      {
        "text": "Nitros Oxide",
        "correct": false
      }
    ]
  },
  {
    "question": "What year did the Vietnam War end?",
    "answers": [
      {
        "text": "1975",
        "correct": true
      },
      {
        "text": "1978",
        "correct": false
      },
      {
        "text": "1967",
        "correct": false
      },
      {
        "text": "1969",
        "correct": false
      }
    ]
  },
  {
    "question": "In human biology, a circadium rhythm relates to a period of roughly how many hours?",
    "answers": [
      {
        "text": "24",
        "correct": true
      },
      {
        "text": "8",
        "correct": false
      },
      {
        "text": "16",
        "correct": false
      },
      {
        "text": "32",
        "correct": false
      }
    ]
  },
  {
    "question": "Which U.S. President was in office when the Gulf War began?",
    "answers": [
      {
        "text": "George H. W. Bush",
        "correct": true
      },
      {
        "text": "Richard Nixon",
        "correct": false
      },
      {
        "text": "George W. Bush ",
        "correct": false
      },
      {
        "text": "Ronald Regan",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these 1900s tanks were designed and built BEFORE the others?",
    "answers": [
      {
        "text": "Renault FT",
        "correct": true
      },
      {
        "text": "M4 Sherman",
        "correct": false
      },
      {
        "text": " Panzer IV",
        "correct": false
      },
      {
        "text": "Cromwell ",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the maximum level you can have in a single class in Dungeons and Dragons (5e)?",
    "answers": [
      {
        "text": "20",
        "correct": true
      },
      {
        "text": "30",
        "correct": false
      },
      {
        "text": "15",
        "correct": false
      },
      {
        "text": "25",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the number of keys on a standard Windows Keyboard?",
    "answers": [
      {
        "text": "104",
        "correct": true
      },
      {
        "text": "64",
        "correct": false
      },
      {
        "text": "94",
        "correct": false
      },
      {
        "text": "76",
        "correct": false
      }
    ]
  },
  {
    "question": "In Pokemon, the ability Wonder Guard is exclusive to which Pokemon? ",
    "answers": [
      {
        "text": "Shedinja ",
        "correct": true
      },
      {
        "text": "Sableye",
        "correct": false
      },
      {
        "text": "Spiritomb",
        "correct": false
      },
      {
        "text": "Silvally ",
        "correct": false
      }
    ]
  },
  {
    "question": "In Divinity: Original Sin II, what is the name of the skeletal origin character?",
    "answers": [
      {
        "text": "Fane",
        "correct": true
      },
      {
        "text": "Lohse",
        "correct": false
      },
      {
        "text": "The Red Prince",
        "correct": false
      },
      {
        "text": "There are no skeletal origin characters",
        "correct": false
      }
    ]
  },
  {
    "question": "What airline was the owner of the plane that crashed off the coast of Nova Scotia in 1998?",
    "answers": [
      {
        "text": "Swiss Air",
        "correct": true
      },
      {
        "text": "Air France",
        "correct": false
      },
      {
        "text": "British Airways",
        "correct": false
      },
      {
        "text": "TWA",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the capital of the American state of Arizona?",
    "answers": [
      {
        "text": "Phoenix",
        "correct": true
      },
      {
        "text": "Montgomery",
        "correct": false
      },
      {
        "text": "Tallahassee",
        "correct": false
      },
      {
        "text": "Raleigh",
        "correct": false
      }
    ]
  },
  {
    "question": "How many manned moon landings have there been?",
    "answers": [
      {
        "text": "6",
        "correct": true
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "3",
        "correct": false
      },
      {
        "text": "7",
        "correct": false
      }
    ]
  },
  {
    "question": "Butters Stotch, Pip Pirrup, and Wendy Testaburger are all characters in which long running animated TV series?",
    "answers": [
      {
        "text": "South Park",
        "correct": true
      },
      {
        "text": "The Simpsons",
        "correct": false
      },
      {
        "text": "Family Guy",
        "correct": false
      },
      {
        "text": "Bob's Burgers",
        "correct": false
      }
    ]
  },
  {
    "question": "Gannymede is the largest moon of which planet?",
    "answers": [
      {
        "text": "Jupiter",
        "correct": true
      },
      {
        "text": "Uranus",
        "correct": false
      },
      {
        "text": "Neptune",
        "correct": false
      },
      {
        "text": "Mars",
        "correct": false
      }
    ]
  },
  {
    "question": "Who was the Roman god of fire?",
    "answers": [
      {
        "text": "Vulcan",
        "correct": true
      },
      {
        "text": "Apollo",
        "correct": false
      },
      {
        "text": "Jupiter",
        "correct": false
      },
      {
        "text": "Mercury",
        "correct": false
      }
    ]
  },
  {
    "question": "Excluding their instructor, how many members of Class VII are there in the game &quot;Legend of Heroes: Trails of Cold Steel&quot;?",
    "answers": [
      {
        "text": "9",
        "correct": true
      },
      {
        "text": "6",
        "correct": false
      },
      {
        "text": "10",
        "correct": false
      },
      {
        "text": "3",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these artists do NOT originate from France?",
    "answers": [
      {
        "text": "The Chemical Brothers",
        "correct": true
      },
      {
        "text": "Air",
        "correct": false
      },
      {
        "text": "Justice",
        "correct": false
      },
      {
        "text": "Daft Punk",
        "correct": false
      }
    ]
  },
  {
    "question": "Which Apollo mission was the last one in NASAs Apollo program?",
    "answers": [
      {
        "text": "Apollo 17",
        "correct": true
      },
      {
        "text": "Apollo 13",
        "correct": false
      },
      {
        "text": "Apollo 11",
        "correct": false
      },
      {
        "text": "Apollo 15",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the name of the main character in the video game VA-11 HALL-A: Cyberpunk Bartender Action?",
    "answers": [
      {
        "text": "Jill",
        "correct": true
      },
      {
        "text": "Dana",
        "correct": false
      },
      {
        "text": "Alma",
        "correct": false
      },
      {
        "text": "Anna",
        "correct": false
      }
    ]
  },
  {
    "question": "What was the first PlayStation game to require the use of the DualShock controller?",
    "answers": [
      {
        "text": "Ape Escape",
        "correct": true
      },
      {
        "text": "Metal Gear",
        "correct": false
      },
      {
        "text": "Tekken",
        "correct": false
      },
      {
        "text": "Tomba 2!",
        "correct": false
      }
    ]
  },
  {
    "question": "What year was the United States Declaration of Independence signed?",
    "answers": [
      {
        "text": "1776",
        "correct": true
      },
      {
        "text": "1775",
        "correct": false
      },
      {
        "text": "1774",
        "correct": false
      },
      {
        "text": "1777",
        "correct": false
      }
    ]
  },
  {
    "question": "This weapon in Counter-Strike: Global Offensive does not exist in real life.",
    "answers": [
      {
        "text": "M4A4",
        "correct": true
      },
      {
        "text": "AWP",
        "correct": false
      },
      {
        "text": "M4A1",
        "correct": false
      },
      {
        "text": "MP9",
        "correct": false
      }
    ]
  },
  {
    "question": "Who turns out to be the true victor in the Battle of Armageddon in Mortal Kombat?",
    "answers": [
      {
        "text": "Shao Kahn",
        "correct": true
      },
      {
        "text": "Liu Kang",
        "correct": false
      },
      {
        "text": "Shang Tsung",
        "correct": false
      },
      {
        "text": "Raiden",
        "correct": false
      }
    ]
  },
  {
    "question": "Which anime did Seiji Kishi NOT direct?",
    "answers": [
      {
        "text": "Another",
        "correct": true
      },
      {
        "text": "Humanity Has Declined",
        "correct": false
      },
      {
        "text": "Assassination Classroom",
        "correct": false
      },
      {
        "text": "Danganronpa: The Animation",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the browser game Kantai Collection heavily inspired by?",
    "answers": [
      {
        "text": "Second World War",
        "correct": true
      },
      {
        "text": "Manga",
        "correct": false
      },
      {
        "text": "World of Warcraft",
        "correct": false
      },
      {
        "text": "An Anime",
        "correct": false
      }
    ]
  },
  {
    "question": "What year did the Chevrolet LUV mini truck make its debut?",
    "answers": [
      {
        "text": "1972",
        "correct": true
      },
      {
        "text": "1982",
        "correct": false
      },
      {
        "text": "1975",
        "correct": false
      },
      {
        "text": "1973",
        "correct": false
      }
    ]
  },
  {
    "question": "In which of these TV shows did the chef Gordon Ramsay not appear?",
    "answers": [
      {
        "text": "Auction Hunters",
        "correct": true
      },
      {
        "text": "Ramsay's Kitchen Nightmares",
        "correct": false
      },
      {
        "text": "Hotel Hell",
        "correct": false
      },
      {
        "text": "Hell's Kitchen",
        "correct": false
      }
    ]
  },
  {
    "question": "Which day did World War I begin?",
    "answers": [
      {
        "text": "July 28",
        "correct": true
      },
      {
        "text": "January 28",
        "correct": false
      },
      {
        "text": "June 28",
        "correct": false
      },
      {
        "text": "April 28",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these characters won the Super Smash Bros. Fighter Ballot in 2015?",
    "answers": [
      {
        "text": "Bayonetta",
        "correct": true
      },
      {
        "text": "Cloud",
        "correct": false
      },
      {
        "text": "Ryu",
        "correct": false
      },
      {
        "text": "Megaman",
        "correct": false
      }
    ]
  },
  {
    "question": "Which item of clothing is usually worn by a Scotsman at a wedding?",
    "answers": [
      {
        "text": "Kilt",
        "correct": true
      },
      {
        "text": "Skirt",
        "correct": false
      },
      {
        "text": "Dress",
        "correct": false
      },
      {
        "text": "Rhobes",
        "correct": false
      }
    ]
  },
  {
    "question": "The Western Lowland Gorilla is scientifically know as?",
    "answers": [
      {
        "text": "Gorilla Gorilla Gorilla",
        "correct": true
      },
      {
        "text": "Gorilla Gorilla Diehli",
        "correct": false
      },
      {
        "text": "Gorilla Beringei Graueri",
        "correct": false
      },
      {
        "text": "Gorilla Beringei Beringei",
        "correct": false
      }
    ]
  },
  {
    "question": "Cesar Romero played which iconic Batman villain from the 1960s TV show?",
    "answers": [
      {
        "text": "The Joker",
        "correct": true
      },
      {
        "text": "The Penguin",
        "correct": false
      },
      {
        "text": "The Riddler",
        "correct": false
      },
      {
        "text": "Mr. Freeze",
        "correct": false
      }
    ]
  },
  {
    "question": "What character is NOT apart of the Grand Theft Auto series?",
    "answers": [
      {
        "text": "Michael Cardenas",
        "correct": true
      },
      {
        "text": "Packie McReary",
        "correct": false
      },
      {
        "text": "Tommy Vercetti",
        "correct": false
      },
      {
        "text": "Lester Crest",
        "correct": false
      }
    ]
  },
  {
    "question": "What is an alternative name for multiple personality disorder?",
    "answers": [
      {
        "text": "Dissociative identity disorder",
        "correct": true
      },
      {
        "text": "Body integrity identity disorder",
        "correct": false
      },
      {
        "text": "Identity crisis",
        "correct": false
      },
      {
        "text": "Schizophrenia",
        "correct": false
      }
    ]
  },
  {
    "question": "Who was the British professional wrestler Shirley Crabtree better known as?",
    "answers": [
      {
        "text": "Big Daddy",
        "correct": true
      },
      {
        "text": "Giant Haystacks",
        "correct": false
      },
      {
        "text": "Kendo Nagasaki",
        "correct": false
      },
      {
        "text": "Masambula",
        "correct": false
      }
    ]
  },
  {
    "question": "What name is given to all baby marsupials?",
    "answers": [
      {
        "text": "Joey",
        "correct": true
      },
      {
        "text": "Calf",
        "correct": false
      },
      {
        "text": "Pup",
        "correct": false
      },
      {
        "text": "Cub",
        "correct": false
      }
    ]
  },
  {
    "question": "What was the last Aphex Twin album released before his decade-long hiatus?",
    "answers": [
      {
        "text": "Drukqs",
        "correct": true
      },
      {
        "text": "Windowlicker",
        "correct": false
      },
      {
        "text": "Syro",
        "correct": false
      },
      {
        "text": "Collected Ambient Works 85-92",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of his six wives was Henry VIII married to the longest?",
    "answers": [
      {
        "text": "Catherine of Aragon",
        "correct": true
      },
      {
        "text": "Anne Boleyn",
        "correct": false
      },
      {
        "text": "Jane Seymour",
        "correct": false
      },
      {
        "text": "Catherine Parr",
        "correct": false
      }
    ]
  },
  {
    "question": "All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
    "answers": [
      {
        "text": "Haplogroup U",
        "correct": true
      },
      {
        "text": "Haplogroup L",
        "correct": false
      },
      {
        "text": "Haplogroup T",
        "correct": false
      },
      {
        "text": "Haplogroup J",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these countries is NOT located in Africa?",
    "answers": [
      {
        "text": "Suriname",
        "correct": true
      },
      {
        "text": "Burkina Faso",
        "correct": false
      },
      {
        "text": "Mozambique",
        "correct": false
      },
      {
        "text": "Algeria",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the official language of Costa Rica?",
    "answers": [
      {
        "text": "Spanish",
        "correct": true
      },
      {
        "text": "English",
        "correct": false
      },
      {
        "text": "Portuguese",
        "correct": false
      },
      {
        "text": "Creole",
        "correct": false
      }
    ]
  },
  {
    "question": "While Apple was formed in California, in which western state was Microsoft founded?",
    "answers": [
      {
        "text": "New Mexico",
        "correct": true
      },
      {
        "text": "Washington",
        "correct": false
      },
      {
        "text": "Colorado",
        "correct": false
      },
      {
        "text": "Arizona",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these is the name of an American psychedelic rock band formed in 2002 by Benjamin Goldwasser and Andrew VanWyngarden?",
    "answers": [
      {
        "text": "MGMT",
        "correct": true
      },
      {
        "text": "MSTRKRFT",
        "correct": false
      },
      {
        "text": "STRFKR",
        "correct": false
      },
      {
        "text": "SBTRKT",
        "correct": false
      }
    ]
  },
  {
    "question": "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
    "answers": [
      {
        "text": "Fiat",
        "correct": true
      },
      {
        "text": "Maserati",
        "correct": false
      },
      {
        "text": "Alfa Romeo",
        "correct": false
      },
      {
        "text": "Ferrari",
        "correct": false
      }
    ]
  },
  {
    "question": "Which one of these Pink Floyd albums were also a movie?",
    "answers": [
      {
        "text": "The Wall",
        "correct": true
      },
      {
        "text": "The Dark Side of the Moon",
        "correct": false
      },
      {
        "text": "Wish You Were Here",
        "correct": false
      },
      {
        "text": "Animals",
        "correct": false
      }
    ]
  },
  {
    "question": "Which building was set aflame on August 24th, 1812?",
    "answers": [
      {
        "text": "The White House",
        "correct": true
      },
      {
        "text": "Parliament Building",
        "correct": false
      },
      {
        "text": "Grand National Assembly Building",
        "correct": false
      },
      {
        "text": "Palace of the Nation",
        "correct": false
      }
    ]
  },
  {
    "question": "Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-lll?",
    "answers": [
      {
        "text": "Ewan McGregor",
        "correct": true
      },
      {
        "text": "Alec Guinness",
        "correct": false
      },
      {
        "text": "Hayden Christensen",
        "correct": false
      },
      {
        "text": "Liam Neeson",
        "correct": false
      }
    ]
  },
  {
    "question": "Unlike on most salamanders, this part of a newt is flat?",
    "answers": [
      {
        "text": "Tail",
        "correct": true
      },
      {
        "text": "Head",
        "correct": false
      },
      {
        "text": "Teeth",
        "correct": false
      },
      {
        "text": "Feet",
        "correct": false
      }
    ]
  },
  {
    "question": "In which year did the first Monster Hunter game get released?",
    "answers": [
      {
        "text": "2004",
        "correct": true
      },
      {
        "text": "2006",
        "correct": false
      },
      {
        "text": "2005",
        "correct": false
      },
      {
        "text": "2002",
        "correct": false
      }
    ]
  },
  {
    "question": "What year did the New Orleans Saints win the Super Bowl?",
    "answers": [
      {
        "text": "2010",
        "correct": true
      },
      {
        "text": "2008",
        "correct": false
      },
      {
        "text": "2009",
        "correct": false
      },
      {
        "text": "2011",
        "correct": false
      }
    ]
  },
  {
    "question": "Who plays the character of Po in the Kung Fu Panda movies?",
    "answers": [
      {
        "text": "Jack Black",
        "correct": true
      },
      {
        "text": "Mirana Jonnes",
        "correct": false
      },
      {
        "text": "McConahey Ramses",
        "correct": false
      },
      {
        "text": "Jim Petersson",
        "correct": false
      }
    ]
  },
  {
    "question": "What was the name of one of the surviving palaces of Henry VIII located near Richmond, London?",
    "answers": [
      {
        "text": "Hampton Court",
        "correct": true
      },
      {
        "text": "St James&#039;s Palace",
        "correct": false
      },
      {
        "text": "Buckingham Palace",
        "correct": false
      },
      {
        "text": "Coughton Court",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following games in the The Legend of Zelda franchise was released in Japan before North America?",
    "answers": [
      {
        "text": "The Legend of Zelda: The Minish Cap",
        "correct": true
      },
      {
        "text": "The Legend of Zelda: Twilight Princess",
        "correct": false
      },
      {
        "text": "The Legend of Zelda: Spirit Tracks",
        "correct": false
      },
      {
        "text": "The Legend of Zelda: Four Swords",
        "correct": false
      }
    ]
  },
  {
    "question": "Adam West was the mayor of which cartoon town?",
    "answers": [
      {
        "text": "Quahog",
        "correct": true
      },
      {
        "text": "Springfield",
        "correct": false
      },
      {
        "text": "South Park",
        "correct": false
      },
      {
        "text": "Langley Falls",
        "correct": false
      }
    ]
  },
  {
    "question": "Released in 2001, the first edition of Apple's Mac OS X operating system (version 10.0) was given what animal code name?",
    "answers": [
      {
        "text": "Cheetah",
        "correct": true
      },
      {
        "text": "Puma",
        "correct": false
      },
      {
        "text": "Tiger",
        "correct": false
      },
      {
        "text": "Leopard",
        "correct": false
      }
    ]
  },
  {
    "question": "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    "answers": [
      {
        "text": "Game Maker",
        "correct": true
      },
      {
        "text": "Stencyl",
        "correct": false
      },
      {
        "text": "Construct",
        "correct": false
      },
      {
        "text": "Torque 2D",
        "correct": false
      }
    ]
  },
  {
    "question": "In which year was League of Legends released?",
    "answers": [
      {
        "text": "2009",
        "correct": true
      },
      {
        "text": "2010",
        "correct": false
      },
      {
        "text": "2003",
        "correct": false
      },
      {
        "text": "2001",
        "correct": false
      }
    ]
  },
  {
    "question": "Baron Silas Greenback is the arch nemesis of which cartoon hero?",
    "answers": [
      {
        "text": "Danger Mouse",
        "correct": true
      },
      {
        "text": "Bananaman",
        "correct": false
      },
      {
        "text": "SuperTed",
        "correct": false
      },
      {
        "text": "Captain Star",
        "correct": false
      }
    ]
  },
  {
    "question": "A statue of Charles Darwin sits in what London museum?",
    "answers": [
      {
        "text": "Natural History Museum",
        "correct": true
      },
      {
        "text": "Tate",
        "correct": false
      },
      {
        "text": "British Museum",
        "correct": false
      },
      {
        "text": "Science Museum",
        "correct": false
      }
    ]
  },
  {
    "question": "Which countries participated in the Lobster War?",
    "answers": [
      {
        "text": "France and Brazil",
        "correct": true
      },
      {
        "text": "Canada and Norway",
        "correct": false
      },
      {
        "text": "Australia and New Zealand",
        "correct": false
      },
      {
        "text": "United States and England",
        "correct": false
      }
    ]
  },
  {
    "question": "Brendan Fraser starred in the following movies, except which one?",
    "answers": [
      {
        "text": "Titanic",
        "correct": true
      },
      {
        "text": "Monkeybone",
        "correct": false
      },
      {
        "text": "Encino Man",
        "correct": false
      },
      {
        "text": "Mrs. Winterbourne",
        "correct": false
      }
    ]
  },
  {
    "question": "In Pokemon, the ability Wonder Guard is exclusive to which Pokemon? ",
    "answers": [
      {
        "text": "Shedinja ",
        "correct": true
      },
      {
        "text": "Sableye",
        "correct": false
      },
      {
        "text": "Spiritomb",
        "correct": false
      },
      {
        "text": "Silvally ",
        "correct": false
      }
    ]
  },
  {
    "question": "What year was the video game streaming platform TwitchTV founded?",
    "answers": [
      {
        "text": "2011",
        "correct": true
      },
      {
        "text": "2012",
        "correct": false
      },
      {
        "text": "2010",
        "correct": false
      },
      {
        "text": "2014",
        "correct": false
      }
    ]
  },
  {
    "question": "The son of which pope supposedly held a lecherous f&ecirc;te involving 50 courtesans in the papal palace?",
    "answers": [
      {
        "text": "Alexander VI",
        "correct": true
      },
      {
        "text": "Innocent V",
        "correct": false
      },
      {
        "text": "Urban II",
        "correct": false
      },
      {
        "text": "Pius III",
        "correct": false
      }
    ]
  },
  {
    "question": "The Panama Canal was finished under the administration of which U.S. president?",
    "answers": [
      {
        "text": "Woodrow Wilson",
        "correct": true
      },
      {
        "text": "Franklin Delano Roosevelt",
        "correct": false
      },
      {
        "text": "Herbert Hoover",
        "correct": false
      },
      {
        "text": "Theodore Roosevelt",
        "correct": false
      }
    ]
  },
  {
    "question": "How many bits make up the significand portion of a single precision floating point number?",
    "answers": [
      {
        "text": "23",
        "correct": true
      },
      {
        "text": "8",
        "correct": false
      },
      {
        "text": "53",
        "correct": false
      },
      {
        "text": "15",
        "correct": false
      }
    ]
  },
  {
    "question": "What mainly favored rifle is used by the Terrorists in Counter Strike: Global Offensive?",
    "answers": [
      {
        "text": "AK-47",
        "correct": true
      },
      {
        "text": "AK-74",
        "correct": false
      },
      {
        "text": "M4A4",
        "correct": false
      },
      {
        "text": "CZ-75 AUTO",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the AK-47's name in Counter Strike: Source?",
    "answers": [
      {
        "text": "CV-47",
        "correct": true
      },
      {
        "text": "AK-74",
        "correct": false
      },
      {
        "text": "AK",
        "correct": false
      },
      {
        "text": "CZ-75",
        "correct": false
      }
    ]
  },
  {
    "question": "In any programming language, what is the most common way to iterate through an array?",
    "answers": [
      {
        "text": "For loops",
        "correct": true
      },
      {
        "text": "If Statements",
        "correct": false
      },
      {
        "text": "Do-while loops",
        "correct": false
      },
      {
        "text": "While loops",
        "correct": false
      }
    ]
  },
  {
    "question": "Moore&#039;s law originally stated that the number of transistors on a microprocessor chip would double every...",
    "answers": [
      {
        "text": "Year",
        "correct": true
      },
      {
        "text": "Four Years",
        "correct": false
      },
      {
        "text": "Two Years",
        "correct": false
      },
      {
        "text": "Eight Years",
        "correct": false
      }
    ]
  },
  {
    "question": "What does GHz stand for?",
    "answers": [
      {
        "text": "Gigahertz",
        "correct": true
      },
      {
        "text": "Gigahotz",
        "correct": false
      },
      {
        "text": "Gigahetz",
        "correct": false
      },
      {
        "text": "Gigahatz",
        "correct": false
      }
    ]
  },
  {
    "question": "What amount of bits commonly equals one byte?",
    "answers": [
      {
        "text": "8",
        "correct": true
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "2",
        "correct": false
      },
      {
        "text": "64",
        "correct": false
      }
    ]
  },
  {
    "question": "Which computer hardware device provides an interface for all other connected devices to communicate?",
    "answers": [
      {
        "text": "Motherboard",
        "correct": true
      },
      {
        "text": "Central Processing Unit",
        "correct": false
      },
      {
        "text": "Hard Disk Drive",
        "correct": false
      },
      {
        "text": "Random Access Memory",
        "correct": false
      }
    ]
  },
  {
    "question": "On which computer hardware device is the BIOS chip located?",
    "answers": [
      {
        "text": "Motherboard",
        "correct": true
      },
      {
        "text": "Hard Disk Drive",
        "correct": false
      },
      {
        "text": "Central Processing Unit",
        "correct": false
      },
      {
        "text": "Graphics Processing Unit",
        "correct": false
      }
    ]
  },
  {
    "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    "answers": [
      {
        "text": "Final",
        "correct": true
      },
      {
        "text": "Static",
        "correct": false
      },
      {
        "text": "Private",
        "correct": false
      },
      {
        "text": "Public",
        "correct": false
      }
    ]
  },
  {
    "question": "Nvidia's headquarters are based in which Silicon Valley city?",
    "answers": [
      {
        "text": "Santa Clara",
        "correct": true
      },
      {
        "text": "Palo Alto",
        "correct": false
      },
      {
        "text": "Cupertino",
        "correct": false
      },
      {
        "text": "Mountain View",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the most preferred image format used for logos in the Wikimedia database?",
    "answers": [
      {
        "text": ".svg",
        "correct": true
      },
      {
        "text": ".png",
        "correct": false
      },
      {
        "text": ".jpeg",
        "correct": false
      },
      {
        "text": ".gif",
        "correct": false
      }
    ]
  },
  {
    "question": "What was the name given to Android 4.3?",
    "answers": [
      {
        "text": "Jelly Bean",
        "correct": true
      },
      {
        "text": "Lollipop",
        "correct": false
      },
      {
        "text": "Nutella",
        "correct": false
      },
      {
        "text": "Froyo",
        "correct": false
      }
    ]
  },
  {
    "question": "On which day did the World Wide Web go online?",
    "answers": [
      {
        "text": "December 20, 1990",
        "correct": true
      },
      {
        "text": "December 17, 1996",
        "correct": false
      },
      {
        "text": "November 12, 1990",
        "correct": false
      },
      {
        "text": "November 24, 1995",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the domain name for the country Tuvalu?",
    "answers": [
      {
        "text": ".tv",
        "correct": true
      },
      {
        "text": ".tu",
        "correct": false
      },
      {
        "text": ".tt",
        "correct": false
      },
      {
        "text": ".tl",
        "correct": false
      }
    ]
  },
  {
    "question": "What does the acronym CDN stand for in terms of networking?",
    "answers": [
      {
        "text": "Content Delivery Network",
        "correct": true
      },
      {
        "text": "Content Distribution Network",
        "correct": false
      },
      {
        "text": "Computational Data Network",
        "correct": false
      },
      {
        "text": "Compressed Data Network",
        "correct": false
      }
    ]
  },
  {
    "question": "How many kilobytes in one gigabyte (in decimal)?",
    "answers": [
      {
        "text": "1000000",
        "correct": true
      },
      {
        "text": "1024",
        "correct": false
      },
      {
        "text": "1000",
        "correct": false
      },
      {
        "text": "1048576",
        "correct": false
      }
    ]
  },
  {
    "question": "Generally, which component of a computer draws the most power?",
    "answers": [
      {
        "text": "Video Card",
        "correct": true
      },
      {
        "text": "Hard Drive",
        "correct": false
      },
      {
        "text": "Processor",
        "correct": false
      },
      {
        "text": "Power Supply",
        "correct": false
      }
    ]
  },
  {
    "question": "Which one of these is not an official development name for a Ubuntu release?",
    "answers": [
      {
        "text": "Mystic Mansion",
        "correct": true
      },
      {
        "text": "Trusty Tahr",
        "correct": false
      },
      {
        "text": "Utopic Unicorn",
        "correct": false
      },
      {
        "text": "Wily Werewolf",
        "correct": false
      }
    ]
  },
  {
    "question": "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
    "answers": [
      {
        "text": "JavaScript",
        "correct": true
      },
      {
        "text": "C#",
        "correct": false
      },
      {
        "text": "Python",
        "correct": false
      },
      {
        "text": "PHP",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these names was an actual codename for a cancelled Microsoft project?",
    "answers": [
      {
        "text": "Neptune",
        "correct": true
      },
      {
        "text": "Enceladus",
        "correct": false
      },
      {
        "text": "Pollux",
        "correct": false
      },
      {
        "text": "Saturn",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the name of the default theme that is installed with Windows XP?",
    "answers": [
      {
        "text": "Luna",
        "correct": true
      },
      {
        "text": "Neptune",
        "correct": false
      },
      {
        "text": "Whistler",
        "correct": false
      },
      {
        "text": "Bliss",
        "correct": false
      }
    ]
  },
  {
    "question": "On Twitter, what was the original character limit for a Tweet?",
    "answers": [
      {
        "text": "140",
        "correct": true
      },
      {
        "text": "120",
        "correct": false
      },
      {
        "text": "160",
        "correct": false
      },
      {
        "text": "100",
        "correct": false
      }
    ]
  },
  {
    "question": "In computing terms, typically what does CLI stand for?",
    "answers": [
      {
        "text": "Command Line Interface",
        "correct": true
      },
      {
        "text": "Common Language Input",
        "correct": false
      },
      {
        "text": "Control Line Interface",
        "correct": false
      },
      {
        "text": "Common Language Interface",
        "correct": false
      }
    ]
  },
  {
    "question": "Which operating system was released first?",
    "answers": [
      {
        "text": "Mac OS",
        "correct": true
      },
      {
        "text": "Windows",
        "correct": false
      },
      {
        "text": "Linux",
        "correct": false
      },
      {
        "text": "OS/2",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the name of the process that sends one qubit of information using two bits of classical information?",
    "answers": [
      {
        "text": "Quantum Teleportation",
        "correct": true
      },
      {
        "text": "Super Dense Coding",
        "correct": false
      },
      {
        "text": "Quantum Entanglement",
        "correct": false
      },
      {
        "text": "Quantum Programming",
        "correct": false
      }
    ]
  },
  {
    "question": "America Online (AOL) started out as which of these online service providers?",
    "answers": [
      {
        "text": "Quantum Link",
        "correct": true
      },
      {
        "text": "CompuServe",
        "correct": false
      },
      {
        "text": "Prodigy",
        "correct": false
      },
      {
        "text": "GEnie",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
    "answers": [
      {
        "text": "Motorola 68000",
        "correct": true
      },
      {
        "text": "Zilog Z80",
        "correct": false
      },
      {
        "text": "Yamaha YM2612",
        "correct": false
      },
      {
        "text": "Intel 8088",
        "correct": false
      }
    ]
  },
  {
    "question": "What does the International System of Quantities refer 1024 bytes as?",
    "answers": [
      {
        "text": "Kibibyte",
        "correct": true
      },
      {
        "text": "Kylobyte",
        "correct": false
      },
      {
        "text": "Kilobyte",
        "correct": false
      },
      {
        "text": "Kelobyte",
        "correct": false
      }
    ]
  },
  {
    "question": "How many values can a single byte represent?",
    "answers": [
      {
        "text": "256",
        "correct": true
      },
      {
        "text": "8",
        "correct": false
      },
      {
        "text": "1",
        "correct": false
      },
      {
        "text": "1024",
        "correct": false
      }
    ]
  },
  {
    "question": "What does the term MIME stand for, in regards to computing?",
    "answers": [
      {
        "text": "Multipurpose Internet Mail Extensions",
        "correct": true
      },
      {
        "text": "Mail Internet Mail Exchange",
        "correct": false
      },
      {
        "text": "Multipurpose Interleave Mail Exchange",
        "correct": false
      },
      {
        "text": "Mail Interleave Method Exchange",
        "correct": false
      }
    ]
  },
  {
    "question": "The name of technology company HP stands for what?",
    "answers": [
      {
        "text": "Hewlett-Packard",
        "correct": true
      },
      {
        "text": "Howard Packmann",
        "correct": false
      },
      {
        "text": "Husker-Pollosk",
        "correct": false
      },
      {
        "text": "Hellman-Pohl",
        "correct": false
      }
    ]
  },
  {
    "question": "Who invented the Spanning Tree Protocol?",
    "answers": [
      {
        "text": "Radia Perlman",
        "correct": true
      },
      {
        "text": "Paul Vixie",
        "correct": false
      },
      {
        "text": "Vint Cerf",
        "correct": false
      },
      {
        "text": "Michael Roberts",
        "correct": false
      }
    ]
  },
  {
    "question": "Which programming language shares its name with an island in Indonesia?",
    "answers": [
      {
        "text": "Java",
        "correct": true
      },
      {
        "text": "Python",
        "correct": false
      },
      {
        "text": "C",
        "correct": false
      },
      {
        "text": "Jakarta",
        "correct": false
      }
    ]
  },
  {
    "question": "What does RAID stand for?",
    "answers": [
      {
        "text": "Redundant Array of Independent Disks",
        "correct": true
      },
      {
        "text": "Rapid Access for Indexed Devices",
        "correct": false
      },
      {
        "text": "Range of Applications with Identical Designs",
        "correct": false
      },
      {
        "text": "Randomized Abstract Identification Description",
        "correct": false
      }
    ]
  },
  {
    "question": "How long is an IPv6 address?",
    "answers": [
      {
        "text": "128 bits",
        "correct": true
      },
      {
        "text": "32 bits",
        "correct": false
      },
      {
        "text": "64 bits",
        "correct": false
      },
      {
        "text": "128 bytes",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these is not a layer in the OSI model for data communications?",
    "answers": [
      {
        "text": "Connection Layer",
        "correct": true
      },
      {
        "text": "Application Layer",
        "correct": false
      },
      {
        "text": "Transport Layer",
        "correct": false
      },
      {
        "text": "Physical Layer",
        "correct": false
      }
    ]
  },
  {
    "question": "The teapot often seen in many 3D modeling applications is called what?",
    "answers": [
      {
        "text": "Utah Teapot",
        "correct": true
      },
      {
        "text": "Pixar Teapot",
        "correct": false
      },
      {
        "text": "3D Teapot",
        "correct": false
      },
      {
        "text": "Tennessee Teapot",
        "correct": false
      }
    ]
  },
  {
    "question": "What was the name of the first Bulgarian personal computer?",
    "answers": [
      {
        "text": "IMKO-1",
        "correct": true
      },
      {
        "text": "Pravetz 82",
        "correct": false
      },
      {
        "text": "Pravetz 8D",
        "correct": false
      },
      {
        "text": "IZOT 1030",
        "correct": false
      }
    ]
  },
  {
    "question": "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    "answers": [
      {
        "text": "ADPCM Sampler",
        "correct": true
      },
      {
        "text": "FM Synthesizer",
        "correct": false
      },
      {
        "text": "Programmable Sound Generator (PSG)",
        "correct": false
      },
      {
        "text": "PCM Sampler",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of the following computer components can be built using only NAND gates?",
    "answers": [
      {
        "text": "ALU",
        "correct": true
      },
      {
        "text": "CPU",
        "correct": false
      },
      {
        "text": "RAM",
        "correct": false
      },
      {
        "text": "Register",
        "correct": false
      }
    ]
  },
  {
    "question": "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    "answers": [
      {
        "text": "Coffee Lake",
        "correct": true
      },
      {
        "text": "Sandy Bridge",
        "correct": false
      },
      {
        "text": "Skylake",
        "correct": false
      },
      {
        "text": "Broadwell",
        "correct": false
      }
    ]
  },
  {
    "question": "Which of these Cherry MX mechanical keyboard switches is both tactile and clicky?",
    "answers": [
      {
        "text": "Cherry MX Blue",
        "correct": true
      },
      {
        "text": "Cherry MX Black",
        "correct": false
      },
      {
        "text": "Cherry MX Red",
        "correct": false
      },
      {
        "text": "Cherry MX Brown",
        "correct": false
      }
    ]
  }
];


