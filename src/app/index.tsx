import { Calculate } from "features/calculate/ui";
import { Calculator } from "pages/calculator";
import React from "react";
import { withStore } from "./providers";

const App = () => {
  return (
      <Calculator />
  );
};


export default withStore(App)