import React from "react";
import MyButton from "../../MyButton";

const TranscendHome = () => {
  const btnNames = [
    "Digital retail",
    "Intermediary portals",
    "Originations",
    "Servicing",
    "Wholesale finance",
  ];
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container bg-white p-5 rounded-4 my-5">
        <div className="row">
          <div className="col-6 pe-5">
            <h1>
              Our platform is now called
              <span className="text-info"> Transcend</span>
            </h1>
            <p className="fs-5 py-3">
              A unified platform that transcends auto and asset retail and
              finance, all powered by Artificial Intelligence.
              <br /> Transcend <br />
              Def. : To rise above or go beyond the limits of.
            </p>
            <MyButton name="Learn More" />
          </div>
          <div className="col-6">
            <video src=""></video>
          </div>
        </div>
      </div>
      {/* transcend plateform */}
      <div className="container">
        <div className="row ps-5 py-5">
          <div>
            <h1 className="text-center">Transcend Platform</h1>
          </div>
          {btnNames.map((btnName, i) => {
            return (
              <div className="col-2" key={i}>
                <button className="rounded-pill p-2">{btnName}</button>
              </div>
            );
          })}
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default TranscendHome;
