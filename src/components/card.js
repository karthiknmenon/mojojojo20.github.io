import React from "react";

function card(props) {
  const { cardTitle, cardSubtitle, link } = props;
  return (
    <div className="col-lg-6">
      <div className="card mx-3 my-2">
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p className="card-text text-muted">{cardSubtitle}</p>
          <a href={link} className="card-link" target="_blank" rel="noreferrer">
            Check Out the Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default card;
