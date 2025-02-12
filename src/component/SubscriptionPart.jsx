import React from "react";

const SubscriptionPart = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3>Dive deeper with us - Subscribe to our newsletter for more.</h3>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <input type="text" placeholder="abc@example.com" />
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
