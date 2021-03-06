import adjust from "./adjust";
import calcContrast from "./calcContrast";
import calcLum from "./calcLum";
import createColor from "./createColor";
import darken from "./darken";
import hexToRgb from "./hexToRgb";
import hslToRgb from "./hslToRgb";
import invert from "./invert";
import isValidHex from "./isValidHex";
import isValidHsl from "./isValidHsl";
import isValidRgb from "./isValidRgb";
import lighten from "./lighten";
import matchLum from "./matchLum";
import redefine from "./redefine";
import rgbToHex from "./rgbToHex";
import rgbToHsl from "./rgbToHsl";
import rgbToRgb from "./rgbToRgb";
import scale from "./scale";
import step from "./step";

const colorUtils = {
  adjust,
  calcContrast,
  calcLum,
  createColor,
  darken,
  hexToRgb,
  hslToRgb,
  invert,
  isValidHex,
  isValidHsl,
  isValidRgb,
  lighten,
  matchLum,
  redefine,
  rgbToHex,
  rgbToHsl,
  rgbToRgb,
  scale,
  step
}

export { adjust };
export { calcContrast };
export { calcLum };
export { createColor };
export { darken };
export { hexToRgb };
export { hslToRgb };
export { invert };
export { isValidHex };
export { isValidHsl };
export { isValidRgb };
export { lighten };
export { matchLum };
export { redefine };
export { rgbToHex };
export { rgbToHsl };
export { rgbToRgb };
export { scale };
export { step };

export default colorUtils;
