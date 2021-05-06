const cats = [
  "https://cdn2.thecatapi.com/images/NuwK_UY9u.jpg",
  "https://cdn2.thecatapi.com/images/anp.jpg",
];

describe("/cat/random", () => {
  it("renders a random cat on visit and on click", () => {
    let responses = 0;
    cy.intercept("https://api.thecatapi.com/v1/images/search", (request) => {
      request.reply([
        {
          url: cats[responses],
        },
      ]);
      responses += 1;
    }).as("fetch");

    cy.visit("http://localhost:3000/cat/random");
    cy.wait("@fetch");

    cy.get("img").should("have.attr", "src", cats[0]);

    cy.get("button").click();
    cy.wait("@fetch");

    cy.get("img").should("have.attr", "src", cats[1]);
  });
});
