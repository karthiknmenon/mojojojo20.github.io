import React from "react";
import {
  FaGithub as Github,
  FaInstagram as Insta,
  FaDownload,
  FaLinkedin
} from "react-icons/fa";

export default function Social() {
  return (
    <>
      <div className="h3 mt-5">
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/karthik-menon/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="mr-5 icon"
          href="https://github.com/karthiknmenon"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://resume.io/r/iF6vyOstC"
          target="_blank"
          rel="noreferrer"
        >
          <FaDownload />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.instagram.com/kaarthikm_/"
          target="_blank"
          rel="noreferrer"
        >
          <Insta />
        </a>
      </div>
    </>
  );
}
