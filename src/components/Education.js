import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Education = () => {
  const query = useStaticQuery(graphql`
    {
      allEducationYaml {
        edges {
          node {
            school
            degree
            year
            grade
          }
        }
      }
    }
  `);
  const educationList = query.allEducationYaml.edges;
  return (
    <>
      <div className="h3 mx-3 code mt-2 mb-3">{'<div id="Education">'}</div>
      {educationList.map(({ node }) => {
        return (
          <div
            key={node.grade.replace(" ", "-")}
            className="mx-5 my-2 h3 text-justify info"
          >
            {node.school}
            <div className="text-muted mx-1 my-2 h4 text-justify info">
              {node.degree}
              <div className="mx-4 h4">{node.grade}</div>
              <div className="mx-4 h6">{node.year}</div>
            </div>
          </div>
        );
      })}
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
    </>
  );
};
export default Education;
