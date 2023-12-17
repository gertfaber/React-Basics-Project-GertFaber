// import { ChakraProvider, Box } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      {console.log("=============START OF PROGRAM 3 =====================")}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
