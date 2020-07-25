import React from "react"

import {  
  FaGithub as Github,  
  FaInstagram as Insta,  
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
        A Front End Developer working at SurveySparrow. Passionate about making clean, minimalistic designs. Hit me up for any project enquiries. <br />
        Through my B.tech, I have done a few Full Stack Projects. I have also had a my share of interest in Blockchain and IoT. Check out my <a href="https://karthikmenon.com/projects" target="_blank" rel="noreferrer">projects</a> or <a href="https://github.com/mojojojo20" target="_blank" rel="noreferrer">GitHub</a> section for the same. <br />        
        Always free to discuss website designs, email templating and a lot more over <span className="highlight">coffee</span>. <br />
        Looking to freelance your project ? <a href="mailto:menonk484@gmail.com" target="_blank">Hit Me Up</a>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 mx-3 code mt-2 mb-3">{"<div id=\"Education\">"}</div>
      <div className="mx-5 my-2 h3 text-justify info">
       Rajagiri School of Engineering & Technology, Kakkanad
          <div className="text-muted mx-3 my-2 h4 text-justify info">
            Bachelor's of Technology with Honours (Information Technology)
              <div className="mx-4">
                2016-2020 
                      <br/>9.06/10.00
              </div>
          </div>
      </div>
      <div className="mx-5 my-2 h3 text-justify info">
       Navrachana International School Vadodara
          <div className="text-muted mx-3 my-2 h4 text-justify info">
            CBSE Grade 12
            <div className="mx-4">
                2015-2016 
                      <br/>91%
              </div>
          </div>
      </div>
      <div className="mx-5 my-2 h3 text-justify info">
       Navrachana International School Vadodara
          <div className="text-muted mx-3 my-2 h4 text-justify info">
            CBSE Grade 10
            <div className="mx-4">
                2013-2014 
                      <br/>9.4/10.00
              </div>
          </div>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 code mx-3 mt-2 mb-3">{"<div id=\"skills\">"}</div>
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
      <div className="h3 mx-3 code mt-2 mb-3">{"<div id=\"Work-Experience\">"}</div>
      <div className="mx-5 my-2 h3 text-justify info">
       SurveySparrow
          <div className="text-muted mx-5 my-2 h4 text-justify info">
            Front End Developer - Full Time
                <div className="mx-1 my-2 h5"> 
                    
                </div>
          </div>
      </div>
      <div className="mx-5 my-2 h3 text-justify info">
       SurveySparrow
          <div className="text-muted mx-5 my-2 h4 text-justify info">
            Intern - Front End Developer
                <div className="mx-1 my-2 h5"> 
                    Worked on SurveySparrow website and implemented mini projects. Developed reusable components to
                    be used in products and dynamic pages. 
                    <br/>Developed a documentation template using reactJS for components and products.
                  </div>
          </div>
      </div>
      <div className="mx-5 my-2 h3 text-justify info">
       AuxBrains
          <div className="text-muted mx-5 my-2 h4 text-justify info">
            Full Stack Developer
                <div className="mx-1 my-2 h5"> 
                    Developed websites and products under the hood of AuxBrains Pvt. Ltd.
                  </div>
          </div>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 mx-3 code mt-2 mb-3">{"<div id=\"Positions-of-Responsibility\">"}</div>
      <div className="mx-5 my-4 h3 text-justify info">
          <div className="mx-1 my-2 h4 text-justify info">
          Bharatham 2020
              <div className="text-muted mx-1 my-2 h5 text-justify info">
                Tech Committee Head
                    <div className="mx-3 my-2"> 
                      Designed posters and website as part of Bharatham, the annual cultural gest of RSET.   <br />                   
                      <a href="https://bharatham2020.in" target="_blank" rel="noreferrer">Check out the website here</a>
                    </div>
              </div>
          </div>
          <div className="mx-1 my-2 h4 text-justify info">
          Techkshetra
              <div className="text-muted mx-1 my-2 h5 text-justify info">
                Tech Committee Head
                    <div className="mx-3 my-2"> 
                      Designed posters and website as part of Techkshetra, the biennial national techfest of RSET.
                      <br/>Quiz Master for Deadlock 2k19, online cryptic hunt organized by RSET.<br />
                      <a href="https://techkshetra.tech" target="_blank" rel="noreferrer">Check out the website here</a>
                    </div>
              </div>
          </div>
          <div className="mx-1 my-2 h4 text-justify info">
          Abhiyanthriki
              <div className="text-muted mx-1 my-2 h5 text-justify info">
                Tech Committee Member
                    <div className="mx-3 my-2"> 
                      Designed posters and website as part of Abhiyanthriki, the biennial national techfest of RSET.
                      <br/>Quiz Master for Deadlock 2k19, online cryptic hunt organized by RSET.
                    </div>
              </div>
          </div>
          <div className="mx-1 my-2 h4 text-justify info">
          Idanazhikal - College Magazine
              <div className="text-muted mx-1 my-2 h5 text-justify info">
                Assistant Designer - 2019, Chief Designer - 2020
                    <div className="mx-3 my-2"> 
                    Idanazhikal is the college magazine of RSET for the academic year 2018-2019.
                    </div>
              </div>
          </div>
          <div className="mx-1 my-2 h4 text-justify info">
          iTraxx
              <div className="text-muted mx-1 my-2 h5 text-justify info">
                Representative
                    <div className="mx-3 my-2"> 
                    iTRAX is the departmental club of Information Technology
                    </div>
              </div>
          </div>
          <div className="mx-1 my-2 h4 text-justify info">
          Josh Talks @Kochi
              <div className="text-muted mx-1 my-2 h5 text-justify info">
              Event Organizer
                    <div className="mx-3 my-2"> 
                    Organized the first event by Josh Talks at Kochi in August 2017 at XIME, Kakkanad.
                    </div>
              </div>
          </div>
          <div className="mx-1 my-2 h4 text-justify info">
          Navrachana International School Vadodara
              <div className="text-muted mx-1 my-2 h5 text-justify info">
              Head Boy
                    <div className="mx-3 my-2"> 
                    Elected as the Head Boy of NISV for the academic year 2014-2015
                    </div>
              </div>
          </div>
      </div>
      <div className="h3 code mx-3 mt-2 mb-3">{"</div>"}</div>
      <div className="h3 code mx-3 mt-2 mb-3">{"<div id=\"Extra-Curricular-And-Honors\">"}</div>
      <div className="text-muted mx-5 my-4 h5 text-justify info">
            <p>Finalist (top 15 teams) at CSI InApp Awards 2020</p>
            <p>Special Jury Mention at ICTAK Techathlon 2020 (Hackathon)</p>
            <p>Top 75 teams at MinMash Hacakthon 2020</p>
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
      <div className="h3 code mx-3 mt-2 mb-3">{"<div id=\"Publications\">"}</div>
      <div className="text-muted mx-5 my-4 h5 text-justify info">
            <p>Menon, K.N., Thomas, K., Thomas, J., Titus, D.J., James, D. : Quality Assurance in Cold Chain Networks using Blockchain and IoT - In. Springer Advances in Intelligent Systems and Computing (AISC) Series (2020) </p> <br/>
            <a href="https://drive.google.com/file/d/1WeZkpYL0oLjkVy-7ngzWdk9TKIjB5dkZ/view?usp=sharing" target="_blank" rel="noreferrer">Click Here to view the paper</a>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
      <div className="h3 code mt-2 mb-3">{"</body>"}</div>
      <div className="h3 code mt-2 mb-3">{"</html>"}</div>
      <div className="h3 mt-5">
        <a className="mr-5 icon" href="https://www.linkedin.com/in/karthik-menon/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a className="mr-5 icon" href="https://github.com/mojojojo20" target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a className="mr-5 icon" href="https://drive.google.com/open?id=1cXV2ztOhYJIViQ_rsxdUb1ahC-qJtn08" target="_blank" rel="noreferrer">
          <FaDownload />
        </a>
        <a className="mr-5 icon" href="https://www.instagram.com/kaarthikm_/" target="_blank" rel="noreferrer">
          <Insta />
        </a>
      </div>
    </div>
  )
}
