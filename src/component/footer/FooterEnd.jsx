import React from "react";
import { NavLink } from "react-router-dom";
import footerEndData from "./FooterEndpaths.json";

const FooterEnd = () => {
  return (
    <div className="container-fluid bg-black text-light">
      <div className="row">
        <div className="col-4">
          <p>© 2025 NETSOL Technologies. All Rights Reserved.</p>
        </div>
        <div className="col-8">
          <div>
            {footerEndData.map((e) => {
              return (
                <NavLink
                  key={e.id}
                  className="text-white text-decoration-none px-3"
                  to={e.path}
                >
                  {e.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEnd;
