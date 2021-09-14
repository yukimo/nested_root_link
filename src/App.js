import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page1DetalA } from "./Page1DetalA";
import { Page1DetalB } from "./Page1DetalB";
import { Page2 } from "./Page2";

import "./styles.css";
import { Router } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
