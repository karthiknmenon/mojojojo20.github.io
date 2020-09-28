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
          content="Hi, I am Karthik Menon, currently working remotely as a Software Engineer at BigBinary. I have completed my Bachelor's in Information Technology with Honours at Rajagiri School of Engineering & Technology."
        />
      </Helmet>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="Karthik Menon, Karthik N Menon, Rajagiri, Software Engineer, BigBinary, Front End Developer, UI/UX, Web Developer, SurveySparrow, travelngo, traveling startup in Kerala, reactJS, Rajajgiri Front end dev, Rajagiri Developer, Rajagiri UI/UX, Karthik, Karthik Menon, mojojojo20, menonk484, menonk69, iTRAXX representative, blockchain developer, programmer, RSET, Information Technology, RSET IT Department, Karthik, flutter, Machine Leanring, hound electric, incubation center RSET, REACT, node, react, Figma, Mockups, Wireframing, User Experience, User Interface"
        />
      </Helmet>
    </div>
  );
}

export default index;
