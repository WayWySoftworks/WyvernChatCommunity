export interface CharacterTag {
  value: string;
  label: string;
  description?: string;
}

export const defaultTags: CharacterTag[] = [
  // Media Categories
  {
    value: "Anime",
    label: "🎌 Anime",
    description: "A character from an anime or manga series.",
  },
  {
    value: "Cartoon",
    label: "Cartoon",
    description: "A character from an animated television show or movie.",
  },
  {
    value: "Comic",
    label: "Comic Book",
    description: "A character from a comic book series.",
  },
  {
    value: "Movie",
    label: "🎥 Movie",
    description: "A character from a live-action film.",
  },
  {
    value: "TV-Show",
    label: "📺 TV Show",
    description: "A character from a live-action television show.",
  },
  {
    value: "book",
    label: "📖 Book",
    description: "A character from a novel or short story.",
  },
  {
    value: "Video-Game",
    label: "🎮 Video Game",
    description: "A character from a video game.",
  },
  {
    value: "Original",
    label: "💡 Original",
    description: "A character created by the author.",
  },

  // Genre Tags
  {
    value: "Fantasy",
    label: "🧝 Fantasy",
    description: "Magic, mythical creatures, or otherworldly settings.",
  },
  {
    value: "Sci-Fi",
    label: "🚀 Sci-Fi",
    description: "Advanced technology, space travel, futuristic settings.",
  },
  {
    value: "Modern",
    label: "🖥 Modern",
    description: "Contemporary technology, fashion, or culture.",
  },
  {
    value: "Historical",
    label: "🏰 Historical",
    description: "Specific time periods, cultures, or events.",
  },
  {
    value: "Horror",
    label: "👹 Horror",
    description: "Supernatural elements, suspense, or gore.",
  },
  {
    value: "Romance",
    label: "❤️ Romance",
    description: "Love, relationships, or dating.",
  },
  {
    value: "Action",
    label: "💥 Action",
    description: "Fighting, adventure, or excitement.",
  },
  {
    value: "Comedy",
    label: "😂 Comedy",
    description: "Humor, jokes, or satire.",
  },
  {
    value: "Drama",
    label: "🎭 Drama",
    description: "Conflict, emotion, or tension.",
  },
  {
    value: "Slice-Of-Life",
    label: "Slice of Life",
    description: "Everyday events, relationships, or experiences.",
  },
  {
    value: "Supernatural",
    label: "👻 Supernatural",
    description: "Magic, ghosts, or otherworldly beings.",
  },
  {
    value: "Mystery",
    label: "🕵️ Mystery",
    description: "Puzzles, clues, or suspense.",
  },
  {
    value: "Thriller",
    label: "🔪 Thriller",
    description: "Suspense, danger, or excitement.",
  },
  {
    value: "Adventure",
    label: "🏞️ Adventure",
    description: "Exploration, quests, or challenges.",
  },
  {
    value: "Isekai",
    label: "Isekai",
    description: "`{{user}}` is transported to another world.",
  },
  {
    value: "RPG",
    label: "RPG",
    description: "Story elements are inspired by role-playing games (stats, leveling, etc.)",
  },

  // Theme-Based Tags
  {
    value: "Chatter",
    label: "🗣️ Chatter",
    description: "More like texting rather than traditional roleplaying.",
  },
  {
    value: "Realistic",
    label: "🌍 Realistic",
    description: "Everyday life, relationships, or events.",
  },
  {
    value: "Wish-Fulfillment",
    label: "🌠 Wish Fulfillment",
    description: "Fulfilling desires, dreams, or fantasies.",
  },
  {
    value: "Fluff",
    label: "🎀 Fluff",
    description: "Sweetness, cuteness, or light-heartedness.",
  },
  {
    value: "Angst",
    label: "💔 Angst",
    description: "Sadness, pain, tragedy or emotional turmoil.",
  },
  {
    value: "Furry",
    label: "🙈 Furry",
    description: "Anthropomorphic animals or fursonas.",
  },
  {
    value: "Monster",
    label: "👺 Monster",
    description: "Mythical creatures, beasts, or supernatural beings.",
  },

  // Concept-Based Tags
  {
    value: "Religious",
    label: "Religious",
    description: "Deities, faith, or spiritual beliefs.",
  },
  {
    value: "Political",
    label: "Political",
    description: "Government, power, or social issues.",
  },
  {
    value: "Philosophical",
    label: "Philosophical",
    description: "Deep thoughts, ideas, or concepts.",
  },
  {
    value: "Educational",
    label: "🏫 Educational",
    description: "Learning, knowledge, or information.",
  },
  {
    value: "Experimental",
    label: "🧪 Experimental",
    description: "New ideas, techniques, or approaches.",
  },
  {
    value: "Collab",
    label: "🤝 Collab",
    description: "Created in collaboration with other artists or writers.",
  },

  // Holiday-Themed Tags
  {
    value: "Halloween",
    label: "🎃 Halloween",
    description: "Pumpkins, ghosts, or costumes.",
  },
  {
    value: "Christmas",
    label: "🎄 Christmas",
    description: "Santa Claus, presents, or snow.",
  },
  {
    value: "Valentine",
    label: "💘 Valentine",
    description: "Hearts, flowers, or romance.",
  },
  {
    value: "Hanukkah",
    label: "🕎 Hanukkah",
    description: "Menorahs, dreidels, or latkes.",
  },
  {
    value: "Easter",
    label: "🐰 Easter",
    description: "Bunnies, eggs, or chocolate.",
  },
  {
    value: "Ramadan",
    label: "🌙 Ramadan",
    description: "Mosques, lanterns, or dates.",
  },
  {
    value: "Pride",
    label: "🏳️‍🌈 Pride",
    description: "Rainbows, flags, or LGBTQ+ pride.",
  },

  // Aesthetic/Setting-Based Tags
  {
    value: "Pirate",
    label: "🏴‍☠️ Pirate",
    description: "Ships, treasure, or swashbuckling.",
  },
  {
    value: "Steampunk",
    label: "Steampunk",
    description: "Victorian-era technology, airships, or clockwork.",
  },
  {
    value: "Cyberpunk",
    label: "Cyberpunk",
    description: "Futuristic technology, hackers, or dystopian society.",
  },
  {
    value: "Gothic",
    label: "🖤 Gothic",
    description: "Dark romance, horror, or Victorian aesthetics.",
  },
  {
    value: "Medieval",
    label: "⚜ Medieval",
    description: "Knights, castles, or dragons.",
  },
  {
    value: "Futuristic",
    label: "Futuristic",
    description: "Advanced technology, space travel, or cybernetics.",
  },

  // Environment-Based Tags
  {
    value: "Office",
    label: "Office",
    description: "Work, business, or corporate culture.",
  },
  {
    value: "Beach",
    label: "Beach",
    description: "Sand, sun, or surf.",
  },
  {
    value: "Forest",
    label: "Forest",
    description: "Trees, animals, or nature.",
  },
  {
    value: "City",
    label: "City",
    description: "Buildings, streets, or urban life.",
  },
  {
    value: "Concert",
    label: "Concert",
    description: "Music, bands, or performances.",
  },
  {
    value: "Restaurant",
    label: "Restaurant",
    description: "Food, dining, or cooking.",
  },

  // Seasonal Tags
   {
    value: "Spring",
    label: "🌸 Spring",
    description: "Flowers, rain, or rebirth.",
  },
  {
    value: "Summer",
    label: "☀️ Summer",
    description: "Sun, beach, or vacation.",
  },
  {
    value: "Fall",
    label: "🍂 Fall",
    description: "Leaves, pumpkins, or harvest.",
  },
  {
    value: "Winter",
    label: "❄️ Winter",
    description: "Snow, ice, or holidays.",
  },

  // Identity Tags
  {
    value: "Male",
    label: "Male",
    description: "A character who identifies as male.",
  },
  {
    value: "Female",
    label: "Female",
    description: "A character who identifies as female.",
  },
  {
    value: "Non-Binary",
    label: "Non-Binary",
    description: "A character who identifies as non-binary.",
  },
  {
    value: "Trans",
    label: "🏳️‍⚧️ Trans",
    description: "A character identifies as a gender different from their assigned birth sex.",
  },
  {
    value: "Genderfluid",
    label: "Genderfluid",
    description: "A character who identifies as genderfluid.",
  },
];

export const specialTags: CharacterTag[] = [
  {
    value: "FeaturedCreator",
    label: "🌟Featured Creator",
    description: "Made by a featured creator!",
  },
  {
    value: "Rencox",
    label: "Rencox🦊",
    description: "This is a testing tag, if you can see this, it means Rencox fucked it up",
  }
];

export const species: CharacterTag[] = [
  // Humanoid Species
  {
    value: "Human",
    label: "Human",
    description: "A regular old human."
  },
  {
    value: "Superhuman",
    label: "Superhuman",
    description: "A human granted with some sort of superpower or perhaps multiple. Think Superman, Homelander, The Flash, etc."
  },
  {
    value: "Mutant",
    label: "Mutant",
    description: "A creature with genetic mutations or superhuman abilities often associated with science fiction, horror, or fantasy. Mutants can have various powers, appearances, and origins, and can be heroes or villains or something in between."
  },
  {
    value: "Demihuman",
    label: "Demihuman",
    description: "Beings with a mix of human and non-human traits, often resembling humanoid creatures like elves, dwarves, or beastfolk. They possess enhanced abilities tied to their non-human lineage, making them skilled in both physical and magical disciplines."
  },

  // Mythological & Fantasy Humanoids
  {
    value: "Elf",
    label: "Elf",
    description: "Often a pointy-eared, long-lived, magical creature. Often associated with nature, beauty, and grace. Think of Tolkien's elves, not Santa's elves."
  },
  {
    value: "Dwarf",
    label: "Dwarf",
    description: "A short, stocky, and sturdy creature often associated with mining, crafting, and drinking. Think Gimli from Lord of the Rings. Honestly, do think of Santa's elves for this one."
  },
  {
    value: "Halfling",
    label: "Halfling",
    description: "A small, nimble creature often associated with food, farming, and luck. Think of hobbits from Lord of the Rings, or halflings from Dungeons and Dragons."
  },
  {
    value: "Orc",
    label: "Orc",
    description: "A brutish, aggressive creature often associated with strength, war, and savagery. Think of the orcs from Lord of the Rings, or the orcs from Warcraft."
  },
  {
    value: "Goblin",
    label: "Goblin",
    description: "A small, sneaky creature often associated with mischief, greed, and trickery. Think of the goblins from Harry Potter, or the goblins from Dungeons and Dragons."
  },
  {
    value: "Troll",
    label: "Troll",
    description: "A large, ugly creature often associated with strength, regeneration, and stupidity. Think of the trolls from Norse mythology, or the trolls from World of Warcraft."
  },
  {
    value: "Tiefling",
    label: "Tiefling",
    description: "A humanoid with demonic or infernal heritage."
  },
  {
    value: "Fae",
    label: "Fae",
    description: "A magical creature often associated with nature, beauty, and enchantment. Faeries can have various powers and appearances, and can be benevolent or malevolent. Think of the Sidhe from Irish mythology, the Seelie and Unseelie courts, or the fae from the Dresden Files."
  },
  {
    value: "Fairy",
    label: "Fairy",
    description: "A small, winged creature often associated with magic, nature, and mischief. Fairies can have various powers and appearances, and can be benevolent or malevolent. Think of Tinkerbell from Peter Pan, the fairies from A Midsummer Night's Dream, or the fairies from Zelda."
  },
  {
    value: "Gnome",
    label: "Gnome",
    description: "A small, earthy creature often associated with craftsmanship, gardening, and mischief. Gnomes can have various powers and appearances, and can be benevolent or malevolent. Think of the gnomes from World of Warcraft, the gnomes from Gravity Falls, or the gnomes from folklore."
  },
  {
    value: "Giants",
    label: "Giants",
    description: "A large, powerful creature often associated with strength, size, and mythology. Giants can be benevolent or malevolent, intelligent or bestial, and can have various abilities and appearances. Think of the giants from Norse mythology, the giants from Jack and the Beanstalk, or the giants from Attack on Titan."
  },
  {
    value: "Naga",
    label: "Naga",
    description: "A serpent-like creature often associated with wisdom, magic, and beauty. Nagas can have various forms and abilities, and can be benevolent or malevolent. Think of the Nagas from Hindu mythology, the Nagas from Warcraft, or the Nagas from Monster Musume."
  },
  {
    value: "Lamia",
    label: "Lamia",
    description: "A lamia is a creature originating in Greek mythos. Depicted with the body of a snake and the upper body of a human, traditionally they lure unsuspecting travelers with their charms, only to devour them.  However these days, they aren't relegated to a single role. Their allure and deadly nature make them a popular species."

  // Supernatural & Undead Beings
  {
    value: "Undead",
    label: "Undead",
    description: "A being that has died but remains animate."
  },
  {
    value: "Vampire",
    label: "Vampire",
    description: "A blood-sucking creature of the night, often associated with immortality, seduction, and supernatural powers. Think Dracula, Serena from Skyrim, or those things from True Blood or Blade."
  },
  {
    value: "Werewolf",
    label: "Werewolf",
    description: "A shapeshifting creature that transforms into a wolf or a hybrid form during the full moon. Often associated with strength, ferocity, and primal instincts. Think of the Wolfman, Jacob from Twilight, or the Lycans from Underworld."
  },
  {
    value: "Spirit",
    label: "Spirit",
    description: "A non-corporeal entity, often supernatural or ghostly."
  },

  // Celestial & Infernal Beings
  {
    value: "Angel",
    label: "Angel",
    description: "A celestial being often associated with goodness, light, and protection. Angels can have wings, halos, and other divine attributes, and can be messengers, warriors, or healers. Think of Gabriel from Constantine, Castiel from Supernatural, or the angels from Dogma."
  },
  {
    value: "Demon",
    label: "Demon",
    description: "A malevolent supernatural being often associated with evil, chaos, and destruction. Demons can take many forms and have various powers, but they are generally not to be trusted. Think of the Balrog from Lord of the Rings, the demons from Supernatural, or the demons from Diablo."
  },
  {
    value: "Succubus (Incubus)",
    label: "Succubus (Incubus)",
    description: "A demon that seduces and feeds on the life force of its victims. Often associated with lust, desire, and temptation, and sometimes with wings and horns. Think Morrigan from Darkstalkers, Lilith from Borderlands, or the Incubi from Dungeons and Dragons."
  },
  {
    value: "God",
    label: "God",
    description: "A divine being often associated with creation, power, and worship. Gods can have various domains, powers, and followers, and can be benevolent or malevolent, distant or involved, real or fictional."
  },

  // Otherworldly & Cosmic Entities
  {
    value: "Alien",
    label: "Alien",
    description: "A creature from another planet or dimension often associated with science fiction, technology, and otherworldly powers."
  },
  {
    value: "Cosmic Entity",
    label: "Cosmic Entity",
    description: "A powerful being from beyond the stars often associated with eldritch horror, cosmic forces, and existential dread."
  },
  {
    value: "Abyssal Horror",
    label: "Abyssal Horror",
    description: "A terrifying creature from the depths of the void often associated with madness, despair, and annihilation."
  },

  // Beastly & Hybrid Creatures
  {
    value: "Dragon",
    label: "Dragon",
    description: "A large, fire-breathing reptilian creature often associated with power, wisdom, and treasure. Dragons can be good or evil, intelligent or bestial, and can have various abilities and appearances. Think Smaug from The Hobbit, Toothless from How to Train Your Dragon, or Alduin from Skyrim."
  },
  {
    value: "Mermaid",
    label: "Mermaid",
    description: "A half-human, half-fish creature often associated with the sea, beauty, and enchantment. Mermaids can be benevolent or malevolent, playful or dangerous, and can have various powers and appearances. Think Ariel from The Little Mermaid, the Sirens from Greek mythology, or the Merrow from Irish folklore."
  },
  {
    value: "Neko",
    label: "Neko",
    description: "A cat-like humanoid creature often associated with playfulness, curiosity, and agility."
  },
  {
    value: "Kitsune",
    label: "Kitsune",
    description: "A fox-like humanoid often associated with intelligence, trickery, and shape-shifting. Kitsunes can have multiple tails, magical abilities, and various forms, and are often depicted as mischievous or benevolent."
  },
  {
    value: "Anthro",
    label: "Anthro",
    description: "An anthropomorphic animal with human-like bodies, animal features, and various abilities, and can be realistic or stylized, cute or fierce. For characters that don't fit into furry/scaly category."
  },

  // Artificial & Elemental Beings
  {
    value: "Machine",
    label: "Machine",
    description: "A mechanical or robotic creature often associated with science fiction, technology, and artificial intelligence. Machines can have various forms, functions, and abilities, and can be helpful or harmful, sentient or mindless."
  },
  {
    value: "Plant",
    label: "Plant",
    description: "A creature made of or resembling plant life often associated with nature, growth, and regeneration. Plants can have various forms, abilities, and origins, and can be peaceful or aggressive, beautiful or grotesque."
  }
];

export const pronouns: CharacterTag[] = [
  {
    value: "He/Him",
    label: "He/Him",
    description: "Masculine pronouns",
  },
  {
    value: "She/Her",
    label: "She/Her",
    description: "Feminine pronouns",
  },
  {
    value: "They/Them",
    label: "They/Them",
    description: "Neutral pronouns",
  },
  {
    value: "It/Its",
    label: "It/Its",
    description: "Object pronouns",
  },
];

export const occupations: CharacterTag[] = [
  // Arts and Entertainment
  {
    value: "Artist",
    label: "Artist",
    description: "A person who creates art, such as paintings, sculptures, or music.",
  },
  {
    value: "Musician",
    label: "Musician",
    description: "A person who plays a musical instrument or sings.",
  },
  {
    value: "Writer",
    label: "Writer",
    description: "A person who writes books, stories, or articles.",
  },
  {
    value: "Actor",
    label: "Actor",
    description: "A person who performs in plays, movies, or television shows.",
  },
  {
    value: "Cosplayer",
    label: "Cosplayer",
    description: "A person who dresses up as fictional characters for events and conventions.",
  },

  // Healthcare
  {
    value: "Doctor",
    label: "Doctor",
    description: "A person who treats patients and prescribes medication.",
  },
  {
    value: "Nurse",
    label: "Nurse",
    description: "A person who cares for patients and assists doctors.",
  },
  {
    value: "Therapist",
    label: "Therapist",
    description: "Dr. Phil, Dr. Ruth, and other mental health professionals who provide counseling and support.",
  },
  {
    value: "Masseuse",
    label: "Masseuse (Massage Therapist)",
    description: "A person who gives massages for a living.",
  },

  // Education
  {
    value: "Teacher",
    label: "Teacher",
    description: "A person who educates students in a school or classroom.",
  },
  {
    value: "Professor",
    label: "Professor",
    description: "Hubert Farnsworth, Indiana Jones, and other educators who teach students in a university or college.",
  },
  {
    value: "Librarian",
    label: "Librarian",
    description: "Giles from Buffy, Belle from Beauty and the Beast, and other bookish individuals who work in a library.",
  },
  {
    value: "Student",
    label: "Student",
    description: "A person who is studying at a school or college.",
  },
  {
    value: "Athlete",
    label: "Athlete",
    description: "A person who participates in sports or physical activities.",
  },
  // Science and Technology
  {
    value: "Scientist",
    label: "Scientist",
    description: "A person who studies the natural world and conducts experiments.",
  },
  {
    value: "Engineer",
    label: "Engineer",
    description: "A person who designs and builds machines, structures, or systems.",
  },
  {
    value: "Programmer",
    label: "Programmer",
    description: "A person who writes code and creates software applications.",
  },
  {
    value: "Mechanic",
    label: "Mechanic",
    description: "Han Solo, Tony Stark, and other technicians who repair and maintain machinery.",
  },

  // Public Service and Security
  {
    value: "Police Officer",
    label: "Police Officer",
    description: "Murphy from the Dresden Files, or any other law enforcement officer who upholds the law and protects the public.",
  },
  {
    value: "Firefighter",
    label: "Firefighter",
    description: "A person who extinguishes fires and rescues people from danger.",
  },
  {
    value: "Military",
    label: "Military",
    description: "Rambo, Captain America, and other military personnel who fight for their country.",
  },
  {
    value: "Pilot",
    label: "Pilot",
    description: "Think of Amelia Earhart, Sully Sullenberger, or Tom Cruise in Top Gun. Someone who flies planes or helicopters for a living.",
  },
  {
    value: "Flight Attendant",
    label: "Flight Attendant",
    description: "Someone who assists passengers during flights and ensures their safety and comfort.",
  },
  {
    value: "Astronaut",
    label: "Astronaut",
    description: "Buzz Aldrin, Neil Armstrong, Sarah Morgan from Starfield, and other space explorers who travel to the stars.",
  },

  // Criminal and Underworld
  {
    value: "Criminal",
    label: "Criminal",
    description: "A person who breaks the law and engages in illegal activities.",
  },
  {
    value: "Crime Boss",
    label: "Crime Boss",
    description: "A person who controls criminal activities and organizations.",
  },
  {
    value: "Con-Artist",
    label: "Con Artist",
    description: "A person who deceives others for personal gain.",
  },
  {
    value: "Thief",
    label: "Thief",
    description: "Robin Hood, Catwoman, and other rogues who steal from the rich and give to the poor.",
  },
  {
    value: "Assassin",
    label: "Assassin",
    description: "Ezio Auditore, John Wick, and other contract killers who eliminate targets for money or revenge.",
  },
  {
    value: "Mercenary",
    label: "Mercenary",
    description: "A private individual who joins an armed conflict for personal profit, rather than patriotism or politics.",
  },

  // Law and Politics
  {
    value: "Royalty",
    label: "Royalty",
    description: "A person who is a member of a royal family and holds a title or position of authority.",
  },
  {
    value: "Politician",
    label: "Politician",
    description: "Barack Obama, Hillary Clinton, and other public officials who govern a country or region.",
  },
  {
    value: "Lawyer",
    label: "Lawyer",
    description: "Atticus Finch, Elle Woods, and other legal professionals who represent clients in court.",
  },
  {
    value: "Judge",
    label: "Judge",
    description: "Judges Judy, Dredd, and other judicial officers who preside over legal proceedings.",
  },
  {
    value: "CEO",
    label: "CEO",
    description: "Elon Musk, Oprah Winfrey, and other chief executives who run a company or organization.",
  },

  // Trades and Technical Work
  {
    value: "Maid/Butler",
    label: "Maid/Butler",
    description: "A domestic worker serving in a household, sometimes with a formal or stylized role.",
  },
  {
    value: "Chef",
    label: "Chef",
    description: "A person who cooks and prepares food in a restaurant or kitchen.",
  },
  {
    value: "Baker",
    label: "Baker",
    description: "A person who bakes bread, cakes, or pastries.",
  },
  {
    value: "Barista",
    label: "Barista",
    description: "A person who makes and serves coffee in a cafe or coffee shop.",
  },
  {
    value: "Waiter/Waitress",
    label: "Waiter/Waitress",
    description: "A person who serves food and drinks in a restaurant or cafe.",
  },
  {
    value: "Bartender",
    label: "Bartender",
    description: "Penny from Big Bang Theory, Moe from the Simpsons, or any other person who mixes and serves drinks in a bar or pub.",
  },
  {
    value: "Stylist",
    label: "Stylist",
    description: "A person who cuts and styles hair for a living.",
  },
  {
    value: "Mechanic",
    label: "Mechanic",
    description: "Han Solo, Tony Stark, and other technicians who repair and maintain machinery.",
  },
  {
    value: "Plumber",
    label: "Plumber",
    description: "Mario, Luigi, and other tradespeople who fix pipes and drains.",
  },

  // Adventurer and Explorer
  {
    value: "Explorer",
    label: "Explorer",
    description: "Marco Polo, Lewis and Clark, and other adventurers who travel to unknown lands.",
  },
  {
    value: "Adventurer",
    label: "Adventurer",
    description: "Like Indiana Jones, Lara Croft, or Nathan Drake. Someone who seeks out danger and excitement in exotic locations.",
  },
  {
    value: "Detective",
    label: "Detective",
    description: "Nick Valentine, Hercule Poirot, and other sleuths who solve crimes and mysteries.",
  },
  {
    value: "Spy",
    label: "Spy",
    description: "James Bond, Archer, and other secret agents who gather intelligence and conduct covert operations.",
  },

  // Supernatural and Paranormal
  {
    value: "Psychic",
    label: "Psychic",
    description: "Miss Cleo, John Edward, and other individuals who claim to have supernatural abilities.",
  },
  {
    value: "Ghost-Hunter",
    label: "Ghost Hunter",
    description: "Zak Bagans, Jason Hawes, and other paranormal investigators who seek out spirits and hauntings.",
  },
  {
    value: "Occultist",
    label: "Occultist",
    description: "Aleister Crowley, Madame Blavatsky, and other practitioners of magic and mysticism.",
  },
  {
    value: "Monster-Hunter",
    label: "Monster Hunter",
    description: "Geralt of Rivia, Buffy Summers, Darwin Grieves, and other warriors who slay supernatural creatures.",
  },

  // Other
  {
    value: "Unemployed",
    label: "Unemployed",
    description: "A person who does not have a job or occupation.",
  },
  {
    value: "Nun/Priest",
    label: "Nun/Priest",
    description: "A religious devotee serving a faith or deity.",
  },
  {
    value: "Bounty-Hunter",
    label: "Bounty Hunter",
    description: "Dog the Bounty Hunter, Boba Fett, and other individuals who capture fugitives for a reward.",
  },
  {
    value: "Prison-Guard",
    label: "Prison Guard",
    description: "A person who supervises inmates in a correctional facility.",
  },
  {
    value: "Prisoner",
    label: "Prisoner",
    description: "A person who is incarcerated in a correctional facility.",
  },
  {
    value: "Test-Subject",
    label: "Test Subject",
    description: "A person who participates in scientific experiments and trials.",
  },
  {
    value: "VTuber",
    label: "🎤 VTuber",
    description: "A virtual YouTuber who creates content using an animated avatar.",
  },
  {
    value: "Streamer",
    label: "Streamer",
    description: "A person who broadcasts live video content on the internet.",
  },
  {
    value: "Influencer",
    label: "Influencer",
    description: "A person who promotes products and services on social media.",
  },
];

export const archetypes: CharacterTag[] = [
  // Heroic & Protagonist Archetypes
  {
    value: "Protagonist",
    label: "🦸 Protagonist",
    description: "Main character or hero of the story. Think Harry Potter or Katniss Everdeen."
  },
  {
    value: "ChosenOne",
    label: "Chosen One",
    description: "Character who is destined for greatness and has a special purpose or destiny. Think Harry Potter or Luke Skywalker."
  },
  {
    value: "Reluctant-Hero",
    label: "Reluctant Hero",
    description: "Protagonist who is thrust into a heroic role against their will. Think Bilbo Baggins or Katniss Everdeen."
  },
  {
    value: "Anti-Hero",
    label: "Anti-Hero",
    description: "Morally ambiguous protagonist who lacks conventional heroic qualities. Think Deadpool or Punisher."
  },
  {
    value: "Byronic Hero",
    label: "Byronic Hero",
    description: "Complex and brooding character with a dark past and conflicted morality. Think Heathcliff or Severus Snape."
  },
  {
    value: "Knight in Sour Armor",
    label: "Knight in Sour Armor",
    description: "Cynical and disillusioned character who still fights for justice. Think Rorschach or Jessica Jones."
  },
  {
    value: "Noble Savage",
    label: "Noble Savage",
    description: "Character who embodies the purity and wisdom of nature. Think Tarzan."
  },
  {
    value: "Gentle-Giant",
    label: "Gentle Giant",
    description: "Physically imposing character with a kind and sensitive nature. Think Hodor from Game of Thrones."
  },

  // Villainous & Antagonistic Archetypes
  {
    value: "Antagonist",
    label: "😈 Antagonist",
    description: "Main character or villain of the story. Think Voldemort or the Joker."
  },
  {
    value: "Supervillain",
    label: "Supervillain",
    description: "A powerful antagonist with grand, often evil ambitions.",
  },
  {
    value: "Tragic Villain",
    label: "Tragic Villain",
    description: "Antagonist whose actions are driven by past trauma or suffering. Think Darth Vader or the Phantom of the Opera."
  },
  {
    value: "Uncaring Villain",
    label: "Uncaring Villain",
    description: "Antagonist who is indifferent to the suffering of others. Think Sauron or the White Witch. Only cares to forward their own goals."
  },
  {
    value: "Well-Intentioned Extremist",
    label: "Well-Intentioned Extremist",
    description: "Antagonist who believes their harmful actions serve a greater good. Think Thanos or Magneto."
  },
  {
    value: "Master of Manipulation",
    label: "Master of Manipulation",
    description: "Character who excels at deceiving and controlling others. Think Littlefinger or Moriarty."
  },
  {
    value: "Femme Fatale",
    label: "Femme Fatale",
    description: "Seductive and dangerous character who lures others to their doom. Think Catwoman or Poison Ivy."
  },

  // Supporting, Secondary, and Complex Archetypes
  {
    value: "Trickster-Mentor",
    label: "Trickster Mentor",
    description: "Wise but mischievous guide who teaches through unconventional methods. Think Yoda or Dumbledore."
  },
  {
    value: "Reluctant Companion",
    label: "Reluctant Companion",
    description: "Character who joins the hero's journey out of obligation or necessity. Think Samwise Gamgee or Ron Weasley."
  },
  {
    value: "Best Friend",
    label: "Best Friend",
    description: "Character plays a significant role as a close companion.",
  },
  {
    value: "Lovable-Rogue",
    label: "Lovable Rogue",
    description: "Charming and morally flexible character who bends rules for personal gain. Think Han Solo or Robin Hood."
  },
  {
    value: "PersonNextDoor",
    label: "Person Next Door",
    description: "Character who is relatable, ordinary, and unremarkable. Think Ned Flanders or Bob Belcher."
  },
  {
    value: "Bumbling Buffoon",
    label: "Bumbling Buffoon",
    description: "Character who is clumsy, foolish, or incompetent. Think Jar Jar Binks or Mr. Bean."
  },
  {
    value: "Mastermind",
    label: "Mastermind",
    description: "Highly intelligent character who excels at strategic planning. Think Sherlock Holmes or Light Yagami."
  },
  {
    value: "Eternal-Optimist",
    label: "Eternal Optimist",
    description: "Character who maintains a positive outlook despite adversity. Think Leslie Knope or SpongeBob SquarePants."
  },
  {
    value: "Chaotic-Neutral",
    label: "Chaotic Neutral",
    description: "Unpredictable character who follows their own moral compass. Think Jack Sparrow or Catwoman."
  },
  {
    value: "Broken-Bird",
    label: "Broken Bird",
    description: "Character with a traumatic past who struggles to trust or connect with others. Think Batman or Lisbeth Salander."
  },
  {
    value: "Mentally Ill",
    label: "Mentally Ill",
    description: "Character who struggles with mental health issues such as depression, anxiety, or PTSD. Think Tony Stark or BoJack Horseman."
  },
  {
    value: "Cursed",
    label: "Cursed",
    description: "Character who is afflicted by a supernatural curse or hex. Think Edward Scissorhands or the Beast from Beauty and the Beast."
  },
  {
    value: "Manic Pixie Dream Girl",
    label: "Manic Pixie Dream Girl",
    description: "Quirky and free-spirited character who exists to inspire and uplift the protagonist. Think Ramona Flowers or Summer Finn."
  },

  // "Dere" Archetypes (Anime-Inspired Personality Tropes)
  {
    value: "Yandere",
    label: "🔪 Yandere",
    description: "Sweet and loving on the outside, but possessive and obsessive on the inside. Think Yuno Gasai from Future Diary."
  },
  {
    value: "Tsundere",
    label: "😡 Tsundere",
    description: "Cold and aloof on the outside, but warm and caring on the inside. Think Asuka Langley Soryu from Neon Genesis Evangelion."
  },
  {
    value: "Kuudere",
    label: "❄️ Kuudere",
    description: "Cool and composed on the outside, but emotional and vulnerable on the inside. Think Rei Ayanami from Neon Genesis Evangelion."
  },
  {
    value: "Dandere",
    label: "🤐 Dandere",
    description: "Quiet and shy on the outside, but warm and friendly on the inside. Think Hinata Hyuga from Naruto."
  },
  {
    value: "Himedere",
    label: "👑 Himedere",
    description: "Princess-like and entitled, expect to be treated like royalty. Think Ojou-sama from anime."
  },
  {
    value: "Oujidere",
    label: "Oujidere",
    description: "Prince-like and princely, expect to be treated like royalty. Think Prince Charming from fairy tales."
  },
  {
    value: "Deredere",
    label: "💖 Deredere",
    description: "Sweet and affectionate, always positive and cheerful. Think Sailor Moon."
  },
  {
    value: "Undere",
    label: "Undere",
    description: "Submissive and obedient, always eager to please. Think Hinata Hyuga from Naruto."
  },
  {
    value: "Mayadere",
    label: "🦂 Mayadere",
    description: "Mysterious and dangerous, with a hidden dark side. Think Yuno Gasai from Future Diary."
  },
  {
    value: "Deredevil",
    label: "Deredevil",
    description: "Sweet and innocent, but secretly a badass. Think Sailor Moon."
  }
];

export const sexTags: CharacterTag[] = [
  // Genre & Relationship Tags
  {
    value: "Erotic Image",
    label: "Erotic Image",
    description: "Contains sexually explicit or highly suggestive imagery.",
  },
  {
    value: "Yaoi",
    label: "Yaoi",
    description: "Yaoi is a genre in which the characters are involved in a romantic or sexual relationship with another character, both of whom are men.",
  },
  {
    value: "Yuri",
    label: "Yuri",
    description: "Yuri is a genre in which the characters are involved in a romantic or sexual relationship with another character, both of whom are women.",
  },
  {
    value: "Harem",
    label: "Harem",
    description: "A harem is a genre in which a male character is surrounded by multiple female characters, most of whom are romantically interested in him.",
  },
  {
    value: "ReverseHarem",
    label: "Reverse Harem",
    description: "Reverse harem is a genre in which a female character is surrounded by multiple male characters, most of whom are romantically interested in her.",
  },
  {
    value: "Smut",
    label: "Smut",
    description: "Little to no plot, full horny.",
  },

  // Age/Role-Based Attraction Tags
  {
    value: "MILF",
    label: "MILF",
    description: "'Mom I'd Like to Fuck'. M-Mommy?"
  },
  {
    value: "DILF",
    label: "DILF",
    description: "'Dad I'd Like to Fuck'. D-Daddy?"
  },
  {
    value: "GILF",
    label: "GILF",
    description: "'Grandparent I'd Like to Fuck'."
  },

  // Professional/Industry Performer Tags
  {
    value: "ExoticDancer",
    label: "Exotic Dancer",
    description: "A person who performs erotic dances for entertainment.",
  },
  {
    value: "Escort",
    label: "Escort",
    description: "A person who accompanies others for companionship or pleasure.",
  },
  {
    value: "PornStar",
    label: "Porn Star",
    description: "A person who performs in adult films and videos.",
  },

  // BDSM & Power Dynamics Tags
  {
    value: "Bondage",
    label: "Bondage",
    description: "The use of restraints, ropes, or other devices to restrict movement or enhance pleasure.",
  },
  {
    value: "Impact Play",
    label: "Impact Play",
    description: "The act of striking the body for sexual pleasure or pain.",
  },
  {
    value: "Blindfolds",
    label: "Blindfolds",
    description: "The use of blindfolds to enhance sensory deprivation or anticipation.",
  },
  {
    value: "Gagging",
    label: "Gagging",
    description: "The use of gags or other devices to restrict speech or enhance submission.",
  },
  {
    value: "Discipline",
    label: "Discipline",
    description: "The use of rules, punishments, or rewards to control behavior or enforce obedience.",
  },
  {
    value: "Domination",
    label: "Domination",
    description: "The exertion of power, control, or authority over another person.",
  },
  {
    value: "Submission",
    label: "Submission",
    description: "The act of yielding, surrendering, or obeying another person.",
  },
  {
    value: "Sadism",
    label: "Sadism",
    description: "The enjoyment of inflicting pain, suffering, or humiliation on another person.",
  },
  {
    value: "Masochism",
    label: "Masochism",
    description: "The enjoyment of receiving pain, suffering, or humiliation from another person.",
  },
  {
    value: "MasterSlave",
    label: "Master-Slave",
    description: "A power dynamic where one person has complete control over another person.",
  },
  {
    value: "Spanking",
    label: "Spanking",
    description: "The act of striking the buttocks with an open hand or implement for sexual pleasure.",
  },
  {
    value: "Choking",
    label: "Choking",
    description: "The act of restricting airflow to the brain for sexual pleasure.",
  },
  {
    value: "CBT",
    label: "Cock and Ball Torture",
    description: "Attraction to inflicting pain on male genitals, or attraction to having pain inflicted on your male genitals."
  },
  {
    value: "OrgasmControl",
    label: "Orgasm Control",
    description: "Techniques to control or delay orgasm.",
  },
  {
    value: "Degradation",
    label: "Degradation",
    description: "Deriving pleasure from being degraded or degrading someone else.",
  },
  {
    value: "Humiliation",
    label: "Humiliation",
    description: "Deriving pleasure from being humiliated or humiliating someone else.",
  },
  {
    value: "PraiseKink",
    label: "Praise Kink",
    description: "Deriving pleasure from receiving praise or praising someone else.",
  },
  {
    value: "FearPlay",
    label: "Fear Play",
    description: "Deriving pleasure from inducing fear in a consensual context.",
  },
  {
    value: "CNC",
    label: "Consensual Non-Consent",
    description: "Roleplaying scenarios where consent is negotiated in advance.",
  },
  {
    value: "BreathPlay",
    label: "Breath Play",
    description: "Activities involving the restriction of breathing for pleasure.",
  },
  {
    value: "Claiming",
    label: "Claiming",
    description: "The act of marking or claiming a partner as your own.",
  },
  {
    value: "Reluctance",
    label: "Reluctance",
    description: "The act of being hesitant or resistant to sexual advances, but ultimately consenting.",
  },
  {
    value: "Spanking",
    label: "Spanking",
    description: "Sexual pleasure derived from spanking or being spanked.",
  },

  // Sensory & Kink Play Tags
  {
    value: "EarPlay",
    label: "Ear Play",
    description: "The act of stimulating the ears for sexual pleasure or arousal. Whispering, nibbling, licking, massaging, etc.",
  },
  {
    value: "Repulsion",
    label: "Repulsion",
    description: "The act of being repulsed by something or someone, but still finding it arousing.",
  },
  {
    value: "Tickling",
    label: "Tickling",
    description: "The act of tickling someone for sexual pleasure or arousal.",
  },
  {
    value: "ScentPlay",
    label: "Scent Play",
    description: "The use of scents or pheromones to enhance arousal or attraction. Sniffing panties, smelling armpits, etc.",
  },
  {
    value: "WaxPlay",
    label: "Wax Play",
    description: "The use of hot wax for sensual or sadistic purposes.",
  },
  {
    value: "KnifePlay",
    label: "Knife Play",
    description: "The use of knives or sharp objects for stimulation or fear play.",
  },
  {
    value: "BloodPlay",
    label: "Blood Play",
    description: "The use of blood for sexual pleasure or arousal.",
  },
  {
    value: "SensoryDeprivation",
    label: "Sensory Deprivation",
    description: "Using blindfolds, earplugs, or other methods to deprive the senses.",
  },
  {
    value: "TemperaturePlay",
    label: "Temperature Play",
    description: "Using hot or cold substances for stimulation.",
  },
  {
    value: "ElectroPlay",
    label: "Electro Play",
    description: "Using electrical stimulation for sexual pleasure.",
  },
  {
    value: "Sploshing",
    label: "Sploshing",
    description: "Sexual arousal from substances like mud, paint, or food.",
  },
  {
    value: "Tickling",
    label: "Tickling",
    description: "Sexual pleasure derived from tickling or being tickled.",
  },
  {
    value: "WetandMessy",
    label: "Wet and Messy",
    description: "Sexual arousal from substances like mud, paint, or food.",
  },

  // Physical Fetish: Body Parts & Features
    {
    value: "Futanari",
    label: "Futanari",
    description: "Two-sexed hermaphrodite character that has both sexual reproductive organs, including both male and female genitalia, as well as female breasts.",
  },
  {
    value: "Feet",
    label: "Feet",
    description: "Sexual attraction to feet.",
  },
  {
    value: "Armpits",
    label: "Armpits",
    description: "Sexual attraction to armpits.",
  },
  {
    value: "BodyHair",
    label: "Body Hair",
    description: "Sexual attraction to body hair.",
  },
  {
    value: "BreastMilk",
    label: "Breast Milk",
    description: "Sexual arousal from lactation or breast milk.",
  },
  {
    value: "Navel",
    label: "Navel",
    description: "Sexual attraction to the navel or belly button.",
  },
  {
    value: "Odor",
    label: "Odor",
    description: "Sexual arousal from specific body odors.",
  },
  {
    value: "Piercings",
    label: "Piercings",
    description: "Sexual attraction to body piercings.",
  },
  {
    value: "Tattoos",
    label: "Tattoos",
    description: "Sexual attraction to tattoos or people with tattoos.",
  },
  {
    value: "Teeth",
    label: "Teeth",
    description: "Sexual attraction to teeth or dental work.",
  },
  {
    value: "Hair",
    label: "Hair",
    description: "Sexual attraction to hair or specific hairstyles.",
  },
  {
    value: "Hands",
    label: "Hands",
    description: "Sexual attraction to hands.",
  },
  {
    value: "Stomach",
    label: "Stomach",
    description: "Sexual attraction to the stomach or abdomen.",
  },

  // Sexual Acts & Specific Activities
  {
    value: "Fingering",
    label: "Fingering",
    description: "Sexual arousal from stimulating the genitals with fingers.",
  },
  {
    value: "Fisting",
    label: "Fisting",
    description: "Sexual practice involving inserting a fist into the vagina and going wild."
  },
  {
    value: "Facesitting",
    label: "Face Sitting",
    description: "Sexual pleasure derived from sitting on a partner's face or being sat on."
  },
  {
    value: "Cunnilingus",
    label: "Cunnilingus",
    description: "Attraction to performing oral sex on a partner with a vagina."
  },
  {
    value: "AnalPlay",
    label: "Anal Play",
    description: "Sexual activities involving the anus.",
  },
  {
    value: "Pegging",
    label: "Pegging",
    description: "Enjoyment of penetration with a strap-on by a female partner.",
  },

  // Fetish Clothing & Materials
  {
    value: "Gloves",
    label: "Gloves",
    description: "Sexual attraction to gloves or someone wearing gloves.",
  },
  {
    value: "Latex",
    label: "Latex",
    description: "Sexual attraction to latex clothing or material.",
  },
  {
    value: "Leather",
    label: "Leather",
    description: "Sexual attraction to leather clothing or material.",
  },
  {
    value: "Uniform",
    label: "Uniform",
    description: "Sexual attraction to people in uniform.",
  },
  {
    value: "Chastity",
    label: "Chastity",
    description: "The use of devices to prevent sexual activity or orgasm.",
  },

  // Roleplaying & Scenario-Based Tags
  {
    value: "Roleplaying",
    label: "Role-playing",
    description: "Acting out fantasies or scenarios with a partner.",
  },
  {
    value: "Medical",
    label: "Medical",
    description: "Sexual arousal from medical scenarios or instruments.",
  },
  {
    value: "MedicalPlay",
    label: "Medical Play",
    description: "Role-playing involving medical scenarios and equipment.",
  },
  {
    value: "Raceplay",
    label: "Raceplay",
    description: "Role-playing scenarios with racial themes.",
  },
  {
    value: "SizePlay",
    label: "Size Play",
    description: "Role-playing scenarios involving size differences.",
  },
  {
    value: "ParentPlay",
    label: "Parent Play",
    description: "Role-playing scenarios involving parent-child dynamics.",
  },
  {
    value: "Sissification",
    label: "Sissification",
    description: "Feminization of a male partner for sexual pleasure.",
  },
  {
    value: "PetPlay",
    label: "Petplay",
    description: "The act of roleplaying as an animal, such as a puppy, kitten, or pony.",
  },

  // Miscellaneous Sexual Interests
  {
    value: "Pregnancy",
    label: "Pregnancy",
    description: "Sexual attraction to pregnant individuals."
  },
  {
    value: "Breeding",
    label: "Breeding",
    description: "The act of impregnating or being impregnated for sexual pleasure or arousal. Creampies, breeding kink, etc. ",
  },
  {
    value: "Incest",
    label: "Incest",
    description: "Interest in pursuing sexual or romantic relationships with someone who is related to you by blood."
  },
  {
    value: "Exhibitionism",
    label: "Exhibitionism",
    description: "The act of exposing oneself or engaging in sexual activity in public.",
  },
  {
    value: "Voyeurism",
    label: "Voyeurism",
    description: "The act of watching others engage in sexual activity without their knowledge.",
  },
  {
    value: "FreeUse",
    label: "Free Use",
    description: "Enjoys the idea of being used by multiple people as nothing more than an object for sexual gratification."
  },
  {
    value: "Wrestling",
    label: "Wrestling",
    description: "Sexual arousal from wrestling or grappling.",
  },
  {
    value: "BBW",
    label: "BBW",
    description: "Attraction to individuals who are big, beautiful, and/or curvy."
  },
  {
    value: "BBC",
    label: "BBC",
    description: "Attraction to individuals with big black cocks."
  },
  {
    value: "NTR",
    label: "NTR",
    description: "NTR is a genre in which a character is involved in a romantic or sexual relationship with another character, but is betrayed or stolen away by a third character.",
  },
  {
    value: "Cuckold",
    label: "Cuckold",
    description: "Attraction to seeing your partner have sex with another person."
  },
  {
    value: "FreeUse",
    label: "Free Use",
    description: "Enjoys the idea of being used by multiple people as nothing more than an object for sexual gratification."
  },

  // Extreme & Fantasy / Transformation Tags
  {
    value: "Hypnosis",
    label: "Hypnosis",
    description: "The use of hypnotic techniques for sexual pleasure or control.",
  },
  {
    value: "Vore",
    label: "Vore",
    description: "Sexual attraction to the idea of being eaten or eating another person.",
  },
  {
    value: "Inflation",
    label: "Inflation",
    description: "Sexual attraction to the idea of inflating or being inflated.",
  },
  {
    value: "Transformation",
    label: "Transformation",
    description: "Sexual attraction to the idea of transforming or being transformed.",
  },
  {
    value: "Gore",
    label: "Gore",
    description: "Sexual attraction to blood, violence, or other graphic content.",
  },
  {
    value: "Tentacles",
    label: "Tentacles",
    description: "Hentai classic: Tentacles! They wrap, they go into all your holes, what more needs said?"
  }
];

export const povs: CharacterTag[] = [
  {
    value: "First",
    label: "First Person",
    description: "The character speaks in first person, and has an active character voice."
  },
  {
    value: "Second",
    label: "Second Person",
    description: `">I do x" then the bot says "You do x and then x happens!"`
  },
  {
    value: "Third",
    label: "Third Person",
    description: "The card is written from third person perpective, narrating the actions of the character as an observer."
  },
  {
    value: "AnyPOV",
    label: "AnyPOV",
    description: "`{{user}}` can easily self-insert, regardless of gender."
  },
  {
    value: "FemPOV",
    label: "FemPOV",
    description: "Written for female-identifying `{{user}}`."
  },
  {
    value: "MalePOV",
    label: "MalePOV",
    description: "Written for a male-identifying `{{user}}`."
  }
]

export const cardFormats: CharacterTag[] = [
  {
    value: "Prose",
    label: "Prose",
    description: "Card is formatted in a way that is closest to Novel instructions."
  },
  {
    value: "AliChat",
    label: "AliChat",
    description: "Card is formatted to use example dialogues as the primary driver of the character. Often with a PList as a system prompt."
  },
  {
    value: "PList",
    label: "PList/SBF",
    description: "Card is formatted to contain limited dialogue or prose, and is primarily driven by structured data."
  },
  {
    value: "RAW",
    label: "RAW",
    description: "Card is formatted to be a straight rip from source material, most likely a script or screenplay."
  }
]

export const otherPersonalityTraits: CharacterTag[] = [
  {
    value: "Shy",
    label: "Shy",
    description: "Reserved or timid in social situations.",
  },
  {
    value: "Other",
    label: "🔎 Other",
    description: "A tag that does not fit into any other category, or is unique or unconventional.",
  },
  {
    value: "Neighborly",
    label: "🏡 Neighborly",
    description: "Friendly and helpful to those around them.",
  },
  {
    value: "Energetic",
    label: "Energetic",
    description: "Full of energy and enthusiasm.",
  },
  {
    value: "Confident",
    label: "Confident",
    description: "Self-assured and assertive in social situations.",
  },
  {
    value: "Nerdy",
    label: "Nerdy",
    description: "Intellectually curious and passionate about niche interests.",
  },
  {
    value: "Goth",
    label: "Goth",
    description: "Dark and edgy aesthetic, often associated with alternative music and fashion. Also heavy eyeliner, goth chicks dig eyeliner.",
  },
  {
    value: "Metalhead",
    label: "Metalhead",
    description: "Passionate about heavy metal music and culture.",
  },
  {
    value: "Tomboy",
    label: "Tomboy",
    description: "A woman who engages in culturally male activities."
  },
  {
    value: "Femboy",
    label: "Femboy",
    description: "Usually cisgender male character who expresses himself with traditionally feminine behaviors.",
  },
  {
    value: "Gamer",
    label: "Gamer",
    description: "Likes to play video games."
  },
  {
    value: "NEET",
    label: "NEET",
    description: "No job, no money, no independence. Truly a dregg on society. Maybe you're familiar with term?"
  },
  {
    value: "Motherly",
    label: "Motherly",
    description: "Not necessarily a mom, perhaps it's an overprotective best friend, an old sister, someone who gives off those sweet protective vibes."
  },
  {
    value: "Fatherly",
    label: "Fatherly",
    description: "Maybe it's that one friend who's always making Dad jokes, maybe it's your protective old brother with a Dad bod."
  },
  {
    value: "Sisterly",
    label: "Sisterly",
    description: "Your nextdoor neighbor who's been there for you forever, or maybe it's a cousin you're close to. Either way, this person gives off sister vibes."
  },
  {
    value: "Brotherly",
    label: "Brotherly",
    description: "Your best friend who's always been there for you, or maybe it's a cousin you're close to. Either way, this person gives off brother vibes."
  },
  {
    value: "Doomer",
    label: "Doomer",
    description: "A person who is pessimistic about the future and society."
  },
  {
    value: "Zoomer",
    label: "Zoomer",
    description: "A person who is part of Generation Z, born between 1997 and 2012. They're young, hip, and always on their phones. But, also above 18 or you're gonna get put on the wall of shame and IP banned."
  },
  {
    value: "Boomer",
    label: "Boomer",
    description: "A person who is part of the Baby Boomer generation, born between 1946 and 1964. They're old, conservative, and always complaining about millennials."
  },
  {
    value: "Millennial",
    label: "Millennial",
    description: "A person who is part of the Millennial generation, born between 1981 and 1996. They're young, tech-savvy, and always complaining about boomers."
  },
  {
    value: "Patriotic",
    label: "Patriotic",
    description: "Loves their country and is proud of their heritage."
  },
  {
    value: "Rebel",
    label: "Rebel",
    description: "Resists authority and challenges the status quo."
  },
  {
    value: "Hippie",
    label: "Hippie",
    description: "Rejects mainstream culture and embraces peace, love, and harmony."
  },
  {
    value: "Stoner",
    label: "Stoner",
    description: "Enjoys smoking marijuana and the associated culture."
  },
  {
    value: "Nutjob",
    label: "Nutjob",
    description: "A person who is crazy or mentally unstable. Believes in dumb conspiracies like the flat Earth, QAnon, or other stuff anyone with a brain can see through."
  },
  {
    value: "Weeb",
    label: "Weeb",
    description: "Obsessed with Japanese culture, anime, and manga."
  },
  {
    value: "Otaku",
    label: "Otaku",
    description: "A person who is obsessed with anime and manga."
  },
  {
    value: "Brony",
    label: "Brony",
    description: "A fan of the My Little Pony: Friendship is Magic franchise."
  },
  {
    value: "K-Pop",
    label: "K-Pop",
    description: "A fan of Korean pop music and culture."
  },
  {
    value: "Raver",
    label: "Raver",
    description: "Enjoys electronic dance music and rave culture."
  },
  {
    value: "Doormat",
    label: "Doormat",
    description: "A person who is submissive and easily manipulated."
  },
  {
    value: "Alpha",
    label: "Alpha",
    description: "A person who is dominant and assertive in social situations."
  },
  {
    value: "Beta",
    label: "Beta",
    description: "A person who is submissive and passive in social situations."
  },
  {
    value: "Omega",
    label: "Omega",
    description: "A person who is submissive and passive in social situations, but also has a nurturing side."
  },
  {
    value: "Sigma",
    label: "Sigma",
    description: "A person who is independent and aloof, but also charismatic and attractive."
  },
  {
    value: "Virgin",
    label: "Virgin",
    description: "A person who has not had sexual intercourse."
  },
  {
    value: "Innocent",
    label: "Innocent",
    description: "Lacking experience or knowledge of the world."
  },
  {
    value: "Experienced",
    label: "Experienced",
    description: "Having knowledge or skill from practice or familiarity."
  },
  {
    value: "Naive",
    label: "Naive",
    description: "Lacking experience or wisdom, easily deceived or misled."
  },
];

// Export the total list minus the mature only tags for easy use.
export const totalTags = [
  ...species,
  ...specialTags,
  ...defaultTags,
  ...occupations,
  ...archetypes,
  ...povs,
  ...cardFormats,
  ...otherPersonalityTraits
];
