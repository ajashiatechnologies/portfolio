import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiNodejsFill,
} from "react-icons/ri";
import {
  SiFirebase,
  SiMysql,
  SiPython,
  SiMongodb,
  SiArduino,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiThreedotjs,
  SiBlender,
  SiUnity,
  SiAutodeskmaya,
  SiAutocad,
  SiAndroidstudio,
  SiRaspberrypi,
  SiGooglemaps,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// 🟣 YOUR SKILLS ONLY
export const PROJECT_SKILLS = {
  android: {
    title: "Android (Java)",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/java-original.svg" width={20} />,
  },
  maps: {
    title: "Google Maps API",
    bg: "black",
    fg: "white",
    icon: <SiGooglemaps/>,
  },
  xml: {
    title: "Android (XML)",
    bg: "black",
    fg: "white",
    icon: <SiAndroidstudio/>,
  },
  raspberrypi: {
    title: "Raspberry Pi",
    bg: "black",
    fg: "white",
    icon: <SiRaspberrypi/>,
  },
  spss: {
    title: "SPSS",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/spss-original.svg" width={20} />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  css: {
    title: "CSS",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  blender: {
    title: "Blender",
    bg: "black",
    fg: "white",
    icon: <SiBlender/>,
  },
  unity: {
    title: "Unity",
    bg: "black",
    fg: "white",
    icon: <SiUnity/>,
  },
   maya: {
    title: "Maya",
    bg: "black",
    fg: "white",
    icon: <SiAutodeskmaya/>,
  }, 
  cad: {
    title: "CAD",
    bg: "black",
    fg: "white",
    icon: <SiAutocad/>,
  },
  javascript: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  gemini: {
    title: "Gemini API",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/google-original.svg" width={20} />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  html: {
    title: "HTML",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  motion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  spline: {
    title: "3D (Spline/T3.js)",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  basicml: {
    title: "Basic ML / CSRNet / CV",
    bg: "black",
    fg: "white",
    icon: <img src="/assets/icons/thealgorithms-original.svg" width={20} />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [

  /* ------------------------------------------------------------ */
/* 01 — Aura AI (Android + GenAI + Gemini) */
{
  id: "aura",
  category: "Academic Project",
  title: "Aura AI — Generative AI Chat Application",
  src: "/assets/projects-screenshots/aura/1.png",
  screenshots: ["2.png", "3.png"],
  live: "#",
  skills: {
    frontend: [PROJECT_SKILLS.android, PROJECT_SKILLS.xml],
    backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.gemini],
  },
  get content() {
    return (
      <div className="font-mono space-y-3">
        <TypographyP>
          Generative AI-powered chat interface designed for multimodal understanding
          with Gemini API integration, enhanced latency handling, and image context interpretation.
          Features persistent chat history through Room DB for offline recall.
        </TypographyP>

        <TypographyP>
          <strong>Unique Feature:</strong> Fast pipeline inference layer for improved response speed & multimodal queries.
        </TypographyP>

        <TypographyP>• Gemini Vision + Text Query Support</TypographyP>
        <TypographyP>• Room Database for persistent sessions & chat logs</TypographyP>
        <TypographyP>• Image-based contextual question answering</TypographyP>
        <TypographyP>• Firebase auth + data storage</TypographyP>
      </div>
    );
  },
},

/* ------------------------------------------------------------ */
/* 02 — Learnura EduTech (Adaptive Learning + Backend) */
{
  id: "learnura",
  category: "Academic Project",
  title: "Learnura EduTech — Learning Platform",
  src: "/assets/projects-screenshots/learnura/1.png",
  screenshots: ["2.png", "3.png"],
  live: "#",
  skills: {
    frontend: [PROJECT_SKILLS.android],
    backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.node, PROJECT_SKILLS.mysql],
  },
  get content() {
    return (
      <div className="font-mono space-y-3">
        <TypographyP>
          Learning platform designed to personalize student outcomes via curated course content,
          adaptive assessments, and role-based academic workflows with Teacher/Admin dashboards.
        </TypographyP>

        <TypographyP>
          <strong>Unique Feature:</strong> Adaptive Quiz Algorithm that adjusts difficulty based on performance, accuracy,
          and learning pace for differential evaluation.
        </TypographyP>

        <TypographyP>• Video-based course modules with backend upload pipeline</TypographyP>
        <TypographyP>• Teacher dashboard for quiz + course management</TypographyP>
        <TypographyP>• Admin broadcast notifications for platform-wide updates</TypographyP>
        <TypographyP>• Firebase Auth + Node.js + MySQL backend</TypographyP>
        <TypographyP>• Multi-role structured access (Student/Teacher/Admin)</TypographyP>
      </div>
    );
  },
},

/* ------------------------------------------------------------ */
/* 03 — SOS Watch (Wearable + BLE + Android) */
{
  id: "sos-watch",
  category: "Wearable Project",
  title: "SOS Watch — Emergency Alert Wearable",
  src: "/assets/projects-screenshots/sos-watch/1.png",
  screenshots: ["2.png"],
  live: "#",
  skills: {
    frontend: [PROJECT_SKILLS.android],
    backend: [PROJECT_SKILLS.arduino, PROJECT_SKILLS.raspberrypi, PROJECT_SKILLS.maps],
  },
  get content() {
    return (
      <div className="font-mono space-y-3">
        <TypographyP>
          Wearable emergency assistance device with BLE-triggered distress signaling,
          integrated location reporting, and Android companion app for real-time emergency routing.
        </TypographyP>

        <TypographyP>
          <strong>Unique Feature:</strong> BLE-initiated location-aware emergency dispatch with fallback routing.
        </TypographyP>

        <TypographyP>• Emergency trigger via hardware BLE interface</TypographyP>
        <TypographyP>• Google Maps API for live geolocation</TypographyP>
        <TypographyP>• Raspberry Pi + Arduino hardware stack</TypographyP>
        <TypographyP>• Android app as the alert relay layer</TypographyP>
      </div>
    );
  },
},

/* ------------------------------------------------------------ */
/* 04 — SpO2 + Pulse BLE IoT System */
{
  id: "spo2-monitor",
  category: "Freelance Project",
  title: "Bluetooth-Based Pulse & SpO2 Monitoring System",
  src: "/assets/projects-screenshots/spo2-monitor/1.png",
  screenshots: ["1.png"],
  live: "#",
  skills: {
    frontend: [PROJECT_SKILLS.android],
    backend: [PROJECT_SKILLS.arduino, PROJECT_SKILLS.python],
  },
  get content() {
    return (
      <div className="font-mono space-y-3">
        <TypographyP>
          Biomedical IoT system for real-time physiological monitoring using PPG-based sensors,
          with BLE streaming to an Android application for patient-side visualization.
        </TypographyP>

        <TypographyP>
          <strong>Unique Feature:</strong> BLE-based continuous sensor streaming with diagnostic export for doctors.
        </TypographyP>

        <TypographyP>• PPG acquisition for Pulse & SpO2</TypographyP>
        <TypographyP>• BLE data transport to Android frontend</TypographyP>
        <TypographyP>• Python-based post-processing pipeline</TypographyP>
        <TypographyP>• Doctor export module for diagnostics</TypographyP>
      </div>
    );
  },
},

/* ------------------------------------------------------------ */
/* 05 — CSRNet Stampede Prediction */
{
  id: "csrnet",
  category: "Hackathon Project",
  title: "Stampede Prediction in Live Feed using CSRNet",
  src: "/assets/projects-screenshots/csrnet/1.png",
  screenshots: ["2.png","3.png"],
  live: "#",
  skills: {
    frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.javascript],
    backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.basicml],
  },
  get content() {
    return (
      <div className="font-mono space-y-3">
        <TypographyP>
          Real-time crowd analytics system using CSRNet for density estimation to detect high-risk zones in gatherings.
          Project aims to assist event safety, public surveillance, and emergency response planning.
        </TypographyP>

        <TypographyP>
          <strong>Unique Feature:</strong> Density-based risk identification for proactive stampede prevention with Immediate Response Alert Trigger
        </TypographyP>

        <TypographyP>• CSRNet-based density estimation</TypographyP>
        <TypographyP>• Crowd risk segmentation visual output</TypographyP>
        <TypographyP>• Python + CV inference pipeline</TypographyP>
        <TypographyP>• Web-based visualization layer</TypographyP>
      </div>
    );
  },
},

/* ------------------------------------------------------------ */
/* 06 — Deep Reinforcement Learning (Research + Conference) */
{
  id: "drl",
  category: "Research • International Conference • R&D",
  title: "Enhancing Stress Prediction Accuracy using Deep Reinforcement Learning",
  src: "/assets/projects-screenshots/drl/1.png",
  screenshots: ["4.png","5.png","2.png","3.png"],
  live: "#",
  skills: {
    frontend: [PROJECT_SKILLS.spss],
    backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.basicml],
  },
  get content() {
    return (
      <div className="font-mono space-y-3">
        <TypographyP>
          Research comparing Deep Reinforcement Learning-based stress prediction models with rule-based systems
          using physiological biosignal datasets. Explores reward-based optimization for mental workload classification.
        </TypographyP>

        <TypographyP>
          <strong>Unique Feature:</strong> DRL-based adaptive reward tuning for higher classifier accuracy.
        </TypographyP>

        <TypographyP>• Comparative evaluation against rule-based baseline</TypographyP>
        <TypographyP>• DRL optimization for continuous physiological metrics</TypographyP>
        <TypographyP>• SPSS for statistical validation & inference</TypographyP>
        <TypographyP>• International conference research work</TypographyP>

        <TypographyP>
          <strong>Awards:</strong> Best Research Paper & Best Presentation — SIET 2024, Kuala Lumpur, Malaysia.
        </TypographyP>
      </div>
    );
  },
},

/* ------------------------------------------------------------ */
/* 07 — Personal Portfolio Site */
{
  id: "portfolio",
  category: "Portfolio",
  title: "Personal Portfolio",
  src: "/assets/projects-screenshots/portfolio/1.png",
  screenshots: ["2.png","3.png"],
  live: "#",
  skills: {
    frontend: [
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.motion,
      PROJECT_SKILLS.spline,
    ],
    backend: [],
  },
  get content() {
    return (
      <div className="font-mono space-y-3">
        <TypographyP>
          Interactive portfolio showcasing Android, AI, Embedded, Research, and Freelance work
          with 3D UI components, smooth motion animations, and modal-based project presentation.
        </TypographyP>

        <TypographyP>
          <strong>Unique Feature:</strong> 3D interactive project showcase with motion-driven UI.
        </TypographyP>

        <TypographyP>• Next.js + Tailwind + Framer Motion stack</TypographyP>
        <TypographyP>• 3D visuals integrated using Spline</TypographyP>
        <TypographyP>• Organized project/storytelling layout</TypographyP>
        <TypographyP>• Minimal & futuristic dark theme</TypographyP>
      </div>
    );
  },
},
];

export default projects;
