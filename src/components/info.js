import React from "react";
import ExtraCurricular from "./ExtraCurricular";
import Social from "./Social";
import Publications from "./Publications";
import PositionsOfResponsibility from "./PositionsOfResponsibility";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import About from "./About";
export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-4" style={{ color: "#FF8A00" }}>
        <span style={{ color: "white" }}>Hello, I'm</span> <br />
        Karthik Menon.{" "}
        <span className="wave" role="img" aria-label="karthik says hi">
          👋
        </span>
      </div>
      <div className="h3 code mt-4 mb-3"> {"<html>"}</div>
      <div className="h3 code mt-4 mb-3"> {"<head>"}</div>
      <div className="h3 code mx-3 mt-4 mb-3"> {"\t <title>"}</div>
      <div className="text-muted mx-5 my-4 h4 text-justify info">
        Say Hi to the <a href="#!">right side of my Brain !</a>
      </div>
      <div className="h3 code mx-3 mt-2 mb-3">{" </title>"}</div>

      <div className="h3 code mt-2 mb-3">{"</head>"}</div>
      <div className="h3 code mt-2 mb-3">{"<body>"}</div>
      <About />
      <Education />
      <Skills />
      <WorkExperience />
      <PositionsOfResponsibility />
      <Publications />
      <ExtraCurricular />
      <div className="h3 code mt-2 mb-3">{"</body>"}</div>
      <div className="h3 code mt-2 mb-3">{"</html>"}</div>
      <Social />
    </div>
  );
}
