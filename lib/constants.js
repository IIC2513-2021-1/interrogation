const FREQ = [
  { l: "a", f: 12.53 },
  { l: "b", f: 1.42 },
  { l: "c", f: 4.3 },
  { l: "d", f: 4.68 },
  { l: "e", f: 13.68 },
  { l: "f", f: 1.02 },
  { l: "g", f: 1.07 },
  { l: "h", f: 1.0 },
  { l: "i", f: 4.85 },
  { l: "j", f: 0.44 },
  { l: "k", f: 0.02 },
  { l: "l", f: 5.46 },
  { l: "m", f: 2.75 },
  { l: "n", f: 7.26 },
  { l: "ñ", f: 0.31 },
  { l: "o", f: 8.68 },
  { l: "p", f: 2.51 },
  { l: "q", f: 1.03 },
  { l: "r", f: 6.87 },
  { l: "s", f: 6.68 },
  { l: "t", f: 4.63 },
  { l: "u", f: 3.93 },
  { l: "v", f: 0.77 },
  { l: "w", f: 0.01 },
  { l: "x", f: 0.22 },
  { l: "y", f: 1.01 },
  { l: "z", f: 0.52 },
];

const MIN_STOCK = 30;
const MIN_WEIGHT_A = 100;
const MIN_WEIGHT_B = 100;
const MIN_WEIGHT_C = 100;

const SAMPLE_CODE = 100; // 100 para exito o 199, fail

const TEST_ARRAY_RESULTS = [201, 'type-H', 0, '0101'];

module.exports = {
  FREQ,
  MIN_STOCK,
  MIN_WEIGHT_A,
  MIN_WEIGHT_B,
  MIN_WEIGHT_C,
  SAMPLE_CODE,
  TEST_ARRAY_RESULTS,
};
