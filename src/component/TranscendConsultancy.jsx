import React from "react";
import {
  FaDatabase,
  FaHandshake,
  FaLock,
  FaPuzzlePiece,
  FaRobot,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import data from "./TranscendConsultancyData.json";
import { IoCloud } from "react-icons/io5";

const TranscendConsultancy = () => {
  const consultanceIcon = {
    FaLock: <FaLock className="text-primary fs-1 pe-2" />,
    IoCloud: <IoCloud className="text-primary fs-1 pe-2" />,
    FaHandshake: <FaHandshake className="text-primary fs-1 pe-2" />,
    FaPuzzlePiece: <FaPuzzlePiece className="text-primary fs-1 pe-2" />,
    FaDatabase: <FaDatabase className="text-primary fs-1 pe-2" />,
    FaRobot: <FaRobot className="text-primary fs-1 pe-2" />,
  };
  return (
    <div className="container-fluid  bg-white py-5">
      <div className="text-center">
        <h1>Transcend Consultancy</h1>
      </div>
      <div className="row">
        {data.map((item) => {
          return (
            <div
              className="col-md-4 col-6 d-flex justify-content-center bg-light p-5 "
              key={item.id}
            >
              <div>{consultanceIcon[item.icon]}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <NavLink>
                  <h5>Learn More</h5>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TranscendConsultancy;
