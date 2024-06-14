import React from 'react';

function EducationPage() {
  return (
    <div>
      <h2>Education Background</h2>
      <ul>
        <li className="schoolname"> 
        <img src="/hnulogo.png" alt="Description of first image" style={{ width: '220px', height: '80px', verticalAlign: 'middle' }} />
            Henan Normal University(China), 2019-2023
        </li>
        <li>Location: 46 Jianshe East Road, Xinxiang, Henan, 450000</li>
        <li>Major: Bachelor of Science in Computer Science&Technology</li>
        <li>Courses: Introduction to Computer Science, Fundamentals of program Design, Data structure and Algorithm, Principles of computer composition, operating system, computer network, Principles of database system, software engineering, Web Technology and Application, network security, mobile application development, embedded system design, data mining, distributed system, etc.</li>
        <li className="schoolname">
        <img src="/bulogo.png" alt="Description of second image" style={{ width: '160px', height: '80px', verticalAlign: 'middle' }} />
            Boston University(United States), 2023-NOW</li>
        <li>Location:888 Commonwealth Avenue, Boston, MA, 02215</li>
        <li>Major: MSc in Computer Science</li>
        <li>Major courses: Algorithm analysis, computer language theory, Fundamentals of Analysis and data Visualization, computational mathematics of machine learning, server-side Web Development, Python data Science, etc.</li>
      </ul>
    </div>
  );
}

export default EducationPage;
