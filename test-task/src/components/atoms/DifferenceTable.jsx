import React from "react";
import Down from "./../../icons/Down.svg";
import Up from "./../../icons/Up.svg";

export const DifferenceTable = ({ difference }) => {
  return (
    <>
      {difference && (
        <div className={`diff ` + (difference > 0 ? "" : "-bad")}>
          <img className="plus" src={difference < 0 ? Down : Up} alt="" />
          <div style={{ marginLeft: "2px" }}>
            {difference > 0 ? "+" + difference : difference}
          </div>
        </div>
      )}
    </>
  );
};
