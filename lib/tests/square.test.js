const { Square } = require('../shapes.js');


describe('Square', () => {
    it('Test to see if it will render a square with a green background', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="green"/>');
    });
  });