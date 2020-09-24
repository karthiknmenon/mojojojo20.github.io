import React from "react";
import "../style.css";
import Appbar from "../components/appbar";
import Info from "../components/info";
import { Helmet } from "react-helmet";

function index() {
  return (
    <div>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Karthik Menon | Software Engineer | BigBinary | Rajagiri</title>
      </Helmet>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Hello, Welcome to Karthik Menon's Online Design Portfolio. Karthik has completed his undergrad at Rajagiri School of Engineering and Technology doing majors in Information Technology with Honours. He is currently working remotely as a Software Engineer at BigBinary. In recent past, he has been interested in blockchain and IoT. Karthik has also worked for few startups at Incubation Centre, RSET."
        />
      </Helmet>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Karthik Menon, Karthik N Menon, Rajagiri, Software Engineer, BigBinary, Front End Developer, UI/UX, Web Developer, SurveySparrow, travelngo, traveling startup in Kerala, reactJS, Rajajgiri Front end dev, Rajagiri Developer, Rajagiri UI/UX, Karthik, Karthik Menon, mojojojo20, menonk484, menonk69, iTRAXX representative, blockchain developer, programmer, RSET, Information Technology, RSET IT Department, Karthik, flutter, Machine Leanring, hound electric, incubation center RSET, REACT, node, react, Figma, Mockups, Wireframing, User Experience, User Interface, SEO, helmet"
        />
      </Helmet>
    </div>
  );
}

export default index;
