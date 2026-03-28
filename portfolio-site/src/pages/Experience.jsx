import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Break Through Tech AI Program',
    role: 'AI Fellow',
    date: 'Mar 2026 - Present',
    type: 'Experience',
    description: [
      'A year-long virtual professional development experience focused on machine learning, artificial intelligence, and data science.',
      'Includes coursework in ML foundations, portfolio building with real-world projects, mentorship, and career coaching.',
      'A financial reward and a certificate will be provided upon successful completion of the program.'
    ]
  },
  {
    title: 'UTD ACM Research Organization',
    role: 'Deep Learning & Networks Researcher',
    date: 'Sep 2025 - Dec 2025',
    type: 'Experience',
    description: [
      'Research explored early detection of network attacks using deep learning and ML architectures.',
      'Adopted a multi-stage approach to preprocess, analyze and classify network traffic data.',
      'Worked on researching various architectures like BiLSTMs, GNNs, and Transformers.',
      'Documented research findings and presented at the UTD ACM Research Symposium.'
    ]
  },
  {
    title: 'CodeWizardsHQ Internship Program',
    role: 'Web Development Intern',
    date: 'Jun 2024 - Sep 2024',
    type: 'Experience',
    description: [
      'Made a website that solved a real-world problem, which in this case is helping people increase their typing speed.',
      'Website Overview: users practiced typing words, personalize the practice sessions, and track their progress over time.',
      'Collaborated with a team of developers to design and implement the website from scratch.',
      'Achieved Internship Letters of Completion and Recommendation.'
    ]
  },
  {
    title: 'Kumon Learning Center',
    role: 'Tutor and Grader',
    date: 'Jun 2024 - Sep 2024',
    type: 'Experience',
    description: [
      'Graded homework & classwork and also helped a group of students.',
      'Ensured students did their homework, practice great study routines, stay focused in class, and help them when needed',
    ]
  },
  {
    title: 'Moneyball Academics: AI-Optimized Degree Planner',
    role: 'Mapping (Data & Graphing)',
    date: 'Mar 2026 - Present',
    type: 'Project',
    description: [
      'Build a engine that will build your mathematically perfect 4 year degree.',
      'Product will Maximizing your GPA and Minimizing your Tuition',
      'Collaborate with a ML team to accomplish this sprint project and create a user-friendly interface aimed at college students.'
    ],
    link: 'https://github.com/MMehta45/moneyball-ml-1'
  },
  {
    title: 'Agora AI App',
    role: 'Backend and AI Developer & Team Leader',
    date: 'Sep 2025 - Dec 2025',
    type: 'Project',
    description: [
      'A semester long project for CS class and collaborated with a team of 2 other students',
      'Built the mobile application from scratch: brainstorming, wireframes, coding, and testing.',
      'Utilized React Native, Typescript, Firebase, Gemini APIs, and Android Studio for development.',
      'The app is designed for the public to share the issues they are facing in the community along with solutioned crafted by the AI model. Users can also upvote and downvote the posts along with comments.'
    ],
    link: 'https://github.com/nsheth49/agora-ai-project'
  }
];

function Experience() {
  return (
    <div className="experience-container">
      <h1>Professional Journey</h1>

      {/* Professional Experiences */}
      <h2>Experience</h2>
      {experiences
        .filter(exp => exp.type === 'Experience')
        .map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.title}</h3>
            <span className="experience-role">{exp.role}</span> |{' '}
            <span className="experience-date">{exp.date}</span>
            <ul>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}

      {/* Projects */}
      <h2>Projects</h2>
      {experiences
        .filter(exp => exp.type === 'Project')
        .map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.title}</h3>
            <span className="experience-role">{exp.role}</span> |{' '}
            <span className="experience-date">{exp.date}</span>
            <ul>
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            {exp.link && (
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
    </div>
  );
}

export default Experience;