const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const words = [
  "Ideas",
  1000,
  "Strategies",
  1000,
  "Designs",
  1000,
  "Code",
  1000,
  "Ideas",
  1000,
  "Strategies",
  1000,
  "Designs",
  1000,
  "Code",
  1000,
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const about = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Writing clean and scalable code for long-term projects</li>
        <li>Communicating clearly and transparently with teams and clients</li>
        <li>Delivering projects on time and respecting deadlines</li>
        <li>Frontend development using React, Next.js, and Tailwind CSS</li>
        <li>Backend development using Node.js, Prisma, and REST APIs</li>
        <li>Working with version control tools like Git</li>
        <li>Managing deployments using Docker and GitHub</li>
        <li>Basic 3D and interactive development with Three.js</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>2020 – 2021: Built static websites with HTML, CSS, and JS</li>
        <li>
          2021 – 2022: Learned ASP.NET, C#, and backend concepts at university
        </li>
        <li>
          2023: Developed dynamic apps using React with hooks and components
        </li>
        <li>
          2024: Created full-stack projects using Next.js, Tailwind, and Prisma
        </li>
        <li>
          2024 – Present: Working on real projects with auth, databases, and
          deployment
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Self-taught React and modern frontend development (2023)</li>
        <li>
          University studies in software development and ASP.NET (2021 – 2022)
        </li>
        <li>
          Ongoing learning through real-world full-stack projects (2024 –
          Present)
        </li>
      </ul>
    ),
  },
];

const projects = [
  {
    id: 1,
    imgUrl: "/sezer.png",
    title: "Sezer China",
    description:
      "Sezer China is a company specializing in import and export services, offering comprehensive solutions to meet client needs with high-quality products at competitive prices. With over 10 offices around the world, the company provides professional support, sourcing, and logistics — including both air and sea freight — ensuring the best value and reliability for its partners.",
    tag: ["All", "Client"],
    gitUrl: "https://github.com/AnasOsta",
    previewUrl: "https://sezerchina.com/",
  },
  {
    id: 2,
    imgUrl: "/nasma.png",
    title: "Nasma Hydramist",
    description:
      "Nasma Hydramist delivers a refreshing experience through its all-natural mist spray, designed to be your daily companion wherever you go. Safe for everyday use and suitable for the entire family, Nasma products are dermatologically tested and crafted to provide comfort and hydration for all parts of the body — anytime, anywhere.",
    tag: ["All", "Client"],
    gitUrl: "https://github.com/AnasOsta",
    previewUrl: "https://www.nasmahydramist.com/",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/anas.o20x/",
    imgPath: "/images/insta.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/anas-osta/",
    imgPath: "/images/linkedin.png",
  },
];

export { words, about, counterItems, projects, socialImgs, navLinks };
