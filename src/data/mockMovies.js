// Centralized Mock Data for VYORA — Find Your Vibe
// Structured for seamless FastAPI backend migration

export const MOODS = [
  {
    id: "mind-bending",
    title: "MIND-BENDING",
    description: "I want to question reality.",
    icon: "Brain",
    accent: "#C9572C", // Burnt Orange
    tagline: "Break Your Mind"
  },
  {
    id: "feel-something",
    title: "FEEL SOMETHING",
    description: "I want an emotional story.",
    icon: "Heart",
    accent: "#632C32", // Deep Wine
    tagline: "Profound Emotion"
  },
  {
    id: "make-me-laugh",
    title: "MAKE ME LAUGH",
    description: "I need something stupidly fun.",
    icon: "Smile",
    accent: "#D7A84B", // Muted Gold
    tagline: "Instant Dopamine"
  },
  {
    id: "pure-adrenaline",
    title: "PURE ADRENALINE",
    description: "Give me chaos.",
    icon: "Flame",
    accent: "#E9896A", // Soft Coral
    tagline: "Heart Rate 140 BPM"
  },
  {
    id: "solve-a-mystery",
    title: "SOLVE A MYSTERY",
    description: "I want to figure something out.",
    icon: "Search",
    accent: "#632C32",
    tagline: "Trust No One"
  },
  {
    id: "scare-me",
    title: "SCARE ME",
    description: "I want to be uncomfortable.",
    icon: "Ghost",
    accent: "#C9572C",
    tagline: "Unsettling Atmospheric Horror"
  },
  {
    id: "something-comforting",
    title: "SOMETHING COMFORTING",
    description: "I just want a warm story.",
    icon: "Coffee",
    accent: "#D7A84B",
    tagline: "Warm Cozy Visuals"
  },
  {
    id: "escape-reality",
    title: "ESCAPE REALITY",
    description: "Take me somewhere impossible.",
    icon: "Sparkles",
    accent: "#E9896A",
    tagline: "Immersive World-Building"
  }
];

export const SUB_VIBES = {
  "Horror": ["Psychological", "Supernatural", "Slow Burn", "Creature"],
  "Sci-Fi": ["Space", "Time Travel", "AI", "Dystopian"],
  "Comedy": ["Rom-Com", "Dark Comedy", "Absurd", "Feel Good"],
  "Romance": ["Slow Burn", "Melodrama", "Quirky", "Bittersweet"],
  "Thriller": ["Neo-Noir", "Crime", "Psychological", "Action-Packed"],
  "Drama": ["Character Study", "Historical", "Family", "Coming-of-Age"],
  "Mystery": ["Whodunit", "Gothic", "Tech Mystery", "Noir"],
  "Action": ["Martial Arts", "Sci-Fi Action", "Survival", "Heist"],
  "Animation": ["Multiverse", "Studio Ghibli Aesthetic", "Experimental", "Fantasy"]
};

export const MOVIES = [
  {
    id: "interstellar-2014",
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    runtime: "169 min",
    rating: 8.7,
    vibeMatchScore: 94,
    genres: ["Sci-Fi", "Adventure", "Drama"],
    moods: ["mind-bending", "feel-something", "escape-reality"],
    subVibe: "Space",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=1200",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    description: "When Earth faces catastrophic agricultural collapse, a team of explorers undertakes humanity's most crucial mission: traveling beyond our galaxy to find a new home amongst the stars.",
    vyorasTake: "Your recent choices suggest you enjoy stories that mix mystery, science fiction and deep emotional father-daughter bonds under cosmic stakes.",
    whereToWatch: [
      { name: "Paramount+", type: "Subscription", quality: "4K HDR" },
      { name: "Prime Video", type: "Rent / Buy", quality: "4K" },
      { name: "Apple TV", type: "Rent / Buy", quality: "4K" }
    ],
    dna: {
      metrics: [
        { label: "Sci-Fi", value: 94 },
        { label: "Adventure", value: 85 },
        { label: "Drama", value: 78 },
        { label: "Mystery", value: 63 }
      ],
      atmosphere: ["Epic", "Emotional", "Thought-provoking", "Cosmic", "Hopeful", "Haunting Score"]
    },
    recommendationReason: {
      similarityScore: 94,
      vectorMatch: "High match with cosmic exploratory narratives and emotional family core.",
      anchorMovies: ["Arrival", "Dune", "Gravity", "2001: A Space Odyssey"],
      reasons: [
        "Similar to movies you enjoyed recently",
        "Matches your current mind-bending vibe selection",
        "Strong mystery and non-linear temporal elements",
        "Popular with users who share your cosmic taste vector"
      ]
    },
    constellation: [
      { id: "arrival-2016", title: "Arrival", similarity: 0.91, category: "Sci-Fi / Lingual" },
      { id: "dune-2021", title: "Dune", similarity: 0.88, category: "Sci-Fi / Epic" },
      { id: "gravity-2013", title: "Gravity", similarity: 0.82, category: "Sci-Fi / Survival" },
      { id: "blade-runner-2049", title: "Blade Runner 2049", similarity: 0.85, category: "Sci-Fi / Atmosphere" },
      { id: "the-prestige-2006", title: "The Prestige", similarity: 0.76, category: "Mystery / Nolan" }
    ]
  },
  {
    id: "arrival-2016",
    title: "Arrival",
    year: 2016,
    director: "Denis Villeneuve",
    runtime: "116 min",
    rating: 7.9,
    vibeMatchScore: 91,
    genres: ["Sci-Fi", "Drama", "Mystery"],
    moods: ["mind-bending", "feel-something", "solve-a-mystery"],
    subVibe: "Time Travel",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200",
    tagline: "Why are they here?",
    description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft touch down across the globe, uncovering a revelation that transcends linear time.",
    vyorasTake: "VYORA recommends this for its profound emotional resonance disguised inside hard alien linguistics.",
    whereToWatch: [
      { name: "Netflix", type: "Subscription", quality: "4K HDR" },
      { name: "Prime Video", type: "Rent", quality: "HD" }
    ],
    dna: {
      metrics: [
        { label: "Sci-Fi", value: 92 },
        { label: "Linguistics", value: 95 },
        { label: "Drama", value: 88 },
        { label: "Mystery", value: 86 }
      ],
      atmosphere: ["Cerebral", "Poignant", "Atmospheric", "Subtle", "Mind-bending"]
    },
    recommendationReason: {
      similarityScore: 91,
      vectorMatch: "Unmatched intellectual sci-fi with profound emotional payoff.",
      anchorMovies: ["Interstellar", "Contact", "Ex Machina"],
      reasons: [
        "Matches your search for intellectual sci-fi",
        "95% non-linear time narrative alignment",
        "Ethereal sound design and contemplative pacing",
        "Liked by 4 people in your Vibe Circle"
      ]
    },
    constellation: [
      { id: "interstellar-2014", title: "Interstellar", similarity: 0.91, category: "Sci-Fi" },
      { id: "blade-runner-2049", title: "Blade Runner 2049", similarity: 0.89, category: "Villeneuve Sci-Fi" },
      { id: "dune-2021", title: "Dune", similarity: 0.84, category: "Sci-Fi" }
    ]
  },
  {
    id: "dune-2021",
    title: "Dune: Part One",
    year: 2021,
    director: "Denis Villeneuve",
    runtime: "155 min",
    rating: 8.0,
    vibeMatchScore: 89,
    genres: ["Sci-Fi", "Adventure", "Action"],
    moods: ["escape-reality", "pure-adrenaline", "mind-bending"],
    subVibe: "Dystopian",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200",
    tagline: "Beyond fear, destiny awaits.",
    description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
    vyorasTake: "A monumental cinematic spectacle with desert gothic atmosphere and Hans Zimmer's hypnotic score.",
    whereToWatch: [
      { name: "Max", type: "Subscription", quality: "4K Dolby Vision" },
      { name: "YouTube", type: "Rent", quality: "4K" }
    ],
    dna: {
      metrics: [
        { label: "Sci-Fi", value: 96 },
        { label: "World Building", value: 98 },
        { label: "Action", value: 75 },
        { label: "Intrigue", value: 84 }
      ],
      atmosphere: ["Monumental", "Hypnotic", "Desert Gothic", "Epic", "Tactile"]
    },
    recommendationReason: {
      similarityScore: 89,
      vectorMatch: "Masterclass in world-building, scale, and immersive cinematic design.",
      anchorMovies: ["Blade Runner 2049", "Interstellar", "Mad Max: Fury Road"],
      reasons: [
        "Visually staggering scale and soundscapes",
        "Matches high world-building preference",
        "Deep desert aesthetic and political intrigue"
      ]
    },
    constellation: [
      { id: "interstellar-2014", title: "Interstellar", similarity: 0.88, category: "Sci-Fi Epic" },
      { id: "blade-runner-2049", title: "Blade Runner 2049", similarity: 0.93, category: "Villeneuve Visuals" },
      { id: "arrival-2016", title: "Arrival", similarity: 0.84, category: "Sci-Fi" }
    ]
  },
  {
    id: "everything-everywhere-all-at-once",
    title: "Everything Everywhere All at Once",
    year: 2022,
    director: "Daniel Kwan, Daniel Scheinert",
    runtime: "139 min",
    rating: 8.8,
    vibeMatchScore: 96,
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    moods: ["pure-adrenaline", "mind-bending", "make-me-laugh", "feel-something"],
    subVibe: "Absurd",
    poster: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=800",
    backdrop: "https://images.unsplash.com/photo-1533158307587-828f0a76ef46?auto=format&fit=crop&q=80&w=1200",
    tagline: "The universe is far bigger than you think.",
    description: "A middle-aged Chinese immigrant is swept up into an insane adventure where she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    vyorasTake: "An explosion of pure chaos, absurd humor, martial arts, and heart-wrenching family reconciliation.",
    whereToWatch: [
      { name: "Prime Video", type: "Subscription", quality: "4K" },
      { name: "Apple TV", type: "Rent", quality: "4K" }
    ],
    dna: {
      metrics: [
        { label: "Multiverse Chaos", value: 99 },
        { label: "Comedy", value: 88 },
        { label: "Heart", value: 92 },
        { label: "Action", value: 90 }
      ],
      atmosphere: ["Kinetically Insane", "Existential", "Hilarious", "Deeply Moving", "Unfiltered Joy"]
    },
    recommendationReason: {
      similarityScore: 96,
      vectorMatch: "Top match for creative original storytelling, multiverse philosophy, and family resolution.",
      anchorMovies: ["Spider-Man: Into the Spider-Verse", "Eternal Sunshine"],
      reasons: [
        "99% genre-bending originality",
        "Blends absurdist comedy with deep emotional empathy",
        "Oscar-winning masterpiece"
      ]
    },
    constellation: [
      { id: "spider-verse-2018", title: "Spider-Man: Into the Spider-Verse", similarity: 0.90, category: "Multiverse / Style" }
    ]
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: 2017,
    director: "Denis Villeneuve",
    runtime: "164 min",
    rating: 8.0,
    vibeMatchScore: 92,
    genres: ["Sci-Fi", "Drama", "Mystery"],
    moods: ["mind-bending", "escape-reality", "solve-a-mystery"],
    subVibe: "AI",
    poster: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=800",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    tagline: "There's still a page left to be written.",
    description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
    vyorasTake: "Roger Deakins' landmark visual feast paired with reflective cyberpunk noir and artificial intelligence ethics.",
    whereToWatch: [
      { name: "Hulu", type: "Subscription", quality: "4K HDR" },
      { name: "Prime Video", type: "Rent", quality: "4K" }
    ],
    dna: {
      metrics: [
        { label: "Atmosphere", value: 99 },
        { label: "Sci-Fi Noir", value: 95 },
        { label: "Cinematography", value: 98 },
        { label: "Mystery", value: 85 }
      ],
      atmosphere: ["Cyberpunk", "Melancholic", "Breathtaking", "Neo-Noir", "Hypnotic"]
    },
    recommendationReason: {
      similarityScore: 92,
      vectorMatch: "Unrivaled visual aesthetic paired with deep philosophical cyberpunk noir.",
      anchorMovies: ["Dune", "Arrival", "The Matrix"],
      reasons: [
        "Unrivaled aesthetic composition & neon orange palettes",
        "Deep contemplation on consciousness and identity",
        "High match with your Denis Villeneuve preference"
      ]
    },
    constellation: [
      { id: "dune-2021", title: "Dune", similarity: 0.93, category: "Villeneuve Visuals" },
      { id: "arrival-2016", title: "Arrival", similarity: 0.89, category: "Sci-Fi" },
      { id: "interstellar-2014", title: "Interstellar", similarity: 0.85, category: "Sci-Fi Epic" }
    ]
  },
  {
    id: "grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    year: 2014,
    director: "Wes Anderson",
    runtime: "99 min",
    rating: 8.1,
    vibeMatchScore: 90,
    genres: ["Comedy", "Adventure", "Crime"],
    moods: ["something-comforting", "make-me-laugh", "escape-reality"],
    subVibe: "Feel Good",
    poster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    backdrop: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
    tagline: "A murder case. A stolen painting. A hotel concierge who knows everything.",
    description: "A writer encounters the owner of a high-class European hotel who recounts his youth as a lobby boy under the tutelage of an exceptional concierge.",
    vyorasTake: "Pure aesthetic comfort food. Wes Anderson's symmetrical pastel world built with fast-paced literary comedy.",
    whereToWatch: [
      { name: "Disney+", type: "Subscription", quality: "4K" },
      { name: "Prime Video", type: "Rent", quality: "HD" }
    ],
    dna: {
      metrics: [
        { label: "Symmetry & Style", value: 99 },
        { label: "Wit & Satire", value: 92 },
        { label: "Whimsy", value: 96 },
        { label: "Nostalgia", value: 90 }
      ],
      atmosphere: ["Vibrant", "Pastel", "Witty", "Quirky", "Charming", "Artistic"]
    },
    recommendationReason: {
      similarityScore: 90,
      vectorMatch: "Perfection in editorial frame composition, pastel aesthetic, and fast-paced literary comedy.",
      anchorMovies: ["Knives Out", "Amélie"],
      reasons: [
        "Unmistakable Wes Anderson color palettes",
        "Delightful dialogue and ensemble performance",
        "Warm comforting visual experience"
      ]
    },
    constellation: [
      { id: "knives-out-2019", title: "Knives Out", similarity: 0.83, category: "Ensemble Mystery" },
      { id: "la-la-land-2016", title: "La La Land", similarity: 0.78, category: "Vibrant Style" }
    ]
  },
  {
    id: "knives-out-2019",
    title: "Knives Out",
    year: 2019,
    director: "Rian Johnson",
    runtime: "130 min",
    rating: 7.9,
    vibeMatchScore: 88,
    genres: ["Comedy", "Crime", "Drama", "Mystery"],
    moods: ["solve-a-mystery", "make-me-laugh", "something-comforting"],
    subVibe: "Whodunit",
    poster: "https://images.unsplash.com/photo-1518676599602-f17053b4c322?auto=format&fit=crop&q=80&w=800",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200",
    tagline: "Uncover the truth. Mind the twist.",
    description: "A detective investigates the death of a patriarch of an eccentric, combative family in a gothic mansion packed with secrets and motives.",
    vyorasTake: "A cozy rainy-day whodunit with razor-sharp satire and Daniel Craig's eccentric Southern detective.",
    whereToWatch: [
      { name: "Apple TV", type: "Subscription", quality: "4K" },
      { name: "YouTube", type: "Rent", quality: "4K" }
    ],
    dna: {
      metrics: [
        { label: "Whodunit Twist", value: 96 },
        { label: "Humor", value: 86 },
        { label: "Gothic House", value: 89 },
        { label: "Pacing", value: 92 }
      ],
      atmosphere: ["Cozy Gothic", "Razor-sharp", "Witty", "Delightful", "Intriguing"]
    },
    recommendationReason: {
      similarityScore: 88,
      vectorMatch: "Modern reinvention of the classic murder mystery with stellar ensemble acting.",
      anchorMovies: ["The Grand Budapest Hotel", "The Prestige"],
      reasons: [
        "Intricate puzzle-box plot craft",
        "Witty ensemble comedy and gothic atmosphere",
        "Recommended by Aarav in your Vibe Circle"
      ]
    },
    constellation: [
      { id: "grand-budapest-hotel", title: "The Grand Budapest Hotel", similarity: 0.83, category: "Witty Ensemble" },
      { id: "the-prestige-2006", title: "The Prestige", similarity: 0.79, category: "Twist Mystery" }
    ]
  },
  {
    id: "hereditary-2018",
    title: "Hereditary",
    year: 2018,
    director: "Ari Aster",
    runtime: "127 min",
    rating: 7.3,
    vibeMatchScore: 86,
    genres: ["Horror", "Drama", "Mystery"],
    moods: ["scare-me", "mind-bending", "solve-a-mystery"],
    subVibe: "Psychological",
    poster: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=800",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200",
    tagline: "Every family tree hides a secret.",
    description: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother, spiraling into terrifying occult revelations.",
    vyorasTake: "Unflinching psychological horror centered around grief, ancestral trauma, and meticulous dreadful atmosphere.",
    whereToWatch: [
      { name: "A24 / Prime Video", type: "Subscription", quality: "4K" },
      { name: "Apple TV", type: "Rent", quality: "4K" }
    ],
    dna: {
      metrics: [
        { label: "Dread", value: 98 },
        { label: "Psychological Horror", value: 95 },
        { label: "Tension", value: 96 },
        { label: "Grief Drama", value: 91 }
      ],
      atmosphere: ["Suffocating", "Unsettling", "Disturbing", "Masterful", "Meticulous"]
    },
    recommendationReason: {
      similarityScore: 86,
      vectorMatch: "Top tier psychological dread with relentless artistic commitment.",
      anchorMovies: ["Arrival", "Parasite"],
      reasons: [
        "Matches 'Scare Me' atmospheric horror vibe",
        "Deep psychological character exploration",
        "Masterful performance by Toni Collette"
      ]
    },
    constellation: [
      { id: "arrival-2016", title: "Arrival", similarity: 0.74, category: "Atmospheric Mystery" }
    ]
  }
];

export const MOCK_VIBE_USERS = [
  {
    id: "diya-product",
    name: "Diya",
    role: "Frontend / Product",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    vibeMatch: 95,
    topGenres: ["Sci-Fi", "Editorial Cinema", "Animation"],
    sharedMoviesCount: 18,
    bio: "Creating cinematic UI & finding warm editorial film gems.",
    isCircleMember: true,
    isPending: false
  },
  {
    id: "yatharth-ai",
    name: "Yatharth",
    role: "Backend / AI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    vibeMatch: 90,
    topGenres: ["Mind-Bending", "Sci-Fi", "Cyberpunk"],
    sharedMoviesCount: 15,
    bio: "Building vector embedding recommendation pipelines & neural taste maps.",
    isCircleMember: true,
    isPending: false
  },
  {
    id: "aarav-sci-fi",
    name: "Aarav",
    role: "Vibe Alchemist",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    vibeMatch: 87,
    topGenres: ["Sci-Fi", "Thriller", "Mystery"],
    sharedMoviesCount: 12,
    bio: "Obsessed with Christopher Nolan timelines and atmospheric Denis Villeneuve visual loops.",
    isCircleMember: true,
    isPending: false
  },
  {
    id: "maya-drama",
    name: "Maya",
    role: "Editorial Curator",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
    vibeMatch: 81,
    topGenres: ["Drama", "Romance", "Indie"],
    sharedMoviesCount: 9,
    bio: "Collecting bitter-sweet romance films and 35mm film festival cutdowns.",
    isCircleMember: true,
    isPending: false
  },
  {
    id: "rohan-action",
    name: "Rohan",
    role: "Chaos Explorer",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300",
    vibeMatch: 76,
    topGenres: ["Action", "Pure Adrenaline", "Sci-Fi"],
    sharedMoviesCount: 6,
    bio: "Seeking high-speed car chases, neon synthwave, and non-stop momentum.",
    isCircleMember: false,
    isPending: true
  },
  {
    id: "priya-animation",
    name: "Priya",
    role: "Visual Storyteller",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=300",
    vibeMatch: 72,
    topGenres: ["Animation", "Fantasy", "Comedy"],
    sharedMoviesCount: 8,
    bio: "Studio Ghibli enthusiast & lover of vibrant multiverse art direction.",
    isCircleMember: false,
    isPending: false
  }
];

export const SHARED_VIBES_DATA = {
  "aarav-sci-fi": {
    userId: "aarav-sci-fi",
    userName: "Aarav",
    vibeMatch: 87,
    sharedCount: 12,
    sharedGenres: ["Sci-Fi", "Thriller", "Mystery"],
    bothLove: [
      "interstellar-2014",
      "arrival-2016",
      "everything-everywhere-all-at-once"
    ],
    couldIntroduce: [
      "blade-runner-2049",
      "dune-2021",
      "hereditary-2018"
    ]
  }
};

export const MOCK_VIBE_EVOLUTION = [
  { month: "January", vibe: "MAKE ME LAUGH", genre: "Comedy", icon: "Smile", color: "#D7A84B" },
  { month: "March", vibe: "MIND-BENDING", genre: "Sci-Fi", icon: "Brain", color: "#C9572C" },
  { month: "May", vibe: "SOLVE A MYSTERY", genre: "Thriller", icon: "Search", color: "#632C32" },
  { month: "August", vibe: "FEEL SOMETHING", genre: "Drama", icon: "Heart", color: "#E9896A" }
];

export const MOCK_USER_UNIVERSE = {
  profile: {
    name: "Movie Enthusiast",
    username: "@vibefinder",
    bio: "Mapping my cinematic consciousness through VYORA vector analysis.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  },
  stats: {
    totalWatched: 142,
    favoriteGenre: "Sci-Fi / Mind-Bending",
    averageRating: 8.4,
    hoursExplored: 340
  },
  topGenres: [
    { genre: "Sci-Fi", count: 48, percentage: 34 },
    { genre: "Drama", count: 32, percentage: 22 },
    { genre: "Mystery", count: 26, percentage: 18 },
    { genre: "Adventure", count: 20, percentage: 14 },
    { genre: "Comedy", count: 16, percentage: 12 }
  ],
  recentlyWatched: [
    "interstellar-2014",
    "arrival-2016",
    "dune-2021",
    "everything-everywhere-all-at-once"
  ],
  watchlist: [
    "blade-runner-2049",
    "knives-out-2019",
    "hereditary-2018"
  ]
};
