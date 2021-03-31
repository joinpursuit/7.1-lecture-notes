
let button = document.querySelector("#show")

button.addEventListener("click", getShow)

class TVShow {
  constructor(searchParam) {
    this.searchParam = searchParam
  }

  async runSearchQuery() {
    this.showResult = await axios.get(`https://api.tvmaze.com/search/shows?q=${this.searchParam}`)
  }

  get result() {
    return this.rawResult.data[0].show.name
  }

  set showResult(val) {
    return this.rawResult = val
  }
}

async function getShow() {
  let sopranos = new TVShow("sopranos")
  await sopranos.runSearchQuery()
  console.log(sopranos.showResult)
  console.log(sopranos.rawResult)
  console.log(sopranos.result)
}

// runSearchQuery()
// sets a property called showResult in class
// this executes the setter
// setter stores the result in another property called rawResult
// i try to access property called result
// this executes the getter
// getter returns transformed value

