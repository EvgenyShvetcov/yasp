import React, { useState, useEffect } from "react";
import axios from "axios";
import { Graf } from "../organisms/Graf";
import Button from "./../../icons/Button.svg";
import { Dropdown } from "../atoms/Dropdown";

export const Main = () => {
  const [data, setData] = useState();
  const [size, setSize] = useState();
  const [open, setOpen] = useState(false);
  const [chosenTest, setChosenTest] = useState("https://rcslabs.ru/ttrp1.json");

  const tests = [
    "https://rcslabs.ru/ttrp1.json",
    "https://rcslabs.ru/ttrp2.json",
    "https://rcslabs.ru/ttrp3.json",
    "https://rcslabs.ru/ttrp4.json",
    "https://rcslabs.ru/ttrp5.json",
  ];

  useEffect(() => {
    axios.get(chosenTest).then((response) => setData(response.data));
  }, [chosenTest]);

  useEffect(() => {
    if (data) {
      setSize(
        Math.max.apply(Math, [
          data?.dev?.front + data?.dev?.back + data?.dev?.db,
          data?.prod?.front + data?.prod?.back + data?.prod?.db,
          data?.test?.front + data?.test?.back + data?.test?.db,
          data?.norm,
        ])
      );
    }
  }, [data]);

  return (
    <>
      <div className="main">
        <div className="main__header">
          <div className="main__title">
            Количество пройденных тестов {data?.title}
          </div>
          <button className="button" onClick={() => setOpen((state) => !state)}>
            <img src={Button} alt=""></img>
          </button>
        </div>
        <div className="main__body">
          <Graf data={data} size={300 / size} />
        </div>
      </div>
      {open && <Dropdown tests={tests} setChosenTest={setChosenTest} />}
    </>
  );
};
