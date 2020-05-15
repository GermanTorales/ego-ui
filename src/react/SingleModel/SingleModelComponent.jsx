import React, { useState, useEffect } from "react";
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
  const [modelState, setModelState] = useState(model);

  useEffect(() => {
    fetchSingleModel(match.params.id).then((data) => setModelState(data));
    setNewPosition("ficha");
  }, []);

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
