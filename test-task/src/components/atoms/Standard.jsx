import React from "react";

export const Standard = ({ size, standard }) => {
  return (
    <>
      {standard && size && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ height: size * standard }} className="standard">
            <div className="standard__inner">{standard}</div>
          </div>
          <div
            style={{
              marginTop: "15px",
              color: "#898290",
              fontFamily: "Roboto",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            норматив
          </div>
        </div>
      )}
    </>
  );
};
