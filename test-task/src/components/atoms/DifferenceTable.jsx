import React from "react";
import Down from "./../../icons/Down.svg";
import Up from "./../../icons/Up.svg";

export const DifferenceTable = ({ difference }) => {
  return (
    <>
      <div
        className={
          `diff ` +
          (difference !== 0 &&
            ((difference > 0 && "-good") || (difference < 0 && "-bad")))
        }
      >
        {difference !== 0 && (
          <img className="plus" src={difference < 0 ? Down : Up} alt="" />
        )}
        <div style={{ marginLeft: "2px" }}>
          {difference > 0 ? "+" + difference : difference}
        </div>
      </div>
    </>
  );
};
