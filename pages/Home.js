import React from "react";
import profile from "../profile.jpg";   // make sure this is correct

function Home() {
  return (
    <div>
      <img src={profile} alt="profile" width="150" style={{ borderRadius: "50%" }} />

      <h1>About Me</h1>
      <p>I am a student learning AI.</p>

      <h2>Research Interests</h2>
      <p>Artificial Intelligence, Machine Learning</p>

      <h2>Personal Details</h2>
     <p>Name: Ramaraju chennamraju</p>
      <p>Phone: 7981178373</p>
     <p>Email: venkataramaraju2005@gmail.com</p>

      <h2>Skills</h2>
      <p>Python, Java, React, AI</p>
    </div>
  );
}

export default Home;