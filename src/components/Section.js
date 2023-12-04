import React from "react";
import "./styles/Section.css";
import GlobaleTitle from "./GlobaleTitle";
function Section() {
  return (
    <div className="Section">
      <div className="row">
        <GlobaleTitle t1="ENTRAÎNEMENTS" t2="Nos Partenaires" />
        <div>
          <div className="MainBtn"> Voir tout</div>
        </div>
      </div>
    </div>
  );
}

export default Section;
