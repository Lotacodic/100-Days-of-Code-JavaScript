//Creating Telephone class
class Telephone {
    constructor() {
        this.phoneNumber = undefined;
        this.contacts = new Set();
        this.observersArray = [];
    }
    //Creating AddPhoneNumber() method
    AddPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber;
        this.contacts.add(this.phoneNumber);
        if(this.contacts.has(phoneNumber) && this.contacts.has(phoneNumber) !== null ){
            console.log(`${phoneNumber} has been added!...\n`);
        }
        console.log(this.contacts);
    }
    //Creating RemovePhoneNumber() method
    RemovePhoneNumber(phoneNumber){
         this.contacts.delete(phoneNumber)
         if(!this.contacts.has(phoneNumber)){
               console.log(`${phoneNumber} has been deleted!...\n`);
               
         }
    }
    //Creating DialPhoneNumber() method
    DialPhoneNumber(phoneNumber) {
        if(this.contacts.has(phoneNumber)){
            //Checking if the observerArray has something any number in it
            if(this.observersArray.length >= 1){
                this.observersArray.forEach( observer => {
                    observer.message = `Now dialing ${phoneNumber}...`
                    if(observer.message) return
                })
            }
         }else {
            console.log(`${phoneNumber} doesn't exist in your contact list`);
        }
 }
    //Creating AddObserver() method
    AddObserver(observer) {
        this.observersArray.push(observer)
        //To check if the observer has being pushed into the observersArray
        if(this.observersArray.includes(observer)) { 
            console.log('New observer has been added!....');
        }
    }
}
//Creating an Observer class
class Observer {
constructor(){
this.message = ''
}
}
//Exporting the Oberver class and Telephone class
module.exports = { Observer, Telephone }