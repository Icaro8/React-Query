import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import { Client } from "./utils/queryClient";
import { Layout } from "./layout";
import { GlobaStyle } from "./styles/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={Client}>
      <BrowserRouter>
        <GlobaStyle />
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
