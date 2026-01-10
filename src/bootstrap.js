// importaciones de react-redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// importamos thunk (middelware para peticiones a api)
import thunk from "redux-thunk";

// importaciones react y react-dom
import React from "react";
import ReactDOM from "react-dom";

// importaciones de estilo
import "./style/main.scss";

//import App from "./components/app";
import reducers from "./reducers";
import Home from "./components/home";
import Results from "./components/results";

/* -- configuracion de redux-thunk y redux-devTools --*/

// 1. Configuramos el compose para que use la extensión del navegador si existe,
// o que use el 'compose' normal de Redux si no.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 2. Aplicamos Thunk dentro de esos enhacer y luego pasamos createStore
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk))(
  createStore
);

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" component={Results} />
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
