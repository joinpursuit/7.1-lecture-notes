const cats = [
  "https://cdn2.thecatapi.com/images/18f.gif",
  "https://cdn2.thecatapi.com/images/NuwK_UY9u.jpg",
  "https://cdn2.thecatapi.com/images/wsnU-GMvB.jpg",
  "https://cdn2.thecatapi.com/images/dj3.jpg",
  "https://cdn2.thecatapi.com/images/3ep.jpg",
  "https://cdn2.thecatapi.com/images/MTY0OTgzNQ.jpg",
];

const dogs = [
  "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_2882.jpg",
  "https://images.dog.ceo/breeds/otterhound/n02091635_1337.jpg",
  "https://images.dog.ceo/breeds/retriever-golden/n02099601_6139.jpg",
];

const combined = [...cats, ...dogs];

describe("/all/random", () => {
  it("renders the random cats", () => {
    cy.intercept(
      /.*catapi\.com\/v1\/images.*/,
      cats.map((url) => ({ url }))
    ).as("cats");

    cy.intercept(/.*dog\.ceo\/api\/breeds\/image\/random.*/, {
      message: dogs,
      status: "success",
    }).as("dogs");

    cy.visit("http://localhost:3000/all/random");
    cy.wait("@cats");
    cy.wait("@dogs");

    cy.get("img")
      .should("have.length", combined.length)
      .each(($img, index) => {
        cy.wrap($img).should("have.attr", "src", combined[index]);
      });
  });
});
