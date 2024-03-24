import { ahlens, tiger, sjukvard } from "../assets/images";
import {
    aspnet,
    json,
    restapi,
    csharp,
    threejs,
    photoshop,
    vite,
    astrojs,
    blender,
    contact,
    dreamify,
    miniapi,
    threading,
    bank,
    rpgadventures,
    cv,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    figma,
    nodejs,
    react,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: aspnet,
        name: "ASP.NET",
        type: "Backend",
    },
    {
        imageUrl: restapi,
        name: "Rest API",
        type: "Backend",
    },
    {
        imageUrl: json,
        name: "Json",
        type: "Language",
    },
    {
        imageUrl: csharp,
        name: "C-Sharp",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: threejs,
        name: "ThreeJS",
        type: "Framework",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Frontend",
    },
    {
        imageUrl: astrojs,
        name: "Astro",
        type: "Frontend Framework",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Designing Tool",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: photoshop,
        name: "Adobe Photoshop",
        type: "Designer Tool",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D Modelling Tool",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Part Time Sales Assistant",
        company_name: "Åhlens City, Stockholm",
        icon: ahlens,
        iconBg: "#accbe1",
        date: "June 2014 - March 2018",
        points: [
            "Was widely regarded as the indirect 'IT Guy' of the department, solving problems before the actual IT Department came down",
            "Collaborating with all kinds of people, i learned a lot!",
        ],
    },
    {
        title: "Part time Sales Assistant",
        company_name: "Tiger of Sweden",
        icon: tiger,
        iconBg: "#fbc3bc",
        date: "March 2018 - October 2019",
        points: [
            "Received a lot more responsibility",
            "Very laidback setting that allowed me further develop my social skills",
            "Lots of freedom within the company, Connected with some Software Developers, this opened my eyes to the world of Software Development.",
        ],
    },
    {
        title: "Residency Rotations",
        company_name: "Various Hospitals in Stockholm",
        icon: sjukvard,
        iconBg: "#b7e4c7",
        date: "Aug 2020 - Feb 2022",
        points: [
            "Collaborating with people with all kinds of different jobs",
            "Worked with a bunch of Software Development Consultants; Which prompted me to seek to learn more",
        ],
    },
    {
        title: "Medical Doctor",
        company_name: "Various Hospitals in Stockholm",
        icon: sjukvard,
        iconBg: "#a2d2ff",
        date: "Jan 2022 - Aug 2023",
        points: [
            "Worked Fulltime at various hospitals by day, was building Websites and learning to code by night.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Manhattaa',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/Manhatta',
    }
];

export const projects = [
    {
        iconUrl: dreamify,
        theme: 'btn-back-red',
        name: 'Dreamify',
        description: 'A Project where we translated the Spotify open source Web-API from Javascript to C#',
        link: 'https://github.com/Manhattaa/Dreamify',
    },
    {
        iconUrl: threading,
        theme: 'btn-back-green',
        name: 'Threading Lab',
        description: 'A Simulation of Cars Racing against eachother, with events!',
        link: 'https://github.com/Manhattaa/LAB--2-Threading',
    },
    {
        iconUrl: miniapi,
        theme: 'btn-back-blue',
        name: 'MiniAPI',
        description: 'Created an API that makes use of a database system to store information',
        link: 'https://github.com/Manhattaa/MiniAPI',
    },
    {
        iconUrl: bank,
        theme: 'btn-back-pink',
        name: 'The Bank',
        description: 'Group Project: Practicing MSSQL Databases within C# Applications.',
        link: 'https://github.com/Manhattaa/The_Bank',
    },
    {
        iconUrl: rpgadventures,
        theme: 'btn-back-black',
        name: 'Console Warrior',
        description: 'A text-based and musical adventure set in The Vale',
        link: 'https://github.com/Manhattaa/RPGAdventures',
    },
    {
        iconUrl: cv,
        theme: 'btn-back-yellow',
        name: 'HTML, CSS and Javascript Portfolio Website',
        description: 'A Portfolio site that makes use of a lot of Javascript elements.',
        link: 'https://github.com/Manhattaa/CV-Portfolio-Website',
    }
];