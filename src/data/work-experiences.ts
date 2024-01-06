type WorkExperience = {
  company: string
  startDate: Date
  endDate?: Date
  technologies: string[]
  role: string
  description: string[]
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Uhuu",
    description: ["Integrated real-time ticket buying using SeatsIO.", "Mainted a system that is net positive, with a surplus of 3 million"],
    role: "Full-stack Developer",
    startDate: new Date("2023-06-01"),
    technologies: ['PHP', 'Javascript', 'Laravel', 'MySQL', 'Redis', 'React']
  },
  {
    company: "Hero99",
    description: [
      "The most challenging thing I developed was a pipeline to process a high load of data to import products from multiple suppliers at the same time.",
      "Architected the catalog system and worked on solutions for customizing products both on 2d and 3d."
    ],
    role: "Full-stack Developer",
    startDate: new Date("2021-06-01"),
    endDate: new Date("2022-12-01"),
    technologies: ['Typescript', 'Python', 'NestJS', 'NextJS', 'Redis', 'Postgres', 'MongoDB', 'ThreeJS']
  }
];
