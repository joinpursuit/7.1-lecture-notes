export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://some-random-heroku-url.herokuapp.com";
};
