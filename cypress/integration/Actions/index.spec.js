/// <reference types="cypress" />

describe("Actions", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });
  it("type() - To type into a DOM element", () => {
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("slow.typing@email.com", { delay: 100 })
      .should("have.value", "slow.typing@email.com");

    cy.get(".action-disabled")
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type("disabled error checking", { force: true })
      .should("have.value", "disabled error checking");
  });

  it("focus() - To focus on a DOM element", () => {
    cy.get(".action-focus")
      .focus()
      .should("have.class", "focus")
      .prev()
      .should("have.attr", "style", "color: orange;");
  });

  it(".blur() - To blur on a DOM element", () => {
    cy.get(".action-blur")
      .type("About to blur")
      .blur()
      .should("have.class", "error")
      .prev()
      .should("have.attr", "style", "color: red;");
  });
  
  it("clear():- To clear on a DOM element", () => {
    cy.get(".action-clear")
      .type("Clear this text")
      .should("have.value", "Clear this text")
      .clear()
      .should("have.value", "");
  });
});
