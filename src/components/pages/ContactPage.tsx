import React from 'react';

function ContactPage() {
  return (
    <div>
      <h2>Contact Me</h2>
      <p className="sub-title">If you have any questions or would like to get in touch, please Contact me through the contact information below:</p>
      <li className="project-title">
      <img src="phonelogo.png" alt="Phone image" style={{ width: '70px', height: '70px', verticalAlign: 'middle' }} />
      Telephone:(857)763-7779</li>
      <li>Please call me during the daytime.</li>
      <li>For other situations, please text SMS.</li>
      <li className="project-title">
      <img src="emaillogo.png" alt="Phone image" style={{ width: '70px', height: '70px', verticalAlign: 'middle' }} />
        Email:ljl0032@bu.edu (For communicate curricular and academic issues)</li>
    <li><a href="mailto:ljl0032@bu.edu" className="contact-link">Contact</a> me if you wanna discuss curricular and academic issues with me.</li>
    <li className="project-title">
    <img src="emaillogo.png" alt="Phone image" style={{ width: '70px', height: '70px', verticalAlign: 'middle' }} />
        Email:aventadorlee00@gmail.com (For communicate sports and other hobbies)</li>
        <li><a href="mailto:aventadorlee00@gmail.com" className="contact-link">Contact</a> me if you wanna play basketball, soccer with me or other activity about entertainment.</li>
    </div>
  );
}

export default ContactPage;
