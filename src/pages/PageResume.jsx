import React, { useEffect } from "react";
import lucyphoto from "../images/photo.jpeg";
import { appTitle } from "../globals/globalVariables";

function PageResume() {
  useEffect(() => {
    document.title = `${appTitle} - Resume`;
  }, []);
  const handleDownload = () => {
    // Using the public URL
    const fileUrl = `${import.meta.env.PUBLIC_URL || ""}/Lucy_Resume.pdf`;

    // Create invisible anchor element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Lucy_Resume.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main>
      <div className="resume">
        <div>
          <img src={lucyphoto} alt="Lucy-photo" className="photo" />
          <h1>Full Stack Developer</h1>
          <p>
            I’m Lucy, a Full Stack Web Developer with expertise in the MERN
            stack (MongoDB, Express, React, Node.js). I am proficient in C#,
            HTML, CSS, JavaScript, SQL, and frameworks like .NET Core, React,
            Angular, and Node.js. Experienced with databases such as MongoDB,
            MySQL, and DynamoDB, and cloud services like AWS and Firebase. I’m
            passionate about building scalable solutions and continuously
            enhancing my skills.
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="download-button" // Add your styles
        >
          Download Resume
        </button>
      </div>
    </main>
  );
}

export default PageResume;
