const Oca = require('oca');


class Multiply extends Oca.Action{
  constructor(){
    super();
    this.createInput('x: Numeric');
    this.createInput('y: Numeric');
  }

  _perform(){
    const x = this.input('x').value;
    const y = this.input('y').value;

    return Promise.resolve(x * y);
  }
}

module.exports = Multiply;
