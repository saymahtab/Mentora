export const mentors = [
  {
    _id: '1',
    user: "64895cf345e3a97d6b49f1b1",
    profileImg: 'https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/660a857811b6d.webp?d=240x240',
    banner: '/cover1.png',
    firstName: 'Yash',
    lastName: 'Patel',
    bio: "Strategy Manager @CEO Office | Want to Join the Top 1% league? | Ex-eBay & L&T | MDI Gurgaon . ESCP Europe | 32+ National Case Comps Podiums | Traveled to 23+ Countries",
    currentOrganization: "",
    organisationLogo: '',
    industry: "Technology",
    isTopMentor: true,
    currentRole: "Senior Developer",
    totalExperience: 15,
    shortHeading: "Helping you become a full-stack powerhouse.",
    about: "With over 15 years in development, I’ve mentored junior devs, and delivered industry-proven practices to help build their careers in tech.",
    languages: ["English", "Spanish"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/alexbaker",
      twitter: "https://twitter.com/alexbakerdev"
    },
    expertise: {
      domain: "Business And Management",
      topics: ['Web Development Basics', 'Master JavaScript', 'React & Node.js', 'DevOps Essentials'],
      skills: ["JavaScript", "React", "Node.js", "Cloud Computing", "CI/CD"]
    },
    experience: [
      {
        _id:'1',
        work: 'Full Stack Developer',
        designation: "Senior Developer",
        sector: "Technology",
        employmentType: "Full-time",
        organization: "Google",
        isCurrent: true,
        from: '2015',
        to:'present',
        location: { country: "USA", state: "California", city: "Mountain View" },
      },
      {
        _id:'1',
        work: 'Strategic Global Project Intern',
        designation: "Senior Developer",
        sector: "Technology",
        employmentType: "Full-time",
        organization: "Ebay",
        isCurrent: true,
        from: '2015',
        to:'present',
        location: { country: "USA", state: "California", city: "Mountain View" },
      }
    ],
    education: [
      {
        _id:'1',
        qualification: "Master of Computer Science",
        degree: "MiM",
        from: '2022',
        to: '2024',
        specialization: "Software Engineering",
        university: "ESCP Business School, Berlin campus, Berlin, Germany",
        location: { country: "USA", state: "California", city: "Stanford" },
      },
      {
        _id:'2',
        qualification: "Master of Computer Science",
        degree: "MSc in Computer Science",
        from: '2010',
        to: '2012',
        specialization: "Software Engineering",
        university: "Stanford University",
        location: { country: "USA", state: "California", city: "Stanford" },
      },
      {
        _id:'3',
        qualification: "Master of Computer Science",
        degree: "B.E",
        from: '2014',
        to: '2018',
        specialization: "Software Engineering",
        university: "Maharaja Sayajirao University of Baroda (MSU), Vadodara",
        location: { country: "USA", state: "California", city: "Stanford" },
      }
    ],
    services: [
      { 
        _id: '1', 
        name: "Code Review", 
        description: "Detailed review of your code with suggestions for improvement", 
        duration: "60 Min", 
        price: 1200, 
        discountPrice: 900 
      },
      { 
        _id: '2', 
        name: "Web Dev Coaching", 
        description: "Full guidance on setting up your web projects", 
        duration: "90 Min", 
        price: 2000, 
        discountPrice: 1800 
      }
    ],
    availability: [
      { day: "Tuesday", isActive: true, slots: ["1:00 PM - 4:00 PM"] },
      { day: "Thursday", isActive: true, slots: ["9:00 AM - 12:00 PM"] }
    ],
    payments: [
      {
        mentee: "64895cf345e3a97d6b49f1b2",
        status: "received",
        platformFee: 100,
        paymentAmount: 1200,
        price: 1100,
      }
    ],
    reviews: [
      { 
        _id:'1',
        menteeName: "Michael Tan",
        profileImg: "https://randomuser.me/api/portraits/men/44.jpg",
        date: '08 Nov 24',
        time: '01:10 PM',
        message: "Alex gave me a new perspective on JavaScript optimizations. His deep understanding is remarkable! Alex gave me a new perspective on JavaScript optimizations. His deep understanding is remarkable!Alex gave me a new perspective on JavaScript optimizations. His deep understanding is remarkable!", 
        rating: 5 
      },
      { 
        _id:'2',
        menteeName: "Michael Tan",
        profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
        date: '08 Nov 24',
        time: '01:10 PM',
        message: "Alex gave me a new perspective on JavaScript optimizations. His deep understanding is remarkable! Alex gave me a new perspective on JavaScript optimizations. His deep understanding is remarkable!", 
        rating: 4 
      },
      { 
        _id:'3',
        menteeName: "Michael Tan",
        profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
        date: '08 Nov 24',
        time: '01:10 PM',
        message: "Alex gave me a new perspective on JavaScript optimizations. His deep understanding is remarkable!", 
        rating: 5 
      }
    ],
    totalSessions: 1416,
    totalDuration: 3550,
    totalReviews: 168,
    avgRating: 4.9,
  },
  {
    _id: '2',
    user: "64895cf345e3a97d6b49f1b2",
    profileImg: 'https://randomuser.me/api/portraits/men/7.jpg',
    banner: '/cover1.png',
    firstName: 'Rahul',
    lastName: 'Verma',
    bio: "Data Science Lead @ Amazon | Data Enthusiast | AI Speaker | Ph.D. in Computer Science",
    currentOrganization: "Amazon",
    organisationLogo: '',
    industry: "Data Science",
    isTopMentor: false,
    currentRole: "Lead Data Scientist",
    totalExperience: 8,
    shortHeading: "Helping you master Data Science and Machine Learning.",
    about: "With over 8 years in the field, I've mentored 150+ professionals in transitioning to data science, building ML models, and preparing for tech interviews.",
    languages: ["English", "Hindi"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/rahulverma",
      twitter: "https://twitter.com/rahulverma"
    },
    expertise: {
      domain: "Engineering, Technology & Data",
      topics: ['Data Analysis', 'Model Building', 'Career Transitions', 'Python', 'R Programming'],
      skills: ["Python", "Machine Learning", "Data Visualization", "NLP"]
    },
    experience: [
      {
        _id:'1',
        work: 'Senior Data Scientist',
        designation: "Lead Data Scientist",
        sector: "Technology",
        employmentType: "Full-time",
        organization: "Microsoft",
        isCurrent: true,
        from: '2019',
        to: '2024',
        location: { country: "USA", state: "Washington", city: "Seattle" },
      },
      {
        _id:'2',
        work: 'Data Analyst',
        designation: "Analyst",
        sector: "Technology",
        employmentType: "Full-time",
        organization: "Deloitte",
        isCurrent: false,
        from: '2015',
        to: '2019',
        location: { country: "USA", state: "California", city: "San Francisco" },
      },
    ],
    education: [
      {
        _id:'1',
        qualification: "Ph.D. in Computer Science",
        degree: "Ph.D.",
        from: '2010',
        to: '2014',
        specialization: "Machine Learning",
        university: "Stanford University",
        location: { country: "USA", state: "California", city: "Stanford" },
      },
    ],
    services: [
      { _id: '1', name: "1-on-1 Mentorship", description: "60 Min personalized session", duration: "60 Min", price: 1500, discountPrice: 1200 },
    ],
    availability: [
      { day: "Monday", isActive: true, slots: ["10:00 AM - 12:00 PM", "2:00 PM - 4:00 PM"] },
      { day: "Friday", isActive: true, slots: ["11:00 AM - 1:00 PM"] },
    ],
    reviews: [
      {
        _id: '1',
        menteeName: "Sakshi Gupta",
        profileImg: "https://randomuser.me/api/portraits/women/55.jpg",
        date: '01 Oct 24',
        time: '10:15 AM',
        message: "Rahul's guidance helped me land my first data science role. Highly recommend!",
        rating: 5
      }
    ],
    totalSessions: 30,
    totalDuration: 600,
    totalReviews: 4,
    avgRating: 4.9
  },
  {
    _id: '3',
    user: "64895cf345e3a97d6b49f1b3",
    profileImg: 'https://randomuser.me/api/portraits/women/12.jpg',
    banner: '/cover1.png',
    firstName: 'Anjali',
    lastName: 'Singh',
    bio: "UI/UX Designer @ Google | Product Design Mentor | Figma Expert | B.Des from NID",
    currentOrganization: "Google",
    organisationLogo: '',
    industry: "Design",
    currentRole: "Senior UI/UX Designer",
    totalExperience: 7,
    isTopMentor: false,
    shortHeading: "Turning design ideas into reality.",
    about: "I specialize in mentoring aspiring designers on UI/UX design principles, portfolio building, and career guidance in tech design.",
    languages: ["English"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/anjalisingh",
      dribbble: "https://dribbble.com/anjalisingh"
    },
    expertise: {
      domain: "Product & Design",
      topics: ['User Research', 'Wireframing', 'Prototyping', 'Portfolio Review'],
      skills: ["Figma", "Adobe XD", "Sketch", "Usability Testing"]
    },
    experience: [
      {
        _id:'1',
        work: 'Product Designer',
        designation: "Senior UI/UX Designer",
        sector: "Tech",
        employmentType: "Full-time",
        organization: "Apple",
        isCurrent: false,
        from: '2017',
        to: '2022',
        location: { country: "USA", state: "California", city: "Cupertino" },
      },
    ],
    education: [
      {
        _id:'1',
        qualification: "Bachelor of Design",
        degree: "B.Des",
        from: '2012',
        to: '2016',
        specialization: "Product Design",
        university: "National Institute of Design",
        location: { country: "India", state: "Gujarat", city: "Ahmedabad" },
      },
    ],
    services: [
      { _id: '1', name: "Design Portfolio Review", description: "45 Min portfolio session", duration: "45 Min", price: 800, discountPrice: 600 },
    ],
    availability: [
      { day: "Wednesday", isActive: true, slots: ["1:00 PM - 3:00 PM"] },
      { day: "Saturday", isActive: true, slots: ["11:00 AM - 1:00 PM"] },
    ],
    reviews: [
      {
        _id: '1',
        menteeName: "Mehul Rao",
        profileImg: "https://randomuser.me/api/portraits/men/18.jpg",
        date: '10 Sep 24',
        time: '12:00 PM',
        message: "Anjali's advice was spot on and helped me shape my portfolio effectively.",
        rating: 5
      }
    ],
    totalSessions: 15,
    totalDuration: 400,
    totalReviews: 3,
    avgRating: 4.7
  },
  {
    _id: '4',
    user: "64895cf345e3a97d6b49f1b4",
    profileImg: 'https://randomuser.me/api/portraits/men/18.jpg',
    banner: '/cover1.png',
    firstName: 'Karan',
    lastName: 'Mehta',
    bio: "Digital Marketing Consultant | SEO Expert | Founder of MarketSmart | MBA from IIM-B",
    currentOrganization: "MarketSmart",
    organisationLogo: '',
    industry: "Digital Marketing",
    currentRole: "Consultant",
    totalExperience: 10,
    isTopMentor: true,
    shortHeading: "Empowering brands to reach new heights in digital space.",
    about: "Helping clients maximize their online visibility through SEO, content marketing, and social media strategy.",
    languages: ["English", "Gujarati"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/karanmehta",
      twitter: "https://twitter.com/karanmehta"
    },
    expertise: {
      domain: "Product & Design",
      topics: ['SEO Strategy', 'Social Media Marketing', 'Content Creation', 'Brand Development'],
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics"]
    },
    experience: [
      {
        _id:'1',
        work: 'SEO Specialist',
        designation: "Consultant",
        sector: "Marketing",
        employmentType: "Freelance",
        organization: "Freelance",
        isCurrent: true,
        from: '2018',
        to: '2024',
        location: { country: "India", state: "Maharashtra", city: "Mumbai" },
      },
    ],
    education: [
      {
        _id:'1',
        qualification: "MBA in Marketing",
        degree: "MBA",
        from: '2008',
        to: '2010',
        specialization: "Marketing",
        university: "Indian Institute of Management, Bangalore",
        location: { country: "India", state: "Karnataka", city: "Bangalore" },
      },
    ],
    services: [
      { _id: '1', name: "SEO Consultation", description: "1 Hour SEO consultation", duration: "60 Min", price: 1200, discountPrice: 1000 },
    ],
    availability: [
      { day: "Tuesday", isActive: true, slots: ["10:00 AM - 12:00 PM", "3:00 PM - 5:00 PM"] },
      { day: "Thursday", isActive: true, slots: ["1:00 PM - 3:00 PM"] },
    ],
    reviews: [
      {
        _id: '1',
        menteeName: "Rajat Singh",
        profileImg: "https://randomuser.me/api/portraits/men/26.jpg",
        date: '15 Aug 24',
        time: '11:00 AM',
        message: "Karan's insights into SEO have been invaluable for my business.",
        rating: 5
      }
    ],
    totalSessions: 20,
    totalDuration: 500,
    totalReviews: 5,
    avgRating: 4.8
  },
  {
    _id: '5',
    user: "64895cf345e3a97d6b49f1b5",
    profileImg: 'https://randomuser.me/api/portraits/women/20.jpg',
    banner: '/cover1.png',
    firstName: 'Nisha',
    lastName: 'Kapoor',
    bio: "Software Engineer @ Meta | Full Stack Developer | Passionate about JavaScript",
    currentOrganization: "Meta",
    organisationLogo: '',
    isTopMentor: true,
    industry: "Software Development",
    currentRole: "Senior Software Engineer",
    totalExperience: 6,
    shortHeading: "Teaching modern JavaScript and full-stack skills.",
    about: "Specializing in full-stack web development with hands-on experience in React, Node.js, and cloud deployments. Mentored 100+ developers.",
    languages: ["English", "Hindi"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/nishakapoor",
    },
    expertise: {
      domain: "Product & Design",
      topics: ['React', 'Node.js', 'JavaScript ES6+', 'APIs'],
      skills: ["React", "Node.js", "JavaScript", "AWS"]
    },
    experience: [
      {
        _id:'1',
        work: 'Full Stack Developer',
        designation: "Senior Software Engineer",
        sector: "Tech",
        employmentType: "Full-time",
        organization: "Meta",
        isCurrent: true,
        from: '2018',
        to: '2024',
        location: { country: "USA", state: "California", city: "Menlo Park" },
      },
    ],
    education: [
      {
        _id:'1',
        qualification: "Bachelor of Technology",
        degree: "B.Tech",
        from: '2012',
        to: '2016',
        specialization: "Computer Science",
        university: "IIT Delhi",
        location: { country: "India", state: "Delhi", city: "New Delhi" },
      },
    ],
    services: [
      { _id: '1', name: "1-on-1 Code Review", description: "30 Min code review session", duration: "30 Min", price: 700, discountPrice: 500 },
    ],
    availability: [
      { day: "Wednesday", isActive: true, slots: ["10:00 AM - 12:00 PM"] },
      { day: "Friday", isActive: true, slots: ["2:00 PM - 4:00 PM"] },
    ],
    reviews: [
      {
        _id: '1',
        menteeName: "Amit Sharma",
        profileImg: "https://randomuser.me/api/portraits/men/30.jpg",
        date: '05 Oct 24',
        time: '11:00 AM',
        message: "Nisha's guidance on JavaScript helped me tremendously!",
        rating: 5
      }
    ],
    totalSessions: 25,
    totalDuration: 600,
    totalReviews: 4,
    avgRating: 4.8
  },
  {
    _id: '6',
    user: "64895cf345e3a97d6b49f1b6",
    profileImg: 'https://randomuser.me/api/portraits/men/45.jpg',
    banner: '/cover1.png',
    firstName: 'Arjun',
    lastName: 'Rao',
    bio: "Financial Analyst @ Morgan Stanley | CFA Level III Candidate | Data-Driven Decision Maker",
    currentOrganization: "Morgan Stanley",
    organisationLogo: '',
    industry: "Finance",
    currentRole: "Financial Analyst",
    totalExperience: 5,
    isTopMentor: false,
    shortHeading: "Helping you break into finance with expert insights.",
    about: "Experienced in financial modeling, valuations, and investment analysis. Mentored over 80 finance aspirants on career growth.",
    languages: ["English", "Hindi"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/arjunrao",
    },
    expertise: {
      domain: "Product & Design",
      topics: ['Financial Modeling', 'Valuation Analysis', 'Equity Research'],
      skills: ["Excel", "Valuation", "Financial Modeling", "Investment Analysis"]
    },
    experience: [
      {
        _id:'1',
        work: 'Financial Analyst',
        designation: "Analyst",
        sector: "Finance",
        employmentType: "Full-time",
        organization: "Morgan Stanley",
        isCurrent: true,
        from: '2019',
        to: '2024',
        location: { country: "USA", state: "New York", city: "New York" },
      },
    ],
    education: [
      {
        _id:'1',
        qualification: "Bachelor of Commerce",
        degree: "B.Com",
        from: '2013',
        to: '2016',
        specialization: "Finance",
        university: "University of Mumbai",
        location: { country: "India", state: "Maharashtra", city: "Mumbai" },
      },
    ],
    services: [
      { _id: '1', name: "Financial Analysis Session", description: "60 Min session on financial analysis techniques", duration: "60 Min", price: 1200, discountPrice: 900 },
    ],
    availability: [
      { day: "Tuesday", isActive: true, slots: ["1:00 PM - 3:00 PM"] },
      { day: "Thursday", isActive: true, slots: ["4:00 PM - 6:00 PM"] },
    ],
    reviews: [
      {
        _id: '1',
        menteeName: "Sneha Patel",
        profileImg: "https://randomuser.me/api/portraits/women/33.jpg",
        date: '12 Sep 24',
        time: '1:30 PM',
        message: "Arjun's insights into valuation helped me excel in my CFA preparation!",
        rating: 5
      }
    ],
    totalSessions: 40,
    totalDuration: 700,
    totalReviews: 6,
    avgRating: 4.9
  },
  {
    _id: '7',
    user: "64895cf345e3a97d6b49f1b7",
    profileImg: 'https://randomuser.me/api/portraits/women/41.jpg',
    banner: '/cover1.png',
    firstName: 'Priya',
    lastName: 'Desai',
    bio: "HR Professional | Recruiter @ IBM | Expert in Career Counseling and Resume Building",
    currentOrganization: "IBM",
    organisationLogo: '',
    industry: "Human Resources",
    currentRole: "Talent Acquisition Specialist",
    totalExperience: 9,
    isTopMentor: false,
    shortHeading: "Guiding you to build a strong career foundation.",
    about: "Over 9 years in recruitment and HR. I focus on resume building, interview prep, and career planning. Mentored 200+ candidates.",
    languages: ["English"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/priyadesai",
    },
    expertise: {
      domain: "Product & Design",
      topics: ['Resume Writing', 'Interview Preparation', 'Career Growth'],
      skills: ["Recruitment", "HR Management", "Career Counseling"]
    },
    experience: [
      {
        _id:'1',
        work: 'Recruitment Specialist',
        designation: "Talent Acquisition Specialist",
        sector: "Technology",
        employmentType: "Full-time",
        organization: "IBM",
        isCurrent: true,
        from: '2017',
        to: '2024',
        location: { country: "USA", state: "New York", city: "New York" },
      },
    ],
    education: [
      {
        _id:'1',
        qualification: "Master of Business Administration",
        degree: "MBA",
        from: '2010',
        to: '2012',
        specialization: "Human Resources",
        university: "Symbiosis Institute of Business Management",
        location: { country: "India", state: "Maharashtra", city: "Pune" },
      },
    ],
    services: [
      { _id: '1', name: "Resume Review", description: "30 Min resume review session", duration: "30 Min", price: 600, discountPrice: 400 },
    ],
    availability: [
      { day: "Monday", isActive: true, slots: ["11:00 AM - 1:00 PM"] },
      { day: "Wednesday", isActive: true, slots: ["2:00 PM - 4:00 PM"] },
    ],
    reviews: [
      {
        _id: '1',
        menteeName: "Rohit Sen",
        profileImg: "https://randomuser.me/api/portraits/men/22.jpg",
        date: '08 Oct 24',
        time: '10:00 AM',
        message: "Priya's feedback on my resume made all the difference. I got interviews within a week!",
        rating: 5
      }
    ],
    totalSessions: 50,
    totalDuration: 800,
    totalReviews: 7,
    avgRating: 4.8
  },
  {
    _id: '8',
    user: "64895cf345e3a97d6b49f1b8",
    profileImg: 'https://randomuser.me/api/portraits/men/37.jpg',
    banner: '/cover1.png',
    firstName: 'Ankit',
    lastName: 'Mishra',
    bio: "Cybersecurity Specialist | Ethical Hacker | Cyber Defense Expert",
    currentOrganization: "Cisco",
    organisationLogo: '',
    industry: "Cybersecurity",
    currentRole: "Security Analyst",
    totalExperience: 4,
    isTopMentor: true,
    shortHeading: "Protect your data and stay secure online.",
    about: "With a focus on ethical hacking and cyber defense strategies, I've mentored many in cybersecurity basics and advanced defense.",
    languages: ["English"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/ankitmishra",
    },
    expertise: {
      domain: "Product & Design",
      topics: ['Cyber Defense', 'Network Security', 'Vulnerability Assessment'],
      skills: ["Penetration Testing", "Ethical Hacking", "Network Security"]
    },
    experience: [
      {
        _id:'1',
        work: 'Security Analyst',
        designation: "Cybersecurity Analyst",
        sector: "IT Security",
        employmentType: "Full-time",
        organization: "Cisco",
        isCurrent: true,
        from: '2020',
        to: '2024',
        location: { country: "USA", state: "Texas", city: "Austin" },
      },
    ],
    education: [
      {
        _id:'1',
        qualification: "Bachelor of Science",
        degree: "B.Sc.",
        from: '2015',
        to: '2019',
        specialization: "Information Technology",
        university: "University of Texas",
        location: { country: "USA", state: "Texas", city: "Austin" },
      },
    ],
    services: [
      { _id: '1', name: "Cybersecurity Consultation", description: "45 Min session on cybersecurity basics", duration: "45 Min", price: 1000, discountPrice: 800 },
    ],
    availability: [
      { day: "Thursday", isActive: true, slots: ["3:00 PM - 5:00 PM"] },
      { day: "Saturday", isActive: true, slots: ["11:00 AM - 1:00 PM"] },
    ],
    reviews: [
      {
        _id: '1',
        menteeName: "Jasleen Kaur",
        profileImg: "https://randomuser.me/api/portraits/women/52.jpg",
        date: '21 Sep 24',
        time: '12:00 PM',
        message: "Ankit provided key strategies to improve my online security!",
        rating: 4
      }
    ],
    totalSessions: 30,
    totalDuration: 450,
    totalReviews: 3,
    avgRating: 4.7
  },
  {
    _id: '9',
    user: "64895cf345e3a97d6b49f1a9",
    profileImg: 'https://randomuser.me/api/portraits/women/41.jpg',
    banner: '/cover1.png',
    firstName: 'Neha',
    lastName: 'Gupta',
    bio: 'Data Scientist | AI Enthusiast | ML Specialist | Speaker at Tech Conferences | Data Science Mentor',
    currentOrganization: "DataCorp",
    organisationLogo: '',
    industry: "Data Science",
    currentRole: "Senior Data Scientist",
    totalExperience: 8,
    isTopMentor: true,
    shortHeading: "Helping you unlock the power of data.",
    about: `With experience in machine learning, statistical analysis, and big data, I help individuals and companies leverage data to make better decisions. I'm passionate about teaching complex concepts in simple terms.`,
    languages: ["English", "Hindi"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/nehagupta",
      facebook: "https://facebook.com/nehagupta",
      instagram: "https://instagram.com/nehagupta"
    },
    expertise: {
      domain: "Engineering, Technology & Data",
      topics: ['Data Preprocessing', 'Data Visualization', 'Machine Learning Algorithms', 'Model Evaluation'],
      skills: ["Python", "R", "SQL", "Data Visualization", "Machine Learning"],
    },
    experience: [
      {
        _id: '1',
        work: 'Data Scientist',
        designation: "Senior Data Scientist",
        sector: "Data Science",
        employmentType: "Full-time",
        organization: "DataCorp",
        isCurrent: true,
        from: '2020',
        to: '2024',
        location: { country: "India", state: "Maharashtra", city: "Mumbai" },
      },
    ],
    education: [
      {
        _id: '1',
        qualification: "M.Sc. in Data Science",
        degree: "M.Sc. in Data Science",
        from: '2016',
        to: '2018',
        specialization: "Data Science",
        university: "Indian Institute of Technology (IIT), Bombay",
        location: { country: "India", state: "Maharashtra", city: "Mumbai" },
      },
    ],
    services: [
      { 
        _id: '1', 
        name: "Data Science Consultation", 
        description: "1 Hour Consultation on Data Science and ML",
        duration: "1 Hour", 
        price: 1000, 
        discountPrice: 800 
      },
      { 
        _id: '2', 
        name: "Resume Review", 
        description: "Review and optimize your Data Science resume",
        duration: "30 Min", 
        price: 500, 
        discountPrice: 300 
      },
    ],
    availability: [
      { day: "Tuesday", isActive: true, slots: ["11:00 AM - 1:00 PM"] },
      { day: "Friday", isActive: true, slots: ["3:00 PM - 5:00 PM"] },
    ],
    payments: [
      {
        mentee: "64895cf345e3a97d6b49f1a1",
        status: "received",
        platformFee: 50,
        paymentAmount: 500,
        price: 450,
      },
    ],
    reviews: [
      { 
        _id: '1',
        menteeName: "Ravi Mehta",
        profileImg: "https://randomuser.me/api/portraits/men/42.jpg",
        date: '10 Nov 24',
        time: '02:20 PM',
        message: "Neha's data science guidance was excellent. She helped me understand machine learning algorithms in a simple way and even gave me hands-on exercises. Highly recommended!",
        rating: 5 
      },
    ],
    totalSessions: 15,
    totalDuration: 450,
    totalReviews: 4,
    avgRating: 4.8,
  },
  {
    _id: '10',
    user: "64895cf345e3a97d6b49f1aa",
    profileImg: 'https://randomuser.me/api/portraits/men/43.jpg',
    banner: '/cover1.png',
    firstName: 'Amit',
    lastName: 'Sharma',
    bio: 'Full Stack Developer | Web App Architect | Passionate about JavaScript and React',
    currentOrganization: "Tech Innovators",
    organisationLogo: '',
    industry: "Software Development",
    currentRole: "Lead Developer",
    totalExperience: 7,
    isTopMentor: true,
    shortHeading: "Building modern and scalable web apps.",
    about: `With years of experience in full-stack web development, I specialize in creating responsive, efficient, and high-performing web applications using JavaScript, React, and Node.js.`,
    languages: ["English", "Hindi"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/amitsharma",
      facebook: "https://facebook.com/amitsharma",
      instagram: "https://instagram.com/amitsharma"
    },
    expertise: {
      domain: "Product & Design",
      topics: ['React Development', 'Node.js', 'REST APIs', 'Web Architecture', 'Performance Optimization'],
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "REST APIs"],
    },
    experience: [
      {
        _id: '1',
        work: 'Lead Developer',
        designation: "Lead Developer",
        sector: "Software Development",
        employmentType: "Full-time",
        organization: "Tech Innovators",
        isCurrent: true,
        from: '2019',
        to: '2024',
        location: { country: "India", state: "Delhi", city: "New Delhi" },
      },
    ],
    education: [
      {
        _id: '1',
        qualification: "B.Tech in Computer Science",
        degree: "B.Tech in Computer Science",
        from: '2014',
        to: '2018',
        specialization: "Web Development",
        university: "Delhi Technological University (DTU)",
        location: { country: "India", state: "Delhi", city: "New Delhi" },
      },
    ],
    services: [
      { 
        _id: '1', 
        name: "React & Node.js Coaching", 
        description: "Guidance on building modern React apps with Node.js backend",
        duration: "1 Hour", 
        price: 1500, 
        discountPrice: 1200 
      },
      { 
        _id: '2', 
        name: "Code Review", 
        description: "Personalized code review and suggestions",
        duration: "45 Min", 
        price: 800, 
        discountPrice: 600 
      },
    ],
    availability: [
      { day: "Monday", isActive: true, slots: ["2:00 PM - 4:00 PM"] },
      { day: "Thursday", isActive: true, slots: ["9:00 AM - 11:00 AM"] },
    ],
    payments: [
      {
        mentee: "64895cf345e3a97d6b49f1a2",
        status: "received",
        platformFee: 50,
        paymentAmount: 600,
        price: 550,
      },
    ],
    reviews: [
      { 
        _id: '1',
        menteeName: "Nisha Patel",
        profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
        date: '12 Nov 24',
        time: '05:00 PM',
        message: "Amit’s session was extremely helpful! He helped me optimize my React code and gave excellent advice on performance improvements. I learned a lot!",
        rating: 5 
      },
    ],
    totalSessions: 10,
    totalDuration: 300,
    totalReviews: 3,
    avgRating: 4.7,
  },
  {
    _id: '11',
    user: "64895cf345e3a97d6b49f1ab",
    profileImg: 'https://randomuser.me/api/portraits/men/44.jpg',
    banner: '/cover1.png',
    firstName: 'Rohit',
    lastName: 'Verma',
    bio: 'Blockchain Developer | Cryptocurrency Expert | Building Decentralized Applications',
    currentOrganization: "Blockchain Labs",
    organisationLogo: '',
    industry: "Blockchain",
    currentRole: "Blockchain Developer",
    totalExperience: 5,
    isTopMentor: false,
    shortHeading: "Blockchain is the future, let’s build it together.",
    about: `I specialize in decentralized applications and smart contract development. Passionate about blockchain technology, I work with cutting-edge tools to create secure and scalable applications.`,
    languages: ["English", "Hindi"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/rohitverma",
      facebook: "https://facebook.com/rohitverma",
      instagram: "https://instagram.com/rohitverma"
    },
    expertise: {
      domain: "Product & Design",
      topics: ['Smart Contracts', 'Decentralized Applications', 'Ethereum', 'Blockchain Development', 'Cryptocurrency Trading'],
      skills: ["Solidity", "Ethereum", "Blockchain", "Smart Contracts", "Cryptocurrency"],
    },
    experience: [
      {
        _id: '1',
        work: 'Blockchain Developer',
        designation: "Blockchain Developer",
        sector: "Blockchain",
        employmentType: "Full-time",
        organization: "Blockchain Labs",
        isCurrent: true,
        from: '2021',
        to: '2024',
        location: { country: "India", state: "Karnataka", city: "Bangalore" },
      },
    ],
    education: [
      {
        _id: '1',
        qualification: "B.Tech in Computer Science",
        degree: "B.Tech in Computer Science",
        from: '2015',
        to: '2019',
        specialization: "Blockchain Technology",
        university: "University of Bangalore",
        location: { country: "India", state: "Karnataka", city: "Bangalore" },
      },
    ],
    services: [
      { 
        _id: '1', 
        name: "Blockchain Development", 
        description: "Create and deploy secure decentralized applications on the blockchain",
        duration: "2 Hours", 
        price: 2500, 
        discountPrice: 2200 
      },
      { 
        _id: '2', 
        name: "Cryptocurrency Trading Guidance", 
        description: "Mentorship on cryptocurrency trading and investment strategies",
        duration: "1 Hour", 
        price: 1500, 
        discountPrice: 1200 
      },
    ],
    availability: [
      { day: "Wednesday", isActive: true, slots: ["1:00 PM - 3:00 PM"] },
      { day: "Saturday", isActive: true, slots: ["10:00 AM - 12:00 PM"] },
    ],
    payments: [
      {
        mentee: "64895cf345e3a97d6b49f1a3",
        status: "received",
        platformFee: 100,
        paymentAmount: 3000,
        price: 2900,
      },
    ],
    reviews: [
      { 
        _id: '1',
        menteeName: "Kiran Kumar",
        profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
        date: '15 Nov 24',
        time: '09:00 AM',
        message: "Rohit’s deep knowledge of blockchain and cryptocurrency is unmatched. He helped me understand decentralized apps and smart contracts from scratch.",
        rating: 5 
      },
    ],
    totalSessions: 8,
    totalDuration: 240,
    totalReviews: 2,
    avgRating: 5,
  },
  {
    _id: '12',
    user: "64895cf345e3a97d6b49f1ac",
    profileImg: 'https://randomuser.me/api/portraits/men/46.jpg',
    banner: '/cover1.png',
    firstName: 'Vikram',
    lastName: 'Singh',
    bio: 'DevOps Engineer | Cloud Architect | CI/CD Expert | Helping Companies Scale Efficiently',
    currentOrganization: "CloudWorks",
    organisationLogo: '',
    industry: "DevOps",
    isTopMentor: false,
    currentRole: "Senior DevOps Engineer",
    totalExperience: 6,
    shortHeading: "Let’s scale your business with robust DevOps solutions.",
    about: `As a DevOps engineer, I specialize in creating scalable and efficient CI/CD pipelines, automating cloud infrastructure, and ensuring smooth and secure deployments. I focus on cloud computing and automation tools to make the deployment process seamless.`,
    languages: ["English", "Hindi"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/vikramsingh",
      facebook: "https://facebook.com/vikramsingh",
      instagram: "https://instagram.com/vikramsingh"
    },
    expertise: {
      domain: "Product & Design",
      topics: ['AWS', 'Docker', 'CI/CD', 'Automation', 'Cloud Infrastructure'],
      skills: ["Docker", "AWS", "Kubernetes", "CI/CD", "Terraform"],
    },
    experience: [
      {
        _id: '1',
        work: 'Senior DevOps Engineer',
        designation: "Senior DevOps Engineer",
        sector: "DevOps",
        employmentType: "Full-time",
        organization: "CloudWorks",
        isCurrent: true,
        from: '2020',
        to: '2024',
        location: { country: "India", state: "Karnataka", city: "Bangalore" },
      },
    ],
    education: [
      {
        _id: '1',
        qualification: "B.Tech in Information Technology",
        degree: "B.Tech in Information Technology",
        from: '2014',
        to: '2018',
        specialization: "Cloud Computing",
        university: "University of Bangalore",
        location: { country: "India", state: "Karnataka", city: "Bangalore" },
      },
    ],
    services: [
      { 
        _id: '1', 
        name: "CI/CD Pipeline Setup", 
        description: "Set up and automate your CI/CD pipelines for continuous delivery",
        duration: "2 Hours", 
        price: 2000, 
        discountPrice: 1800 
      },
      { 
        _id: '2', 
        name: "Cloud Infrastructure Management", 
        description: "Automate and manage your cloud infrastructure with AWS and Terraform",
        duration: "2 Hours", 
        price: 2200, 
        discountPrice: 1900 
      },
    ],
    availability: [
      { day: "Monday", isActive: true, slots: ["11:00 AM - 1:00 PM"] },
      { day: "Friday", isActive: true, slots: ["2:00 PM - 4:00 PM"] },
    ],
    payments: [
      {
        mentee: "64895cf345e3a97d6b49f1a4",
        status: "received",
        platformFee: 80,
        paymentAmount: 2000,
        price: 1920,
      },
    ],
    reviews: [
      { 
        _id: '1',
        menteeName: "Aarav Patel",
        profileImg: "https://randomuser.me/api/portraits/men/47.jpg",
        date: '18 Nov 24',
        time: '03:30 PM',
        message: "Vikram’s expertise in DevOps and cloud infrastructure helped me automate my deployment pipelines. His approach was hands-on and easy to follow.",
        rating: 5 
      },
    ],
    totalSessions: 7,
    totalDuration: 210,
    totalReviews: 3,
    avgRating: 4.9,
  },
  {
    _id: '13',
    user: "random_user_id_13",
    profileImg: 'https://randomuser.me/api/portraits/men/12.jpg',
    banner: '/cover1.png',
    firstName: 'John',
    lastName: 'Doe',
    bio: "Software Engineer with a passion for building innovative solutions.",
    currentOrganization: "Google",
    organisationLogo: '',
    industry: "Software Development",
    currentRole: "Software Engineer",
    totalExperience: 7,
    isTopMentor: false,
    shortHeading: "Building the future of technology.",
    about: "Experienced software engineer with a proven track record of developing high-quality applications. Adept in various programming languages and frameworks.",
    languages: ["English", "Spanish"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/johndoe",
    },
    expertise: {
      domain: "Product & Design",
      topics: ['React', 'Node.js', 'Cloud Computing'],
      skills: ["Front-end Development", 'Back-end Development', 'API Design']
    },
    experience: [
      {
        _id: '1',
        work: 'Software Engineer',
        designation: "Software Engineer",
        sector: "Software Development",
        employmentType: "Full-time",
        organization: "Google",
        isCurrent: true,
        from: '2017',
        to: '2024',
        location: { country: "USA", state: "California", city: "Mountain View" },
      },
      {
        _id: '2',
        work: 'Software Developer',
        designation: "Software Developer",
        sector: "FinTech",
        employmentType: "Full-time",
        organization: "Startup Inc.",
        isCurrent: false,
        from: '2015',
        to: '2017',
        location: { country: "USA", state: "California", city: "San Francisco" },
      },
    ],
    education: [
      {
        _id: '1',
        qualification: "Bachelor of Science",
        degree: "B.Sc.",
        from: '2012',
        to: '2016',
        specialization: "Computer Science",
        university: "Stanford University",
        location: { country: "USA", state: "California", city: "Stanford" },
      },
    ],
    services: [
      { _id: '1', name: "Web Development Consultation", description: "1 hour consultation on web development strategy", duration: "1 Hour", price: 1500, discountPrice: 1200 },
    ],
    availability: [
      { day: "Tuesday", isActive: true, slots: ["10:00 AM - 12:00 PM"] },
      { day: "Friday", isActive: true, slots: ["2:00 PM - 4:00 PM"] },
    ],
    reviews: [
      {
        _id: '1',
        menteeName: "Alice Johnson",
        profileImg: "https://randomuser.me/api/portraits/women/23.jpg",
        date: '2023-11-11',
        time: '11:00 AM',
        message: "John provided excellent guidance on React development. Highly recommended!",
        rating: 5
      },
      {
        _id: '2',
        menteeName: "Bob Smith",
        profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
        date: '2023-11-08',
        time: '3:00 PM',
        message: "John's expertise in Node.js helped me solve a complex problem.",
        rating: 4
      }
    ],
    totalSessions: 15,
    totalDuration: 225,
    totalReviews: 2,
    avgRating: 4.5
  },
  {
    "_id": "14",
    "user": "64895cf345e3a97d6b49f1ad",
    "profileImg": "https://randomuser.me/api/portraits/men/48.jpg",
    "banner": "/cover1.png",
    "firstName": "Sanjay",
    "lastName": "Reddy",
    "bio": "Full Stack Developer | React.js & Node.js Expert | Building Scalable Web Applications",
    "currentOrganization": "TechSphere",
    "industry": "Web Development",
    "currentRole": "Senior Full Stack Developer",
    "totalExperience": 5,
    isTopMentor: false,
    "shortHeading": "Let’s bring your web application ideas to life.",
    "about": "With expertise in React.js, Node.js, and cloud technologies, I specialize in building robust and scalable web applications. I focus on end-to-end development, from UI/UX design to server-side logic.",
    "languages": ["English", "Telugu"],
    "socialLinks": {
      "linkedIn": "https://linkedin.com/in/sanjayreddy",
      "facebook": "https://facebook.com/sanjayreddy",
      "instagram": "https://instagram.com/sanjayreddy"
    },
    "expertise": {
      domain: "Product & Design",
      "topics": ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      "skills": ["React", "Node.js", "MongoDB", "JavaScript", "CSS"]
    },
    "experience": [
      {
        "_id": "1",
        "work": "Senior Full Stack Developer",
        "designation": "Senior Full Stack Developer",
        "sector": "Web Development",
        "employmentType": "Full-time",
        "organization": "TechSphere",
        "isCurrent": true,
        "from": "2019",
        "to": "2024",
        "location": { "country": "India", "state": "Telangana", "city": "Hyderabad" }
      }
    ],
    "education": [
      {
        "_id": "1",
        "qualification": "B.Tech in Computer Science",
        "degree": "B.Tech in Computer Science",
        "from": "2014",
        "to": "2018",
        "specialization": "Full Stack Development",
        "university": "University of Hyderabad",
        "location": { "country": "India", "state": "Telangana", "city": "Hyderabad" }
      }
    ],
    "services": [
      {
        "_id": "1",
        "name": "Full Stack Development",
        "description": "End-to-end web application development from front-end to back-end",
        "duration": "3 Hours",
        "price": 3000,
        "discountPrice": 2800
      },
      {
        "_id": "2",
        "name": "React.js Consultation",
        "description": "Get advice on building React applications with best practices",
        "duration": "1 Hour",
        "price": 1200,
        "discountPrice": 1000
      }
    ],
    "availability": [
      { "day": "Tuesday", "isActive": true, "slots": ["9:00 AM - 12:00 PM"] },
      { "day": "Thursday", "isActive": true, "slots": ["2:00 PM - 5:00 PM"] }
    ],
    "payments": [
      {
        "mentee": "64895cf345e3a97d6b49f1a5",
        "status": "received",
        "platformFee": 150,
        "paymentAmount": 3000,
        "price": 2850
      }
    ],
    "reviews": [
      {
        "_id": "1",
        "menteeName": "Ankit Agarwal",
        "profileImg": "https://randomuser.me/api/portraits/men/49.jpg",
        "date": "10 Nov 24",
        "time": "11:00 AM",
        "message": "Sanjay helped me create my first full-stack app. His guidance on React and Node.js was invaluable.",
        "rating": 5
      }
    ],
    "totalSessions": 10,
    "totalDuration": 300,
    "totalReviews": 4,
    "avgRating": 4.9
  },
  {
    "_id": "15",
    "user": "64895cf345e3a97d6b49f1ae",
    "profileImg": "https://randomuser.me/api/portraits/women/50.jpg",
    "banner": "/cover1.png",
    "firstName": "Priya",
    "lastName": "Sharma",
    "bio": "Data Scientist | AI/ML Expert | Helping Companies Leverage Data for Business Growth",
    "currentOrganization": "DataSphere",
    "industry": "Data Science",
    "currentRole": "Senior Data Scientist",
    "totalExperience": 7,
    "isTopMentor": false,
    "shortHeading": "Turning data into actionable insights.",
    "about": "As a Data Scientist, I specialize in machine learning, deep learning, and data analysis. My focus is on extracting meaningful insights from large datasets to drive business decisions.",
    "languages": ["English", "Hindi"],
    "socialLinks": {
      "linkedIn": "https://linkedin.com/in/priyasharma",
      "facebook": "https://facebook.com/priyasharma",
      "instagram": "https://instagram.com/priyasharma"
    },
    "expertise": {
      "domain": "Product & Design",
      "topics": ["Python", "R", "TensorFlow", "Data Analysis", "Deep Learning"],
      "skills": ["Python", "R", "TensorFlow", "Pandas", "Scikit-learn"]
    },
    "experience": [
      {
        "_id": "1",
        "work": "Senior Data Scientist",
        "designation": "Senior Data Scientist",
        "sector": "Data Science",
        "employmentType": "Full-time",
        "organization": "DataSphere",
        "isCurrent": true,
        "from": "2018",
        "to": "2024",
        "location": { "country": "India", "state": "Delhi", "city": "New Delhi" }
      }
    ],
    "education": [
      {
        "_id": "1",
        "qualification": "M.Tech in Data Science",
        "degree": "M.Tech in Data Science",
        "from": "2016",
        "to": "2018",
        "specialization": "Machine Learning",
        "university": "University of Delhi",
        "location": { "country": "India", "state": "Delhi", "city": "New Delhi" }
      }
    ],
    "services": [
      {
        "_id": "1",
        "name": "Machine Learning Consultation",
        "description": "Get help with implementing machine learning models and algorithms",
        "duration": "2 Hours",
        "price": 2500,
        "discountPrice": 2300
      },
      {
        "_id": "2",
        "name": "Data Analysis and Visualization",
        "description": "Learn to analyze and visualize complex datasets with Python",
        "duration": "2 Hours",
        "price": 2200,
        "discountPrice": 2000
      }
    ],
    "availability": [
      { "day": "Monday", "isActive": true, "slots": ["10:00 AM - 1:00 PM"] },
      { "day": "Wednesday", "isActive": true, "slots": ["3:00 PM - 6:00 PM"] }
    ],
    "payments": [
      {
        "mentee": "64895cf345e3a97d6b49f1a6",
        "status": "received",
        "platformFee": 120,
        "paymentAmount": 2500,
        "price": 2380
      }
    ],
    "reviews": [
      {
        "_id": "1",
        "menteeName": "Vivek Sharma",
        "profileImg": "https://randomuser.me/api/portraits/men/51.jpg",
        "date": "15 Nov 24",
        "time": "12:30 PM",
        "message": "Priya’s expertise in data science and machine learning helped me understand complex concepts. Highly recommend her!",
        "rating": 5
      }
    ],
    "totalSessions": 12,
    "totalDuration": 360,
    "totalReviews": 5,
    "avgRating": 5
  },
  {
    "_id": "16",
    "user": "64895cf345e3a97d6b49f1af",
    "profileImg": "https://randomuser.me/api/portraits/men/52.jpg",
    "banner": "/cover1.png",
    "firstName": "Karthik",
    "lastName": "Nair",
    "isTopMentor": false,
    "bio": "Cloud Architect | AWS Certified | Helping Organizations Achieve Cloud Success",
    "currentOrganization": "CloudTech",
    "industry": "Cloud Computing",
    "currentRole": "Lead Cloud Architect",
    "totalExperience": 8,
    "shortHeading": "Optimizing your cloud journey.",
    "about": "With a deep understanding of cloud infrastructure and services, I help businesses migrate to the cloud seamlessly, optimizing performance and cost-efficiency along the way.",
    "languages": ["English", "Tamil"],
    "socialLinks": {
      "linkedIn": "https://linkedin.com/in/karthiknair",
      "facebook": "https://facebook.com/karthiknair",
      "instagram": "https://instagram.com/karthiknair"
    },
    "expertise": {
      domain: "Product & Design",
      "topics": ["AWS", "Azure", "GCP", "DevOps", "Cloud Security"],
      "skills": ["AWS", "Azure", "Terraform", "Docker", "Kubernetes"]
    },
    "experience": [
      {
        "_id": "1",
        "work": "Lead Cloud Architect",
        "designation": "Lead Cloud Architect",
        "sector": "Cloud Computing",
        "employmentType": "Full-time",
        "organization": "CloudTech",
        "isCurrent": true,
        "from": "2017",
        "to": "2024",
        "location": { "country": "India", "state": "Maharashtra", "city": "Mumbai" }
      }
    ],
    "education": [
      {
        "_id": "1",
        "qualification": "B.Tech in Computer Science",
        "degree": "B.Tech in Computer Science",
        "from": "2012",
        "to": "2016",
        "specialization": "Cloud Computing",
        "university": "Indian Institute of Technology, Bombay",
        "location": { "country": "India", "state": "Maharashtra", "city": "Mumbai" }
      }
    ],
    "services": [
      {
        "_id": "1",
        "name": "Cloud Migration Strategy",
        "description": "Strategize and migrate your applications to the cloud securely and efficiently",
        "duration": "4 Hours",
        "price": 5000,
        "discountPrice": 4500
      },
      {
        "_id": "2",
        "name": "AWS Consultation",
        "description": "Get professional advice on AWS architecture and optimization",
        "duration": "3 Hours",
        "price": 3500,
        "discountPrice": 3000
      }
    ],
    "availability": [
      { "day": "Monday", "isActive": true, "slots": ["9:00 AM - 12:00 PM"] },
      { "day": "Friday", "isActive": true, "slots": ["1:00 PM - 4:00 PM"] }
    ],
    "payments": [
      {
        "mentee": "64895cf345e3a97d6b49f1a7",
        "status": "received",
        "platformFee": 250,
        "paymentAmount": 5000,
        "price": 4750
      }
    ],
    "reviews": [
      {
        "_id": "1",
        "menteeName": "Simran Kaur",
        "profileImg": "https://randomuser.me/api/portraits/women/52.jpg",
        "date": "18 Nov 24",
        "time": "10:00 AM",
        "message": "Karthik's cloud migration strategy helped us save both time and costs. Highly recommend his expertise!",
        "rating": 5
      }
    ],
    "totalSessions": 15,
    "totalDuration": 450,
    "totalReviews": 6,
    "avgRating": 5
  },
  {
    "_id": "17",
    "user": "64895cf345e3a97d6b49f1b0",
    "profileImg": "https://randomuser.me/api/portraits/men/53.jpg",
    "banner": "/cover1.png",
    "firstName": "Nikhil",
    "lastName": "Patel",
    "bio": "Mobile App Developer | Android & iOS Specialist | Creating High-Performance Apps",
    "currentOrganization": "AppInnovators",
    "industry": "Mobile Development",
    "currentRole": "Lead Mobile Developer",
    "totalExperience": 6,
    "isTopMentor": false,
    "shortHeading": "Building seamless mobile experiences.",
    "about": "Specialized in Android and iOS mobile development, I help businesses transform their ideas into fully-functional mobile applications with a focus on performance and user experience.",
    "languages": ["English", "Gujarati"],
    "socialLinks": {
      "linkedIn": "https://linkedin.com/in/nikhilpatel",
      "facebook": "https://facebook.com/nikhilpatel",
      "instagram": "https://instagram.com/nikhilpatel"
    },
    "expertise": {
      domain: "Product & Design",
      "topics": ["Kotlin", "Swift", "Flutter", "Android Studio", "Xcode"],
      "skills": ["Kotlin", "Swift", "Java", "Flutter", "React Native"]
    },

    "experience": [
      {
        "_id": "1",
        "work": "Lead Mobile Developer",
        "designation": "Lead Mobile Developer",
        "sector": "Mobile Development",
        "employmentType": "Full-time",
        "organization": "AppInnovators",
        "isCurrent": true,
        "from": "2020",
        "to": "present",
        "location": { "country": "India", "state": "Gujarat", "city": "Ahmedabad" }
      }
    ],
    "education": [
      {
        "_id": "1",
        "qualification": "B.Tech in Computer Science",
        "degree": "Bachelor's",
        "from": "2014",
        "to": "2018",
        "university": "Gujarat University",
        "location": { "country": "India", "state": "Gujarat", "city": "Ahmedabad" }
      }
    ],
    "services": [
      {
        "_id": "1",
        "name": "App Development Consultation",
        "description": "30 Min quick call",
        "duration": "30 Min",
        "price": 500,
        "discountPrice": 200
      }
    ],
    "availability": [
      { "day": "Monday", "isActive": true, "slots": ["9:00 AM - 11:00 AM", "3:00 PM - 5:00 PM"] }
    ],
    "payments": [
      {
        "mentee": "64895cf345e3a97d6b49f1a1",
        "status": "received",
        "platformFee": 50,
        "paymentAmount": 500,
        "price": 450
      }
    ],
    "reviews": [
      {
        "_id": "1",
        "menteeName": "John Doe",
        "profileImg": "https://randomuser.me/api/portraits/men/52.jpg",
        "date": "07 Nov 24",
        "time": "08:47 PM",
        "message": "Great session! Nikhil's advice helped me to understand mobile app development better, especially for Android. Highly recommended!",
        "rating": 5
      }
    ],
    "totalSessions": 10,
    "totalDuration": 300,
    "totalReviews": 3,
    "avgRating": 4.8
  },
  {
    "_id": "18",
    "user": "64895cf345e3a97d6b49f1b1",
    "profileImg": "https://randomuser.me/api/portraits/men/54.jpg",
    "banner": "/cover1.png",
    "firstName": "Raj",
    "lastName": "Sharma",
    "isTopMentor": false,
    "bio": "Software Engineer | Full Stack Developer | Web & Mobile Development",
    "currentOrganization": "Tech Solutions",
    "industry": "Software Development",
    "currentRole": "Senior Full Stack Developer",
    "totalExperience": 8,
    "shortHeading": "Building scalable web applications.",
    "about": "I specialize in both front-end and back-end development, focusing on building fast, scalable, and maintainable web applications. I have experience with React, Node.js, and MongoDB.",
    "languages": ["English", "Hindi"],
    "socialLinks": {
      "linkedIn": "https://linkedin.com/in/rajsharma",
      "facebook": "https://facebook.com/rajsharma",
      "instagram": "https://instagram.com/rajsharma"
    },
    "expertise": {
      domain: "Product & Design",
      "topics": ["React.js", "Node.js", "MongoDB", "Express.js"],
      "skills": ["JavaScript", "React", "Node.js", "MongoDB", "Express"]
    },
    "experience": [
      {
        "_id": "1",
        "work": "Senior Full Stack Developer",
        "designation": "Senior Developer",
        "sector": "Software Development",
        "employmentType": "Full-time",
        "organization": "Tech Solutions",
        "isCurrent": true,
        "from": "2018",
        "to": "present",
        "location": { "country": "India", "state": "Delhi", "city": "Delhi" }
      }
    ],
    "education": [
      {
        "_id": "1",
        "qualification": "B.Tech in Computer Science",
        "degree": "Bachelor's",
        "from": "2012",
        "to": "2016",
        "university": "Delhi University",
        "location": { "country": "India", "state": "Delhi", "city": "Delhi" }
      }
    ],
    "services": [
      {
        "_id": "1",
        "name": "Full Stack Development Consultation",
        "description": "45 Min consultation",
        "duration": "45 Min",
        "price": 800,
        "discountPrice": 600
      }
    ],
    "availability": [
      { "day": "Tuesday", "isActive": true, "slots": ["10:00 AM - 12:00 PM"] }
    ],
    "payments": [
      {
        "mentee": "64895cf345e3a97d6b49f1a3",
        "status": "received",
        "platformFee": 70,
        "paymentAmount": 800,
        "price": 730
      }
    ],
    "reviews": [
      {
        "_id": "1",
        "menteeName": "Sita Kumar",
        "profileImg": "https://randomuser.me/api/portraits/women/50.jpg",
        "date": "06 Nov 24",
        "time": "04:30 PM",
        "message": "Raj helped me understand how to approach full stack development. The session was very productive and informative. Highly recommend!",
        "rating": 5
      }
    ],
    "totalSessions": 12,
    "totalDuration": 540,
    "totalReviews": 4,
    "avgRating": 4.9
  },
  {
    "_id": "19",
    "user": "64895cf345e3a97d6b49f1b2",
    "profileImg": "https://randomuser.me/api/portraits/men/55.jpg",
    "banner": "/cover1.png",
    "firstName": "Vikram",
    "lastName": "Singh",
    "isTopMentor": false,
    "bio": "AI/ML Engineer | Data Science | Deep Learning",
    "currentOrganization": "DataTech Labs",
    "industry": "Artificial Intelligence",
    "currentRole": "AI Engineer",
    "totalExperience": 5,
    "shortHeading": "Empowering AI models for better decisions.",
    "about": "With a strong background in machine learning and deep learning, I help companies leverage AI to improve business outcomes, automate tasks, and deliver intelligent solutions.",
    "languages": ["English", "Punjabi"],
    "socialLinks": {
      "linkedIn": "https://linkedin.com/in/vikramsingh",
      "facebook": "https://facebook.com/vikramsingh",
      "instagram": "https://instagram.com/vikramsingh"
    },
    "expertise": {
      domain: "Product & Design",
      "topics": ["Data Science", "Deep Learning", "TensorFlow", "PyTorch"],
      "skills": ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "Keras"]
    },
    "experience": [
      {
        "_id": "1",
        "work": "AI Engineer",
        "designation": "AI Engineer",
        "sector": "Artificial Intelligence",
        "employmentType": "Full-time",
        "organization": "DataTech Labs",
        "isCurrent": true,
        "from": "2019",
        "to": "present",
        "location": { "country": "India", "state": "Haryana", "city": "Gurugram" }
      }
    ],
    "education": [
      {
        "_id": "1",
        "qualification": "M.Tech in Artificial Intelligence",
        "degree": "Master's",
        "from": "2017",
        "to": "2019",
        "university": "Amity University",
        "location": { "country": "India", "state": "Uttar Pradesh", "city": "Noida" }
      }
    ],
    "services": [
      {
        "_id": "1",
        "name": "AI & ML Consultation",
        "description": "60 Min deep dive session",
        "duration": "60 Min",
        "price": 1000,
        "discountPrice": 900
      }
    ],
    "availability": [
      { "day": "Wednesday", "isActive": true, "slots": ["2:00 PM - 4:00 PM"] }
    ],
    "payments": [
      {
        "mentee": "64895cf345e3a97d6b49f1a5",
        "status": "received",
        "platformFee": 100,
        "paymentAmount": 1000,
        "price": 900
      }
    ],
    "reviews": [
      {
        "_id": "1",
        "menteeName": "Arvind Yadav",
        "profileImg": "https://randomuser.me/api/portraits/men/51.jpg",
        "date": "05 Nov 24",
        "time": "01:15 PM",
        "message": "The AI consultation was extremely helpful. Vikram's insights on deep learning algorithms gave me a better understanding of the technology.",
        "rating": 4
      }
    ],
    "totalSessions": 8,
    "totalDuration": 480,
    "totalReviews": 2,
    "avgRating": 4.7
  },
  {
    "_id": "20",
    "user": "64895cf345e3a97d6b49f1b3",
    "profileImg": "https://randomuser.me/api/portraits/men/56.jpg",
    "banner": "/cover1.png",
    "firstName": "Sandeep",
    "lastName": "Verma",
    "isTopMentor": false,
    "bio": "Cloud Computing Architect | DevOps | AWS Specialist",
    "currentOrganization": "CloudXperts",
    "industry": "Cloud Computing",
    "currentRole": "Cloud Solutions Architect",
    "totalExperience": 7,
    "shortHeading": "Cloud solutions for scalable business.",
    "about": "As a Cloud Solutions Architect, I assist enterprises in leveraging the power of cloud computing for business transformation. My expertise includes AWS, Azure, and Google Cloud Platform.",
    "languages": ["English", "Hindi"],
    "socialLinks": {
      "linkedIn": "https://linkedin.com/in/sandeepverma",
      "facebook": "https://facebook.com/sandeepverma",
      "instagram": "https://instagram.com/sandeepverma"
    },
    "expertise": {
      domain: "Product & Design",
      "topics": ["Cloud Architecture", "AWS", "Google Cloud", "Azure", "DevOps"],
      "skills": ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"]
    },
    "experience": [
      {
        "_id": "1",
        "work": "Cloud Solutions Architect",
        "designation": "Cloud Architect",
        "sector": "Cloud Computing",
        "employmentType": "Full-time",
        "organization": "CloudXperts",
        "isCurrent": true,
        "from": "2017",
        "to": "present",
        "location": { "country": "India", "state": "Maharashtra", "city": "Mumbai" }
      }
    ],
    "education": [
      {
        "_id": "1",
        "qualification": "B.Tech in Information Technology",
        "degree": "Bachelor's",
        "from": "2011",
        "to": "2015",
        "university": "Mumbai University",
        "location": { "country": "India", "state": "Maharashtra", "city": "Mumbai" }
      }
    ],
    "services": [
      {
        "_id": "1",
        "name": "Cloud Architecture Consultation",
        "description": "45 Min consultation",
        "duration": "45 Min",
        "price": 700,
        "discountPrice": 650
      }
    ],
    "availability": [
      { "day": "Thursday", "isActive": true, "slots": ["11:00 AM - 1:00 PM"] }
    ],
    "payments": [
      {
        "mentee": "64895cf345e3a97d6b49f1a7",
        "status": "received",
        "platformFee": 60,
        "paymentAmount": 700,
        "price": 640
      }
    ],
    "reviews": [
      {
        "_id": "1",
        "menteeName": "Kiran Soni",
        "profileImg": "https://randomuser.me/api/portraits/women/51.jpg",
        "date": "04 Nov 24",
        "time": "09:30 AM",
        "message": "Sandeep's expertise in cloud solutions is fantastic. His session helped me understand cloud architectures and how to apply them effectively.",
        "rating": 5
      }
    ],
    "totalSessions": 10,
    "totalDuration": 450,
    "totalReviews": 5,
    "avgRating": 4.9
  }
]
