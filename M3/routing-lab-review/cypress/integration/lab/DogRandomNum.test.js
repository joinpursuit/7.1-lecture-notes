const dogs = [
  "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_2882.jpg",
  "https://images.dog.ceo/breeds/otterhound/n02091635_1337.jpg",
  "https://images.dog.ceo/breeds/retriever-golden/n02099601_6139.jpg",
];

describe("/dog/random/:num", () => {
  it("renders the random dogs", () => {
    cy.intercept("https://dog.ceo/api/breeds/image/random/3", {
      message: dogs,
      status: "success",
    }).as("fetch");

    cy.visit("http://localhost:3000/dog/random/3");
    cy.wait("@fetch");

    cy.get("img")
      .should("have.length", 3)
      .each(($img, index) => {
        cy.wrap($img).should("have.attr", "src", dogs[index]);
      });
  });
});
