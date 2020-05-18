import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  fetchAllModels,
  changeModelsStore,
} from "../../redux/ModelsRedux/actions";
import { setNewPosition } from "../../redux/NavbarRedux/action";

import Models from "./Models";

const ModelsComponent = ({
  fetchAllModels,
  models,
  originalModels,
  changeModelsStore,
  setNewPosition,
  history,
}) => {
  const [modelsState, setModelsState] = useState([]);

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

  //FUNCION PARA MODIFICAR EL ARREGLO DE MODELOS SEGUN LA CATEGORIA QUE SE ELIJA EN EL FILTRO
  const onChangeFilter = (e, filter) => {
    e.preventDefault();
    let newModels = [];
    if (filter === "Todos") newModels = originalModels;
    else {
      newModels = originalModels.filter((model) => model.segment === filter);
    }
    changeModelsStore(newModels);
  };

  //FUNCION PARA MODIFICAR EL ARREGLO DE MODELOS SEGUN EL ORDEN QUE SE ELIJA EN EL MENU DE ORDENES
  const onChangeOrder = (e, order, camp) => {
    e.preventDefault();
    let newModels = [];
    if (order === "Todos") newModels = modelsState.slice();
    if (order === "mayor" || order === "nuevo") {
      newModels = modelsState.sort((a, b) => b[camp] - a[camp]);
    } else {
      newModels = modelsState.sort((a, b) => a[camp] - b[camp]);
    }
    setModelsState(newModels);
    changeModelsStore(newModels);
  };

  //FUNCION QUE REDIRECCIONA A LA VISTA DE UN MODELO EN PARTICULAR
  const onSubmitSingleModel = (id) => {
    setNewPosition("ficha"); //SE SETEA LA POSICION EN "FICHA" PARA EL NAVBAR
    history.push(`/models/${id}`);
  };

  useEffect(() => {
    setNewPosition("modelos"); //CUANDO SE RENDERIZA EL COMPONENTE SE SETEA LA POSICION EN "MODELOS" PARA LA NAVBAR
    fetchAllModels().then((res) => {
      res.forEach((e) => (e.price = formatNumber(e.price)));
      setModelsState(res);
    });
  }, [setNewPosition, fetchAllModels]);

  //FUNCION PARA DETECTAR CAMBIOS EN EL ARREGLO DE MODELOS Y ASI RE-RENDERIZAR EL COMPONENTE
  useEffect(() => {
    setModelsState(models);
  }, [models, setModelsState]);

  return (
    <Models
      models={modelsState}
      onChangeFilter={onChangeFilter}
      onChangeOrder={onChangeOrder}
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
    changeModelsStore: (m) => dispatch(changeModelsStore(m)),
    setNewPosition: (position) => dispatch(setNewPosition(position)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModelsComponent);
