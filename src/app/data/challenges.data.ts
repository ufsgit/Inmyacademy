import { Challenge } from './competition.models';

export const OPEN_CHALLENGES: Challenge[] = [
  {
    id: 1,
    slug: 'creative-storytelling-certificate',
    title: 'Creative Storytelling Certificate',
    tagline: 'Imagine. Create. Share.',
    ageGroup: 'Ages 4-10',
    ageGroupColor: 'green',
    icon: 'book-open',
    description: 'Uncover the essentials of crafting compelling stories from start to finish. Bring your imagination to life and capture your audience\'s attention.',
    task: 'Create a 1-2 minute video sharing your original tale using sketches, props, or pure narration.',
    earn: 'Junior Storyteller Certificate',
    extras: 'Storytelling templates and access to our online imagination workshop series.',
    entryFee: 1,
    format: '1-2 min video',
    challengeDetails: [
      'An original fairy tale',
      'A story about a magical adventure',
      'A personal narrative about a special day',
      'A creative story using sketches or props'
    ],
    scoringCriteria: [
      'Story structure',
      'Creativity and imagination',
      'Delivery and pacing',
      'Use of props/narration'
    ],
    rewards: [
      '£100 Prize',
      'Champion Prize',
      'Recognition',
      'Global Acknowledgment',
      'Certificate',
      'Official Award'
    ]
  },
  {
    id: 2,
    slug: 'global-oratory-and-communication-certificate',
    title: 'Global Oratory and Communication Certificate',
    tagline: 'Speak. Inspire. Influence.',
    ageGroup: 'All Ages',
    ageGroupColor: 'blue',
    icon: 'message-circle',
    description: 'Communication is one of the most powerful leadership skills. This challenge invites participants to deliver a short speech that inspires or informs an audience.',
    task: 'Record a 1-2 minute video speech or pitch on a passion topic, like sustainability or personal interests.',
    earn: 'Oratory Excellence Certificate',
    extras: 'Public speaking tip sheets and invites to virtual debate clubs.',
    entryFee: 1,
    format: '3-5 min video',
    challengeDetails: [
      'A global issue',
      'A personal experience',
      'A leadership idea',
      'A leadership idea'
    ],
    scoringCriteria: [
      'Speech clarity',
      'Confidence and delivery',
      'Message strength',
      'Audience engagement'
    ],
    rewards: [
      '£100 Prize',
      'Champion Prize',
      'Recognition',
      'Global Acknowledgment',
      'Certificate',
      'Official Award'
    ]
  },
  {
    id: 3,
    slug: 'entrepreneurship-and-innovation-accelerator',
    title: 'Entrepreneurship and Innovation Accelerator',
    tagline: 'Solve. Build. Pitch.',
    ageGroup: 'Ages 11+',
    ageGroupColor: 'red',
    icon: 'lightbulb',
    description: 'Spot everyday challenges and devise innovative fixes. Develop a business mindset and learn how to present your ideas with confidence.',
    task: 'Pitch your idea in a sharp 90-second video, outlining beneficiaries, mechanics, and standout features.',
    earn: 'Emerging Innovator Credential',
    extras: 'Business plan templates and mentorship matching opportunities.',
    entryFee: 1,
    format: '90-second video',
    challengeDetails: [
      'An innovative solution to a daily problem',
      'A green technology or sustainability idea',
      'A social enterprise helping your community',
      'A mobile app concept that fills a gap'
    ],
    scoringCriteria: [
      'Problem definition',
      'Solution innovation',
      'Business viability',
      'Pitch confidence'
    ],
    rewards: [
      '£100 Prize',
      'Champion Prize',
      'Recognition',
      'Global Acknowledgment',
      'Certificate',
      'Official Award'
    ]
  },
  {
    id: 4,
    slug: 'app-design-and-logic-certification',
    title: 'App Design and Logic Certification',
    tagline: 'Design. Prototype. Explain.',
    ageGroup: 'Ages 5+',
    ageGroupColor: 'blue',
    icon: 'smartphone',
    description: 'Brainstorm an app concept, draw key screens, and outline simple interactions.',
    task: 'Present in a 2-minute video — no code necessary.',
    earn: 'Digital Design Certification',
    extras: 'UI/UX starter kits and logic puzzle resources.',
    entryFee: 1,
    format: '2 min video',
    challengeDetails: [
      'An app helping students study better',
      'A game concept with logic puzzles',
      'A tool for tracking healthy habits',
      'An interactive app for local library books'
    ],
    scoringCriteria: [
      'UI/UX creativity',
      'Logic and user flow',
      'Value proposition',
      'Explanation clarity'
    ],
    rewards: [
      '£100 Prize',
      'Champion Prize',
      'Recognition',
      'Global Acknowledgment',
      'Certificate',
      'Official Award'
    ]
  },
  {
    id: 5,
    slug: 'quickchef-culinary-mastery-award',
    title: 'QuickChef Culinary Mastery Award',
    tagline: 'Prep. Cook. Serve.',
    ageGroup: 'Open to All Ages',
    ageGroupColor: 'orange-outline',
    icon: 'chef-hat',
    description: 'Race the clock for 25 minutes to prepare a dish from scratch.',
    task: 'Capture the journey and edit into a 2-minute video sharing its personal story.',
    earn: 'Culinary Speed Mastery Award',
    extras: 'Recipe archives and virtual cooking class previews.',
    entryFee: 1,
    format: '2 min video',
    challengeDetails: [
      'A family recipe with a personal twist',
      'A quick and healthy breakfast option',
      'A creative dessert using three main ingredients',
      'A traditional dish presented in a modern style'
    ],
    scoringCriteria: [
      'Culinary skills & speed',
      'Dish presentation',
      'Storytelling connection',
      'Recipe execution'
    ],
    rewards: [
      '£100 Prize',
      'Champion Prize',
      'Recognition',
      'Global Acknowledgment',
      'Certificate',
      'Official Award'
    ]
  },
  {
    id: 6,
    slug: 'diplomatic-policy-leadership',
    title: 'Diplomatic Policy Leadership',
    tagline: 'Govern. Debate. Lead.',
    description: 'Dive into governance, diplomacy, and global relations — from public policy and civic leadership to persuasive debate and campaign strategy.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'briefcase',
    task: 'Submit a policy pitch or debate video for shortlisting.',
    earn: 'Global Diplomatic Leader Certificate',
    extras: 'Policy templates and access to virtual youth summits.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A comprehensive policy memo on global environmental cooperation',
      'A campaign strategy proposal for a mock electoral campaign',
      'A mock UN General Assembly diplomatic resolution document',
      'A persuasive speech advocating for constitutional reform'
    ],
    scoringCriteria: [
      'Diplomatic poise & presentation',
      'Policy research depth',
      'Strategic argumentation',
      'Solution feasibility'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Partner University scholarships',
      'Internship introductions',
      'Official Digital Credentials'
    ]
  },
  {
    id: 7,
    slug: 'legal-advocacy-professional',
    title: 'Legal Advocacy Professional',
    tagline: 'Defend. Argue. Excel.',
    description: 'Understand justice systems, legal research, case writing, and courtroom communication.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'scale',
    task: 'Submit a mock-trial or advocacy video.',
    earn: 'Advocacy & Legal Reasoning Credential',
    extras: 'Legal writing guides and virtual courtroom workshops.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A defense argument in a mock civil liability lawsuit',
      'A constitutional law legal brief on privacy rights',
      'An opening statement for a mock criminal prosecution',
      'A case analysis of a landmark international trade dispute'
    ],
    scoringCriteria: [
      'Legal reasoning accuracy',
      'Courtroom delivery & eloquence',
      'Evidence analysis quality',
      'Rebuttal responsiveness'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Scholarship pathways',
      'Virtual courtroom internships',
      'Official Digital Credentials'
    ]
  },
  {
    id: 8,
    slug: 'advanced-research-publication',
    title: 'Advanced Research Publication',
    tagline: 'Discover. Analyze. Publish.',
    description: 'Apply real-world science and engineering skills — from research design to data storytelling.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'search',
    task: 'Submit a research abstract or visualisation.',
    earn: 'Academic Research Fellow Certificate',
    extras: 'Research toolkits and academic publishing resources.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A scientific research abstract on renewable energy storage',
      'A data visualization dashboard analyzing public health trends',
      'A literature review on machine learning ethics',
      'An experimental research plan for smart city infrastructure'
    ],
    scoringCriteria: [
      'Scientific methodology validity',
      'Data visualization clarity',
      'Academic writing quality',
      'Q&A defense poise'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Scholarship pathways',
      'Research lab introductions',
      'Official Digital Credentials'
    ]
  },
  {
    id: 9,
    slug: 'digital-media-strategy',
    title: 'Digital Media Strategy',
    tagline: 'Create. Brand. Captivate.',
    description: 'Create high-impact media content — mastering storytelling, editing, branding, and campaign strategy.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'video',
    task: 'Submit a digital media piece or article.',
    earn: 'Digital Media Strategist Certificate',
    extras: 'Media starter packs and virtual journalism labs.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A multi-platform launch strategy for a social cause',
      'An original mini-documentary script and storyboards',
      'A digital journalism editorial on AI and future of work',
      'A viral video content strategy with analytics projection'
    ],
    scoringCriteria: [
      'Creative visual design',
      'Storytelling emotional impact',
      'Strategic marketing alignment',
      'Editing & technical quality'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Scholarship pathways',
      'Agency internship introductions',
      'Official Digital Credentials'
    ]
  },
  {
    id: 10,
    slug: 'entrepreneurial-visionary-accelerator',
    title: 'Entrepreneurial Visionary Accelerator',
    tagline: 'Innovate. Scale. Succeed.',
    description: 'Turn ideas into ventures — explore innovation, market research, finance basics, and pitching mastery.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'trending-up',
    task: 'Submit a business pitch video.',
    earn: 'Emerging Venture Entrepreneur Certificate',
    extras: 'Business plan templates and mentorship opportunities.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A startup business plan with financial projections',
      'An investor deck for a sustainable consumer product',
      'A minimum viable product (MVP) design and user study',
      'A market entry strategy for a fintech application'
    ],
    scoringCriteria: [
      'Business model viability',
      'Innovation & uniqueness',
      'Pitch confidence & deck quality',
      'Financial projections logic'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Scholarship pathways',
      'Venture capital introductions',
      'Official Digital Credentials'
    ]
  },
  {
    id: 11,
    slug: 'executive-project-management',
    title: 'Executive Project Management',
    tagline: 'Plan. Organize. Deliver.',
    description: 'Master leadership, time management, risk handling, and execution excellence.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'clipboard-list',
    task: 'Submit a project plan or simulation.',
    earn: 'Executive Project Lead Certificate',
    extras: 'Leadership frameworks and project templates.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A detailed project charter and Gantt chart',
      'A risk management mitigation plan for a large event',
      'A budget allocation model for smart school upgrading',
      'A team coordination framework and communication plan'
    ],
    scoringCriteria: [
      'Planning logic & Gantt accuracy',
      'Risk management adequacy',
      'Resource allocation efficiency',
      'Presentation clarity & professionalism'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Scholarship pathways',
      'PM mentor pairings',
      'Official Digital Credentials'
    ]
  },
  {
    id: 12,
    slug: 'global-communication-mastery',
    title: 'Global Communication Mastery',
    tagline: 'Articulate. Connect. Persuade.',
    description: 'Develop confident communication through structured speech, presentation, and persuasive dialogue.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'globe',
    task: 'Submit a communication analysis video.',
    earn: 'Global Communication Master Certificate',
    extras: 'Public speaking guides and debate resources.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A persuasive speech on the importance of global citizenship',
      'A communication analysis paper of famous speeches',
      'A mock panel moderation and interview session video',
      'A crisis communication statement for a corporate scenario'
    ],
    scoringCriteria: [
      'Elocution and body language',
      'Message structure & timing',
      'Persuasive rhetoric use',
      'Handling of Q&A session'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Scholarship pathways',
      'Public relations mentor matching',
      'Official Digital Credentials'
    ]
  },
  {
    id: 13,
    slug: 'digital-systems-architecture',
    title: 'Digital Systems Architecture',
    tagline: 'Code. Architect. Scale.',
    description: 'Design the future — from coding logic and software design to complex system building.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'cpu',
    task: 'Submit a system design architecture plan.',
    earn: 'Software Systems Architect Certificate',
    extras: 'Coding templates and cloud architecture credits.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A microservices system architecture diagram for e-commerce',
      'A database schema design for a high-traffic app',
      'A cloud infrastructure cost optimization proposal',
      'A cybersecurity threat modeling plan for online school'
    ],
    scoringCriteria: [
      'Architectural scalability logic',
      'System security considerations',
      'Technology stack justification',
      'Tech explanation clarity'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Scholarship pathways',
      'Tech firm virtual internships',
      'Official Digital Credentials'
    ]
  },
  {
    id: 14,
    slug: 'investment-banking-elite',
    title: 'Investment Banking Elite',
    tagline: 'Model. Value. Advise.',
    description: 'Understand global finance — investment banking, markets, M&A, ethics, and modelling.',
    ageGroup: 'Age: 16+',
    ageGroupColor: 'red',
    icon: 'dollar-sign',
    task: 'Submit a financial model or market analysis.',
    earn: 'Investment Banking Associate Credential',
    extras: 'Financial modelling templates and industry reports.',
    entryFee: 25,
    format: '3-5 min video',
    challengeDetails: [
      'A discounted cash flow (DCF) valuation model for a tech firm',
      'A mock merger and acquisition (M&A) proposal document',
      'A stock market sector research and buy/sell recommendation',
      'A macroeconomic forecast and investment impact analysis'
    ],
    scoringCriteria: [
      'Modeling math accuracy',
      'Valuation logic depth',
      'Market research validity',
      'Finance presentation style'
    ],
    rewards: [
      '£20,000 Prize Pool access',
      'Champion Trophy',
      'Gold Medal & Certificate',
      'Scholarship pathways',
      'Finance firm introductions',
      'Official Digital Credentials'
    ]
  }
];
