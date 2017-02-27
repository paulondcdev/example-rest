const Oca = require('oca');


class Multiply extends Oca.Action{
  constructor(){
    super();
    this.createInput('x: numeric');
    this.createInput('y: numeric');
  }

  _perform(){
    const x = this.input('x').value;
    const y = this.input('y').value;

    return Promise.resolve(x * y);
  }
}

Oca.registerAction(Multiply);
Oca.webfyAction(Multiply, 'get', {restRoute: '/multiply'})

module.exports = Multiply;
