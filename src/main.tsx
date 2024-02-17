import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "react-query";
import TanStack from "./classes/TanStack.ts";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

const client = TanStack.getInstance().getQueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Provider>
);
