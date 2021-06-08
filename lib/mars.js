const { SAMPLE_CODE, TEST_ARRAY_RESULTS } = require("./constants");

function callTest(test, weight, slot) {
  return new Promise((resolve, reject) => {
    if (weight > 1000) weight = 1000;
    else weight = weight * 10;
    let wait = weight * slot;

    setTimeout(() => resolve(TEST_ARRAY_RESULTS[test]), wait);
  });
}

function getSample() {
  let delay = Math.floor(Math.random() * 10);
  if (delay === 0) delay = 1;

  return new Promise((resolve, reject) => {
    if (SAMPLE_CODE === 109) {
      reject("error 109");
    }

    setTimeout(() => resolve(SAMPLE_CODE), delay * 1000);
  });
}

module.exports = {
  callTest,
  getSample,
};
