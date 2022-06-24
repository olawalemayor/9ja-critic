import React, { useState } from "react";
import { Navbar, Nav } from "rsuite";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <Navbar>
      <Navbar.Brand as="div">
        <NavLink to="" className="nav-link">
          9JA
          <span style={{ color: "white", WebkitTextStroke: "1px green" }}>
            CRI
          </span>
          TIC
        </NavLink>
      </Navbar.Brand>
      <Nav activeKey={activeKey} onSelect={setActiveKey}>
        <Nav.Item>Dashboard</Nav.Item>
        <Nav.Item>Profile</Nav.Item>
        <Nav.Item>Users</Nav.Item>
        <Nav.Item>Movies</Nav.Item>
      </Nav>
      {/* <Nav pullRight>
        <Nav.Item>Settings</Nav.Item>
      </Nav> */}
    </Navbar>
  );
}
