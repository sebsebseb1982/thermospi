angular.module('rgb-converter', [])

  .factory(
    'RGBConverter',
    [
      () => {

        let componentToHex = (c) => {
          var hex = c.toString(16);
          return hex.length == 1 ? "0" + hex : hex;
        };

        return {
          rgbToHex : (rgb) => {
            return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
          },
          hexToRGB : (hex) => {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
          }
        }
      }
    ]
  );
