import React from 'react'
import "../style.css"
import Appbar from "../components/appbar"
import { Helmet } from "react-helmet"
function ErrorPage() {
    return (
        <div className="container-fluid">
        <Appbar />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Karthik Menon | Software Engineer | BigBinary | Rajagiri</title>
        </Helmet>
        <div className="row">
            <h1>You've wandered into space.</h1>            
        </div>
      </div>
    )
}

export default ErrorPage
