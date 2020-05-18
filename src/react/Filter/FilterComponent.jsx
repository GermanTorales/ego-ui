import React, { useState } from "react";
import { connect } from "react-redux";

import { changeModelsStore } from "../../redux/ModelsRedux/actions";
import { changeMenuPosition } from "../../redux/FilterRedux/actions";

import Filter from "./Filter";

const FilterComponent = ({
  models,
  originalModels,
  changeModelsStore,
  changeMenuPosition,
  positions,
}) => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);

  // FUNCTION QUE PONE AL MENU FILTER U ORDER EN PANTALLA AL HACER CLICK EN ÉL
  // MUESTRA UNO Y OCULTA AL OTRO
  const onToggleMenu = (menu) => {
    if (menu === "filter") {
      setToggleFilter(!toggleFilter);
      setToggleOrder(false);
    } else {
      setToggleFilter(false);
      setToggleOrder(!toggleOrder);
    }
  };

  //FUNCION PARA MODIFICAR EL ARREGLO DE MODELOS SEGUN LA CATEGORIA QUE SE ELIJA EN EL FILTRO
  const onChangeFilter = (e, filter) => {
    let filteredModels = originalModels.slice();
    if (filter !== "Todos") {
      filteredModels = filteredModels.filter(
        (model) => model.segment === filter
      );
    }
    changeMenuPosition(filter.toLowerCase(), "filter");
    changeModelsStore(filteredModels);
  };

  //FUNCION PARA MODIFICAR EL ARREGLO DE MODELOS SEGUN EL ORDEN QUE SE ELIJA EN EL MENU DE ORDENES
  const onChangeOrder = (order, camp) => {
    let orderedModels = models.slice();
    if (order === "todos") orderedModels = originalModels.slice();
    if (order === "mayor" || order === "nuevo") {
      orderedModels = orderedModels.sort((a, b) => b[camp] - a[camp]);
    } else if (order === "menor" || order === "viejo") {
      orderedModels = orderedModels.sort((a, b) => a[camp] - b[camp]);
    }

    changeMenuPosition(order, "order");
    changeModelsStore(orderedModels);
  };

  return (
    <Filter
      toggleFilter={toggleFilter}
      toggleOrder={toggleOrder}
      onToggleMenu={onToggleMenu}
      onChangeFilter={onChangeFilter}
      onChangeOrder={onChangeOrder}
      positions={positions}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    models: state.models.filterModels,
    originalModels: state.models.models,
    positions: state.menuPosition,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeModelsStore: (orderedModels) =>
      dispatch(changeModelsStore(orderedModels)),
    changeMenuPosition: (pos, menu) => dispatch(changeMenuPosition(pos, menu)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
