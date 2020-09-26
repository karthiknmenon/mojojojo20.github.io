import React from "react";
import "../style.css";
import Appbar from "../components/appbar";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

function ErrorPage() {
  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Karthik Menon | Software Engineer | BigBinary | Rajagiri</title>
      </Helmet>
      <div className="row">
        <div className="text-muted my-5 h5 text-center info">
          You've wandered into space.
          <Link to="/">
            Take Me Back.{" "}
            <span role="img" aria-label="404-emoji">
              💨
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
