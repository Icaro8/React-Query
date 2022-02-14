import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { QueryClientProvider } from "react-query";
import { Client } from "./utils/queryClient";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={Client}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
