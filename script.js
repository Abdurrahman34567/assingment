// let firstname = prompt("Enter you first name")
// let lastname = prompt("Enter you last name")
// let fullname = firstname + " " + lastname
// console.log(fullname);


// let mobilemodel = prompt("Enter your favorite mobile phone model.")
// console.log(`My favorite phone is :  ${mobilemodel} \nLength of string is : ${mobilemodel.length} `);


// let country = "Pakistan"
// for(let i = 0; i<country.length; i++){
//     if(country.slice(i,i+1)=="i"){
//         console.log(i);
//     }
// }

// let inputstring = "Hello World"
// let lastindex = inputstring.lastIndexOf("l")
// console.log(lastindex);


// let Cname = "Pakistan"
// let indexfinder = Cname[3]
// console.log(indexfinder);



// let fname = "Abdur";
// let lname = " Rehman"
// let concatthename = fname.concat(lname)
// console.log(concatthename);


// let city = "Hyderabad"
// let replacethename = city.replace("Hyder", "Islam")
// console.log(replacethename);



// let message = "“Ali and Sami are best friends. They play cricket and football together.”";
// let chnaging = message.replace( /and/g , "&")
// console.log(chnaging);

// let strnum = "472"
// let convertion = Number(strnum)
// console.log("Value : " , strnum);
// console.log("Type : " , typeof strnum);
// console.log("Value : " , convertion);
// console.log("Type : " , typeof convertion);


// let userinp = prompt("");
// let touppercase = userinp.toUpperCase()
// console.log(touppercase);

// let userinp = prompt("")
// let showintheconsole = `Title case : ${userinp}`
// console.log(showintheconsole);

// let num = 12.33 ;
// let tostring = num.toString()
// let removedot = tostring.replace(".","")
// console.log(typeof removedot ,removedot);



// let username = prompt("Enter a username")
// function containsSpecialSymbols(username) {
//     var specialSymbols = ["@", ".", ",", "!"];
//     for (var i = 0; i < username.length; i++) {
//         if (specialSymbols.includes(username[i])) {
//             return true
//         }
//     }
// }

// if (containsSpecialSymbols(username)) {
//   alert("Please enter a valid username without special symbols [@, ., , , !]");
// } else {
//   alert("Username is valid: " + username);
// }




// let array = ["Karachi" , "Islamabad" , "Lahore"]
// let usercity = "Lahore"
// for(let i = 0; i<array.length; i++){
//     if(usercity===array[i]){
//         alert(`${usercity} is found at ${i} index`);
//     }
// }


// let pass = prompt("Enter a password");
// if (/^\d/.test(pass)) {
//     alert("Password should not start with a number. Please start with an alphabet.");
// }else if(pass.length<6){
//     alert("Please enter a password atleast 6 words")
// } else {
//     alert(pass);
// }


// let uniname = "University of karachi"
// let splittheuniname = uniname.split("")
// console.log(splittheuniname);


// let ourcountry = "Pakistan"
// let showthelastalpha = ourcountry.charAt(ourcountry.length-1)
// console.log(showthelastalpha);



// let inputString = "The quick brown fox jumps over the lazy dog";
// let wordToCount = "the"
// let count = 0
// let tolovercase = inputString.toLowerCase()
// let word = tolovercase.split(" ")

// if (word === wordToCount) {
//     count++;
//   }
//   console.log(`The word "${wordToCount}" appears ${count} times in the string.`);


// let inputString = "The quick brown fox jumps over the lazy dog";
// let wordToCount = "the";
// let count = 0;
// let toLowerCase = inputString.toLowerCase();
// let words = toLowerCase.split(" ");
// let index = 0;
// while (index < words.length) {
//   if (words[index] === wordToCount) {
//     count++;
//   }
//   index++;
// }

// console.log(`The word "${wordToCount}" appears ${count} times in the string.`);
