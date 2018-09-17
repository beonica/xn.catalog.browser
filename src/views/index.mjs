import { h } from "hyperapp"; // eslint-disable-line

import { Footer } from "./footer.mjs";
import { Main } from "./main.mjs";
import { NavBar } from "./navbar.mjs";

export default (state, actions) => (
  <div oncreate={() => actions.findClient()}>
    <NavBar />
    <Main />
    <Footer />
  </div>
);
