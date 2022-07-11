const workers = {
  Jons: 'DevOps',
  Roy: 'ProductManager',
  Paul: 'HumanResources',
  Vanessa: 'AccountManager',
  Leonard: 'PythonDeveloper'
}

console.log(workers['Roy']);

for (let jobTitle of Object.keys(workers)) {
  console.log(jobTitle)
}

for (let name of Object.values(workers)) {
  console.log(name)
}
