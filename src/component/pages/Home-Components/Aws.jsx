import React, { useEffect, useState } from "react";
import MyButton from "../../MyButton";

const Aws = () => {
  return (
    <div className="container-fluid bg-warning p-5">
      <div className="row">
        <div className="col-md-3 col-12 text-center p-5">
          <img
            src="https://netsoltech.com/_nuxt/partner-badge.CkXWg-VX.png"
            alt="AWS logo"
          />
        </div>
        <div className="col-md-9 col-12 p-5 ">
          <h1 className="fw-bold">AWS Advanced Tier Partner</h1>
          <p className="my-3 pe-5">
            NETSOL is an official AWS Well-Architected Partner. Our team of
            experienced AWS solution architects can perform a detailed review of
            your existing AWS infrastructure to identify potential risks,
            vulnerabilities and areas for improvement based on the six pillars
            of the AWS Well-Architected Framework.
          </p>
          <MyButton name="Request Review" />
        </div>
      </div>
    </div>
  );
};

export default Aws;
