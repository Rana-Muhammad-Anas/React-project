import React from "react";
import { NavLink } from "react-router-dom";
import data from "./footerPaths.json";
import FooterEnd from "./FooterEnd";
import SubscriptionPart from "../SubscriptionPart";

const Footer = () => {
  return (
    <>
      <SubscriptionPart />
      <div className="container-fluid footer">
        <div className="row">
          {data.map((e) => {
            return (
              <div className="col-3 text-center my-3" key={e.id}>
                <p className="text-light mb-0">
                  <strong>{e.heading}</strong>
                </p>
                <ul>
                  {e.path.map((p) => {
                    return (
                      <li key={p.id}>
                        <NavLink
                          className="text-white text-decoration-none"
                          to={p.path}
                        >
                          {p.title}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <FooterEnd />
    </>
  );
};

export default Footer;
