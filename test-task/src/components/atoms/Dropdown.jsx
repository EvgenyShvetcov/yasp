import React from "react";

export const Dropdown = ({ tests, setChosenTest }) => {
  return (
    <>
      <div className="dropdown">
        {tests.map((el) => (
          <button
            className="dropdown__button"
            key={el}
            value={el}
            onClick={(e) => setChosenTest(e.target.value)}
          >
            {el}
          </button>
        ))}
      </div>
    </>
  );
};
