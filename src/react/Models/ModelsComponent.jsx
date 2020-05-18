import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchAllModels } from "../../redux/ModelsRedux/actions";
import { setNewPosition } from "../../redux/NavbarRedux/action";

import Models from "./Models";

const ModelsComponent = ({
  fetchAllModels,
  models,
  setNewPosition,
  history,
}) => {
  const [modelsState, setModelsState] = useState([]);

  useEffect(() => {
    setNewPosition("modelos"); //CUANDO SE RENDERIZA EL COMPONENTE SE SETEA LA POSICION EN "MODELOS" PARA LA NAVBAR
    fetchAllModels();
  }, []);

  //FUNCION PARA DETECTAR CAMBIOS EN EL ARREGLO DE MODELOS Y ASI RE-RENDERIZAR EL COMPONENTE
  useEffect(() => {
    setModelsState(models);
  }, [models]);

  //FUNCIONA PARA AGREGARLE LOS PUNTOS DE MILES AL PRECIO
  function formatNumber(num) {
    num = num.toString().replace(/\$,/g, "");
    if (isNaN(num)) num = "0";
    let sign = num === (num = Math.abs(num));
    num = Math.floor(num * 100 + 0.50000000001);
    let cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
      num =
        num.substring(0, num.length - (4 * i + 3)) +
        "." +
        num.substring(num.length - (4 * i + 3));
    return (!sign ? "" : "-") + num;
  }

  //FUNCION QUE REDIRECCIONA A LA VISTA DE UN MODELO EN PARTICULAR
  const onSubmitSingleModel = (id) => {
    setNewPosition("ficha"); //SE SETEA LA POSICION EN "FICHA" PARA EL NAVBAR
    history.push(`/models/${id}`);
  };

  return (
    <Models
      formatNumber={formatNumber}
      models={modelsState}
      onSubmitSingleModel={onSubmitSingleModel}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    models: state.models.filterModels,
    originalModels: state.models.models,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllModels: () => dispatch(fetchAllModels()),
    setNewPosition: (position) => dispatch(setNewPosition(position)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelsComponent);
