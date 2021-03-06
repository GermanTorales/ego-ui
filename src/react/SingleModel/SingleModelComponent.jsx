import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSingleModel } from "../../redux/ModelsRedux/actions";
import { setNewPosition } from "../../redux/NavbarRedux/action";

import SingleModel from "./SingleModel";

const SingleModelComponent = ({
  model,
  match,
  fetchSingleModel,
  setNewPosition,
}) => {
  useEffect(() => {
    fetchSingleModel(match.params.id); // REQUEST A LA API PARA UN MODELO POR ID
    setNewPosition("ficha"); //CUANDO SE RENDERIZA EL COMPONENTE SE SETEA LA POSICION EN "FICHA" PARA LA NAVBAR
  }, [match.params.id, fetchSingleModel, setNewPosition]);

  return (
    <div>{model && model.name ? <SingleModel model={model} /> : null}</div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    model: state.models.singleModel,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchSingleModel: (id) => dispatch(fetchSingleModel(id)),
    setNewPosition: (pos) => dispatch(setNewPosition(pos)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleModelComponent);
