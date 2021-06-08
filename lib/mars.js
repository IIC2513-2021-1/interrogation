function callTest(test, weight, slot) {
  //Valores para testear
  let arrayResults = [201, "type-H", 0, "0101"];

  if (weight > 1000) weight = 1000;
  else weight = weight * 10;

  const wait = weight * slot;

  setTimeout(() => {
    console.log("running test...");
  }, wait);

  return arrayResults[test];
}
function getSample() {
  let code = 100; //Se modifica para 100 o 199
  let delay = Math.floor(Math.random() * 10);
  console.log(`delay: ${delay}`);

  if (delay === 0) delay = 1;

  setTimeout(() => {
    console.log("sampling....");
  }, delay * 1000);

  return code;
}

module.exports = {
  callTest,
  getSample,
};
