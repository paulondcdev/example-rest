const Oca = require('oca');
const Sum = require('./Actions/Sum');
const Multiply = require('./Actions/Multiply');


class Calc extends Oca.Provider{}

// registering provider
Oca.registerProvider(Calc);

// registering actions
Oca.registerAction(Calc, Sum);
Oca.registerAction(Calc, Multiply);

// making them available through REST requests
Oca.webfyProvider(Calc)
Oca.webfyAction(Calc, Sum, Oca.Method.Get);
Oca.webfyAction(Calc, Multiply, Oca.Method.Get);

module.exports = Calc;
