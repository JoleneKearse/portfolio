import { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Change the Luminosity",
    img: "/screenshot-color-tool.png",
    imgAlt: "A color tool with an input for a hex code, toggle to lighten or darken, range to adjust, and two boxes with the input color and the altered one. Also a copy button to get the new hex.",
    github: "https://github.com/JoleneKearse/color_tool",
    live: "https://colour-tool.vercel.app/",
    why: "I love working with colour, but needed an easy tool to lighten or darken it to use in projects.",
    techUsed: ["HTML5", "CSS3", "JavaScript"],
    challenges: "I handled all the possible ways a user could enter a hex code, like with or without the # sign, and 3 or 6 characters.\n I implemented UI features, like a gradient on the slider as a visual cue of it's purpose, and a copy button for the altered hex code.",
    video: "../assets/change-the-luminosity.mp4",
  },
  {
    id: "2",
    title: "Late Night Food",
    img: "/screenshot-late-night-food.png",
    github: "https://github.com/JoleneKearse/Late-Night-Food-Ordering-App",
    live: "http://late-night-food-ordering-app.vercel.app/",
    why: "I know I needed this as a teacher in China! This is also the project that inspired me to learn full-stack.",
    techUsed: ["HTML5", "CSS3", "JavaScript", "Git", "Photoshop", "Vercel"],
    challenges: "",
    video: "",
  },
  {
    id: "3",
    title: "Meme Generator",
    img: "/screenshot-meme-generator.png",
    github: "https://github.com/JoleneKearse/meme_generator",
    live: "https://meme-generator-vkdn.vercel.app/",
    why: "We all need a little fun sometimes. Why not spend waaay too much time sharing our humour?",
    techUsed: ["React", "JavaScript", "Tailwind", "Vite", "Git", "Vercel"],
    challenges: "",
    video: "",
  },
]