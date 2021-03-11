const {
    makeDough,
    makeJam,
    rise,
    bake,
    serve
} = require('./lib/callbackHelpers.js')


// I'll make the dough for you
makeDough((dough) => {
    // When the dough is finished, this function will be executed, and the dough will be
    // passed as an argument. You take it from here...
    
})