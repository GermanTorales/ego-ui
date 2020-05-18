import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavbarComponent from "./react/Navbar/NavbarComponent";
import ModelsComponent from "./react/Models/ModelsComponent";
import SingleModel from "./react/SingleModel/SingleModelComponent";
import Footer from "./react/Footer/Footer";

import "./assets/styles/styles.css";
import "./assets/styles/fonts.css";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Switch>
        <Route exact path="/models" component={ModelsComponent} />
        <Route exact path="/models/:id" component={SingleModel} />
        <Redirect to={"/models"} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
