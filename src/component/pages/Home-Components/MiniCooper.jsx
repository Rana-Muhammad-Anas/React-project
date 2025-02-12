import React from "react";
import MyButton from "../../MyButton";
import minicooper from "./mini-cooper.png";

const MiniCooper = () => {
  return (
    <div className="container px-4 p-5">
      <div className="row mx-0">
        <div className="col-6 gradientPage rounded pt-5 px-4">
          <h2 className="fw-bold">
            Digital transformation in auto retail: The MINI Anywhere case-study
          </h2>
          <p className="fs-6">
            In June 2021, MINI USA launched their groundbreaking digital retail
            platform, MINI Anywhere, developed in collaboration with NETSOL
            Technologies. Built on NETSOL’s Transcend Retail platform (formerly
            known as Otoz), MINI Anywhere is a bespoke solution designed to meet
            MINI USA's specific needs, offering customers a seamless, end-to-end
            digital purchasing experience.
          </p>
          <div className="d-flex">
            <MyButton name="Download Now" />
            <img
              style={{
                width: 250,
                height: 250,
              }}
              src={minicooper}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="col-6 py-5 px-4">
          <div className="py-5">
            <span className="bg-black text-light rounded-pill sm-font px-4 py-2">
              RESOURCE CENTER
            </span>
            <h1 className="my-3 fw-bold pb-3">Insights</h1>
            <p className="fs-6">
              Discover the latest content on the most important topics in and
              around financial services and technology. Read our articles,
              case-studies, white papers and more. Watch our on-demand webinars
              as our industry experts share their perspectives about the
              industry.
            </p>
            <MyButton name="Discover Insights" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCooper;
