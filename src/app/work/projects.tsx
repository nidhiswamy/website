export const projects: {
  id: number;
  name: string;
  link: string;
  desc: string;
  skills: string;
  type?: "GITHUB" | "EXTERNAL";
}[] = [
  {
    id: Math.random(),
    name: "Ringy Contact Cards",
    link: "",
    desc: "Customizable digital contact-card platform for every Ringy user.",
    skills: "Next.js, React, TypeScript, MUI, REST APIs",
    type: "EXTERNAL",
  },
  {
    id: Math.random(),
    name: "Trust My Producer",
    link: "https://www.ringy.com/trust-my-producer",
    desc: "Insurance provider site providing licensing information and customer inquiries.",
    skills: "Next.js, MUI, form validation, API integration",
    type: "EXTERNAL",
  },
  {
    id: Math.random(),
    name: "Recursive Parser",
    link: "https://www.github.com/nidhiswamy/parser",
    desc: "Top-down parser for a custom programming language.",
    skills: "Python, Compiler construction, regular expressions",
    type: "GITHUB",
  },
];
