//Importing codes in phone.js file
const { Observer, Telephone } = require('./phone');

//Instanciating an object called contact1 from the Telephone class
const contact1 = new Telephone();
//Instanciating objects, observer1 and observer2 from the Oberver class
const observer1 = new Observer();
const observer2 = new Observer();

//Adding Observers in our Array
contact1.AddObserver(observer1);
contact1.AddObserver(observer2);

//Adding phone numbers
contact1.AddPhoneNumber("+234 7013305887");
contact1.AddPhoneNumber("+234 9031928869");

//Dialing phone numbers
contact1.DialPhoneNumber("+234 7013305887");
contact1.DialPhoneNumber("+234 9031928869");
//This will throw an error because the number has not being added yet
contact1.DialPhoneNumber("+234 9013454321");


console.log(contact1)