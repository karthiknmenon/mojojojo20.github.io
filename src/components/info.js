import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
  FaDownload,
  FaLinkedin,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Karthik Menon.
      </div>
      <div className="h3 code mt-4 mb-3"> {"<html>"}</div>
      <div className="h3 code mt-4 mb-3"> {"<head>"}</div>
      <div className="h3 code mx-3 mt-4 mb-3"> {"\t <title>"}</div>
      <div className="text-muted mx-5 my-4 h4 text-justify info">
        Say Hi to the right side of my Brain !
      </div>
      <div className="h3 code mx-3 mt-2 mb-3">{" </title>"}</div>
      
      <div className="h3 code mt-2 mb-3">{"</head>"}</div>
      <div className="h3 code mt-2 mb-3">{"<body>"}</div>
      <div className="h3 code mx-3 mt-2 mb-3">{"<div id=\"About\">"}</div>
      <div className="text-muted mx-5 my-4 h4 text-justify info">
        I am a final year undergrad student at Rajagiri School of Engineering & Technology. A passionate Front-end Developer, UI/UX Designer, Web
        Developer. 
        <br /> I have also lately been interested in Machine Learning and blockchain.
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 mx-3 code mt-2 mb-3">{"<div id=\"Education\">"}</div>
      <div className="mx-5 my-2 h3 text-justify info">
       Rajagiri School of Engineering & Technology, Kakkanad
          <div className="text-muted mx-3 my-2 h4 text-justify info">
            Bachelor's of Technology with Honours 
              <div class="mx-4">
                2016-2020 
                      <br/>9.06/10.00
              </div>
          </div>
      </div>
      <div className="mx-5 my-2 h3 text-justify info">
       Navrachana International School Vadodara
          <div className="text-muted mx-3 my-2 h4 text-justify info">
            CBSE Grade 12
            <div class="mx-4">
                2015-2016 
                      <br/>90.6%
              </div>
          </div>
      </div>
      <div className="mx-5 my-2 h3 text-justify info">
       Navrachana International School Vadodara
          <div className="text-muted mx-3 my-2 h4 text-justify info">
            CBSE Grade 10
            <div class="mx-4">
                2013-2014 
                      <br/>9.4/10.00
              </div>
          </div>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 code mx-3 mt-2 mb-3">{"<div id=\"skills\">"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        <div class="card-group">
          <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Programming Languages</h5>
                  <p class="card-text">C/C++</p>
                  <p class="card-text">Python</p>
                  <p class="card-text">Unix-Shell</p>
                  <p class="card-text">Pl/SQL</p>
                </div>
          </div>
          <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Development</h5>
                  <p class="card-text">HTML</p>
                  <p class="card-text">CSS/SCSS</p>
                  <p class="card-text">JS/jQuery</p>
                  <p class="card-text">reactJS</p>
                  <p class="card-text">boostrap and Frameworks</p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
          </div>
          <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Development</h5>
                  <p class="card-text">blockchain</p>
                  <p class="card-text">PHP</p>
                  <p class="card-text">nodeJS</p>
                  <p class="card-text">Gulp</p>
                  {/* <p class="card-text">boostrap and Frameworks</p> */}
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
          </div>
        </div>
        <div class="card-group mt-3">
          <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Software & Tools</h5>
                  <p class="card-text">git</p>
                  <p class="card-text">LATEX</p>
                  <p class="card-text">Hyperledger</p>
                  <p class="card-text">Star UML</p>
                  <p class="card-text">CISCO Packet Tracer</p>
                </div>
          </div>
          <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Wireframing & Design</h5>
                  <p class="card-text">Figma</p>
                  <p class="card-text">Sketch</p>
                  <p class="card-text">Adobe XD</p>
                  <p class="card-text">Balsamiq Mockups</p>
                  {/* <p class="card-text">boostrap and Frameworks</p> */}
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
          </div>
          <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Operating Systems</h5>
                  <p class="card-text">Mac OS</p>
                  <p class="card-text">Ubuntu</p>
                  <p class="card-text">Windows</p>
                  {/* <p class="card-text">Gulp</p>
                  <p class="card-text">boostrap and Frameworks</p> */}
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
          </div>
        </div>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 mx-3 code mt-2 mb-3">{"<div id=\"Work-Experience\">"}</div>
      <div className="mx-5 my-2 h3 text-justify info">
       SurveySparrow
          <div className="text-muted mx-5 my-2 h4 text-justify info">
            Intern - Front End Developer
                <div class="mx-3 my-2 h5"> 
                    Worked on SurveySparrow website and implemented mini projects. Developed reusable components to
                    be used in products and dynamic pages. 
                    <br/>Developed a documentation template using reactJS for components and products.
                  </div>
          </div>
      </div>
      <div className="mx-5 my-2 h3 text-justify info">
       travelngo
          <div className="text-muted mx-5 my-2 h4 text-justify info">
            Full Stack Developer
                <div class="mx-3 my-2 h5"> 
                    Developed a booking interface for travelngo.
                  </div>
          </div>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 mx-3 code mt-2 mb-3">{"<div id=\"Positions-of-Responsibility\">"}</div>
      <div className="mx-5 my-4 h3 text-justify info">
          <div className="mx-5 my-2 h4 text-justify info">
          Abhiyanthriki
              <div className="text-muted mx-5 my-2 h5 text-justify info">
                Tech Committee Member
                    <div class="mx-3 my-2"> 
                      Designed posters and website as part of Abhiyanthriki, the biennial national techfest of RSET.
                      <br/>Quiz Master for Deadlock 2k19, online cryptic hunt organized by RSET.
                    </div>
              </div>
          </div>
          <div className="mx-5 my-2 h4 text-justify info">
          Idanazhikal - College Magazine
              <div className="text-muted mx-5 my-2 h5 text-justify info">
                Assistant Designer
                    <div class="mx-3 my-2"> 
                    Idanazhikal is the college magazine of RSET for the academic year 2018-2019.
                    </div>
              </div>
          </div>
          <div className="mx-5 my-2 h4 text-justify info">
          iTRAX
              <div className="text-muted mx-5 my-2 h5 text-justify info">
                Representative
                    <div class="mx-3 my-2"> 
                    iTRAX is the departmental club of Information Technology
                    </div>
              </div>
          </div>
          <div className="mx-5 my-2 h4 text-justify info">
          Josh Talks @Kochi
              <div className="text-muted mx-5 my-2 h5 text-justify info">
              Event Organizer
                    <div class="mx-3 my-2"> 
                    Organized the first event by Josh Talks at Kochi in August 2017 at XIME, Kakkanad.
                    </div>
              </div>
          </div>
          <div className="mx-5 my-2 h4 text-justify info">
          Navrachana International School Vadodara
              <div className="text-muted mx-5 my-2 h5 text-justify info">
              Head Boy
                    <div class="mx-3 my-2"> 
                    Elected as the Head Boy of NISV for the academic year 2014-2015
                    </div>
              </div>
          </div>
      </div>
      <div className="h3 code mx-3 mt-2 mb-3">{"</div>"}</div>
      <div className="h3 code mx-3 mt-2 mb-3">{"<div id=\"Extra-Curricular-And-Honors\">"}</div>
      <div className="text-muted mx-5 my-4 h5 text-justify info">
            <p>Awarded Dean's Award for best academic performance 2018-2019.</p>
            <p>Cleared three rounds of TCS Engi-NX 2019, a hackathon by TCS to reach top 150 teams as of 13-06-2019</p>
            <p>Bagged first prize in Ad-On Event, Bharatham 2018</p>
            <p>Active participant in Sports (Football and Athletics)</p>
            <p>Bagged first prize in DesignIT 2017,2018. Best UI/UX design, hackIT 2018</p>
            <p>Volunteer at ICFOSS 2018, RSET.</p>
            <p>Designed promo video for Saavishkar 2018, all Kerala open student exhibition for school students</p>
            <p>Active photographer and featured in Times Of India, Vadodara edition</p>
            <p>Won the Dada Saheb Phalke National Award for best PSA (Public Service Ad) in school category</p>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 code mt-2 mb-3">{"</body>"}</div>
      <div className="h3 code mt-2 mb-3">{"</html>"}</div>
      <div className="h3 mt-5">
        <a className="mr-5 icon" href="https://www.linkedin.com/in/karthik-menon/">
          <FaLinkedin />
        </a>
        <a className="mr-5 icon" href="https://github.com/mojojojo20">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://menonk484@gmail.com">
          <Mail />
        </a>
        <a className="mr-5 icon" href="https://drive.google.com/open?id=1cXV2ztOhYJIViQ_rsxdUb1ahC-qJtn08">
          <FaDownload />
        </a>
      </div>
    </div>
  )
}
