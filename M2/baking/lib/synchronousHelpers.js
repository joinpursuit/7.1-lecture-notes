const { 
    JAM,
    DOUGH, 
    RISEN_DOUGH,
    BREAD,
    errors 
} = require('./constants.js')


function makeDough() {
    console.log('making dough...')
    wait(1000)
    console.log('Dough is finished!')
    console.log('-----------------------------------')

    return DOUGH
}

function makeJam() {
    console.log('making jam...')
    wait(1000)
    console.log('Jam is finished!')
    console.log('-----------------------------------')

    return JAM
}

function rise(dough) {
    console.log(dough)
    if (dough !== DOUGH) {
        throw errors.dough
    }

    console.log('Dough is rising...')
    wait(5000)
    console.log('Dough has risen!')
    console.log('-----------------------------------')

    return RISEN_DOUGH
}

function bake(risenDough) {
    if (risenDough !== RISEN_DOUGH) {
        throw errors.risenDough
    }

    console.log('Bread is baking...')
    wait(2000)
    console.log('Bread is finished!')
    console.log('-----------------------------------')

    return BREAD
}

function serve(bread) {
    if (bread !== BREAD) {
        throw errors.bread
    }

    console.log('Eating bread and jam...')
    wait(500)
    console.log('We finished that quick!')
    console.log('-----------------------------------\n\n')
    console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 COMPLETE 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉')
}

function wait(ms) {
    const start = Date.now()
    let now;
    do {
        now = Date.now()
    } while(now - start < ms)
}


module.exports = {
    makeDough,
    makeJam,
    rise,
    bake,
    serve
}