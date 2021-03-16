// asynchronous means we return a promise

// async for declaration
// await for execution

const myPromise = new Promise((resolve, reject) => {
  let rand = Math.floor(Math.random() * 10)

  if(rand > 5) {
    resolve(rand)
  }
  else {
    reject("Error happened")
  }
});

async function doesThePromise() {
  try {
    let number = await myPromise
    console.log(number)
  }
  catch (e) {
    console.error(e)
  }
}

doesThePromise()
  
// let doSomethingPromise = new Promise((resolve, reject) => {
//   if("something") {
//     resolve("something")
//   }
//   else {
//     reject()
//   }
    

// })

// doSomethingPromise()

// code starts
// async function doSomething() {
//   // this runs later
//   return "something"
// }
// // await / .then()
// doSomething().then((value) =>  {
//   console.log(value)
// })

// let result = await doSomething()
// let resultPromise = doSomething()
// // this runs 2nd
// console.log(result)
// console.log(resultPromise)



// // code starts

// function doSomethingSync() {
//  // this runs
//  return "whatever"
// }

// let newResult = await doSomethingSync()

// console.log(newResult)

// // then this runs