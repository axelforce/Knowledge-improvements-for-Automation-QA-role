const asyncFn1 = async () => {
  return 'Success!'
}

asyncFn1()
  .then(value => console.log(value))
//________________________________________


const asyncFn2 = async () => {
  throw new Error('There was an error')
}

asyncFn2()
  .then(value => console.log(value))
  .catch(error => console.log(error.message))
//_____________________________________________

const timerPromise = () =>
  new Promise((resolve, reject) =>
  setTimeout(() => resolve(), 2000));

const asyncFn3 = async () => {
  console.log('Timer starts');
  const startTime = performance.now();
  await timerPromise();
  const endTime = performance.now();
  console.log('Timer ended', endTime - startTime);
}

asyncFn3();
//________________________________________________

const getData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json
  }

const url = 'https://jsonplaceholder.typicode.com/todos/1';

try {
  const data = await getData(url);
  console.log(data);
} catch (error) {
  console.log(error.message);
}
