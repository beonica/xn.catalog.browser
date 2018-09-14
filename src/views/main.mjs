import { h } from "hyperapp"; // eslint-disable-line

import "./main.css";

import { presentCatalog } from "../functions.mjs";

import { CatalogFilters } from "./catalog.filters.mjs";
import { Footer } from "./footer.mjs";
import { Header } from "./header.mjs";
import { Item } from "./item.mjs";

export default ({ catalog, filters }, { loadCatalog }) => (
  <div>
    <Header />

    <main role="main">
      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Imaginarium</h1>
        </div>
      </section>

      <div class="album py-5 bg-light" oncreate={loadCatalog}>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <CatalogFilters />
            </div>
          </div>
          <div class="row" hidden={catalog.length !== 0}>
            <div class="col-md-12">
              <p>Carregando catálogo...</p>
            </div>
          </div>
          <br />
          <div class="row">
            {presentCatalog({ catalog, filters }).map((item, index) => (
              <Item item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);
