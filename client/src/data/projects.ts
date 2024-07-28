import { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Change the Luminosity",
    img: "/screenshot-color-tool.png",
    github: "https://github.com/JoleneKearse/color_tool",
    live: "https://colour-tool.vercel.app/",
    description: "I love working with colour, but needed an easy tool to lighten or darken it to use in projects.",
    techUsed: [
      { img: "HTML5", alt: "HTML5" },
      { img: "CSS3", alt: "CSS3" },
      { img: "JavaScript", alt: "JavaScript" },
    ]
  },
  {
    id: 2,
    title: "Late Night Food",
    img: "/screenshot-late-night-food.png",
    github: "https://github.com/JoleneKearse/Late-Night-Food-Ordering-App",
    live: "http://late-night-food-ordering-app.vercel.app/",
    description: "I know I needed this as a teacher in China! This is also the project that inspired me to learn full-stack.",
    techUsed: [
      { img: "HTML5", alt: "HTML5" },
      { img: "CSS3", alt: "CSS3" },
      { img: "JavaScript", alt: "JavaScript" },
      { img: "Git", alt: "Git" },
      { img: "Photoshop", alt: "Photoshop" },
      { img: "Vercel", alt: "Vercel" },
    ]
  },
  {
    id: 3,
    title: "Meme Generator",
    img: "/screenshot-meme-generator.png",
    github: "https://github.com/JoleneKearse/meme_generator",
    live: "https://meme-generator-vkdn.vercel.app/",
    description: "We all need a little fun sometimes. Why not spend waaay too much time sharing our humour?",
    techUsed: [
      { img: "React", alt: "React" },
      { img: "JavaScript", alt: "JavaScript" },
      { img: "Tailwind", alt: "Tailwind" },
      { img: "Vite", alt: "Vite" },
      { img: "Git", alt: "Git" },
      { img: "Vercel", alt: "Vercel" },
    ]
  },
]