type Education = {
  institution: string
  description: string
  startDate: Date
  endDate?: Date
  diploma: string
};

export const education: Education[] = [
  {
    institution: "UNESA",
    description: "Learned to program",
    diploma: "Bacharel",
    startDate: new Date('2016-02-01'),
    endDate: new Date('2020-06-01')
  }
];
