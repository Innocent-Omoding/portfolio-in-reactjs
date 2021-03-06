import React from "react";
import profile from "../../../assets/images/profile.png";
import "./About.css";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fefe" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5">
          About Me
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4">
            <img className="d-block mx-auto mb-4" src={profile} alt="profile" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
            I am a junior Software developer.
              <br /> Through my studies, I acquired strong skills in
              the field of software development. The various projects and
              internships that I have carried out have enabled me to develop not
              only my hard skills but also my soft skills.
              <br /> Motivated, I know how to adapt, I have a sense of
              responsibility and organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
