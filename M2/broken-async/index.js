window.addEventListener("DOMContentLoaded", () => {
  const newPuppyBtn = document.querySelector("#puppies button");
  newPuppyBtn.addEventListener("click", getNewPuppy);

  getDogBreeds();
  const dogBreedSelector = document.querySelector("#dog-breeds select");
  dogBreedSelector.addEventListener("change", getBreedImage);
});

// FIXME: Something is going wrong!
// Hint: What is 'response'?
async function getNewPuppy(event) {
  const puppyImg = document.querySelector("#puppies img");
  const response = axios.get("https://dog.ceo/api/breeds/image/random");
  puppyImg.src = response.data;
}

// FIXME: Something is going wrong!
async function getDogBreeds() {
  const select = document.querySelector("#dog-breeds select");
  console.log(select);
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");
  for (const breed in response.data.message) {
    const option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  }
}

async function getBreedImage(e) {
  const dogBreedSelector = e.target;
  const img = document.querySelector("#dog-breeds img");

  const breed = dogBreedSelector.value;
  const response = await axios.get(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );
  const imgUrl = response.data.message;
  img.src = imgUrl;
}

// FIXME: Something is going wrong!
// Sometimes, this function works fine. Other times, an error occurs.
// Hint: Use a try/catch block to catch an error. If you catch an error,
// add a short message to the DOM asking the user to try again.
async function getBreakingBadQuote() {
  const quoteResponse = await axios.get(
    "https://breakingbadapi.com/api/quote/random"
  );
  const quote = quoteResponse.data[0].quote;
  const author = quoteResponse.data[0].author;

  const charResponse = await axios.get(
    `https://breakingbadapi.com/api/characters?name=${author}`
  );

  const imageUrl = charResponse.data[0].img;
  const quotesSection = document.getElementById("breaking-bad-quotes");
  quotesSection.appendChild(makeQuoteCard(quote, author, imageUrl));
}

/**
 * I AM NOT BROKEN. Returns a DOM element with an image of the author and quote they've said.
 *
 * @param {string} quote
 * @param {string} author
 * @param {string} url
 * @returns {HTMLElement}
 */
function makeQuoteCard(quote, author, url) {
  const div = document.createElement("div");
  div.className = "quote-card";

  const img = document.createElement("img");
  img.className = "quote-image";
  img.src = url;
  div.appendChild(img);

  const label = document.createElement("label");
  div.appendChild(label);

  const italics = document.createElement("i");
  italics.textContent = `"${quote}"`;
  label.appendChild(italics);

  const attribution = document.createTextNode(` - ${author}`);
  label.appendChild(attribution);

  return div;
}

getBreakingBadQuote();
