import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterLinks() {
  return (
    <div className="flex flex-col sm:flex-row text-center sm:justify-evenly">
      <NavLink className="my-2" to="">
        Privacy
      </NavLink>
      <NavLink className="my-2" to="">
        Privacy
      </NavLink>
      <NavLink className="my-2" to="">
        Privacy
      </NavLink>
      <NavLink className="my-2" to="">
        Privacy
      </NavLink>
      <NavLink className="my-2" to="">
        Privacy
      </NavLink>
    </div>
  );
}
