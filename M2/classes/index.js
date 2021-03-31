
let button = document.querySelector("#show")

button.addEventListener("click", getShow)

class TVShow {
  constructor(searchParam) {
    this.searchParam = searchParam
  }

  async runSearchQuery() {
    this.result = await axios.get(`https://api.tvmaze.com/search/shows?q=${this.searchParam}`)
  }

  doMoreThings() {
    this.somethingElse = ""
  }
}

async function getShow() {
  let sopranos = new TVShow("sopranos")
  await sopranos.runSearchQuery()
  console.log(sopranos.result)


}
