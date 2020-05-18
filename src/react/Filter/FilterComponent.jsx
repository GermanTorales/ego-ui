import React, { useState } from "react";

import Filter from "./Filter";

const FilterComponent = ({ onChangeOrder, onChangeFilter }) => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);

  const onToggleMenu = (menu) => {
    if (menu === "filter") {
      setToggleFilter(!toggleFilter);
      setToggleOrder(false);
    } else {
      setToggleFilter(false);
      setToggleOrder(!toggleOrder);
    }
  };

  return (
    <Filter
      toggleFilter={toggleFilter}
      toggleOrder={toggleOrder}
      onToggleMenu={onToggleMenu}
      onChangeFilter={onChangeFilter}
      onChangeOrder={onChangeOrder}
    />
  );
};

export default FilterComponent;
