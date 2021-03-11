const { 
    JAM,
    DOUGH,
    RISEN_DOUGH,
    BREAD,
    errors
 } = require('./constants.js')

function makeDough() {
    console.log('Making dough...')
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Dough is finished!')
            console.log('----------------------')
            resolve(DOUGH)
        }, 1000)
    })
}

function makeJam() {
    console.log('Making jam...')
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Jam is finished!')
            console.log('----------------------')
            resolve(JAM)
        }, 1000)
    })
}

function rise(dough) {
    if (dough !== DOUGH) {
        throw errors.dough
    }

    console.log('Letting dough rise...')
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Dough is risen!')
            console.log('----------------------')
            resolve(RISEN_DOUGH)
        }, 5000)
    })
}

function bake(risenDough) {
    if (risenDough !== RISEN_DOUGH) {
        throw errors.risenDough
    }
    console.log('Bread is baking...')
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Bread is finished!')
            console.log('----------------------')
            resolve(BREAD)
        }, 2000)
    })
}

function serve(...loaves) {
    for (let loaf of loaves) {
        if (loaf !== BREAD) {
            throw errors.bread
        }
    }

    console.log('Serving bread and jam...')
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('We finished that quick!')
            console.log('---------------------------\n\n')
            console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 COMPLETE 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')
        }, 500)
    })
}

module.exports = {
    makeDough,
    makeJam,
    rise,
    bake,
    serve
}