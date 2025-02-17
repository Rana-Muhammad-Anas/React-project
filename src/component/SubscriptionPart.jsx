import React from "react";

const SubscriptionPart = () => {
  return (
    <div className="container-fluid bg-light p-5">
      <div className="row p-3">
        <div className="col-6 p-5">
          <h3 className="fw-bold px-4">
            Dive deeper with us - Subscribe to our newsletter for more.
          </h3>
        </div>
        <div className="col-6 py-5">
          <div className="row">
            <div className="col-6 px-0">
              <input
                type="text"
                placeholder="abc@example.com"
                className="p-2 rounded"
              />
            </div>
            <div className="col-6">
              <button className="btn btn-info">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPart;
