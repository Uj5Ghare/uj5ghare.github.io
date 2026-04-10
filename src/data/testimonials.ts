export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  context: string;
  date: string;
  source?: 'linkedin' | 'personal' | 'recognition';
}

export const testimonials: Testimonial[] = [
  {
    id: 'technical-excellence',
    quote: '"Technical excellence without business intelligence is just an expensive hobby."',
    author: 'Ujwal Pachghare',
    role: 'DevOps Journey Reflection',
    context: 'Key learning from AI-Manthan Hackathon where understanding business impact transformed engineering into problem-solving.',
    date: 'January 2025',
    source: 'linkedin',
  },
  {
    id: 'problem-solver',
    quote: '"The code is only half the battle. Understanding the why behind what you\'re building – the business impact, the stakeholder pain points, the ROI – that\'s what transforms engineers into problem-solvers."',
    author: 'Ujwal Pachghare',
    role: 'DevOps Engineer',
    context: 'Insight gained during third hackathon experience, emphasizing the importance of business context in software development.',
    date: 'January 2025',
    source: 'linkedin',
  },
  {
    id: 'charusat-journey',
    quote: '"CHARUSAT wasn\'t just about books and lectures; it was about learning, fun, and the little things that made the journey worthwhile."',
    author: 'Ujwal Pachghare',
    role: 'B.Tech Graduate (9.35 CGPA)',
    context: 'Reflection on four years of college life balancing academics, research, sports, and friendships.',
    date: 'January 2025',
    source: 'linkedin',
  },
  {
    id: 'sports-tech-synergy',
    quote: '"Beyond coding challenges, it\'s always about adapting, improving, and accepting change."',
    author: 'Ujwal Pachghare',
    role: 'DevOps Engineer & Cloud Specialist',
    context: 'Philosophy on continuous learning and growth, applied both on the football field and in technology.',
    date: 'January 2024',
    source: 'linkedin',
  },
  {
    id: 'team-star-recognition',
    quote: '"This recognition isn\'t just about a moment or an award—it\'s about the culture we\'ve cultivated here. A place where ownership, growth, and collaboration are more than just values—they\'re part of the everyday."',
    author: 'Ujwal Pachghare',
    role: 'Team Star Award Recipient',
    context: 'Received Team Star Award at Digiflux Technologies Annual Townhall for outstanding contributions over nine months.',
    date: 'June 2024',
    source: 'linkedin',
  },
];

export const quotes = [
  {
    text: 'Automating infrastructure and optimizing cloud costs for scalable solutions',
    context: 'Professional tagline',
  },
  {
    text: 'Where DevOps Meets Reliability',
    context: 'Alternative tagline',
  },
  {
    text: 'DevOps Engineer ☁️ | Cloud Specialist � | SRE �',
    context: 'Identity statement',
  },
  {
    text: 'Hope amidst every winter, we find an invincible summer awaiting.',
    context: 'Personal philosophy on perseverance',
  },
];

// Key moments from LinkedIn posts for timeline/story
export const milestones = [
  {
    date: 'January 2025',
    title: 'Top 10 Finalist - AI-Manthan Hackathon',
    description: '24 hours. Zero Sleep. One Mission. Team Innovatrix built ForeSight, an enterprise-grade ML platform for IT project risk prediction.',
    impact: 'Top 10 out of 70+ proposals',
  },
  {
    date: 'January 2025',
    title: 'CHARUSAT Convocation - 9.35 CGPA',
    description: 'Officially graduated with B.Tech in Computer Engineering. Four years of learning, research, sports, and unforgettable memories.',
    impact: '9.35 CGPA with 2 published papers',
  },
  {
    date: 'October 2024',
    title: 'Research Paper Published in Springer',
    description: 'Published "Revolutionizing Educational Assessment" in Springer LNNS series. Months of hard work culminating in SCOPUS-indexed publication.',
    impact: 'First author contribution',
  },
  {
    date: 'August 2024',
    title: 'Research Paper Published in AIP',
    description: 'Published "Enhancing Small Object Detection" in AIP Conference Proceedings. Presented at ICRAIC 2024.',
    impact: 'Indexed in Web of Science',
  },
  {
    date: 'June 2024',
    title: 'Team Star Award - Digiflux Technologies',
    description: 'Recognized at Annual Townhall for outstanding contributions across multiple projects over nine months.',
    impact: 'Company-wide recognition',
  },
  {
    date: 'January 2024',
    title: 'Promoted to Associate Software Engineer',
    description: 'Transitioned from intern to full-time Associate Software Engineer at Digiflux Technologies.',
    impact: 'Career milestone',
  },
  {
    date: 'August 2023',
    title: 'Joined Digiflux as AI-ML Intern',
    description: 'Started internship focusing on end-to-end ML applications with LangChain, OpenAI, and AWS Sagemaker.',
    impact: 'Entry into AI/ML industry',
  },
  {
    date: 'May 2023',
    title: 'L&T Technology Services Internship',
    description: 'Web Development internship working with ASP.NET MVC and Core, building client request forms.',
    impact: 'Full-stack development experience',
  },
  {
    date: 'November 2022',
    title: 'Completed Motorola Solutions Training',
    description: 'Six-month MEAN Stack developer training specializing in Angular, Node.js, and Express.',
    impact: 'MEAN stack proficiency',
  },
  {
    date: 'December 2022',
    title: 'Attended IndoML at IIT Gandhinagar',
    description: 'Participated in Indian Symposium on Machine Learning, engaging with leading researchers.',
    impact: 'Research exposure',
  },
];
