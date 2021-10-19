import React from "react";
import Down from "./../../icons/Down.svg";

export const DifferenceTable = ({ difference }) => {
  return (
    <>
      {difference && (
        <div className={`diff ` + (difference > 0 ? "" : "-bad")}>
          <img className="plus" src={Down} alt="" />
          <div style={{ marginLeft: "2px" }}>
            {difference > 0 ? "+" + difference : difference}
          </div>
        </div>
      )}
    </>
  );
};
