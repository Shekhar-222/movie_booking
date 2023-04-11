import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul className="submenu">
        <li>
          <Link to="#0" className="active">
            Home One
          </Link>
        </li>
        <li>
          <Link to="index-2">Home Two</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
