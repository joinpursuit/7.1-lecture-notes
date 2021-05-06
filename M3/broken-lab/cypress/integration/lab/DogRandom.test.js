const dogs = [
  "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_2882.jpg",
  "https://images.dog.ceo/breeds/boxer/n02108089_11122.jpg",
];

describe("/dog/random", () => {
  it("renders a random dog on visit and on click", () => {
    let responses = 0;
    cy.intercept("https://dog.ceo/api/breeds/image/random", (request) => {
      request.reply({
        message: dogs[responses],
        status: "success",
      });
      responses += 1;
    }).as("fetch");

    cy.visit("http://localhost:3000/dog/random");
    cy.wait("@fetch");

    cy.get("img").should("have.attr", "src", dogs[0]);

    cy.get("button").click();
    cy.wait("@fetch");

    cy.get("img").should("have.attr", "src", dogs[1]);
  });
});
