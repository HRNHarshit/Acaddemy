export const data = [
  {
    id: 1,
    course_name: "Machine Learning Fundamentals",
    instructor_name: "Dr. Emily Johnson",
    description: "Learn the fundamentals of machine learning and its applications.",
    introduction:
      "Welcome to Machine Learning Fundamentals! This course will provide you with a comprehensive understanding of the core concepts and techniques in machine learning.",
    enrollment_status: "Open",
    course_duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of Python", "Understanding of linear algebra"],
    syllabus: [
      {
        module_name: "Introduction to Machine Learning",
        topics: ["Types of machine learning", "Supervised learning vs. unsupervised learning"],
      },
      {
        module_name: "Regression",
        topics: ["Linear regression", "Logistic regression"],
      },
    ],
    image_url:
      "https://media.licdn.com/dms/image/C4D12AQEpH4bwIKtNew/article-cover_image-shrink_600_2000/0/1610995197080?e=2147483647&v=beta&t=Hvy5lwySZ_2rho0BHsvD9MPsyPcbyt8Ej9vRQYtRv_g",
    price: 99.99,
    due_date: "2024-06-10",
  },
  {
    id: 2,
    course_name: "Web Development Bootcamp",
    instructor_name: "Prof. Michael Thompson",
    description: "A comprehensive bootcamp covering front-end and back-end web development.",
    introduction:
      "Welcome to the Web Development Bootcamp! In this intensive program, you will learn all the essential skills needed to become a proficient web developer, covering both front-end and back-end development.",
    enrollment_status: "Closed",
    course_duration: "12 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "In-person",
    prerequisites: ["HTML5 / CSS3", "Basic JavaScript"],
    syllabus: [
      {
        module_name: "Front-end Development",
        topics: ["HTML5 / CSS3", "JavaScript"],
      },
      {
        module_name: "Back-end Development",
        topics: ["Node.js", "Express.js", "Database management"],
      },
    ],
    image_url: "https://img-b.udemycdn.com/course/750x422/4015622_2fee_4.jpg",
    price: 149.99,
    due_date: "2024-05-30",
  },
  {
    id: 3,
    course_name: "Introduction to Data Analysis",
    instructor_name: "Dr. Alex Lee",
    description: "An introductory course to data analysis techniques using Python.",
    introduction:
      "Welcome to Introduction to Data Analysis! In this course, you will learn essential data analysis techniques using Python, enabling you to derive insights and make informed decisions from data.",
    enrollment_status: "In Progress",
    course_duration: "8 weeks",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    location: "Hybrid (Online and In-person)",
    prerequisites: ["Basic Python programming"],
    syllabus: [
      {
        module_name: "Data Cleaning",
        topics: ["Data preprocessing", "Handling missing values"],
      },
      {
        module_name: "Exploratory Data Analysis",
        topics: ["Statistical analysis", "Data visualization"],
      },
    ],
    image_url: "https://careerfoundry.com/en/sc/uploads/Metaimage_1_intro_to_DA.jpg",
    price: 79.99,
    due_date: "2024-07-15",
  },
  {
    id: 4,
    course_name: "Artificial Intelligence Applications",
    instructor_name: "Dr. Rachel Garcia",
    description: "Explore real-world applications of artificial intelligence.",
    introduction:
      "Welcome to Artificial Intelligence Applications! This course explores the practical applications of artificial intelligence, providing you with insights into real-world AI implementations across various domains.",
    enrollment_status: "In Progress",
    course_duration: "12 weeks",
    schedule: "Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Understanding of machine learning concepts"],
    syllabus: [
      {
        module_name: "Natural Language Processing",
        topics: ["Text classification", "Named entity recognition"],
      },
      {
        module_name: "Computer Vision",
        topics: ["Image classification", "Object detection"],
      },
    ],
    image_url: "https://www.analyticssteps.com/backend/media/thumbnail/6429515/3937263_1621419296_ARTIFICIAL-INTELLIGENCE-APPLICATIONS-(1)Artboard-1.png",
    price: 129.99,
    due_date: "2024-07-31",
  },
  {
    id: 5,
    course_name: "Financial Planning and Analysis",
    instructor_name: "Prof. Sophia Martinez",
    description: "Learn financial planning techniques and analysis methods.",
    introduction:
      "Welcome to Financial Planning and Analysis! This course will equip you with the essential skills and knowledge needed to perform effective financial planning and analysis, enabling you to make informed decisions and drive business growth.",
    enrollment_status: "Closed",
    course_duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "In-person",
    prerequisites: ["Basic understanding of accounting principles"],
    syllabus: [
      {
        module_name: "Budgeting",
        topics: ["Types of budgets", "Budgeting process"],
      },
      {
        module_name: "Financial Modeling",
        topics: ["Building financial models", "Scenario analysis"],
      },
    ],
    image_url: "https://t4.ftcdn.net/jpg/02/97/96/17/360_F_297961797_PDFl0vUrobwaAFB56KeK7KHTfCnQXIxm.jpg",
    price: 89.99,
    due_date: "2024-08-15",
  },
  {
    id: 6,
    course_name: "Graphic Design Essentials",
    instructor_name: "Prof. David Clark",
    description: "Essential principles and techniques for graphic design.",
    introduction:
      "Welcome to Graphic Design Essentials! This course covers essential principles and techniques for graphic design, providing you with the foundational knowledge to create visually appealing designs. From understanding design principles to mastering software tools like Adobe Photoshop and Adobe Illustrator, you'll gain the skills needed to bring your creative ideas to life.",
    enrollment_status: "Open",
    course_duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basics of Computers"],
    syllabus: [
      {
        module_name: "Design Principles",
        topics: ["Typography", "Color theory"],
      },
      {
        module_name: "Software Tools",
        topics: ["Adobe Photoshop", "Adobe Illustrator"],
      },
    ],
    image_url: "https://pcci.edu.ph/wp-content/uploads/2021/02/module-Graphic-Design-Essentials-min-1024x536.png",
    price: 69.99,
    due_date: "2024-07-29",
  },
  {
    id: 7,
    course_name: "Introduction to Psychology",
    instructor_name: "Dr. Laura Johnson",
    description: "An introductory course covering basic concepts of psychology.",
    introduction:
      "Welcome to Introduction to Psychology! In this course, you'll explore the fascinating world of psychology, covering basic concepts, theories, and research methods. Gain insights into the history of psychology, various psychological theories, and the application of psychological principles in everyday life. Join us as we delve into the human mind and behavior.",
    enrollment_status: "Open",
    course_duration: "8 weeks",
    schedule: "Saturdays, 1:00 PM - 3:00 PM",
    location: "Hybrid (Online and In-person)",
    prerequisites: ["Understand of variety of Resources"],
    syllabus: [
      {
        module_name: "Introduction to Psychology",
        topics: ["History of psychology", "Theories of psychology"],
      },
      {
        module_name: "Research Methods",
        topics: ["Experimental design", "Data collection techniques"],
      },
    ],
    image_url: "https://i.ytimg.com/vi/t9x0bmvYTsE/maxresdefault.jpg",
    price: 79.99,
    due_date: "2024-08-09",
  },
  {
    id: 8,
    course_name: "Mobile App Development",
    instructor_name: "Prof. Kevin Brown",
    description: "Learn to develop mobile applications for iOS and Android platforms.",
    introduction:
      "Welcome to Mobile App Development! This course will teach you the fundamentals of mobile app development for both iOS and Android platforms. From building user interfaces to implementing functionality with Swift for iOS and Java for Android, you'll learn the essential skills needed to create engaging and interactive mobile applications.",
    enrollment_status: "Open",
    course_duration: "12 weeks",
    schedule: "Fridays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of programming"],
    syllabus: [
      {
        module_name: "iOS App Development",
        topics: ["Swift programming language", "UIKit framework"],
      },
      {
        module_name: "Android App Development",
        topics: ["Java programming language", "Android SDK"],
      },
    ],
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqd5dxeqxtH3JbLy1d0OD2mylxk_CdcU3CGA&usqp=CAU",
    price: 109.99,
    due_date: "2024-10-15",
  },
  {
    id: 9,
    course_name: "Digital Marketing Strategy",
    instructor_name: "Dr. Jessica Taylor",
    description: "Learn strategies and techniques for effective digital marketing.",
    introduction:
      "Welcome to Digital Marketing Strategy! This course dives into the world of digital marketing, covering strategies and techniques to effectively promote products and services online. From understanding digital marketing channels to creating compelling content and analyzing campaign performance, you'll learn how to develop and execute successful digital marketing campaigns.",
    enrollment_status: "In Progress",
    course_duration: "8 weeks",
    schedule: "Sundays, 2:00 PM - 4:00 PM",
    location: "Hybrid (Online and In-person)",
    prerequisites: ["Communication Skills", "Basic Design Skills"],
    syllabus: [
      {
        module_name: "Introduction to Digital Marketing",
        topics: ["Digital marketing channels", "Online advertising platforms"],
      },
      {
        module_name: "Content Marketing",
        topics: ["Content creation", "Content distribution"],
      },
    ],
    image_url:
      "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024,h_570/https://theincmagazine.com/wp-content/uploads/2022/03/10-Digital-Marketing-Strategies-for-Startups-2022-1024x570.jpg",
    price: 99.99,
    due_date: "2024-06-15",
  },
  {
    id: 10,
    course_name: "Business Analytics",
    instructor_name: "Prof. Thomas White",
    description: "Analyze business data to drive strategic decisions and improve performance.",
    introduction:
      "Welcome to Business Analytics! This course focuses on analyzing business data to drive strategic decisions and improve performance. Learn how to leverage data visualization tools, interpret key performance indicators, and create insightful dashboards to gain valuable insights into business operations. Join us as we explore the intersection of data and business strategy.",
    enrollment_status: "Open",
    course_duration: "12 weeks",
    schedule: "Wednesdays, 5:00 PM - 7:00 PM",
    location: "In-person",
    prerequisites: ["Basic understanding of business concepts"],
    syllabus: [
      {
        module_name: "Data Visualization",
        topics: ["Charts and graphs", "Data presentation techniques"],
      },
      {
        module_name: "Business Intelligence",
        topics: ["Key performance indicators", "Dashboards"],
      },
    ],
    image_url: "https://images.teamtailor-cdn.com/images/s3/teamtailor-production/width_800-v3/image_uploads/df2254ee-d015-46e1-a8f7-972110566ea2/original.png",
    price: 119.99,
    due_date: "2024-09-30",
  },
];
