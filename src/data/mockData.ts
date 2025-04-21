
export type Skill = {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
};

export type HackathonInterest = {
  name: string;
  date: string;
  location: string | 'online';
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  location: {
    city: string;
    country: string;
  };
  skills: Skill[];
  hackathonInterests: HackathonInterest[];
  availableForOnline: boolean;
  githubUrl?: string;
  linkedinUrl?: string;
  email: string;
};

export const users: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60',
    bio: 'Full-stack developer with a passion for AI and machine learning. Looking for creative teammates for upcoming hackathons.',
    location: {
      city: 'Seattle',
      country: 'USA'
    },
    skills: [
      { name: 'React', level: 'advanced' },
      { name: 'Node.js', level: 'advanced' },
      { name: 'Python', level: 'intermediate' },
      { name: 'TensorFlow', level: 'beginner' }
    ],
    hackathonInterests: [
      { name: 'TechCrunch Disrupt', date: '2025-05-15', location: 'San Francisco, USA' },
      { name: 'Global AI Hackathon', date: '2025-06-20', location: 'online' }
    ],
    availableForOnline: true,
    githubUrl: 'https://github.com/alexj',
    linkedinUrl: 'https://linkedin.com/in/alexj',
    email: 'alex@example.com'
  },
  {
    id: '2',
    name: 'Sophia Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    bio: 'UI/UX designer with 3 years of experience. Love creating intuitive and beautiful interfaces.',
    location: {
      city: 'Toronto',
      country: 'Canada'
    },
    skills: [
      { name: 'UI Design', level: 'advanced' },
      { name: 'Figma', level: 'advanced' },
      { name: 'HTML/CSS', level: 'intermediate' },
      { name: 'JavaScript', level: 'beginner' }
    ],
    hackathonInterests: [
      { name: 'DesignHack', date: '2025-04-10', location: 'Vancouver, Canada' },
      { name: 'Global AI Hackathon', date: '2025-06-20', location: 'online' }
    ],
    availableForOnline: true,
    githubUrl: 'https://github.com/sophiac',
    linkedinUrl: 'https://linkedin.com/in/sophiac',
    email: 'sophia@example.com'
  },
  {
    id: '3',
    name: 'Marcus Wei',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60',
    bio: 'Backend engineer specializing in scalable cloud solutions. Looking for frontend developers to team up with.',
    location: {
      city: 'London',
      country: 'UK'
    },
    skills: [
      { name: 'AWS', level: 'advanced' },
      { name: 'Java', level: 'advanced' },
      { name: 'Spring Boot', level: 'advanced' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'Kubernetes', level: 'intermediate' }
    ],
    hackathonInterests: [
      { name: 'London Tech Week Hackathon', date: '2025-06-12', location: 'London, UK' },
      { name: 'Cloud Innovation Challenge', date: '2025-07-25', location: 'online' }
    ],
    availableForOnline: true,
    githubUrl: 'https://github.com/marcusw',
    linkedinUrl: 'https://linkedin.com/in/marcusw',
    email: 'marcus@example.com'
  },
  {
    id: '4',
    name: 'Elena Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
    bio: 'Mobile app developer focused on React Native and Flutter. Looking to collaborate on hackathons that solve real-world problems.',
    location: {
      city: 'Barcelona',
      country: 'Spain'
    },
    skills: [
      { name: 'React Native', level: 'advanced' },
      { name: 'Flutter', level: 'intermediate' },
      { name: 'Firebase', level: 'intermediate' },
      { name: 'UI/UX', level: 'beginner' }
    ],
    hackathonInterests: [
      { name: 'Mobile Solutions Hackathon', date: '2025-05-20', location: 'Madrid, Spain' },
      { name: 'Global AI Hackathon', date: '2025-06-20', location: 'online' }
    ],
    availableForOnline: true,
    email: 'elena@example.com'
  },
  {
    id: '5',
    name: 'Jamal Kwame',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    bio: 'Data scientist with focus on NLP and computer vision. Eager to work on innovative AI projects in hackathons.',
    location: {
      city: 'Nairobi',
      country: 'Kenya'
    },
    skills: [
      { name: 'Python', level: 'advanced' },
      { name: 'TensorFlow', level: 'advanced' },
      { name: 'NLP', level: 'advanced' },
      { name: 'Computer Vision', level: 'intermediate' },
      { name: 'Data Visualization', level: 'intermediate' }
    ],
    hackathonInterests: [
      { name: 'AfricAI Challenge', date: '2025-08-10', location: 'Cape Town, South Africa' },
      { name: 'Global AI Hackathon', date: '2025-06-20', location: 'online' }
    ],
    availableForOnline: true,
    githubUrl: 'https://github.com/jamalk',
    linkedinUrl: 'https://linkedin.com/in/jamalk',
    email: 'jamal@example.com'
  },
  {
    id: '6',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60',
    bio: 'Product manager with technical background. Love connecting user needs with technical solutions in hackathons.',
    location: {
      city: 'Bangalore',
      country: 'India'
    },
    skills: [
      { name: 'Product Management', level: 'advanced' },
      { name: 'Agile', level: 'advanced' },
      { name: 'UI/UX', level: 'intermediate' },
      { name: 'JavaScript', level: 'beginner' }
    ],
    hackathonInterests: [
      { name: 'IndiaTech Hackathon', date: '2025-06-05', location: 'Mumbai, India' },
      { name: 'Product Innovation Challenge', date: '2025-07-15', location: 'online' }
    ],
    availableForOnline: true,
    linkedinUrl: 'https://linkedin.com/in/priyas',
    email: 'priya@example.com'
  },
  {
    id: '7',
    name: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=60',
    bio: 'DevOps engineer specializing in CI/CD pipelines and infrastructure as code. Looking for teammates interested in building scalable solutions.',
    location: {
      city: 'Seoul',
      country: 'South Korea'
    },
    skills: [
      { name: 'Kubernetes', level: 'advanced' },
      { name: 'Docker', level: 'advanced' },
      { name: 'Terraform', level: 'advanced' },
      { name: 'AWS', level: 'intermediate' },
      { name: 'Python', level: 'intermediate' }
    ],
    hackathonInterests: [
      { name: 'Cloud Native Hackathon', date: '2025-09-18', location: 'Tokyo, Japan' },
      { name: 'DevOps Challenge', date: '2025-10-05', location: 'online' }
    ],
    availableForOnline: true,
    githubUrl: 'https://github.com/davidk',
    email: 'david@example.com'
  },
  {
    id: '8',
    name: 'Aisha Mohammed',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop&q=60',
    bio: 'Frontend developer specializing in accessible web applications. Looking to create meaningful projects in hackathons.',
    location: {
      city: 'Dubai',
      country: 'UAE'
    },
    skills: [
      { name: 'React', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'Accessibility', level: 'advanced' },
      { name: 'CSS/SASS', level: 'intermediate' },
      { name: 'GraphQL', level: 'beginner' }
    ],
    hackathonInterests: [
      { name: 'AccessibilityHack', date: '2025-11-20', location: 'Amsterdam, Netherlands' },
      { name: 'Web Innovation Hackathon', date: '2025-12-05', location: 'online' }
    ],
    availableForOnline: true,
    githubUrl: 'https://github.com/aisham',
    linkedinUrl: 'https://linkedin.com/in/aisham',
    email: 'aisha@example.com'
  }
];

export const allSkills = [
  'React', 'Node.js', 'Python', 'TensorFlow', 'UI Design', 'Figma', 'HTML/CSS', 
  'JavaScript', 'AWS', 'Java', 'Spring Boot', 'Docker', 'Kubernetes', 'React Native', 
  'Flutter', 'Firebase', 'UI/UX', 'NLP', 'Computer Vision', 'Data Visualization', 
  'Product Management', 'Agile', 'Terraform', 'TypeScript', 'Accessibility', 'CSS/SASS', 
  'GraphQL'
];

export const allLocations = [
  { city: 'Seattle', country: 'USA' },
  { city: 'Toronto', country: 'Canada' },
  { city: 'London', country: 'UK' },
  { city: 'Barcelona', country: 'Spain' },
  { city: 'Nairobi', country: 'Kenya' },
  { city: 'Bangalore', country: 'India' },
  { city: 'Seoul', country: 'South Korea' },
  { city: 'Dubai', country: 'UAE' },
  { city: 'San Francisco', country: 'USA' },
  { city: 'Vancouver', country: 'Canada' },
  { city: 'Madrid', country: 'Spain' },
  { city: 'Cape Town', country: 'South Africa' },
  { city: 'Mumbai', country: 'India' },
  { city: 'Tokyo', country: 'Japan' },
  { city: 'Amsterdam', country: 'Netherlands' }
];

export const allHackathons = [
  { name: 'TechCrunch Disrupt', date: '2025-05-15', location: 'San Francisco, USA' },
  { name: 'Global AI Hackathon', date: '2025-06-20', location: 'online' },
  { name: 'DesignHack', date: '2025-04-10', location: 'Vancouver, Canada' },
  { name: 'London Tech Week Hackathon', date: '2025-06-12', location: 'London, UK' },
  { name: 'Cloud Innovation Challenge', date: '2025-07-25', location: 'online' },
  { name: 'Mobile Solutions Hackathon', date: '2025-05-20', location: 'Madrid, Spain' },
  { name: 'AfricAI Challenge', date: '2025-08-10', location: 'Cape Town, South Africa' },
  { name: 'IndiaTech Hackathon', date: '2025-06-05', location: 'Mumbai, India' },
  { name: 'Product Innovation Challenge', date: '2025-07-15', location: 'online' },
  { name: 'Cloud Native Hackathon', date: '2025-09-18', location: 'Tokyo, Japan' },
  { name: 'DevOps Challenge', date: '2025-10-05', location: 'online' },
  { name: 'AccessibilityHack', date: '2025-11-20', location: 'Amsterdam, Netherlands' },
  { name: 'Web Innovation Hackathon', date: '2025-12-05', location: 'online' }
];
