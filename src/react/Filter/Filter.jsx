import React from "react";

import styles from "./styles";
import upIcon from "../../assets/images/iconUpx3.png";
import downIcon from "../../assets/images/iconDownx3.png";

const menuFilter = [
  "Todos",
  "Autos",
  "Pickups y Comerciales",
  "SUVs y Crossovers",
];

export default ({
  onToggleMenu,
  toggleOrder,
  toggleFilter,
  onChangeFilter,
  onChangeOrder,
}) => {
  return (
    <styles.Container>
      {/* MENU FILTER BY */}
      <styles.Dropdown>
        <styles.TitleContainer>
          <styles.DropdownTitle onClick={() => onToggleMenu("filter")}>
            Filtrar por
          </styles.DropdownTitle>
          <styles.IconUpFilter
            src={toggleFilter ? upIcon : downIcon}
            alt="upIcon"
          />
        </styles.TitleContainer>
        <styles.MenuFilterContainer toggle={!toggleFilter && "none"}>
          <styles.MenuFilterList>
            {menuFilter.map((item, inx) => (
              <styles.MenuFilterItem
                key={inx}
                background={inx === 0 ? "rgba(209, 214, 214, 0.2)" : "#fff"}
              >
                <styles.MenuButtonItem
                  onClick={(e) => {
                    onChangeFilter(e, item);
                    onToggleMenu("filter");
                  }}
                >
                  {item}
                </styles.MenuButtonItem>
              </styles.MenuFilterItem>
            ))}
          </styles.MenuFilterList>
        </styles.MenuFilterContainer>
      </styles.Dropdown>

      {/* MENU ORDER BY */}
      <styles.DropdownOrder>
        <styles.TitleOrderContainer>
          <styles.DropdownTitle onClick={() => onToggleMenu("order")}>
            Ordenar por
          </styles.DropdownTitle>
          <styles.IconUpOrder
            src={toggleOrder ? upIcon : downIcon}
            alt="upIcon"
          />
        </styles.TitleOrderContainer>
        <styles.MenuOrderContainer toggle={!toggleOrder && "none"}>
          <styles.MenuOrderList>
            <styles.MenuOrderItem background={"rgba(209, 214, 214, 0.2)"}>
              <styles.OrderButton
                onClick={(e) => {
                  onChangeOrder(e, "Todos");
                  onToggleMenu("order");
                }}
              >
                Nada
              </styles.OrderButton>
            </styles.MenuOrderItem>
            <styles.MenuOrderItem>
              <styles.OrderButton
                onClick={(e) => {
                  onChangeOrder(e, "menor", "price");
                  onToggleMenu("order");
                }}
              >
                De <strong>menor </strong>a<strong> mayor </strong> precio
              </styles.OrderButton>
            </styles.MenuOrderItem>
            <styles.MenuOrderItem>
              <styles.OrderButton
                onClick={(e) => {
                  onChangeOrder(e, "mayor", "price");
                  onToggleMenu("order");
                }}
              >
                De <strong>mayor </strong>a<strong> menor </strong> precio
              </styles.OrderButton>
            </styles.MenuOrderItem>
            <styles.MenuOrderItem>
              <styles.OrderButton
                onClick={(e) => {
                  onChangeOrder(e, "nuevo", "year");
                  onToggleMenu("order");
                }}
              >
                Más <strong>nuevo </strong> primero
              </styles.OrderButton>
            </styles.MenuOrderItem>
            <styles.MenuOrderItem>
              <styles.OrderButton
                onClick={(e) => {
                  onChangeOrder(e, "viejo", "year");
                  onToggleMenu("order");
                }}
              >
                Más <strong>viejo </strong> primero
              </styles.OrderButton>
            </styles.MenuOrderItem>
          </styles.MenuOrderList>
        </styles.MenuOrderContainer>
      </styles.DropdownOrder>
    </styles.Container>
  );
};
