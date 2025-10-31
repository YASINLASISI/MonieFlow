export type Gig = {
  id: string;
  title: string;
  description: string;
  budget: number;
  skills: string[];
  isVerified: boolean;
  category: 'Recommended' | 'Skill-less' | 'Data Entry' | 'Creative';
};

export const user = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatar: 'https://picsum.photos/seed/user-avatar/100/100',
  skills: ['React', 'Node.js', 'Graphic Design', 'TypeScript', 'Next.js'],
  isVerified: true,
};

export const financialData = {
  income: 5250,
  expenses: 3100,
  savings: 2150,
  savingsGoal: 10000,
  incomeHistory: [
    { month: 'Jan', income: 4000, expenses: 2400 },
    { month: 'Feb', income: 3000, expenses: 1398 },
    { month: 'Mar', income: 2000, expenses: 9800 },
    { month: 'Apr', income: 2780, expenses: 3908 },
    { month: 'May', income: 1890, expenses: 4800 },
    { month: 'Jun', income: 2390, expenses: 3800 },
    { month: 'Jul', income: 5250, expenses: 3100 },
  ],
};

export const gigs: Gig[] = [
  {
    id: '1',
    title: 'Build a Landing Page with Next.js',
    description: 'We need a skilled developer to create a responsive and fast landing page using Next.js and Tailwind CSS.',
    budget: 800,
    skills: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    isVerified: true,
    category: 'Recommended',
  },
  {
    id: '2',
    title: 'Logo Design for a new Startup',
    description: 'Create a modern and minimalist logo for a tech startup. Deliverables should include vector files.',
    budget: 350,
    skills: ['Graphic Design', 'Adobe Illustrator', 'Figma'],
    isVerified: true,
    category: 'Creative',
  },
  {
    id: '3',
    title: 'Data Entry for E-commerce Products',
    description: 'Enter product information into our Shopify store. Accuracy and attention to detail are a must.',
    budget: 150,
    skills: [],
    isVerified: true,
    category: 'Skill-less',
  },
  {
    id: '4',
    title: 'Write 5 Blog Posts about AI',
    description: 'Research and write five engaging blog posts (1000 words each) on the latest trends in Artificial Intelligence.',
    budget: 500,
    skills: ['Content Writing', 'SEO', 'Research'],
    isVerified: false,
    category: 'Creative',
  },
  {
    id: '5',
    title: 'Transcribe 1-hour of Audio Interview',
    description: 'Provide a clean, accurate transcription of a one-hour audio file. Fast turnaround is required.',
    budget: 60,
    skills: [],
    isVerified: true,
    category: 'Skill-less',
  },
  {
    id: '6',
    title: 'Backend API with Node.js and Express',
    description: 'Develop a RESTful API for our new mobile application. Experience with MongoDB is a plus.',
    budget: 1200,
    skills: ['Node.js', 'Express', 'MongoDB', 'API Design'],
    isVerified: true,
    category: 'Recommended',
  },
   {
    id: '7',
    title: 'Test a new mobile application',
    description: 'Download our beta app, follow the test script, and report any bugs or usability issues. No coding skills required.',
    budget: 50,
    skills: [],
    isVerified: true,
    category: 'Skill-less',
  },
  {
    id: '8',
    title: 'Create Social Media Graphics',
    description: 'Design a set of 10 social media graphics for an upcoming marketing campaign on Instagram and Facebook.',
    budget: 250,
    skills: ['Canva', 'Graphic Design', 'Social Media'],
    isVerified: true,
    category: 'Creative',
  },
];
