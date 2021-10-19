import React from "react";
import { Colomn } from "../atoms/Colomn";
import { DifferenceTable } from "../atoms/DifferenceTable";
import { Standard } from "../atoms/Standard";
import { Footer } from "./Footer";

export const Graf = ({ data, size }) => {
  return (
    <>
      <div className="graf">
        <div className="graf__columns">
          <div
            style={{
              position: "absolute",
              top: "-72px",
              left: `${75 / 3}%`,
              zIndex: 2,
            }}
          >
            <DifferenceTable
              difference={
                data?.test?.front +
                data?.test?.back +
                data?.test?.db -
                (data?.dev?.front + data?.dev?.back + data?.dev?.db)
              }
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "-72px",
              right: `${75 / 3}%`,
              zIndex: 2,
            }}
          >
            <DifferenceTable
              difference={
                data?.prod?.front +
                data?.prod?.back +
                data?.prod?.db -
                (data?.test?.front + data?.test?.back + data?.test?.db)
              }
            />
          </div>

          {/* Захардкодил стрелки */}

          <div
            style={{
              position: "absolute",
              top: "-60px",
              height: `calc(100% - ${
                (data?.dev?.front + data?.dev?.back + data?.dev?.db) * size
              }px + 20px)`,
              left: `40px`,
              width: "1px",
              background: "black",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "-60px",
              height: `1px`,
              left: `40px`,
              width: `calc(50% - 52px)`,
              background: "black",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "-60px",
              height: `calc(100% - ${
                (data?.test?.front + data?.test?.back + data?.test?.db) * size
              }px + 20px)`,
              left: `calc(50% - 12px)`,
              width: "1px",
              background: "black",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              top: "-60px",
              height: `calc(100% - ${
                (data?.test?.front + data?.test?.back + data?.test?.db) * size
              }px + 20px)`,
              left: `calc(50% + 12px)`,
              width: "1px",
              background: "black",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "-60px",
              height: `1px`,
              left: `calc(50% + 12px)`,
              width: `calc(50% - 52px)`,
              background: "black",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "-60px",
              height: `calc(100% - ${
                (data?.prod?.front + data?.prod?.back + data?.prod?.db) * size
              }px + 20px)`,
              left: `calc(100% - 40px)`,
              width: "1px",
              background: "black",
            }}
          ></div>

          {/* Захардкодил стрелки */}

          <Colomn
            size={size}
            front={data?.dev?.front}
            back={data?.dev?.back}
            db={data?.dev?.db}
            placeholder="dev"
          />
          <Colomn
            size={size}
            front={data?.test?.front}
            back={data?.test?.back}
            db={data?.test?.db}
            placeholder="test"
          />
          <Colomn
            size={size}
            front={data?.prod?.front}
            back={data?.prod?.back}
            db={data?.prod?.db}
            placeholder="prod"
          />
        </div>

        <Standard standard={data?.norm} size={size} />
      </div>
      <div className="main__footer">
        <Footer />
      </div>
    </>
  );
};
