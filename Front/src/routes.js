import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Fabrics from "./views/Fabrics/Fabric";
function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Fabrics} />
      <Route path="/Fabricas" exact component={Fabrics} />
    </BrowserRouter>
  );
}

export default Routes;
