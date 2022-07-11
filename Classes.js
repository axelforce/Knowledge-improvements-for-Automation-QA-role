class OleksndrKulagin {
  constructor(age) {
    this.age = age;
    this.car = 'Opel';
  }
  niceToMeetYou() {
    console.log('Oleksandr Kulagin ' + this.age + ' ' + this.car)
  }
}

const myPerson = new OleksndrKulagin(29);

myPerson.niceToMeetYou();
