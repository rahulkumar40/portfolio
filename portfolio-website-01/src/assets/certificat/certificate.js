import javaDSA from './javaDSAPW.png';
import decodeJava from './decodeJava.png';
import javaScriptCertification from './javaScriptCertification.png';
import leetcode from './leetcode.png';
import SQLCertification_01 from './SQLCertification_01.png';
import UniversMM1 from './UniversMM1.jpg';
import UniversMM2 from './UniversMM2.jpg';
import javaThon from './javaThon.jpeg';
import codeSoftInter from './codeSoftInter.png';
import html_css from './html_css.png'
import iit_workshop from './iit_workshop.png'

const certificateData = [
  {
    id: 1,
    img: javaScriptCertification,
    title: "Frontend Development",
    description: "Responsive web design using HTML, CSS, JavaScript, and React.",
    org: "Personal Projects & Bootcamps",
    body: [
      "Designed multiple responsive projects using HTML5 and Tailwind CSS.",
      "Used JavaScript to implement form validation, event handling, and UI interactivity.",
      "Built dynamic user interfaces using React and React Router.",
      "Created reusable components like modals, dropdowns, and accordions.",
      "Focused on accessibility and mobile-first responsive design."
    ],
    date: "10-05-2024"
  },
  {
    id: 2,
    img: javaDSA,
    title: "Decode DSA 2.0",
    description: "Data Structures and Algorithm mastery using Java.",
    org: "Alpha Tech",
    body: [
      "Solved 60+ problems involving arrays, strings, recursion, and searching algorithms.",
      "Applied brute force and optimized approaches with time complexity analysis.",
      "Improved problem-solving using sliding window, two-pointer, and recursion techniques.",
      "Took part in contests, leaderboard challenges, and peer reviews.",
      "Strengthened Java fundamentals while implementing DSA logic."
    ],
    date: "20-10-2023"
  },
  {
    id: 3,
    img: SQLCertification_01,
    title: "Basic SQL Certification",
    description: "SQL fundamentals including queries, joins, and filtering.",
    org: "HackerRank",
    body: [
      "Learned SQL syntax including SELECT, INSERT, UPDATE, and DELETE.",
      "Used JOIN operations to retrieve data from multiple related tables.",
      "Practiced filtering, aggregation, and sorting in query results.",
      "Built and queried real-world schema examples such as inventory and HR databases.",
      "Applied concepts in daily practice sets and timed quizzes."
    ],
    date: "05-07-2023"
  },
    {
    id: 4,
    img: codeSoftInter,
    title: "Java Internship Certificate",
    description: "Java backend development and object-oriented programming at Codesoft.",
    org: "Codesoft",
    body: [
      "Completed a 1-month internship focused on core Java and backend systems.",
      "Worked on object-oriented programming: inheritance, abstraction, and polymorphism.",
      "Built console-based apps using Java and applied exception handling techniques.",
      "Used basic data structures like arrays, stacks, and queues for logic implementation.",
      "Enhanced debugging skills through regular mentor-led code reviews."
    ],
    date: "15-03-2024"
  },
  {
    id: 5,
    img: decodeJava,
    title: "Java BootCamp & Assessment",
    description: "Core Java fundamentals and logic building via assessments.",
    org: "Alpha Teach",
    body: [
      "Revised Java basics including data types, loops, arrays, and classes.",
      "Scored 85%+ in internal assessments based on real coding problems.",
      "Built small applications using Scanner, loops, functions, and conditionals.",
      "Practiced debugging and dry run methods for error-free logic.",
      "Improved conceptual clarity through recorded lessons and code-along sessions."
    ],
    date: "12-11-2023"
  },
  {
    id: 6,
    img: leetcode,
    title: "50-Day LeetCode Challenge",
    description: "Solved 100+ Java DSA problems on LeetCode platform.",
    org: "LeetCode",
    body: [
      "Completed daily problem-solving for over 50 consecutive days.",
      "Covered topics including arrays, strings, trees, recursion, and DP.",
      "Maintained a GitHub repo with documented solutions in Java.",
      "Improved speed and accuracy using pattern-based techniques.",
      "Earned recognition through weekly performance rankings and badges."
    ],
    date: "01-08-2023"
  },
  {
    id: 7,
    img: javaThon,
    title: "Java Hackathon Test",
    description: "Online hackathon event solving Java challenges.",
    org: "Alpha Teach",
    body: [
      "Participated in 3-hour hackathon solving real-time Java challenges.",
      "Built mini apps like number sorters, palindrome checkers, and input parsers.",
      "Ranked top 20% in a cohort of 150+ participants.",
      "Submitted clean and well-commented code on evaluation portal.",
      "Received completion and performance-based recognition."
    ],
    date: "25-11-2023"
  },
  {
    id: 8,
    img: UniversMM1,
    title: "University Coding Event – MMDU",
    description: "Participation in intra-university Java and DSA coding contest.",
    org: "Maharishi Markandeshwar University",
    body: [
      "Completed 3 rounds of DSA-based coding problems under time constraints.",
      "Collaborated with team for debugging and solution optimization.",
      "Showcased knowledge in Java syntax, array manipulations, and logic building.",
      "Received participation certificate and mentor feedback.",
      "Gained experience in competitive programming under pressure."
    ],
    date: "10-09-2023"
  },
  {
    id: 9,
    img: UniversMM2,
    title: "Coding Championship – MMDU",
    description: "Coding contest focused on logic, syntax, and Java problem solving.",
    org: "Maharishi Markandeshwar University",
    body: [
      "Solved Java problems related to loops, arrays, and object methods.",
      "Practiced edge-case handling and clean code formatting.",
      "Demonstrated logical flow with minimal runtime errors.",
      "Participated in final-stage evaluation by external mentors.",
      "Developed a habit of writing structured code and comments under exam settings."
    ],
    date: "15-09-2023"
  },
  {
  "id": 10,
  "img": html_css,
  "title": "HTML and CSS Certification",
  "description": "Certificate of participation for successfully completing the HTML & CSS course as part of the Cisco thingQbator program.",
  "org": "Cisco thingQbator (in partnership with NASSCOM Foundation)",
  "body": [
    "Learned to structure web pages using HTML.",
    "Mastered styling and layout of web content with CSS.",
    "Gained hands-on experience in front-end web development.",
    "Participated in the final evaluation of the Cisco thingQbator program."
  ],
  "date": "2023-09-15"
},
{
  "id": 11,
  "img": iit_workshop,
  "title": "Virtual Labs Workshop Certification",
  "description": "Certificate of participation for a workshop on Virtual Labs, organized by the Department of Civil Engineering at Maharishi Markandeshwar University.",
  "org": "Maharishi Markandeshwar University",
  "body": [
    "Participated in a workshop on **Virtual Labs** under the National Mission on Education Through ICT (Ministry of Education, Govt. of India).",
    "Gained practical experience with a government initiative aimed at improving education through technology.",
    "Engaged with a workshop conducted by **Virtual Labs, IIT Roorkee**."
  ],
  "date": "2025-01-22"
}
];

export default certificateData;
