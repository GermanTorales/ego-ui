import React, { useState } from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";

const NavbarComponent = ({ position }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return <Navbar onToggle={onToggle} toggle={toggle} position={position} />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    position: state.position.position,
  };
};

export default connect(mapStateToProps, null)(NavbarComponent);
