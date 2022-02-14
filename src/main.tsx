import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import { Client } from "./utils/queryClient";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={Client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
