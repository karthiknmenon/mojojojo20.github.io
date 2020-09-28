import React from "react";

export default function Skills() {
  return (
    <>
      <div className="h3 code mx-3 mt-2 mb-3">{'<div id="skills">'}</div>
      <div className="text-muted mx-3 my-4 h3 text-justify info">
        <div className="card-group">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Programming Languages</h5>
              <p className="card-text">C/C++</p>
              <p className="card-text">Python</p>
              <p className="card-text">Unix-Shell</p>
              <p className="card-text">Pl/SQL</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Development</h5>
              <p className="card-text">HTML</p>
              <p className="card-text">CSS/SCSS</p>
              <p className="card-text">JS/jQuery</p>
              <p className="card-text">reactJS</p>
              <p className="card-text">boostrap and Frameworks</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Development</h5>
              <p className="card-text">blockchain</p>
              <p className="card-text">PHP</p>
              <p className="card-text">nodeJS</p>
              <p className="card-text">Google Firebase</p>
              <p className="card-text">Gulp</p>
              {/* <p className="card-text">boostrap and Frameworks</p> */}
            </div>
          </div>
        </div>
        <div className="card-group mt-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Software & Tools</h5>
              <p className="card-text">git</p>
              <p className="card-text">LATEX</p>
              <p className="card-text">Hyperledger</p>
              <p className="card-text">Star UML</p>
              <p className="card-text">CISCO Packet Tracer</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wireframing & Design</h5>
              <p className="card-text">Figma</p>
              <p className="card-text">Sketch</p>
              <p className="card-text">Adobe XD</p>
              <p className="card-text">Balsamiq Mockups</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Operating Systems</h5>
              <p className="card-text">Mac OS</p>
              <p className="card-text">Ubuntu</p>
              <p className="card-text">Windows</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
    </>
  );
}
