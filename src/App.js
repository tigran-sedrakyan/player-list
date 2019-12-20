import React from "react";
import SearchPage from "./containers/SearchPage";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <SearchPage />
    </Provider>
  );
}

export default App;
