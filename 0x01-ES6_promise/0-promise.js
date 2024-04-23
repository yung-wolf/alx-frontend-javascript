// Create a promise obj

function getResponseFromAPI() {
  const myPromise = Promise.resolve('I always keep my promises!');

  return myPromise;
}

const obj = getResponseFromAPI();
console.log(obj instanceof Promise);
