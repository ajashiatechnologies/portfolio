// thoda zada ts ho gya idhar
export enum SkillNames {
  AWS = "aws",
  LINUX = "linux",
  GIT = "git",
  DOCKER = "docker",
  HTML = "html",
  CSS = "css",
  JS = "js",
  POSTGRES = "postgres",
  TS = "ts",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  NGINX = "nginx",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Partial<Record<SkillNames, Skill>> = {
  // ANDROID FIRST
  [SkillNames.WORDPRESS]: {
    id: 1,
    name: "android",
    label: "Android (Java)",
    shortDescription: "Activities, Fragments & late-night debugging ☕📱",
    color: "#3DDC84",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },

  [SkillNames.FIREBASE]: {
    id: 2,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Auth, Realtime DB & Storage for fast Android dev 🔥📦",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  // AI / ML
  [SkillNames.POSTGRES]: {
    id: 3,
    name: "python",
    label: "Python",
    shortDescription: "The Swiss Army knife of ML & automation 🐍⚙️",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },

  [SkillNames.VIM]: {
    id: 4,
    name: "ml",
    label: "Basic Machine Learning",
    shortDescription: "Classical ML foundations for real-world inference 📊🤖",
    color: "#5a5a5a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },

  [SkillNames.AWS]: {
    id: 5,
    name: "genai",
    label: "GenAI / LLMs",
    shortDescription: "Multimodal, Gemini & prompt engineering 🧠✨",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },

  // IOT / EMBEDDED
  [SkillNames.NGINX]: {
    id: 6,
    name: "iot",
    label: "Embedded / IoT",
    shortDescription: "Microcontrollers talking to the real world 🌍📡",
    color: "#0080ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },

  [SkillNames.PRETTIER]: {
    id: 7,
    name: "sensors",
    label: "Sensors",
    shortDescription: "SpO2, HR, motion & environment data streaming 🌡️📊",
    color: "#4CAF50",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },

  [SkillNames.VUE]: {
    id: 8,
    name: "iot-systems",
    label: "IoT Systems",
    shortDescription: "Data → Device → App → Insights 🔁",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 9,
    name: "bluetooth",
    label: "Bluetooth Communication",
    shortDescription: "Wearables streaming data wirelessly 📶⌚",
    color: "#0A84FF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bluetooth/bluetooth-original.svg",
  },

  // BACKEND
  [SkillNames.NODEJS]: {
    id: 10,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Backend in JavaScript land 🌐🍃",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.EXPRESS]: {
    id: 11,
    name: "express",
    label: "Express.js",
    shortDescription: "Routing, middleware & APIs 🚦🍽️",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  [SkillNames.NPM]: {
    id: 12,
    name: "rest",
    label: "REST APIs",
    shortDescription: "Endpoints talking between devices & apps 🛜🔌",
    color: "#4c8bf5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  // DATABASES
  [SkillNames.MONGODB]: {
    id: 13,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL for flexible app data 🍃📦",
    color: "#47A248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.CSS]: {
    id: 14,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Structured relational DB for production systems 🗃️🎯",
    color: "#00758F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },

  // WEB FRONTEND
  [SkillNames.JS]: {
    id: 15,
    name: "js",
    label: "JavaScript",
    shortDescription: "The language that runs the web 🌍⚡",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 16,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with superpowers 📦🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.REACT]: {
    id: 17,
    name: "react",
    label: "React",
    shortDescription: "UI + components + hooks ⚛️🧩",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.HTML]: {
    id: 18,
    name: "html",
    label: "HTML",
    shortDescription: "Structure of the web 🦴🌐",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 19,
    name: "css",
    label: "CSS",
    shortDescription: "Styling with precision 🎨✨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  // TOOLS
  [SkillNames.GIT]: {
    id: 20,
    name: "git",
    label: "Git",
    shortDescription: "Version control for sanity 🧠🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 21,
    name: "github",
    label: "GitHub",
    shortDescription: "Code, PRs & collaboration 🐙📁",
    color: "#000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.LINUX]: {
    id: 22,
    name: "linux",
    label: "Linux",
    shortDescription: "Terminals, scripts & developer religion 🐧💻",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  // DEPLOYMENT
  [SkillNames.NEXTJS]: {
    id: 23,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Fullstack React framework with SSR 🍽️🚀",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Deploy & ship to production effortlessly 🚀☕",
    color: "#0fa",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future!",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Dark mode activated! My eyes thank you deeply 😌",
    "Welcome back to the shadows 🌑",
    "How was life out there in the bright world? 🕶️",
    "Dark mode: because taste matters.",
  ],
};
