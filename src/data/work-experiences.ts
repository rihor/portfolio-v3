type WorkExperience = {
  company: string
  startDate: Date,
  endDate?: Date
  technologies: string[]
  role: string
  description: string[]
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Uhuu",
    description: ["Integrated real-time ticket buying using SeatsIO."],
    role: "Full-stack Developer",
    startDate: new Date("2023-06-01"),
    technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'Javascript']
  },
  {
    company: "Hero99",
    description: ["Designed the architecture."],
    role: "Full-stack Developer",
    startDate: new Date("2021-06-01"),
    technologies: ['Typescript', 'NestJS', 'NextJS', 'Redis', 'Postgres', 'MongoDB', 'ThreeJS']
  }
];
