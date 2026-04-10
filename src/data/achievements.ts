export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: 'award' | 'publication' | 'certification' | 'hackathon' | 'event' | 'badge';
  icon?: string;
  link?: string;
  image?: string;
  metrics?: string;
}

export const achievements: Achievement[] = [
  // Awards & Recognition
  {
    id: 'team-star-award',
    title: 'Team Star Award',
    organization: 'Digiflux Technologies',
    date: 'June 2024',
    description: 'Recognized at the first Annual Townhall for outstanding contributions, dedication, and performance across multiple projects over nine months.',
    category: 'award',
    metrics: '9 months of excellence',
  },
  {
    id: 'ai-manthan-top10',
    title: 'Top 10 Finalist - AI-Manthan Hackathon',
    organization: 'AtliQ Technologies',
    date: 'January 2025',
    description: 'Selected as Top 10 finalist among 70+ teams for building ForeSight, an enterprise-grade ML-powered operational risk prediction system for IT projects.',
    category: 'hackathon',
    metrics: 'Top 10 out of 70+ proposals',
  },
  {
    id: 'charusat-convocation',
    title: 'B.Tech Graduation with 9.35 CGPA',
    organization: 'CHARUSAT - 14th Convocation',
    date: 'January 2025',
    description: 'Graduated with distinction in Computer Engineering (9.35 CGPA) from Charotar University of Science and Technology.',
    category: 'award',
    metrics: 'CGPA: 9.35/10',
  },

  // Research Publications
  {
    id: 'springer-ictis-2024',
    title: 'Revolutionizing Educational Assessment: Deep Learning for Question Paper Quality Evaluation',
    organization: 'Springer Nature - ICTIS 2024',
    date: 'April 2024',
    description: 'Published in Springer LNNS series (Lecture Notes in Networks and Systems). Indexed by SCOPUS, EI Compendex, INSPEC, zbMATH, and SCImago. First author contribution.',
    category: 'publication',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-6681-9_11',
    metrics: 'First Author | SCOPUS Indexed',
  },
  {
    id: 'aip-icraic-2024',
    title: 'Enhancing Small Object Detection in Aerial Imagery Using YOLOv8 Architecture',
    organization: 'AIP Conference Proceedings - ICRAIC 2024',
    date: 'May 2024',
    description: 'Published in AIP Conference Proceedings (Volume 3255, Issue 1, 2025). Presented at International Conference on Robotics, Automation, and Intelligent Computing. Indexed in SCOPUS and Web of Science.',
    category: 'publication',
    link: 'https://pubs.aip.org/aip/acp/article-abstract/3255/1/030001/3333223/Enhancing-small-object-detection-in-aerial-imagery',
    metrics: 'Co-author | Web of Science',
  },

  // Certifications
  {
    id: 'nvidia-certified',
    title: 'NVIDIA Certified Professional',
    organization: 'NVIDIA',
    date: '2024',
    description: 'Certified in AI and Deep Learning fundamentals by NVIDIA.',
    category: 'certification',
    metrics: '1x NVIDIA Certified',
  },
  {
    id: 'google-cloud-2023',
    title: 'Google Cloud Computing Foundations',
    organization: 'Google Cloud Study Jam 2023',
    date: 'November 2023',
    description: 'Completed 8 badges covering infrastructure, networking, data, ML, security, storage, and cloud resource management on Google Cloud Platform.',
    category: 'certification',
    link: 'https://lnkd.in/da4jrMCc',
    metrics: '8 Badges Earned',
  },
  {
    id: 'google-cloud-2022',
    title: 'Cloud Engineer Learning Path',
    organization: 'Google Cloud Career Practitioners 2022',
    date: 'December 2022',
    description: 'Completed Cloud Engineer Learning Path with hands-on labs covering Google Cloud infrastructure, storage, and networking.',
    category: 'certification',
    link: 'https://lnkd.in/drCeUph5',
  },
  {
    id: 'nptel-cloud',
    title: 'NPTEL Cloud Computing (Elite Certificate)',
    organization: 'IIT Kharagpur',
    date: 'December 2023',
    description: 'Completed 12-week Cloud Computing course with 66% score (Elite Certificate). Covered cloud architecture, service management, security, and cutting-edge research including Fog Computing.',
    category: 'certification',
    metrics: 'Elite Certificate | 66% Score',
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    organization: 'CHARUSAT - AWS Academy',
    date: 'October 2023',
    description: 'Successfully completed AWS Certified Cloud Practitioner course and passed university-level exam covering cloud fundamentals.',
    category: 'certification',
  },

  // Competitive Programming & Badges
  {
    id: 'leetcode-100days',
    title: 'LeetCode 100 Days Badge',
    organization: 'LeetCode',
    date: '2023',
    description: 'Achieved 100 Days Badge by solving problems consistently for 100+ days in 2023. Demonstrates dedication to competitive programming and problem-solving.',
    category: 'badge',
    link: 'https://leetcode.com/ujwal5ghare',
    metrics: '100+ Days Streak',
  },

  // Events & Conferences
  {
    id: 'indoml-2022',
    title: 'Indian Symposium on Machine Learning (IndoML)',
    organization: 'IIT Gandhinagar',
    date: 'December 2022',
    description: 'Attended the third edition of IndoML hosted by IIT Gandhinagar. Engaged with leading research groups and experts, gaining invaluable perspectives on ML research.',
    category: 'event',
  },
  {
    id: 'ictis-2024-presentation',
    title: 'Paper Presentation at ICTIS 2024',
    organization: 'Renaissance Hotel, Ahmedabad',
    date: 'April 2024',
    description: 'Presented research paper on "Deep Learning for Question Paper Quality Evaluation" at the 8th International Conference on Information and Communication Technology for Intelligent Systems.',
    category: 'event',
  },
  {
    id: 'icraic-2024-presentation',
    title: 'Paper Presentation at ICRAIC 2024',
    organization: 'RAME (Online)',
    date: 'May 2024',
    description: 'Presented research on "Small Bird Detection using YOLOv8" at the Second International Conference on Robotics, Automation, and Intelligent Computing.',
    category: 'event',
  },
  {
    id: 'azadi-hackathon-2022',
    title: 'Azadi Ka Amrit Mahotsav Hackathon',
    organization: 'Education Department, Govt. of Gujarat',
    date: 'March 2022',
    description: 'Participated in National Level Hackathon hosted by CHARUSAT. Developed a Chatbot for GTU using RASA, Flutter, and Firebase in 36-hour marathon.',
    category: 'hackathon',
    metrics: '36-hour Hackathon',
  },
  {
    id: 'maker-fest-2023',
    title: 'Maker Fest Vadodara 2023',
    organization: 'Yuvalay MakerSpace & Vadodara Innovation Council',
    date: 'January 2023',
    description: 'Volunteered as content writer, interviewing and documenting innovations by makers and enthusiasts. Co-hosted by The Maharaja Sayajirao University of Baroda.',
    category: 'event',
  },

  // Student Organizations
  {
    id: 'cldc-core-team',
    title: 'AI/ML Core Team Member',
    organization: 'CLDC - CHARUSAT Learning And Development Club',
    date: '2023',
    description: 'Selected as AI/ML core team member in student-led organization providing corporate culture environment and developing crucial skills for future careers.',
    category: 'award',
  },

  // Sports Achievements
  {
    id: 'football-team-2023',
    title: 'CHARUSAT Football Team - National Tournament',
    organization: 'National West Zone Inter-University Football Tournament',
    date: '2023',
    description: 'Represented CHARUSAT at the National West Zone Inter-University Football Tournament 2023, balancing sports excellence with academic achievements.',
    category: 'award',
    metrics: 'National Level',
  },
  {
    id: 'football-team-2022',
    title: 'CHARUSAT Football Team - National Tournament',
    organization: 'National West Zone Inter-University Football Tournament',
    date: '2022',
    description: 'Represented CHARUSAT at the National West Zone Inter-University Football Tournament 2022.',
    category: 'award',
    metrics: 'National Level',
  },
];

export const achievementsByCategory = {
  awards: achievements.filter(a => a.category === 'award'),
  publications: achievements.filter(a => a.category === 'publication'),
  certifications: achievements.filter(a => a.category === 'certification'),
  hackathons: achievements.filter(a => a.category === 'hackathon'),
  events: achievements.filter(a => a.category === 'event'),
  badges: achievements.filter(a => a.category === 'badge'),
};

export const highlightedAchievements = [
  achievements.find(a => a.id === 'ai-manthan-top10'),
  achievements.find(a => a.id === 'team-star-award'),
  achievements.find(a => a.id === 'springer-ictis-2024'),
  achievements.find(a => a.id === 'aip-icraic-2024'),
  achievements.find(a => a.id === 'charusat-convocation'),
  achievements.find(a => a.id === 'leetcode-100days'),
].filter(Boolean);
