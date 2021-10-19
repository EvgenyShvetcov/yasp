import React from "react";

export const Colomn = ({ size, back, db, front, placeholder }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            height: size * front,
            width: "80px",
            background: "#4AB6E8",
            borderRadius: "10px 10px 0 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {front}
        </div>
        <div
          style={{
            height: size * back,
            width: "80px",
            background: "#AA6FAC",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {back}
        </div>
        <div
          style={{
            height: size * db,
            width: "80px",
            background: "#E85498",
            display: "flex",
            borderRadius: "0 0 10px 10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {db}
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
          {placeholder}
        </div>
      </div>
    </>
  );
};
