const { Triangle } = require('../shapes.js');


describe('Triangle test', () => {
    it('Test to see if it will render a triangle with a pink background', () => {
        const shape = new Triangle();
        shape.setColor("pink");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="pink"/>');
    });
  });
