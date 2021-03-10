// todo 3/10
// cover fetch() with GET requests
// .then()
// .catch()
// fetch with POST
// the promise constructor
// forms - posting data

// https://alejos-todos-api.herokuapp.com/api/users
//. https://catfact.ninja/fact

// fetch(<url>)
// .then(<callbackfunction>)

// (res) => { res }
// function (param) { param }

// console.log("before fetch")

// let promise = fetch('https://alejos-todos-ap.herokuapp.com/api/users')
// .then(response => {
//   console.log("response:", response)
//   return response.json()
// })
// .then(json => {
//   console.log("json:", json)
// })
// .catch((err) => {
//   console.log("error:", err)
// })

// console.log("after fetch")

// let obj = { username: "bartholomew" }
// console.log(obj)

// let string = JSON.stringify(obj)
// console.log(string)

// let newObj = JSON.parse(string)
// console.log(newObj.username)

// fetch("https://alejos-todos-api.herokuapp.com/api/users/signup", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: string,
// })
//   .then((res) => {
//     return res.json()
//   })
//   .then((json) => {
//     console.log(json)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// console.log("this is all the javascript we have")

let iPromiseToTellTheTruth = new Promise((success, failure) => {
  let rand = Math.round(Math.random() * 10)

  // go get the data / make request
  // XMLHTTPrequest

  // if request successful
  if(rand > 5) {
    success(rand)
  }
  // 
  else {
    failure("number was less than 5")
  }
})

console.log(iPromiseToTellTheTruth)

iPromiseToTellTheTruth
.then((response) => {
  console.log(response)
  console.log("truth told")
})
.catch((error) => {
  console.error(error)
  console.log("lie told")
})

// boolean?
// Pending?????
// Promise

// make 10 requests to different places
// once all 10 are done, do some success thing

