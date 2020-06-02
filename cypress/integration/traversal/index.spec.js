/// <reference types="cypress" />

describe("Traversal", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/traversal");
  });

  it(".children() :- To get children of DOM elements", () => {
    cy.get(".traversal-breadcrumb")
      .children(".active")
      .should("contain", "Data");
  });

  it(".closest():-To get the closest ancestor DOM element,", () => {
    cy.get(".traversal-badge").closest("ul").should("have.class", "list-group");
  });

  it(".eq() - To get a DOM element at a specific index,", () => {
    cy.get(".traversal-list>li").eq(1).should("contain", "siamese");
  });

  it(".filter():- To get DOM elements that match a specific selector,", () => {
    cy.get(".traversal-nav>li").filter(".active").should("contain", "About");
  });

  it(".find() - To get descendant DOM elements of the selector", () => {
    cy.get(".traversal-pagination")
      .find("li")
      .find("a")
      .should("have.length", 7);
  });

  it(".first() - To get the first DOM element within elements", () => {
    cy.get(".traversal-table td").first().should("contain", "1");
  });

  it(".last() - To get the last DOM element within elements", () => {
    cy.get(".traversal-buttons .btn").last().should("contain", "Submit");
  });

  it(".next() - To get the next sibling DOM element within elements", () => {
    cy.get(".traversal-ul")
      .contains("apples")
      .next()
      .should("contain", "oranges");
  });

  it(".nextAll() - To get all of the next sibling DOM elements within elements", () => {
    cy.get(".traversal-next-all")
      .contains("oranges")
      .nextAll()
      .should("have.length", 3);
  });

  it(".nextUntil() - To get all of the next sibling DOM elements within elements until another element", () => {
    cy.get("#veggies").nextUntil("#nuts").should("have.length", 3);
  });

  it(".nextAll() - To get all of the next sibling DOM elements within elements", () => {
    cy.get(".traversal-next-all")
      .contains("oranges")
      .nextAll()
      .should("have.length", 3);
  });

  it(".not() - To remove DOM element(s) from the set of elements", () => {
    cy.get(".traversal-disabled .btn")
      .not("[disabled]")
      .should("not.contain", "Disabled");
  });

  it(".parent() - To get parent DOM element of elements", () => {
    cy.get(".traversal-mark").parent().should("contain", "Morbi leo risus");
  });

  it(".parents() - To get parents DOM element of elements", () => {
    cy.get(".traversal-mark").parents().should("match", "blockquote");
  });

  it(".parentsUntil() - To get parents DOM element of elements until other element", () => {
    cy.get(".clothes-nav")
      .find(".active")
      .parentsUntil(".clothes-nav")
      .should("have.length", 2);
  });

  it(".prev() - To get the previous sibling DOM element within elements", () => {
    cy.get(".birds").find(".active").prev().should("contain", "Lorikeets");
  });

  it(".prevAll() - To get all previous sibling DOM elements within elements", () => {
    cy.get(".fruits-list").find(".third").prevAll().should("have.length", 2);
  });

  it(".prev() - To get the previous sibling DOM element within elements", () => {
    cy.get(".birds").find(".active").prev().should("contain", "Lorikeets");
  });

  it(".prevUntil() - To get all previous sibling DOM elements within elements until other element", () => {
    cy.get(".foods-list")
      .find("#nuts")
      .prevUntil("#veggies")
      .should("have.length", 3);
  });

  it(".siblings() - To get all sibling DOM elements of elements", () => {
    cy.get(".traversal-pills .active").siblings().should("have.length", 2);
  });
});
