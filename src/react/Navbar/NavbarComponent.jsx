import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Navbar from "./Navbar";

const NavbarComponent = ({ position, history }) => {
  const [toggle, setToggle] = useState(false);

  // FUNCION QUE TOGGLEA EL MENU PRINCIPAL DERECHO
  const onToggle = () => {
    setToggle(!toggle);
  };

  // FUNCTION TANTO PARA EL ICONO EGO COMO PARA LA PESTAÑA MODELOS, REDIRECCIONA A /models
  const onGoToHome = () => {
    history.push("/models");
  };

  return (
    <Navbar
      onToggle={onToggle}
      toggle={toggle}
      position={position}
      onGoToHome={onGoToHome}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    position: state.position.position,
  };
};

export default withRouter(connect(mapStateToProps, null)(NavbarComponent));
