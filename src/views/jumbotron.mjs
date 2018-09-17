import { h } from "hyperapp"; // eslint-disable-line

import "./jumbotron.css";

export const Jumbotron = () => state => (
  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">{state.clientName} &mdash; Catálogo</h1>
    </div>
  </div>
);
