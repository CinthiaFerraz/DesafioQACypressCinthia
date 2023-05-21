/// <reference types = "cypress" />

import { square } from "../page_objects/square-page";

beforeEach(() => {
  cy.visit("http://127.0.0.1:5500/app/index.html");
  square().should("be.visible");
});

describe("Verifica o tamanho do quadrado", () => {
  it("Valida se o quadrado aumentou para 225px", () => {
    square()
      .trigger("pointerdown", { button: 0 })
      .invoke("outerWidth")
      .should("equal", 225);

    square().invoke("outerHeight").should("equal", 225);
  });

  it("Valida se o quadrado diminuiu para 90px", () => {
    square()
      .trigger("pointerdown", { button: 0 })
      .wait(600)
      .trigger("pointerdown", { button: 0 })
      .invoke("outerWidth")
      .should("equal", 90);

    square().invoke("outerHeight").should("equal", 90);
  });
});
