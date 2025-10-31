export type Gig = {
  id: string;
  title: string;
  description: string;
  budget: number;
  skills: string[];
  isVerified: boolean;
  category: 'Recommended' | 'Skill-less' | 'Data Entry' | 'Creative' | 'AI-Curated';
};

export const user = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  avatar: 'https://picsum.photos/seed/user-avatar/100/100',
  skills: ['React', 'Node.js', 'Graphic Design', 'TypeScript', 'Next.js'],
  isVerified: true,
};

export const financialData = {
  income: 52500,
  expenses: 31000,
  savings: 21500,
  savingsGoal: 100000,
  avgGigValue: 4850,
  gigsCompleted: 12,
  incomeHistory: [
    { month: 'Jan', income: 40000, expenses: 24000 },
    { month: 'Feb', income: 30000, expenses: 13980 },
    { month: 'Mar', income: 98000, expenses: 20000 },
    { month: 'Apr', income: 27800, expenses: 39080 },
    { month: 'May', income: 18900, expenses: 48000 },
    { month: 'Jun', income: 23900, expenses: 38000 },
    { month: 'Jul', income: 52500, expenses: 31000 },
  ],
};

export const gigs: Gig[] = [
  {
    id: '1',
    title: 'Build a Landing Page with Next.js',
    description: 'We need a skilled developer to create a responsive and fast landing page using Next.js and Tailwind CSS for our new fintech app.',
    budget: 80000,
    skills: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    isVerified: true,
    category: 'Recommended',
  },
  {
    id: '2',
    title: 'Logo Design for a new Startup',
    description: 'Create a modern and minimalist logo for a tech startup. Deliverables should include vector files and brand color palette.',
    budget: 35000,
    skills: ['Graphic Design', 'Adobe Illustrator', 'Figma'],
    isVerified: true,
    category: 'Creative',
  },
  {
    id: '3',
    title: 'Data Entry for E-commerce Products',
    description: 'Enter product information into our Shopify store. We have about 200 products. Accuracy and attention to detail are a must.',
    budget: 15000,
    skills: [],
    isVerified: true,
    category: 'Skill-less',
  },
  {
    id: '4',
    title: 'Write 5 Blog Posts about AI in Africa',
    description: 'Research and write five engaging blog posts (1000 words each) on the latest trends in Artificial Intelligence on the continent.',
    budget: 50000,
    skills: ['Content Writing', 'SEO', 'Research'],
    isVerified: false,
    category: 'Creative',
  },
  {
    id: '5',
    title: 'Transcribe 1-hour of Audio Interview',
    description: 'Provide a clean, accurate transcription of a one-hour audio file of a podcast interview. Fast turnaround is required.',
    budget: 6000,
    skills: [],
    isVerified: true,
    category: 'Skill-less',
  },
  {
    id: '6',
    title: 'Backend API with Node.js and Express',
    description: 'Develop a RESTful API for our new mobile application. Experience with MongoDB and user authentication is a plus.',
    budget: 120000,
    skills: ['Node.js', 'Express', 'MongoDB', 'API Design'],
    isVerified: true,
    category: 'Recommended',
  },
   {
    id: '7',
    title: 'Test a new mobile banking app',
    description: 'Download our beta app, follow the test script, and report any bugs or usability issues. No coding skills required.',
    budget: 5000,
    skills: [],
    isVerified: true,
    category: 'Skill-less',
  },
  {
    id: '8',
    title: 'Create Social Media Graphics for a Campaign',
    description: 'Design a set of 10 social media graphics for an upcoming marketing campaign on Instagram and Facebook for a fashion brand.',
    budget: 25000,
    skills: ['Canva', 'Graphic Design', 'Social Media'],
    isVerified: true,
    category: 'Creative',
  },
  {
    id: '9',
    title: 'AI-Curated: Label Images of Nigerian Food',
    description: 'Help train a computer vision model by labeling images of popular Nigerian dishes. This is a ZBD-provided micro-gig.',
    budget: 12000,
    skills: ['Attention to Detail'],
    isVerified: true,
    category: 'AI-Curated',
  },
];
