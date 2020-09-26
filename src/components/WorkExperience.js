import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function WorkExperience() {
  const query = useStaticQuery(graphql`
    {
      allWorkexYaml {
        edges {
          node {
            company
            position
            description
            time
          }
        }
      }
    }
  `);
  const workList = query.allWorkexYaml.edges;
  return (
    <>
      <div className="h3 mx-3 code mt-2 mb-3">
        {'<div id="Work-Experience">'}
      </div>
      {workList.map(({ node }) => (
        <div
          key={node.position.replace(" ", "-")}
          className="mx-5 my-2 h3 text-justify info"
        >
          {node.company}
          <div className="text-muted mx-5 my-2 h4 text-justify info">
            {node.position}
            <div className="mx-1 my-2 h5">{node.description}</div>
            <div className="mx-1 my-2 h6">{node.time}</div>
          </div>
        </div>
      ))}
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
    </>
  );
}
