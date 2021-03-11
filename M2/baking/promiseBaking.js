const {
    makeJam,
    makeDough,
    rise,
    bake,
    serve
} = require('./lib/promiseHelpers.js')

// I'll make the dough for you
// now you take it from here...
makeDough()
    .then()
