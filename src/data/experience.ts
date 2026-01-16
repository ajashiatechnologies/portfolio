import { Skill } from "@/data/projects";
import { PROJECT_SKILLS } from "@/data/projects";

export type Experience = {
  id: string;
  organization: string;
  role: string;
  duration: string;
  category: string;
  description: string;
  src: string;
  screenshots: string[];
  skills?: Skill[];
  link?: string;
};

const experiences: Experience[] = [
  {
    id: "roche-immersion",
    organization: "Roche",
    role: "Immersion Technology Internship (AR/VR Developer)",
    duration: "Oct 2024 — Jun 2026 (20 months)",
    category: "Internship • AR/VR • R&D",
    src: "/assets/experience/roche-immersion/1.png",
    screenshots: ["2.png", "3.png", "4.png"],
    description:
      "Working as an AR/VR developer intern focusing on immersive interactive experiences, 3D visualization, UX workflows, and spatial computing use cases for enterprise environments.",
    skills: [
      PROJECT_SKILLS.blender,
      PROJECT_SKILLS.unity,
      PROJECT_SKILLS.maya,
      PROJECT_SKILLS.cad,
    ],
    link: "#",
  },

  {
    id: "freelance",
    organization: "Freelancer",
    role: "Android Developer",
    duration: "2020 — Present",
    category: "Freelance • Mobile • Fullstack",
    src: "/assets/experience/freelance/1.png",
    screenshots: ["2.png", "3.png"],
    description:
      "Built mobile solutions using Android + Firebase + Node backend. Projects include wearable systems, educational platforms, and Generative AI features.",
    skills: [
      PROJECT_SKILLS.android,
      PROJECT_SKILLS.firebase,
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.mysql,
    ],
    link: "#",
  },
];

export default experiences;
