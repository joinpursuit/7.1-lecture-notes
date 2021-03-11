const { 
    JAM,
    DOUGH,
    RISEN_DOUGH,
    BREAD, 
    errors 
} = require('./constants.js')

function makeDough(callback) {
    console.log('Making dough...')
    setTimeout(() => {
        console.log('Dough is finished!')
        console.log('---------------------------')
        if (callback) {
            callback(DOUGH)
        }
    }, 1000)
}

function makeJam(callback) {
    console.log('Making jam...')
    console.log('---------------------------')
    setTimeout(() => {
        console.log('Jam is finished!')
        console.log('---------------------------')
        if (callback) {
            callback(JAM)
        }
    }, 1000)
}

function rise(dough, callback) {
    if (dough !== DOUGH) {
        throw errors.dough
    }

    console.log('Letting dough rise...')
    
    setTimeout(() => {
        console.log('Dough has risen!')
        console.log('---------------------------')
        if (callback) {
            callback(RISEN_DOUGH)
        }
    }, 5000)
}

function bake(risenDough, callback) {
    if (risenDough !== RISEN_DOUGH) {
        throw errors.risenDough
    }

    console.log('Baking bread...')
    setTimeout(() => {
        console.log('Bread is finished!')
        console.log('---------------------------')
        if (callback) {
            callback(BREAD)
        }
    }, 2000)
}

function serve(bread, callback) {
    if (bread !== BREAD) {
        throw errors.bread
    }

    console.log('Serving bread and jam...')
    setTimeout(()=> {
        console.log('We finished that quick!')
        console.log('---------------------------\n\n')
        console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 COMPLETE 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')
        if (callback) {
            callback()
        }
    }, 500)
}

module.exports = {
    makeDough,
    makeJam,
    rise,
    bake,
    serve
}