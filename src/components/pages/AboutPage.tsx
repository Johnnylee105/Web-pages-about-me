import React from 'react';

function AboutPage() {
  return (
    <div>
      <h2>About Me</h2>
      <p className="sub-title">I am Jialin Li, a graduate student at Boston University.</p>
      <li className="project-title">Basic information:</li>
      <li>Specialization: Computer Science</li>
      <li>Future job directions:web development and data science</li>
      <li>Sex:Male</li>
      <li>Age:24</li>
      <li>Place of Birth:Zhengzhou,China</li>
      <li className="project-title">Technical Proficiencies:</li>
      <li>Programming Languages: Python, JavaScript, HTML, and R.</li>
      <li>Programming Software: PyCharm, VS Code, RStudio and Microsoft Office.</li>
      <li className="project-title">Hobby:</li>
      <li>Soccer,favorite team:Manchester United,Borussia Dortmund
      <img src="/mulogo.png" alt="Description of club 1st image" style={{ width: '60px', height: '60px', verticalAlign: 'middle' }} />
      <img src="/bvblogo.png" alt="Description of club 2nd image" style={{ width: '60px', height: '60px', verticalAlign: 'middle' }} />
      </li>
      <li>Basketball,favorite team:Boston Celtics 
      <img src="/celticslogo.png" alt="Description of club 2nd image" style={{ width: '70px', height: '65px', verticalAlign: 'middle' }} />
      <li>In my free time, I enjoy photography and traveling to explore different cultures and cuisines.</li>
      </li>
    </div>
  );
}

export default AboutPage;
