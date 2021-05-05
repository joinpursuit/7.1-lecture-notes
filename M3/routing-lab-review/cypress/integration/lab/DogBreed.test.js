const breed = "affenpinscher";
const dog = "https://images.dog.ceo/breeds/affenpinscher/n02110627_1966.jpg";

describe("/dog/random/:num", () => {
  it("renders the random dogs", () => {
    cy.intercept(`https://dog.ceo/api/breed/${breed}/images/random`, {
      message: dog,
      status: "success",
    }).as("fetch");

    cy.visit(`http://localhost:3000/dog/${breed}`);
    cy.wait("@fetch");

    cy.get("img").should("have.attr", "src", dog);
  });
});
