/// <reference types = "cypress" />

import { square } from "../page_objects/square-page";
import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na tela do quadrado", () => {
  cy.visit("http://127.0.0.1:5500/app/index.html");
});

And("o quadrado está visível", () => {
  square().should("be.visible");
});

When("eu der um clique longo em cima do quadrado", () => {
  square().trigger("pointerdown", { button: 0 });
});

Then("o quadrado deve expandir para 225px de altura e largura", () => {
  square().invoke("outerWidth").should("equal", 225);
  square().invoke("outerHeight").should("equal", 225);
});

And("espero o final da transformação do quadrado", () => {
  square().wait(600);
});

Then("o quadrado deve retrair para 90px de altura e largura", () => {
  square().invoke("outerWidth").should("equal", 90);
  square().invoke("outerHeight").should("equal", 90);
});
