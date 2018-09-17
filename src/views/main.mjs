import { h } from "hyperapp"; // eslint-disable-line

import { CatalogFilters } from "./catalog.filters.mjs";
import { CatalogItems } from "./catalog.items.mjs";
import { Jumbotron } from "./jumbotron.mjs";

export const Main = () => () => (
  <main>
    <Jumbotron />
    <div class="container">
      <CatalogFilters />
      <CatalogItems />
      <hr />
    </div>
  </main>
);
