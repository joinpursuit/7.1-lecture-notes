// This makes an Http GET Request and returns a promise representing the
// completion of the request
const promise = fetch('https://alejos-todos-api.herokuapp.com/api/users')
console.log(promise)
// promise.then(response => console.log(response))
// console.log('Hi there everybody!')



// In order to access the result (i.e. the Http Response) of the request,
// use the .then method
// fetch('https://alejos-todos-api.herokuapp.com/api/users/nonexistentroute')
//     .then(response => {
//         if (!response.ok) { // boolean value - true if response status is a 200 status
//             // Handle an error!
//             console.log('oh no! there is a problem')
//         }
//             return response.json()  
//     }, err => {
//         console.log('oh no, error!')
//     })


fetch('https://alejos-todos-api.herokuapp.com/api/users')
    .then(response => {
        if (!response.ok) {
            throw Error(response.status)
        }
        return response.json()
    })
    .then(body => {
        console.log(body)
    })
    .catch(err => console.log('Oops, there was an error: ', err.message))
    .then(/*if something goes wrong here, it won't be caught!*/)



// fetch('https://alejos-todos-api.herokuapp.com/api/users')
//     .then(
//         response => console.log(response),
//         err => console.log('Oops, there was an error: ', err.message)
//     )



// The response contains the information we are fetching!

// Anatomy of an Http response:
    // status: a number that tells you how the request went
    // headers: metadata describing the body of the response
    // body: The meat. This is the data that we requested.
