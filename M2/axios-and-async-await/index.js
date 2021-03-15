/* AXIOS VS. FETCH */

// fetch for a get request
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((body) => {
      for (let country of body) {
          console.log(country.name)
      }
  });

// axios for a get request
axios.get("https://restcountries.eu/rest/v2/all").then((result) => {
  for (let country of result.data) {
    console.log(country.name)
  }
});

// Data we will use for a post request
const data = {
  name: "Myra",
  text: "this is an example",
};

// fetch for a post request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data),
  headers:
})
  .then(response => response.json())
  .then(body => console.log(body));

// axios for a post request
axios
  .post("https://jsonplaceholder.typicode.com/posts", data)
  .then((response) => console.log(response.data));

// fetch request: handle 404
fetch("https://jsonplaceholder.typicode.com/nonexistentroute")
  .then((response) => {
    console.log("success callback is running!");
    // I have to check if the request succeeded:
    if (!response.ok) {
      throw Error(response.status);
    }

    console.log('only now am I sure that the request succeeded!')
  })
  .catch((error) => {
    console.log(error);
  });

// axios: handle 404
axios
  .get("https://jsonplaceholder.typicode.com/nonexistentroute")
  .then((response) => {
    console.log("everything went all right!");
    // I don't have to check for a 404 error here.
    // The mere fact that this callback is executed means the request succeeded.
  })
  .catch((error) => {
    console.log("something went wrong: ", error.message);
  });

/* ASYNC / AWAIT VS. PLAIN PROMISES*/

// Async functions always return a promise:
async function resolve1() {
  return 1;
}

const example = resolve1();
console.log(example);

// Making a request with Plain Promises
const fireRequest2 = () => {
  const prom = axios.get("https://jsonplaceholder.typicode.com/posts");

  console.log(prom); // a promise, not the result of the promise

  prom.then(response => {
    console.log(response.data)
  })
};

// Making a request with Async/Await
const fireRequest1 = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response.data); //The data we get back from the api!
};

// Goal: Find every country that uses the same currency as great britain
// PLAIN PROMISES
function findCountriesOnThePound1() {
  getBritishCurr()
    .then((currency) => {
      return getCountriesByCurrency(currency);
    })
    .then((listOfCountries) => {
      console.log(currency, listOfCountries); // Oh no, variable scope issue!
    })
    .catch(err => {
      console.log(err)
    });
}

// Goal: Find every country that uses the same currency as great britain
// ASYNC/AWAIT
async function findCountriesOnThePound2() {
  try {
    const currency = await getBritishCurr();
    const listOfCountries = await getCountriesByCurrency(currency);
    return [currency, listOfCountries];
  } catch (err) {
    console.log(err.message);
  }
}

/* Helper Functions */

/**
 * Finds the currency used in Great Britain
 *
 * @returns {Promise} - A promise that resolves to the currency used in Great Britain
 */
async function getBritishCurr() {
  const GB = await axios.get(
    "http://restcountries.eu/rest/v2/alpha/gbr"
  );
  return GB.data.currencies[0].code;
}

/**
 * Finds all countries that use a specific currency
 *
 * @param {string} - A string like 'USD' that represents a currency
 * @returns {Promise} - A promise that resolves with an array of countries that use the specified currency
 */
async function getCountriesByCurrency(currency) {
  const countries = await axios.get(
    `http://restcountries.eu/rest/v2/currency/${currency}`
  );
  return countries.data;
}
