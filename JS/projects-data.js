// Project metadata only. Rendering and filters live in project.js.
// Category IDs: full-stack, frontend, ui-ux, analytics. An empty array means coding practice / learning.
// Verification notes record source limitations; see PROJECTS_REVIEW.md.
const projectsData = [
  {
    "id": "agrainofsalt",
    "name": "A Grain of Salt",
    "description": "A MERN app in progress with signup, login, and password recovery. Challenge dashboards and community pages are being built.",
    "categories": [
      "full-stack",
      "frontend",
      "ui-ux"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs"
    ],
    "liveUrl": "https://agrainofsalt.onrender.com/",
    "repositoryUrl": "https://github.com/KinzaRehman/AGrainOfSalt",
    "image": "images/projects/agrainofsalt.png",
    "imageAlt": "A Grain of Salt landing page introducing the challenge accountability app",
    "featuredRank": 1,
    "verification": {
      "status": "source-reviewed",
      "ref": "003396360e318f8c67a645c7ae2f1d634dcedb94",
      "sources": [
        "README.md",
        "client/README.md",
        "client/package.json",
        "client/src/App.jsx",
        "client/src/pages/Challenges.jsx",
        "client/src/pages/Dashboard.jsx",
        "server/index.js",
        "server/models/User.js",
        "server/package.json"
      ],
      "notes": [
        "Challenge tracking, live stats, leaderboard, and inbox are currently page outlines; do not describe them as complete."
      ]
    }
  },
  {
    "id": "applicationtracker",
    "name": "ApplicationTracker",
    "description": "Keep job applications, statuses, links, and notes in a personal account, with editing and deletion backed by MongoDB.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "REST APIs",
      "Mongoose"
    ],
    "liveUrl": "https://applicationtracker-6x2d.onrender.com/",
    "repositoryUrl": "https://github.com/KinzaRehman/ApplicationTracker",
    "image": "images/projects/applicationtracker.png",
    "imageAlt": "ApplicationTracker dashboard showing application statuses and saved job applications",
    "featuredRank": 2,
    "verification": {
      "status": "source-reviewed",
      "ref": "4a353bdd989735103d9065494237630d4f661b90",
      "sources": [
        "README.md",
        "app/models/user.js",
        "app/routes.js",
        "package.json",
        "server.js"
      ],
      "notes": []
    }
  },
  {
    "id": "mern_app",
    "name": "My Pinboard",
    "description": "Save image links as pins, organize them with categories, colors, and tags, and edit your personal board.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "REST APIs",
      "Mongoose"
    ],
    "liveUrl": "https://mern-app-lp0v.onrender.com/",
    "repositoryUrl": "https://github.com/KinzaRehman/MERN_App",
    "image": "images/projects/mern_app.png",
    "imageAlt": "My Pinboard landing page with image inspiration and account links",
    "featuredRank": 3,
    "verification": {
      "status": "source-reviewed",
      "ref": "5699bfb7daf3adcce505365153439a0b4e2c53b6",
      "sources": [
        "README.md",
        "app/models/user.js",
        "app/routes.js",
        "package.json",
        "server.js"
      ],
      "notes": [
        "Requested as MERN Pinboard, but this repository uses EJS and has no React. Display name follows its README."
      ]
    }
  },
  {
    "id": "anime-atlas-adventure",
    "name": "AnimeAtlas",
    "description": "Explore an anime-inspired town, complete character quests, and collect friends through a React-based game experience.",
    "categories": [
      "full-stack",
      "frontend",
      "ui-ux"
    ],
    "technologies": [
      "React",
      "TypeScript",
      "CSS",
      "SQL"
    ],
    "liveUrl": "https://anime-atlas-adventure.lovable.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/anime-atlas-adventure",
    "image": "images/projects/anime-atlas-adventure.png",
    "imageAlt": "AnimeAtlas welcome screen with its illustrated town and Start Exploring button",
    "featuredRank": 4,
    "verification": {
      "status": "source-reviewed",
      "ref": "ebb642c86b055ec3bcf3b53a9036df2a16c33f04",
      "sources": [
        "README.md",
        "drizzle/schema.ts",
        "package.json",
        "src/routes/README.md",
        "src/routes/explore.tsx",
        "src/routes/index.tsx",
        "src/server.ts"
      ],
      "notes": [
        "SQL migrations and a PostgreSQL schema are present. Backend uses TanStack Start and Supabase, not Express or MongoDB."
      ]
    }
  },
  {
    "id": "professordolittle",
    "name": "Professor Do Little",
    "description": "Create, edit, and delete professor reviews with university names and star ratings, stored in MongoDB.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "REST APIs"
    ],
    "liveUrl": "https://professordolittle.onrender.com/",
    "repositoryUrl": "https://github.com/KinzaRehman/Professordolittle",
    "image": "images/projects/professordolittle.png",
    "imageAlt": "Professor Do Little review form and professor rating cards",
    "featuredRank": 5,
    "verification": {
      "status": "source-reviewed",
      "ref": "be1c9fde8ea1bf99b8ee90e8e037dd2fdee01c5b",
      "sources": [
        "README.md",
        "package.json",
        "server.js"
      ],
      "notes": [
        "Mongoose is installed but the inspected server uses the native MongoDB driver; no Mongoose badge."
      ]
    }
  },
  {
    "id": "crud",
    "name": "Star Wars Quotes CRUD",
    "description": "Save Star Wars quotes, replace Yoda quotes with Darth Vader quotes, and delete quotes through an Express server.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "REST APIs"
    ],
    "liveUrl": "https://crud-star-wars-quotes.onrender.com/",
    "repositoryUrl": "https://github.com/KinzaRehman/CRUD",
    "image": "images/projects/crud.png",
    "imageAlt": "Star Wars Quotes interface for adding and managing character quotes",
    "featuredRank": 6,
    "verification": {
      "status": "source-reviewed",
      "ref": "c08706fa4f77c5114682907f363e457fe585bd08",
      "sources": [
        "README.md",
        "package.json",
        "server.js"
      ],
      "notes": [
        "Mongoose is installed but the server uses the native MongoDB driver; no Mongoose badge."
      ]
    }
  },
  {
    "id": "binary-upload-boom",
    "name": "binary-upload-boom",
    "description": "Upload images with captions, browse a shared feed, and like or delete posts using Cloudinary and MongoDB.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS"
    ],
    "liveUrl": "https://binary-upload-boom-30lb.onrender.com/",
    "repositoryUrl": "https://github.com/KinzaRehman/binary-upload-boom",
    "image": "images/projects/binary-upload-boom.png",
    "imageAlt": "Screenshot of binary-upload-boom",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "a91e8e947bb659518e26844b66a00a38c104c512",
      "sources": [
        "README.md",
        "controllers/posts.js",
        "package.json",
        "server.js"
      ],
      "notes": []
    }
  },
  {
    "id": "savage-auth",
    "name": "savage-auth",
    "description": "Create an account and use a MongoDB-backed message board with posting, reactions, and message deletion.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "REST APIs",
      "Mongoose"
    ],
    "liveUrl": "https://savage-auth-kxhs.onrender.com/",
    "repositoryUrl": "https://github.com/KinzaRehman/savage-auth",
    "image": "images/projects/savage-auth.png",
    "imageAlt": "Screenshot of savage-auth",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "aeb8e1b35c42c569899d0bdc6063e6bad7521573",
      "sources": [
        "README.md",
        "app/routes.js",
        "package.json",
        "server.js"
      ],
      "notes": []
    }
  },
  {
    "id": "savage-demo",
    "name": "savage-demo",
    "description": "Post messages, add thumbs-up or thumbs-down reactions, and delete entries on a MongoDB-backed message board.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "REST APIs"
    ],
    "liveUrl": "https://savage-demo-39i4.onrender.com/",
    "repositoryUrl": "https://github.com/KinzaRehman/savage-demo",
    "image": "images/projects/savage-demo.png",
    "imageAlt": "Screenshot of savage-demo",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "e9bb18b5548d8896e3738177762885a0d7bf06ee",
      "sources": [
        "README.md",
        "package.json",
        "server.js"
      ],
      "notes": []
    }
  },
  {
    "id": "node-palindrome",
    "name": "node-palindrome",
    "description": "Send a word or phrase to a Node.js server to check whether it reads the same backward.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/node-palindrome/",
    "repositoryUrl": "https://github.com/KinzaRehman/node-palindrome",
    "image": "images/projects/node-palindrome.png",
    "imageAlt": "Screenshot of node-palindrome",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "aa4dabc09fd690aeef914cb6724092c664e17a61",
      "sources": [
        "README.md",
        "js/main.js",
        "server.js"
      ],
      "notes": [
        "Supplied GitHub Pages URL serves static files only. The /api endpoint requires running server.js; verify or replace the demo hosting."
      ]
    }
  },
  {
    "id": "node-coin-flip",
    "name": "node-coin-flip",
    "description": "Send a coin-flip choice to a Node.js HTTP server and display the returned result.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/node-coin-flip/",
    "repositoryUrl": "https://github.com/KinzaRehman/node-coin-flip",
    "image": "images/projects/node-coin-flip.png",
    "imageAlt": "Screenshot of node-coin-flip",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "36089f64eea6ec81c62a19ee0a5c909fa761f4c7",
      "sources": [
        "README.md",
        "js/main.js",
        "server.js"
      ],
      "notes": [
        "Supplied GitHub Pages URL serves static files only. The /api endpoint requires running server.js; verify or replace the demo hosting."
      ]
    }
  },
  {
    "id": "wu-tang-generator",
    "name": "wu-tang-generator",
    "description": "Turn form inputs into a binary string and request a generated name from a Node.js server.",
    "categories": [
      "full-stack"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/wu-tang-generator/",
    "repositoryUrl": "https://github.com/KinzaRehman/wu-tang-generator",
    "image": "images/projects/wu-tang-generator.png",
    "imageAlt": "Screenshot of wu-tang-generator",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "f28d1ff812b5e6c5552540d64c991195784fad7f",
      "sources": [
        "README.md",
        "js/main.js",
        "server.js"
      ],
      "notes": [
        "Supplied GitHub Pages URL serves static files only. The /api endpoint requires running server.js; verify or replace the demo hosting."
      ]
    }
  },
  {
    "id": "ktodo-list",
    "name": "Strawberry Matcha To-Do List",
    "description": "Add, edit, complete, and delete tasks with live completion counters in a strawberry-and-matcha themed interface.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://kinzarehman.github.io/Ktodo-list/",
    "repositoryUrl": "https://github.com/KinzaRehman/Ktodo-list",
    "image": "images/todo.png",
    "imageAlt": "Screenshot of Strawberry Matcha To-Do List",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "1483ad5e9d3f8b292b6b6d78282342f51ee5f877",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": []
    }
  },
  {
    "id": "tic-tac-toe",
    "name": "tic-tac-toe",
    "description": "A two-player game built with JavaScript classes, win and tie detection, score tracking, and a board reset.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://kinzarehman.github.io/tic-tac-toe/",
    "repositoryUrl": "https://github.com/KinzaRehman/tic-tac-toe",
    "image": "images/projects/tic-tac-toe.png",
    "imageAlt": "Screenshot of tic-tac-toe",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "d8c71160ced4bb2290b2c3b2b829be964943da68",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": []
    }
  },
  {
    "id": "simple-api-construction",
    "name": "simple-api-construction",
    "description": "Search NYC construction records by borough and display a project’s owner, business, and work details.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/simple-api-construction/",
    "repositoryUrl": "https://github.com/KinzaRehman/simple-api-construction",
    "image": "images/projects/simple-api-construction.png",
    "imageAlt": "Screenshot of simple-api-construction",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "98826184512fa732eab58455299d9573455c7a31",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": [
        "Uses a SoQL query against NYC Open Data, not a local SQL database."
      ]
    }
  },
  {
    "id": "weather-api-bootcamp",
    "name": "weather-api-bootcamp",
    "description": "Look up current weather conditions and a condition icon using WeatherAPI.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/weather-api-bootcamp/",
    "repositoryUrl": "https://github.com/KinzaRehman/weather-api-bootcamp",
    "image": "images/projects/weather-api-bootcamp.png",
    "imageAlt": "Screenshot of weather-api-bootcamp",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "30dc75afb5feb6fd5755b0605f776ef53517b144",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": []
    }
  },
  {
    "id": "complex-api-med-spa",
    "name": "complex-api-med-spa",
    "description": "Search beauty product data and related makeup products using Open Beauty Facts and the Makeup API.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/complex-api-med-spa/",
    "repositoryUrl": "https://github.com/KinzaRehman/complex-api-med-spa",
    "image": "images/projects/complex-api-med-spa.png",
    "imageAlt": "Screenshot of complex-api-med-spa",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "6cac671685de96a76b27a508dda4c6bbe4ac2467",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": []
    }
  },
  {
    "id": "complex-api-veterinary-practice",
    "name": "complex-api-veterinary-practice",
    "description": "Combine animal records with FDA veterinary event data through chained API requests.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/complex-api-veterinary-practice/",
    "repositoryUrl": "https://github.com/KinzaRehman/complex-api-veterinary-practice",
    "image": "images/projects/complex-api-veterinary-practice.png",
    "imageAlt": "Screenshot of complex-api-veterinary-practice",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "899cdc6918e0a82015ef8f3e33793b17b2441b60",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": [
        "Keyword-sensitive external API results; confirm current service availability."
      ]
    }
  },
  {
    "id": "simple-api-restaurant",
    "name": "simple-api-restaurant",
    "description": "Look up fruit information from Fruityvice for a restaurant-oriented API exercise.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/simple-api-restaurant/",
    "repositoryUrl": "https://github.com/KinzaRehman/simple-api-restaurant",
    "image": "images/projects/simple-api-restaurant.png",
    "imageAlt": "Screenshot of simple-api-restaurant",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "a90b25cd983b3af2f9560b3a756df0208b618767",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": []
    }
  },
  {
    "id": "matching-card",
    "name": "matching-card",
    "description": "Match five pairs in a shuffled ten-card memory game with flip logic and win detection.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://kinzarehman.github.io/matching-card/",
    "repositoryUrl": "https://github.com/KinzaRehman/matching-card",
    "image": "images/projects/matching-card.png",
    "imageAlt": "Screenshot of matching-card",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "85678956dc79237404f96c854b5fab8fae2dc67e",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": []
    }
  },
  {
    "id": "complex-nasa-bootcamp",
    "name": "complex-nasa-bootcamp",
    "description": "An API exercise combining NASA facility locations with current weather at each location.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/complex-nasa-bootcamp/",
    "repositoryUrl": "https://github.com/KinzaRehman/complex-nasa-bootcamp",
    "image": "images/projects/complex-nasa-bootcamp.png",
    "imageAlt": "Screenshot of complex-nasa-bootcamp",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "33e6337520d03ecd834778dff4488a3dd6a47574",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": [
        "README documents a CORS proxy dependency; the current NASA request may need repair."
      ]
    }
  },
  {
    "id": "simple-nasa-api-bootcamp",
    "name": "simple-nasa-api-bootcamp",
    "description": "Choose a date to request NASA’s Astronomy Picture of the Day.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript",
      "REST APIs"
    ],
    "liveUrl": "https://kinzarehman.github.io/simple-nasa-api-bootcamp/",
    "repositoryUrl": "https://github.com/KinzaRehman/simple-nasa-api-bootcamp",
    "image": "images/projects/simple-nasa-api-bootcamp.png",
    "imageAlt": "Screenshot of simple-nasa-api-bootcamp",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "16334fe8d8e7012dcd31e5f1915c727cd82aee2d",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": []
    }
  },
  {
    "id": "todo-list",
    "name": "todo-list",
    "description": "A second repository of the strawberry-themed task list, with task editing, completion counters, and deletion.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://kinzarehman.github.io/todo-list/",
    "repositoryUrl": "https://github.com/KinzaRehman/todo-list",
    "image": "images/todo.png",
    "imageAlt": "Screenshot of todo-list",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "78212cfd308f176b21fd7baca14d1c424bd5599a",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": [
        "README points to Ktodo-list; confirm whether this should remain a separate entry."
      ]
    }
  },
  {
    "id": "slot-machine",
    "name": "Slot-Machine",
    "description": "Spin three fruit reels, choose a virtual bet, and track a balance with randomized outcomes.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://kinzarehman.github.io/Slot-Machine/",
    "repositoryUrl": "https://github.com/KinzaRehman/Slot-Machine",
    "image": "images/projects/slot-machine.png",
    "imageAlt": "Screenshot of Slot-Machine",
    "featuredRank": null,
    "verification": {
      "status": "source-reviewed",
      "ref": "bb87ebaf332e3905e5bd7be1d662db9cd0049ab0",
      "sources": [
        "README.md",
        "js/main.js"
      ],
      "notes": []
    },
    "additionalLinks": [
      {
        "label": "Original bootcamp source",
        "url": "https://github.com/KinzaRehman/RS/tree/main/Week%205/Assignments/Slot%20Machine"
      }
    ]
  },
  {
    "id": "flowers-in-season",
    "name": "✿ Flowers in Season",
    "description": "A colorful seasonal app that helps users discover which flowers to plant throughout the year. It includes a motion toggle that stops animations for accessibility.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://rs-5f4f.vercel.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week%204/Week4-assignments/Date%20%26%20guess",
    "image": "images/projects/flowers-in-season.png",
    "imageAlt": "✿ Flowers in Season project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://rs-5f4f.vercel.app/",
        "https://rs-5f4f.vercel.app/css/normalize.css",
        "https://rs-5f4f.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "the-art-of-kanza",
    "name": "The Art of Kanza",
    "description": "A small-business website rooted in Pakistani heritage, culture, creativity, and community, sharing art and services with a wider audience.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://client-seven-chi-31.vercel.app/index.html",
    "repositoryUrl": "https://github.com/KinzaRehman/Client/tree/main/home-based-businesses/TheArtofKanza",
    "image": "images/theartofkanza.png",
    "imageAlt": "The Art of Kanza project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://client-seven-chi-31.vercel.app/index.html",
        "https://client-seven-chi-31.vercel.app/css/style.css",
        "https://client-seven-chi-31.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "line-up",
    "name": "Line Up",
    "description": "A responsive landing page focused on layout, typography, responsive behavior, and front-end implementation.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://rs-r3z3.vercel.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-3-assignments/Line_up",
    "image": "images/lineup.png",
    "imageAlt": "Line Up project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://rs-r3z3.vercel.app/",
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
        "https://rs-r3z3.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "boston-barber",
    "name": "Boston Barber",
    "description": "A responsive barber shop website featuring service information, pricing, navigation, and customer calls to action.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS"
    ],
    "liveUrl": "https://boston-barber.netlify.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-2-assignments/boston-barber_with_css",
    "image": "images/Boston_barber.png",
    "imageAlt": "Boston Barber project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://boston-barber.netlify.app/",
        "https://boston-barber.netlify.app/css/style.css"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "maine-lobster",
    "name": "Maine Lobster",
    "description": "A responsive seafood business website built to practice structured layouts, responsive design, and front-end development.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS"
    ],
    "liveUrl": "https://maine-lobster.netlify.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-2-assignments/maine-lobster",
    "image": "images/projects/maine-lobster.png",
    "imageAlt": "Maine Lobster project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://maine-lobster.netlify.app/",
        "https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Titan+One&display=swap"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "maine-property",
    "name": "Maine Property",
    "description": "A responsive real estate website concept showcasing property content through a clean front-end layout.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://rs-three-green.vercel.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-3-assignments/maine-property",
    "image": "images/Maine_property.png",
    "imageAlt": "Maine Property project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://rs-three-green.vercel.app/",
        "https://rs-three-green.vercel.app/css/style.css",
        "https://rs-three-green.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "nyc-bagels",
    "name": "NYC Bagels",
    "description": "A responsive New York bagel shop website built with semantic HTML, CSS layouts, and JavaScript.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://rs-tei5.vercel.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-2-assignments/nyc-bagles",
    "image": "images/NYC_bagles.png",
    "imageAlt": "NYC Bagels project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://rs-tei5.vercel.app/",
        "https://rs-tei5.vercel.app/css/style.css",
        "https://rs-tei5.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "philly-restaurant",
    "name": "Philly Restaurant",
    "description": "A responsive restaurant website focused on navigation, content hierarchy, mobile layouts, and front-end interaction.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://rs-al7q.vercel.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-2-assignments/philly-resturant",
    "image": "images/Philly_resturant.png",
    "imageAlt": "Philly Restaurant project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://rs-al7q.vercel.app/",
        "https://rs-al7q.vercel.app/css/style.css",
        "https://rs-al7q.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "philly-water-ice",
    "name": "Philly Water Ice",
    "description": "A responsive small-business website built to practice front-end layouts, styling, and interactive functionality.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://rs-too5.vercel.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-2-assignments/philly-water",
    "image": "images/projects/philly-water-ice.png",
    "imageAlt": "Philly Water Ice project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://rs-too5.vercel.app/",
        "https://fonts.googleapis.com/css2?family=Titan+One&display=swap",
        "https://rs-too5.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "jwli",
    "name": "JWLI",
    "description": "A responsive front-end recreation focused on translating a structured design into semantic HTML and responsive CSS.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://rs-7xt8.vercel.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-3-assignments/jwli",
    "image": "images/projects/jwli.png",
    "imageAlt": "JWLI project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://rs-7xt8.vercel.app/",
        "https://rs-7xt8.vercel.app/css/style.css",
        "https://rs-7xt8.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  {
    "id": "level-ground-mixed-martial-arts",
    "name": "Level Ground Mixed Martial Arts",
    "description": "A responsive martial arts organization website built with semantic structure and adaptive front-end layouts.",
    "categories": [
      "frontend"
    ],
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "liveUrl": "https://rs-zlt2.vercel.app/",
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week-3-assignments/level-ground",
    "image": "images/Level_ground_mixed_martial_arts.png",
    "imageAlt": "Level Ground Mixed Martial Arts project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "deployed-source-reviewed",
      "sources": [
        "https://rs-zlt2.vercel.app/",
        "https://rs-zlt2.vercel.app/css/style.css",
        "https://rs-zlt2.vercel.app/js/main.js"
      ],
      "notes": [
        "GitHub repository inaccessible (404). Technology badges verified from deployed source; original portfolio description retained for review."
      ]
    }
  },
  /*{
    "id": "rock-paper-scissors",
    "name": "Rock Paper Scissors",
    "description": "An interactive browser game using JavaScript to handle player choices, game logic, results, and score tracking.",
    "categories": [
      "frontend"
    ],
    "technologies": [],
    "liveUrl": null,
    "repositoryUrl": "https://github.com/KinzaRehman/RS/tree/main/Week%205/Class/rock_paper_scissors",
    "image": null,
    "imageAlt": "Rock Paper Scissors project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "needs-review",
      "sources": [
        "Original projects.html"
      ],
      "notes": [
        "Preserved from existing portfolio. Repository was inaccessible (404); description retained, technology claims withheld pending review."
      ]
    }
  }, 
  {
    "id": "75-days-of-improvement",
    "name": "75 Days of Improvement",
    "description": "A personal software engineering and AI learning challenge documenting consistent technical growth and project work.",
    "categories": [],
    "technologies": [],
    "liveUrl": null,
    "repositoryUrl": "https://github.com/KinzaRehman/75_days_improvement",
    "image": null,
    "imageAlt": "75 Days of Improvement project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "needs-review",
      "sources": [
        "Original projects.html"
      ],
      "notes": [
        "Preserved from existing portfolio. Repository was inaccessible (404); description retained, technology claims withheld pending review."
      ]
    }
  },*/
  {
    "id": "marketing-audience-analytics",
    "name": "Marketing Audience Analytics",
    "description": "An interactive Tableau dashboard exploring marketing audience data through visual analysis and business-focused insights.",
    "categories": [
      "analytics"
    ],
    "technologies": [
      "Tableau"
    ],
    "liveUrl": "https://public.tableau.com/app/profile/kinza.rehman/viz/Audienceanalysis_17165614954470/Dashboard1",
    "repositoryUrl": null,
    "image": "images/Marketing_audience_analytics.png",
    "imageAlt": "Marketing Audience Analytics project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "needs-review",
      "sources": [
        "Original projects.html"
      ],
      "notes": [
        "Preserved from existing portfolio. No repository available to verify dashboard details."
      ]
    }
  },
  {
    "id": "san-francisco-crime-analysis",
    "previewUrl": "https://public.tableau.com/views/SanFrancisco2019-2023/Dashboard1?:showVizHome=no",
    "name": "San Francisco Crime Analysis",
    "description": "A Tableau visualization project analyzing San Francisco crime data from 2019 through 2023.",
    "categories": [
      "analytics"
    ],
    "technologies": [
      "Tableau"
    ],
    "liveUrl": "https://public.tableau.com/app/profile/kinza.rehman/viz/SanFrancisco2019-2023/Dashboard1",
    "repositoryUrl": null,
    "image": null,
    "imageAlt": "San Francisco Crime Analysis project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "needs-review",
      "sources": [
        "Original projects.html"
      ],
      "notes": [
        "Preserved from existing portfolio. No repository available to verify dashboard details."
      ]
    }
  },
  {
    "id": "cyclistic",
    "name": "Cyclistic",
    "description": "A Tableau analytics project exploring Cyclistic data through interactive visualizations and comparative insights.",
    "categories": [
      "analytics"
    ],
    "technologies": [
      "Tableau"
    ],
    "liveUrl": "https://public.tableau.com/app/profile/kinza.rehman/viz/Cyclistic_17152820904700/Dashboard1",
    "repositoryUrl": null,
    "image": "images/Cyclistic.png",
    "imageAlt": "Cyclistic project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "needs-review",
      "sources": [
        "Original projects.html"
      ],
      "notes": [
        "Preserved from existing portfolio. No repository available to verify dashboard details."
      ]
    }
  },
  {
    "id": "marketing-creative-analytics",
    "name": "Marketing Creative Analytics",
    "description": "An interactive Tableau dashboard analyzing marketing creative performance and presenting visual insights across campaign data.",
    "categories": [
      "analytics"
    ],
    "technologies": [
      "Tableau"
    ],
    "liveUrl": "https://public.tableau.com/app/profile/kinza.rehman/viz/creativeanalysis/Dashboard3",
    "repositoryUrl": null,
    "image": "images/Marketing_creatice_analytics.png",
    "imageAlt": "Marketing Creative Analytics project screenshot",
    "featuredRank": null,
    "verification": {
      "status": "needs-review",
      "sources": [
        "Original projects.html"
      ],
      "notes": [
        "Preserved from existing portfolio. No repository available to verify dashboard details."
      ]
    }
  }
];
