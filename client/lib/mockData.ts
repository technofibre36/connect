// Mock data for demonstration
export const categories = [
  { id: 'tech', name: 'Technology', icon: '' },
  { id: 'craft', name: 'Handicrafts', icon: '' },
  { id: 'social', name: 'Social Impact', icon: '' },
  { id: 'agriculture', name: 'Agriculture', icon: '' },
  { id: 'education', name: 'Education', icon: '' },
  { id: 'health', name: 'Healthcare', icon: '' },
  { id: 'environment', name: 'Environment', icon: '' },
  { id: 'food', name: 'Food & Beverage', icon: '' },
];

export interface Idea {
  id: string;
  title: string;
  entrepreneur: string;
  location: string;
  category: string;
  description: string;
  videoUrl?: string;
  imageUrl: string;
  targetAmount: number;
  raisedAmount: number;
  investorsCount: number;
  daysLeft: number;
  verified: boolean;
  tags: string[];
}

export const mockIdeas: Idea[] = [
  {
    id: '1',
    title: 'Solar-Powered Mobile Charger',
    entrepreneur: 'Ravi Kumar',
    location: 'Guwahati, Assam',
    category: 'tech',
    description: 'An affordable solar-powered charging solution for rural areas with frequent power cuts. Compact, portable, and eco-friendly.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800',
    targetAmount: 50000,
    raisedAmount: 32000,
    investorsCount: 42,
    daysLeft: 18,
    verified: true,
    tags: ['Solar Energy', 'Rural Tech', 'Sustainable'],
  },
  {
    id: '2',
    title: 'Bamboo Craft E-commerce Platform',
    entrepreneur: 'Priya Sharma',
    location: 'Indore, Madhya Pradesh',
    category: 'craft',
    description: 'Digital marketplace connecting local bamboo artisans with customers nationwide, preserving traditional crafts.',
    imageUrl: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800',
    targetAmount: 75000,
    raisedAmount: 48000,
    investorsCount: 67,
    daysLeft: 25,
    verified: true,
    tags: ['Handicrafts', 'E-commerce', 'Rural Employment'],
  },
  {
    id: '3',
    title: 'Smart Irrigation System for Small Farmers',
    entrepreneur: 'Arjun Patel',
    location: 'Surat, Gujarat',
    category: 'agriculture',
    description: 'IoT-based water management system that reduces water usage by 40% while improving crop yield.',
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    targetAmount: 100000,
    raisedAmount: 73000,
    investorsCount: 89,
    daysLeft: 12,
    verified: true,
    tags: ['AgriTech', 'IoT', 'Water Conservation'],
  },
  {
    id: '4',
    title: 'Regional Language Learning App',
    entrepreneur: 'Meera Singh',
    location: 'Bhubaneswar, Odisha',
    category: 'education',
    description: 'Gamified app to teach regional languages to children through stories, games, and interactive lessons.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    targetAmount: 60000,
    raisedAmount: 15000,
    investorsCount: 28,
    daysLeft: 30,
    verified: true,
    tags: ['EdTech', 'Language', 'Mobile App'],
  },
  {
    id: '5',
    title: 'Organic Honey Production & Distribution',
    entrepreneur: 'Vikram Reddy',
    location: 'Coimbatore, Tamil Nadu',
    category: 'food',
    description: 'Direct-to-consumer organic honey from tribal beekeepers, ensuring fair prices and quality.',
    imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784354?w=800',
    targetAmount: 40000,
    raisedAmount: 28000,
    investorsCount: 35,
    daysLeft: 20,
    verified: true,
    tags: ['Organic', 'Fair Trade', 'Rural Livelihood'],
  },
  {
    id: '6',
    title: 'Menstrual Health Awareness Platform',
    entrepreneur: 'Anjali Verma',
    location: 'Jaipur, Rajasthan',
    category: 'social',
    description: 'Community-driven platform providing education and affordable products for menstrual health in rural areas.',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800',
    targetAmount: 55000,
    raisedAmount: 41000,
    investorsCount: 53,
    daysLeft: 15,
    verified: true,
    tags: ['Women Health', 'Social Impact', 'Awareness'],
  },
];

export const stats = {
  totalIdeasFunded: 1247,
  totalInvestorsActive: 8932,
  totalAmountRaised: 4250000,
  successfulStartups: 342,
  citiesCovered: 156,
  mentorsActive: 234,
};

export interface Mentor {
  id: string;
  name: string;
  expertise: string[];
  location: string;
  imageUrl: string;
  experience: string;
  menteeCount: number;
}

export const mockMentors: Mentor[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    expertise: ['Technology', 'Product Development', 'Scaling'],
    location: 'Bangalore',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    experience: 'Ex-CTO at Tech Startup, IIT Delhi Alumnus',
    menteeCount: 23,
  },
  {
    id: '2',
    name: 'Sneha Desai',
    expertise: ['Marketing', 'Social Impact', 'Fundraising'],
    location: 'Mumbai',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    experience: 'Social Entrepreneur, 10+ years in NGO sector',
    menteeCount: 18,
  },
  {
    id: '3',
    name: 'Amit Agarwal',
    expertise: ['Agriculture', 'Rural Development', 'Supply Chain'],
    location: 'Lucknow',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    experience: 'AgriTech Founder, IIM Ahmedabad',
    menteeCount: 31,
  },
];
