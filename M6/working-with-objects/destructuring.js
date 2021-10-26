const article = {
  title: "Mutable types are Pass-by-Reference in JS",

  authors: ["Myra", "alvi", "Sarah", "Geormary"],

  contents: "What does pass by ref mean? Have you always wondered? ...",
};

const authors = article.authors;
const { authors: authors2 } = article;
authors[1] = authors[1][0].toUpperCase() + authors[1].slice(1);

console.log(authors);
console.log(article.authors); // did we fix alvi's name here?
console.log(authors2); // How about here?

const { contents: c } = article;
console.log(c);
console.log(article);

function printAuthors({ authors }) {
  console.log(authors);
}

printAuthors(article);
