import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function Skills() {
  const query = useStaticQuery(graphql`
    {
      allSkillsYaml {
        edges {
          node {
            title
            skills
          }
        }
      }
    }
  `);
  const skillsList = query.allSkillsYaml.edges;
  return (
    <>
      <div className="h3 code mx-3 mt-2 mb-3">{'<div id="skills">'}</div>
      <div className="text-muted mx-3 my-4 h3 text-justify info">
        <div className="card-group">
          {skillsList.map(({ node }, index) => {
            if (index < 3) {
              return (
                <div key={node.title + "_" + Math.random()} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{node.title}</h5>
                    {node.skills.map(element => (
                      <p className="card-text">{element}</p>
                    ))}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="card-group">
          {skillsList.map(({ node }, index) => {
            if (index >= 3) {
              return (
                <div key={node.title + "_" + Math.random()} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{node.title}</h5>
                    {node.skills.map(element => (
                      <p className="card-text">{element}</p>
                    ))}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
    </>
  );
}
