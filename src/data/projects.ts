type Project = {
  name: string
  liveLink?: string
  repoLink: string
  description: string
  techs: string[]
}

export const projects: Project[] = [
  {
    name: 'Ouvidor',
    description: 'University project, Application for municipal ombudsman.',
    repoLink: 'https://github.com/ouvidor',
    techs: ['Typescript', 'Express', 'React', 'React Native']
  },
  {
    name: 'Abyss',
    description: 'My blog that I use to post my texts from my book club.',
    liveLink: 'https://rihor-abyss.now.sh/',
    repoLink: 'https://github.com/rihor/blog',
    techs: ['Typescript', 'Next', 'Three.js', 'Prismic']
  },
  {
    name: 'Shaders Gallery',
    description: 'My Three.js gallery.',
    liveLink: 'https://pedro-pinho-shaders.vercel.app/',
    repoLink: 'https://github.com/rihor/shaders-gallery',
    techs: ['Typescript', 'Next', 'Three.js']
  },
  {
    name: 'Old portfolio',
    description: 'First portfolio made, used a bunch of animations.',
    liveLink: 'https://rihor-portfolio.vercel.app/',
    repoLink: 'https://github.com/rihor/portfolio',
    techs: ['Typescript', 'Gatsby', 'ZDog', 'Framer Motion']
  }
]
