let age = 20;
if ( age >= 18) {
    console.log("Jij mag naar binnen");
} else {
    console.log("Blijf aub buiten");
}

const isFemale = false;
if (isFemale === true) {
    console.log("Jij bent een vrouw");
} else {
    console.log("Jij bent geen vrouw")
}

const driverStatus = " geen bob";
if (driverStatus === "bob") {
    console.log("Jij mag rijden")
} else {
    console.log("Jij mag niet rijden")
}

if (age >=18 && age <=25) {
console.log("Je krijgt 50% korting!")
}

const name = "Didier";
if (name === "Sarah" || name === "Bram") {
    console.log ("Jij krijgt een gratis biertje!")
    
} else {
    console.log ("Jij krijgt geen biertje!")
}

const totalAmount = 101;
if (totalAmount >100) {
    console.log ("Jij krijgt een gratis flesje champagne")
}

else if (totalAmount > 50) { 
    console.log ("Jij krijgt een portie gratis nacho's")
}

else if (totalAmount > 25){
    console.log ("Jij krijgt gratis vega bitterballen")
}