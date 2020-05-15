import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import EgoIcon from "../../assets/images/logo.png";
import styles from "./styles";

const menu1 = [
  "Modelos",
  "Servicios y Accesorios",
  "Financiacion",
  "Reviews y Comunidad",
];

const menu2 = [
  "Toyota Mobility Service",
  "Toyota Gazoo Racing",
  "Toyota Híbridos",
];

const menu3 = ["Concerionarios", "Test Drive", "Contacto"];

const menu4 = [
  "Actividades",
  "Servicios al Cliente",
  "Ventas Especiales",
  "Innovación",
  "Prensa",
  "Acerca de...",
];

export default ({ toggle, onToggle, position, onGoToHome }) => (
  <styles.Container>
    <styles.NavbarContainer>
      <styles.NavbarLeft>
        <styles.LogoImage
          onClick={() => onGoToHome()}
          src={EgoIcon}
          alt="ego logo"
        />
        <styles.Breadcrumb className="topnav" id="myTopnav">
          <styles.BreadcrumbItem
            color={position === "modelos" ? "#d0021b" : "#000"}
            border={position === "modelos" ? "4px solid #d0021b" : "none"}
          >
            Modelos
          </styles.BreadcrumbItem>
          <styles.BreadcrumbItem
            color={position === "ficha" ? "#d0021b" : "#000"}
            border={position === "ficha" ? "4px solid #d0021b" : "none"}
          >
            Ficha de Modelo
          </styles.BreadcrumbItem>
        </styles.Breadcrumb>
      </styles.NavbarLeft>
      <styles.NavbarRight>
        <styles.MenuText>Menú</styles.MenuText>
        <styles.Icon>
          <MenuIcon onClick={onToggle} />
        </styles.Icon>
      </styles.NavbarRight>
    </styles.NavbarContainer>
    <styles.ToggleMenu display={!toggle && "none"}>
      <styles.CloseButtom onClick={onToggle}>
        <styles.TextCloseButtom>Cerrar</styles.TextCloseButtom>
        <CloseIcon fontSize="default" />
      </styles.CloseButtom>
      <styles.MenuContainer background={"#fff"}>
        <styles.MenuList>
          {menu1.map((elemento, inx) => (
            <styles.MenuItem key={inx}>{elemento}</styles.MenuItem>
          ))}
        </styles.MenuList>
      </styles.MenuContainer>
      <styles.Divider />
      <styles.MenuContainer background={"#fff"}>
        <styles.MenuList>
          {menu2.map((elemento, inx) => (
            <styles.MenuItem key={inx}>{elemento}</styles.MenuItem>
          ))}
        </styles.MenuList>
      </styles.MenuContainer>
      <styles.Divider />
      <styles.MenuContainer background={"#fff"}>
        <styles.MenuList>
          {menu3.map((elemento, inx) => (
            <styles.MenuItem key={inx}>{elemento}</styles.MenuItem>
          ))}
        </styles.MenuList>
      </styles.MenuContainer>
      <styles.Divider />
      <styles.MenuContainer background={"#efeeef"}>
        <styles.MenuList>
          {menu4.map((elemento, inx) => (
            <styles.MenuItem key={inx}>{elemento}</styles.MenuItem>
          ))}
        </styles.MenuList>
      </styles.MenuContainer>
    </styles.ToggleMenu>
  </styles.Container>
);
