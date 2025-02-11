import React from "react";
import UserImg1 from "./user1.png";
import UserImg2 from "./user2.png";

const SliderImg = () => {
  const data = [
    {
      description:
        "At MINI, we decided it was time to create an end-to-end purchasing and finance journey for the consumer and it was important to create something more than a lead generator to facilitate the complete transaction for any MINI customer, any place, any time. Our partnership with NETSOL has enabled us not only to catch up with industry leaders, but also to set new benchmarks in digital auto-retail, which the usual suspects in the industry could not provide.",
      name: "Mike Peyton",
      img: [UserImg1],
      title: "Chief Motorer and Vice-President of MINI of the Americas",
    },
    {
      description:
        "NETSOL have been brilliant. Their response times are very quick. We have access to their development team, so any developments that are required are done very quickly, so that’s perfect for us because we need to act quickly on behalf of our vendors. I’d absolutely recommend both Transcend Marketplace (Formerly known as Appex Now) and NETSOL. The product is brilliant. It works fantastically well and NETSOL have been a joy to work with – responsive to our needs and quickly made any changes that we required.",
      name: "Mike Boyes",
      img: [UserImg2],
      title: "Head of Vendor Sales at Haydock Finance",
    },
  ];
  return (
    <div>
      {data.map((item, i) => (
        <div className="container-fluid bg-light p-5" key={i}>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <p>{item.description}</p>
                <h2>{item.name}</h2>
                <p>{item.title}</p>
              </div>
              <div className="col-6 ps-5">
                <img src={item.img} alt="image" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderImg;
