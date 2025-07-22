/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohanad Mazin",
  title: "Hi all, I'm Mohanad",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with a strong foundation in full-stack development and a background in chemistry. I have experience building Web and Desktop applications with JavaScript / React / Flask / Python and other cool libraries and frameworks."
  ),
  resumeLink:
    "idk", // Add your resume link here
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MoMa3",
  linkedin: "", // Add your LinkedIn profile
  gmail: "mohanad.mazin188@hotmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "RESULTS-DRIVEN FULL STACK DEVELOPER WHO BUILDS SCALABLE APPLICATIONS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web and desktop applications"
    ),
    emoji("⚡ Build full-stack applications with React, Flask, and PostgreSQL"),
    emoji(
      "⚡ Architect scalable systems"
    ),
    emoji("⚡ Performance optimization and legacy system refactoring")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "York University",
      logo: require("./assets/images/yorkLogo.png"), // You'll need to add York University logo
      subHeader: "Bachelor of Science in Analytical Chemistry",
      duration: "August 2017 - May 2021",
      desc: "Focused on analytical chemistry with strong foundation in mathematical and scientific principles that translate well to software development.",
      descBullets: [
        "Developed strong analytical and problem-solving skills",
        "Applied mathematical techniques and data analysis methods"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Data/ML",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Skatescribe",
      companylogo: require("./assets/images/skatescribeLogo.png"), // You'll need to add company logo
      date: "May 2022 – Present",
      desc: "Spearheaded development of full-stack applications and optimized performance across multiple systems.",
      descBullets: [
        "Developed a full-stack activity tracking app (React + Flask + PostgreSQL + Docker) that increased customer retention by 25%",
        "Built a service that aggregates and visualizes real-time KPIs, enabling operations team to make decisions 20% faster",
        "Refactored legacy Electron app, reducing memory usage by 30% and improving render times by 50%",
        "Enhanced Keyence Scanner processing speed by 35% through advanced mathematical techniques"
      ]
    },
    {
      role: "R&D Chemist",
      company: "Quest Inks and Coatings",
      companylogo: require("./assets/images/questLogo.png"), // You'll need to add company logo
      date: "April 2021 – May 2022",
      desc: "Applied analytical chemistry expertise to product development and process optimization while implementing automation solutions.",
      descBullets: [
        "Achieved a 20% reduction in cost of popular ink products through R&D initiatives",
        "Automated quality control data workflows using Python and Excel macros, reducing analysis time by 50%",
        "Developed improved quality control methods and led cross-functional trials"
      ]
    },
    {
      role: "Front End Developer",
      company: "Whileloop Inc.",
      companylogo: require("./assets/images/whileloopLogo.png"), // You'll need to add company logo
      date: "April 2020 – April 2021",
      desc: "Focused on creating high-performance UI components and implementing modern web development practices.",
      descBullets: [
        "Delivered 10+ high-performance UI components with ReactJS, enhancing platform responsiveness",
        "Integrated Firebase for real-time backend syncing with 95% test coverage using Jest",
        "Collaborated with designers to ensure pixel-perfect, mobile-first interfaces"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "SOME COOL PROJECTS I'VE BUILT WITH MODERN TECHNOLOGIES",
  projects: [
    {
      image: require("./assets/images/dogBreedLogo.png"), // You'll need to add project image
      projectName: "Dog Breed Detection App",
      projectDesc: "An image classification web app using YOLOv8 that allows users to detect dog breeds via drag-and-drop uploads with 87% mAP accuracy.",
      footerLink: [
        {
          name: "Visit Project",
          url: "#" // Add your project URL
        }
      ]
    },
    {
      image: require("./assets/images/opposingViewLogo.png"), // You'll need to add project image
      projectName: "Opposing View Chrome Extension",
      projectDesc: "A Chrome extension that generates well-articulated opposing viewpoints for highlighted text using OpenAI's GPT API to promote critical thinking.",
      footerLink: [
        {
          name: "Visit Project",
          url: "#" // Add your project URL
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Projects 🏆 "),
  subtitle:
    "Key accomplishments and technical achievements throughout my career!",

  achievementsCards: [

  
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I enjoy sharing knowledge about software development, performance optimization, and technology insights.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // Add your blog posts here when you have them
  ],
  display: false // Set true when you have blog content
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I ENJOY SHARING KNOWLEDGE AND MENTORING DEVELOPERS 😊"
  ),

  talks: [
    // Add your talks here when you have them
  ],
  display: false // Set true when you have talks to showcase
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSIONS ABOUT TECHNOLOGY AND SOFTWARE DEVELOPMENT",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Add podcast links here when available
  ],
  display: false // Set true when you have podcasts
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "mohanad.mazin188@hotmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};