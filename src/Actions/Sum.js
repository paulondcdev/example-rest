const Oca = require('oca');


class Sum extends Oca.Action{
  constructor(){
    super();
    this.createInput('x: numeric');
    this.createInput('y?: numeric', {defaultValue: 2});
  }

  _perform(){
    const x = this.input('x').value;
    const y = this.input('y').value;

    return Promise.resolve(x + y);
  }
}

Oca.registerAction(Sum);
Oca.webfyAction(Sum, 'get', {restRoute: '/sum'})

module.exports = Sum;
