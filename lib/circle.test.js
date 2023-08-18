const { Circle } = require('./shapes.js');



describe('Circle', () => {
      it('Test to see if it will render a circle with a hex code colour as a background', () => {
          const shape = new Circle();
          shape.setColor("#FDFD96");
          expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" fill="#FDFD96"/>');
      });
    });

