//returns a date object with the current date and time
let date = new Date();

//let dayNumber = date.getDay();
 // getting current day(0-6)
 let toDayIs;
 let quote;

function getDays() {
    dayNumber = date.getDay();
    if (toDayIs = "Sunday") {
        quote = "Time to Relax!";
    } else if (toDayIs = "Monday") {
        quote = "Monday morning blues!";
    }
    else if (toDayIs = "Tuesday") {
        quote = "blabla!";
    }
    else if (toDayIs = "Wednesday") {
        quote = "Blublu!";
    }
    else if (toDayIs = "Thursday") {
        quote = "Belubelu!";
    }
    else if (toDayIs = "Friday") {
        quote = "Wahoooo!!";
    } else (toDayIs = "Saturday") 
        quote = "beluooo";
}

// switching between days and quotes
/*
switch(dayNumber){
    case 0: 
        theDayIs = 'Sunday';
        quote = 'Time to chillax!';
        break;
    case 1:
        theDayIs = 'Monday';
        quote = 'Monday morning blues!';
        break;
    case 2:
        theDayIs = 'Tuesday';
        quote = 'Taco Time!';
        break;
    case 3:
        theDayIs = 'Wednesday';
        quote = 'Two more days to the weekend.';
        break;
    case 4:
        theDayIs = 'Thursday';
        quote = 'The weekend is almost here...';
        break;
    case 5:
        theDayIs = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        theDayIs = 'Saturday';
        quote = 'Time to party!';
        break;
}
*/
getDays()
let spanOfWeekday = document.getElementById("weekday");
spanOfWeekday.innerHTML = `${toDayIs}`;

let spanOfQuote = document.getElementById("quote");
spanOfQuote.innerHTML = `${quote}`;