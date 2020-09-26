import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function ExtraCurricular() {
  const query = useStaticQuery(graphql`
    {
      allExcurricularYaml {
        edges {
          node {
            point
          }
        }
      }
    }
  `);
  const exCurricularPoints = query.allExcurricularYaml.edges;
  return (
    <>
      <div className="h3 code mx-3 mt-2 mb-3">
        {'<div id="Extra-Curricular-And-Honors">'}
      </div>
      <div className="text-muted mx-5 my-4 h5 text-justify info">
        {exCurricularPoints.map(({ node }) => {
          return <p key={node.point.replace(" ", "-")}>{node.point}</p>;
        })}
      </div>
      <div className="h3 mx-3 code mt-2 mb-3">{"</div>"}</div>
    </>
  );
}
