import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function PositionsOfResponsibility() {
  const query = useStaticQuery(graphql`
    {
      allResponsibilityYaml {
        edges {
          node {
            name
            position
            description
            website
            webText
          }
        }
      }
    }
  `);
  const responsibilityList = query.allResponsibilityYaml.edges;
  return (
    <>
      <div className="h3 mx-3 code mt-2 mb-3">
        {'<div id="Positions-of-Responsibility">'}
      </div>
      {responsibilityList.map(({ node }) => {
        return (
          <div
            key={node.name.replace(" ", "-")}
            className="mx-5 my-4 h3 text-justify info"
          >
            <div className="mx-1 my-2 h4 text-justify">
              {node.name}
              <div className="text-muted mx-1 my-2 h5 text-justify">
                {node.position}
                <div className="mx-3 my-2">
                  {node.description} <br />
                  <a href={node.website} target="_blank" rel="noreferrer">
                    {node.webText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="h3 code mx-3 mt-2 mb-3">{"</div>"}</div>
    </>
  );
}
