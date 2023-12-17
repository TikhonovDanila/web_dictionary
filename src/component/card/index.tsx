import React from "react";
import "./index.css";
import {GlossaryProps} from "../interface/glossary-props";

export const Card: React.FC<Omit<GlossaryProps, "coordinate">> = ({
  term,
  definition
}) => {
  return (
    <div className="card">
      <div className="card-title">
        <b>{term}</b>
      </div>

      <div className="card-definition">
        {definition}
      </div>
    </div>
  )
}
