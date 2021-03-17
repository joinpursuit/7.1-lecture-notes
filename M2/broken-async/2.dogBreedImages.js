window.addEventListener("DOMContentLoaded", () => {
  getDogBreeds();

  const dogBreedSelector = document.querySelector("#dog-breeds select");
  dogBreedSelector.addEventListener("change", getBreedImage);
});

/**
 * Makes an API call for a random image of a specific dog breed, and
 * changes the image src attribute to a new url.
 *
 * FIXME: Something is going wrong!
 * Hint: is there anything wrong with the url we are using?
 * Hint: What should you do with the imgUrl?
 */
async function getBreedImage(e) {
  const dogBreedSelector = e.target;
  const img = document.querySelector("#dog-breeds img");

  const breed = dogBreedSelector.value;
  const response = await axios.get(
    `https://dog.ceo/api/breed/dogBreed/images/random`
  );
  const imgUrl = response.data.message;
}

/**
 * I AM NOT BROKEN.
 * Gets a list of Dog Breeds and populates a select box with an option for each breed.
 */
async function getDogBreeds() {
  const select = document.querySelector("#dog-breeds select");
  const response = await axios.get("https://dog.ceo/api/breeds/list/all");
  for (const breed in response.data.message) {
    const option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  }
}
