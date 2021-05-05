const cats = [
  "https://cdn2.thecatapi.com/images/NuwK_UY9u.jpg",
  "https://cdn2.thecatapi.com/images/wsnU-GMvB.jpg",
  "https://cdn2.thecatapi.com/images/dj3.jpg",
];

describe("/cat/random/:num", () => {
  it("renders the random cats", () => {
    cy.intercept(
      /.*thecatapi\.com\/v1\/images\/search.*limit=3.*/,
      cats.map((url) => ({ url }))
    ).as("fetch");

    cy.visit("http://localhost:3000/cat/random/3");
    cy.wait("@fetch");

    cy.get("img")
      .should("have.length", 3)
      .each(($img, index) => {
        cy.wrap($img).should("have.attr", "src", cats[index]);
      });
  });
});
