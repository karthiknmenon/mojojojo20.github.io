import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Karthik Menon | Front End Dev | UI/UX | Rajagiri</title>
      </Helmet>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Hello, Welcome to Karthik Menon's Online Design Portoflio. He is a final year undergrad at Rajagiri School of Engineering and Technology doing majors in Information Technology with Honours in Networking. Karthik Menon is know for front end dev and also UI/UX. In recent past, he has been interested in Machine Learning and blockchain. Karthik also works for few startups at Incubation Center, RSET." />
      </Helmet>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="keywords" content="Rajagiri, Front End Developer, UI/UX, Web Developer, SurveySparrow, travelngo, traveling startup in Kerala, reactJS, Rajajgiri Front end dev, Rajagiri Developer, Rajagiri UI/UX, Karthik, Karthik Menon, mojojojo20, menonk484, menonk69, iTRAXX representative, blockchain developer, programmer, RSET, Information Technology, RSET IT Department, Karthik, flutter, Machine Leanring, hound electric, incubation center RSET, REACT, node, Angular, Figma, Mockups, Wireframing, User Experience, User Interface, SEO, helmet" />
      </Helmet>
      <Helmet>
            <meta name="linkedin" content="https://www.linkedin.com/in/karthik-menon/" />
      </Helmet>
      <Helmet>
            <meta name="github" content="https://github.com/mojojojo20" />
      </Helmet>
    </div>
  )
}

export default index
