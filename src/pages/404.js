import React from "react";
import "../style.css";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

function ErrorPage() {
  return (
    <div className="container-fluid">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Karthik Menon | Software Engineer | BigBinary | Rajagiri</title>
      </Helmet>
      <div className="row">
        <div className="text-muted my-5 h3 text-center w-100 h-100">
          Oops. You hit a wrong route. <br />
          You've wandered into space. <br />
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
