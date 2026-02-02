// data.js — Product catalog (single source of truth)
window.PRODUCTS = [
  {
    id: 1,
    name: "LEGO® Millennium Falcon™ – UCS",
    theme: "Star Wars",
    availability: "50+ Available",
    price: 849.99,
    short: "The ultimate LEGO® Star Wars™ Millennium Falcon is here. With 7,500 elements, this LEGO® model of the ship that made the Kessel Run in less than twelve parsecs is our biggest ever.",
    images: [
      "images/millennium-falcon.jpg",
      "images/millennium-falcon-2.jpg",
      "images/millennium-falcon-3.jpg"
    ],
    description: `Welcome to the largest, most detailed LEGO® Star Wars Millennium Falcon model we’ve ever created—in fact, with 7,500 pieces it’s one of our biggest LEGO models, period!

This set includes 4 classic crew minifigures: Han Solo, Chewbacca, Princess Leia and C-3PO. It also includes 3 Episode VII/VIII crew minifigures: Older Han Solo, Rey and Finn. Figures include a BB-8 droid, 2 buildable Porgs and a buildable Mynock.

Display size: Measures over 8” (21cm) high, 33” (84cm) long and 23” (60cm) wide.`,
    details: [
      "Theme: Star Wars",
      "Series: Ultimate Collector Series (UCS)",
      "Pieces: 7,500",
      "Type: Display model",
      "Includes: Informational fact plaque"
    ],
    reviews: [
      { user: "Alex", stars: 5, text: "The most legendary UCS set ever made.", date: "Jan 2026" },
      { user: "Maya", stars: 5, text: "Huge, detailed, and absolutely worth it.", date: "Jan 2026" }
    ]
  },

  {
    id: 2,
    name: "LEGO® Daily Bugle – LEGO Marvel (76178)",
    theme: "Marvel",
    availability: "100+ Available",
    price: 349.99,
    short: "The new Daily Bugle features storylines true comic fans will know, from the Sinister Six to the Spider-verse and beyond.",
    images: [
      "images/daily-bugle.jpg",
      "images/daily-bugle-2.jpg",
      "images/daily-bugle-3.jpg"
    ],
    description: `The LEGO® Marvel Spider-Man Daily Bugle (76178) brings together a cast of 25 classic characters from the Spiderverse.

This is a 4-story celebration of the Marvel Universe. Measuring over 32 in. (82 cm) high, this 3,789-piece recreation of the Daily Bugle office block provides a towering backdrop for an all-star cast.`,
    details: [
      "Theme: Marvel",
      "Set Number: 76178",
      "Pieces: 3,789",
      "Type: Build-and-display model",
      "Minifigures: 25"
    ],
    reviews: [
      { user: "Chris", stars: 5, text: "So many minifigures — insane value.", date: "Jan 2026" },
      { user: "Sam", stars: 4, text: "Tall, detailed, and looks great on display.", date: "Jan 2026" }
    ]
  },

  {
    id: 3,
    name: "LEGO Hogwarts Express – Collectors’ Edition (76405)",
    theme: "Harry Potter",
    availability: "100+ Available",
    price: 69.99,
    short: "Bring the magic of Harry Potter™ home with an all-new buildable, 1:32 scale replica of the Hogwarts Express™.",
    images: [
      "images/hogwarts-express.jpg",
      "images/hogwarts-express-2.jpg",
      "images/hogwarts-express-3.jpg"
    ],
   description: `Capture the magic of the Harry Potter™ stories with a buildable, 1:32 scale replica of the most iconic vehicle in the Wizarding World. LEGO® Harry Potter Hogwarts Express™ Collectors' Edition (76405) is a spectacular build-and-display project for adult Harry Potter enthusiasts, which will enchant all who see it.

An enchanting conversation piece measuring over 10.5 in. (26 cm) high, 46.5 in. (118 cm) long and 8 in. (20 cm) wide, the model will draw admiring comments wherever it is displayed.

Inside and out, the model is packed with authentic details. The engine features a detailed underside and a lever on the top that causes the train to rock with the motion of a steam train.`,
    details: [
      "Brand: Lego",
      "Theme: Harry Potter",
      "Set: 76405 (Collectors’ Edition)",
      "5129 pcs",
      "Scale: 1:32",
      "Type: Build-and-display model"
    ],
    reviews: [
      { user: "Jordan", stars: 5, text: "Insane display piece. The train looks unreal.", date: "Jan 2026" }
    ]
  },

  {
    id: 4,
    name: "LEGO® Hulkbuster – LEGO Marvel (76210)",
    theme: "Marvel",
    availability: "25+ Available",
    price: 549.99,
    short: "Under the golden chest plates lies a spacious cockpit, which fits the LEGO® Marvel Iron Man Figure (76206). Sold separately.",
    images: [
      "images/hulkbuster.jpg",
      "images/hulkbuster-2.jpg",
      "images/hulkbuster-3.jpg"
    ],
    description: `LEGO® Marvel Hulkbuster (76210) captures the scale and power of the Hulkbuster MK44 from Marvel Studios’ Avengers: Age of Ultron. Standing over 20.5 in. (52 cm) tall and containing 4,049 pieces, this challenging and rewarding construction project is designed with adult enthusiasts in mind.

The model features a multitude of movie-accurate details. Within the dark red armor and strategically positioned golden plates lies a spacious cockpit, from which the LEGO Marvel Iron Man Figure (76206) (sold separately) controls the heavy-duty armor. The set also includes an information plate and a Tony Stark minifigure.

Highlights include 3 light-up arc reactors (1 in the chest and 1 in each hand), a fully jointed upper body, and an opening cockpit. This display piece measures 20.5 in (52 cm) high, 18.5 in (47 cm) wide, and 9.5 in (24 cm) deep.`,
    details: [
      "Theme: Marvel",
      "Set Number: 76210",
      "Pieces: 4,049",
      "Height: 20.5 in (52 cm)",
      "Includes: Info plate + Tony Stark minifigure",
      "Note: Iron Man Figure (76206) sold separately"
    ],
    reviews: [
      { user: "Drew", stars: 5, text: "Massive build and insane shelf presence.", date: "Jan 2026" }
    ]
  },

  {
    id: 5,
    name: "LEGO® McLaren P1™ – LEGO Technic™ (42172)",
    theme: "Technic™",
    availability: "25+ Available",
    price: 449.99,
    short: "Drive your passion for a legendary hypercar with the new LEGO Technic McLaren P1™.",
    images: [
      "images/mclaren-p1.jpg",
      "images/mclaren-p1-2.jpg",
      "images/mclaren-p1-3.jpg"
    ],
    description: `Ignite your love for supercars with this engaging LEGO® Technic™ McLaren P1™ hypercar set for adults. Build the impressive 1:8 scale model and explore features like the 7-speed gearbox with shifter drum, suspension and V8 piston engine.

This adult building kit delivers a rewarding challenge for LEGO® Technic™ fans. The set includes a unique serial number tile that gives access to exclusive online content.

Size: This 3,893-piece set measures over 5.5 in. (14 cm) high, 23 in. (59 cm) long and 9.5 in. (25 cm) wide.`,
    details: [
      "Theme: Technic™",
      "Set Number: 42172",
      "Pieces: 3,893",
      "Scale: 1:8",
      "Features: 7-speed gearbox + V8 piston engine",
      "Doors: Butterfly-style mechanism",
      "Includes: Serial number tile (exclusive content access)",
      "Size: 5.5 in (14 cm) H × 23 in (59 cm) L × 9.5 in (25 cm) W"
    ],
    reviews: [
      { user: "Miles", stars: 5, text: "The gearbox build is so satisfying.", date: "Jan 2026" }
    ]
  },

  {
    id: 6,
    name: "LEGO® Shackleton’s Lifeboat – LEGO Icons (40729)",
    theme: "LEGO Icons",
    availability: "25+ Available",
    price: 19.99, // placeholder
    short: "Heroic Age of Antarctic Exploration",
    images: [
      "images/shackleton-1.jpg",
      "images/shackleton-2.jpg",
      "images/shackleton-3.jpg"
    ],
    description: `Step into the Heroic Age of Antarctic Exploration with this LEGO® Icons Shackleton’s Lifeboat (40729) model boat kit for adults. Enjoy a mindful experience as you recreate the legendary lifeboat salvaged from the icebound ship Endurance.

The set includes captain Sir Ernest Shackleton and photographer Frank Hurley minifigures, plus accessories such as a camera, stove, oars and a sleigh. You can remove the top of the boat to access the interior and attach the sleigh to convert the boat to ice-travel mode.

Size: This 232-piece set measures over 6 in. (15 cm) high, 7 in. (17 cm) long and 2.5 in. (6 cm) wide.`,
    details: [
      "Theme: LEGO Icons",
      "Set Number: 40729",
      "Pieces: 232",
      "Includes: Shackleton & Hurley minifigures",
      "Features: Ice-travel mode sleigh, removable top"
    ],
    reviews: [
      { user: "Casey", stars: 5, text: "Small but super detailed—awesome history set.", date: "Feb 2026" },
      { user: "Avery", stars: 4, text: "Great display piece and fun accessories.", date: "Feb 2026" }
    ]
  },

  {
    id: 7,
    name: "LEGO® Notre-Dame de Paris – LEGO Architecture (21061)",
    theme: "Architecture",
    availability: "25+ Available",
    price: 229.99, // placeholder
    short: "Experience every step in the evolution of an iconic Paris landmark through the ages with this architectural model kit.",
    images: [
      "images/notredame-1.jpg",
      "images/notredame-2.jpg",
      "images/notredame-3.jpg"
    ],
    description: `Experience every stage in the development of an iconic Paris landmark with the collectible LEGO® Architecture Notre-Dame de Paris building set for adults (21061). This architectural model kit takes you on a historic building journey beginning in 1163 and continuing through major changes into modern times.

Recreate authentic details such as the curved rear of the building, bell towers, rose windows and the central spire surrounded by statues. Remove the roof to admire the interior columns and arches, and lift off the towers to take a closer look inside.

This set makes a great gift for lovers of history, architecture, art, travel or France. Size: This 4,383-piece display model measures over 13 in. (33 cm) high, 8.5 in. (22 cm) wide and 16 in. (41 cm) deep.`,
    details: [
      "Theme: LEGO Architecture",
      "Set Number: 21061",
      "Pieces: 4,383",
      "Display Size: 13 in (33 cm) high",
      "Features: Removable roof, lift-off towers"
    ],
    reviews: [
      { user: "Morgan", stars: 5, text: "Insane build—museum-quality display.", date: "Feb 2026" },
      { user: "Jamie", stars: 5, text: "So many details. The rose windows look amazing.", date: "Feb 2026" }
    ]
  },

  {
    id: 8,
    name: "LEGO® Mario Kart™ – Spiny Shell (40787)",
    theme: "Super Mario",
    availability: "25+ Available",
    price: 19.99, // placeholder
    short: "Celebrate an iconic power-up item with the Mario Kart™ – Spiny Shell",
    images: [
      "images/spiny-shell-1.jpg",
      "images/spiny-shell-2.jpg",
      "images/spiny-shell-3.jpg"
    ],
    description: `Celebrate an iconic power-up item with the Mario Kart™ Spiny Shell (40787) building set. A fun gamer gift for adult Super Mario™ fans, this construction kit invites you to recreate the spiky appearance of the Spiny Shell, known by fans as the “blue shell.”

This LEGO® Super Mario™ collectible model makes a fun addition to any fan’s home or office decor. It is made for display, includes step-by-step building guidance, and creates a great desk or shelf piece.

Size: This 234-piece buildable model measures over 4 in. (10 cm) high, 4 in. (10 cm) wide and 4 in. (10 cm) deep.`,
    details: [
      "Theme: LEGO Super Mario",
      "Set Number: 40787",
      "Pieces: 234",
      "Display Size: 4 in (10 cm) cube",
      "Type: Collectible display model"
    ],
    reviews: [
      { user: "Drew", stars: 5, text: "Perfect desk display for Mario fans.", date: "Feb 2026" },
      { user: "Sky", stars: 4, text: "Quick build, looks awesome on a shelf.", date: "Feb 2026" }
    ]
  },

  {
    id: 9,
    name: "LEGO® Himeji Castle – LEGO Architecture (21060)",
    theme: "Architecture",
    availability: "25+ Available",
    price: 159.99, // placeholder
    short: "Celebrate the longevity and majestic beauty of Japan’s largest castle with this build-and-display set.",
    images: [
      "images/himeji-1.jpg",
      "images/himeji-2.jpg",
      "images/himeji-3.jpg"
    ],
    description: `Celebrate the longevity and majestic beauty of one of Japan’s most revered buildings with this LEGO® Architecture Himeji Castle display model (21060). Recreate authentic details such as turrets, walkways and asymmetric walls, then lift off the top of the main building to view a simplified interior layout.

The model includes 3 buildable cherry trees to show the gardens in springtime bloom, and it’s designed for an immersive, relaxing building experience.

Size: This 2,125-piece model measures over 7.5 in. (19 cm) high, 12.5 in. (32 cm) wide and 10.5 in. (27 cm) deep.`,
    details: [
      "Theme: LEGO Architecture",
      "Set Number: 21060",
      "Pieces: 2,125",
      "Display Size: 7.5 in (19 cm) high",
      "Includes: 3 cherry trees"
    ],
    reviews: [
      { user: "Kai", stars: 5, text: "Beautiful build—love the cherry blossoms.", date: "Feb 2026" },
      { user: "Noah", stars: 4, text: "Great architecture set, looks amazing displayed.", date: "Feb 2026" }
    ]
  },

  {
    id: 10,
    name: "LEGO® The Dark Falcon – LEGO Star Wars (75389)",
    theme: "Star Wars",
    availability: "25+ Available",
    price: 169.99, // placeholder
    short: "Build the Dark Falcon, as seen in the LEGO® Star Wars: Rebuild the Galaxy™ Disney+ special, and turn the galaxy upside down.",
    images: [
      "images/dark-falcon-1.jpg",
      "images/dark-falcon-2.jpg",
      "images/dark-falcon-3.jpg"
    ],
    description: `Turn the LEGO® Star Wars™ universe upside down with The Dark Falcon (75389), a dark version of the Millennium Falcon as seen in the Rebuild the Galaxy Disney+ special.

Flip-up panels provide easy access to the detailed interior, including Darth Jar Jar’s throne, command center, hyperdrive, entertainment area and a jail cell. Spring-loaded shooters, rotating cannons and a removable gunner post add to the action.

This 1,579-piece set measures over 5 in. (12 cm) high, 17 in. (43 cm) long and 12.5 in. (32 cm) wide.`,
    details: [
      "Theme: Star Wars",
      "Set Number: 75389",
      "Pieces: 1,579",
      "Includes: 6 minifigures",
      "Features: Flip-up panels, spring-loaded shooters"
    ],
    reviews: [
      { user: "Logan", stars: 5, text: "The inside details are wild. Super fun set.", date: "Feb 2026" },
      { user: "Harper", stars: 4, text: "Great build and looks awesome on display.", date: "Feb 2026" }
    ]
  },

  {
    id: 11,
    name: "Animals Series 28 – LEGO® Minifigures (71051)",
    theme: "Minifigures",
    availability: "100+ Available",
    price: 4.99,
    short: "LEGO® Minifigures Animal Series 28 characters come in a mystery box with at least 1 accessory.",
    images: [
      "images/71051-animals-series-28.jpg"
    ],
    description: `Girls and boys ages 5 and up can play out fun stories with 1 of 12 collectible figures from the LEGO® Minifigures Animal Series 28 (71051). There is 1 surprise LEGO minifigure in each box and a total of 12 characters to collect, each with at least 1 accessory.

The series includes costumes like parrot, lion, frog, crocodile, Dalmatian, goldfish, bunny, peacock, cat, koala, dolphin and monkey. These can be added to an existing collection, displayed, or used for storytelling.`,
    details: [
      "Theme: Minifigures",
      "Set Number: 71051",
      "Type: Mystery box collectible",
      "Age: 5+",
      "Includes: 1 minifigure + at least 1 accessory"
    ],
    reviews: [
      { user: "Avery", stars: 5, text: "The animal costumes are hilarious — great little desk display.", date: "Jan 2026" },
      { user: "Devin", stars: 4, text: "Fun surprise and solid accessory prints. Wish I could pick the exact one.", date: "Jan 2026" }
    ]
  },

  {
    id: 12,
    name: "Stargazing with Celeste – Animal Crossing™ (77053)",
    theme: "Animal Crossing",
    availability: "25+ Available",
    price: 9.99,
    short: "Astronomy toy for creative kids.",
    images: [
      "images/77053-celeste.jpg"
    ],
    description: `Looking for a treat for a kid who loves LEGO® Animal Crossing™? Stargazing with Celeste (77053) is a fun anytime gift for ages 6+ with a telescope and a Celeste minifigure.

Kids build an outdoor scene inspired by the game series. They can role-play as Celeste consults her astronomy book, wish upon a shooting star, and collect star fragments to decorate the crescent-moon chair.

This set includes 78 pieces.`,
    details: [
      "Theme: Animal Crossing",
      "Set Number: 77053",
      "Pieces: 78",
      "Age: 6+",
      "Includes: Celeste minifigure, telescope, star fragments"
    ],
    reviews: [
      { user: "Lena", stars: 5, text: "Perfect little set — Celeste looks awesome and it’s a quick build.", date: "Jan 2026" },
      { user: "Mateo", stars: 4, text: "Cute display. Love the moon chair and the star pieces.", date: "Jan 2026" }
    ]
  },

  {
    id: 13,
    name: "Game Boy™ – LEGO® Super Mario™ (72046)",
    theme: "Super Mario",
    availability: "25+ Available",
    price: 59.99,
    short: "Relive the thrill you felt when you first played on the Game Boy™ with this LEGO® model kit for Nintendo® video game lovers.",
    images: [
      "images/72046-gameboy.jpg"
    ],
    description: `Recapture the excitement you felt when you first played on the Game Boy™ with this LEGO® model building kit (72046). This collectible set features a near 1:1 scale brick-built replica of the original Game Boy handheld system.

Press the Control Pad, A and B Buttons, and SELECT and START like on the real system. Customize your display with interchangeable Game Paks and lenticular screens, then place your build on the display stand to complete a nostalgic setup.

Note: This is a display model with no electronic functions.`,
    details: [
      "Theme: Super Mario",
      "Set Number: 72046",
      "Pieces: 421",
      "Type: Display model",
      "Scale: Near 1:1",
      "Note: No lights/sound/digital functions"
    ],
    reviews: [
      { user: "Jordan", stars: 5, text: "Instant nostalgia. The buttons and screen effect look amazing in person.", date: "Jan 2026" },
      { user: "Riley", stars: 5, text: "Super clean display piece — perfect for a desk setup.", date: "Jan 2026" },
      { user: "Noah", stars: 4, text: "Great build. I’d buy a second one just to display the other Game Pak.", date: "Jan 2026" }
    ]
  },

  {
    id: 14,
    name: "The Mandalorian & Grogu’s Speeder Bike™ (75436)",
    theme: "Star Wars",
    availability: "50+ Available",
    price: 14.99,
    short: "Inspire kids to play out Star Wars: The Mandalorian™ Season 1 missions and create their own exciting stories with this cool speeder bike.",
    images: [
      "images/75436-speeder-bike.jpg"
    ],
    description: `Replay thrilling Star Wars: The Mandalorian™ Season 1 scenes on Tatooine with this cool toy building set. It features a LEGO® brick version of The Mandalorian & Grogu’s Speeder Bike (75436).

Place The Mandalorian minifigure in the driver’s seat with the Grogu figure alongside in the attached satchel. Clip The Mandalorian’s blaster rifle to the back of the vehicle so the action starts fast.

This set includes 58 pieces.`,
    details: [
      "Theme: Star Wars",
      "Set Number: 75436",
      "Pieces: 58",
      "Age: 6+",
      "Includes: The Mandalorian minifigure, Grogu figure, speeder bike"
    ],
    reviews: [
      { user: "Kai", stars: 5, text: "Quick build and looks great next to my other Mandalorian sets.", date: "Jan 2026" },
      { user: "Sophia", stars: 4, text: "Fun little set — Grogu in the satchel is the best part.", date: "Jan 2026" }
    ]
  }
];




