import React, { useState } from "react";

import Logo from "../../imgs/logo.png";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

import "./Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      {window.innerWidth <= 768 ? (
        <div
          className="bars"
          style={expanded ? { left: "60%" } : { left: "5%" }}
          onClick={() => setExpanded(!expanded)}
        >
          <UilBars />
        </div>
      ) : (
        <></>
      )}
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ``}
      >
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        {/* menu */}
        <div className="menu">
          {SidebarData.map((item, i) => (
            <div
              key={i}
              className={i === active ? "menuItem active" : "menuItem"}
              onClick={() => setActive(i)}
            >
              {item.icon}
              <span>{item.heading}</span>
            </div>
          ))}
          <div className="menuItem">
            <UilSignOutAlt />
            <span>Sign Out</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
