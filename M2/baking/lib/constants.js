const errors = {
    dough: Error('function argument should be dough'),
    risenDough: Error('function argument should be risenDough'),
    bread: Error('function argument should be bread'),
    jam: Error('function argument should be jam')
}

module.exports = {
    JAM: Symbol('JAM'),
    DOUGH: Symbol('DOUGH'),
    RISEN_DOUGH: Symbol('RISEN_DOUGH'),
    BREAD: Symbol('BREAD'),
    errors
}