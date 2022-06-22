/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// Below is an array of quotes by popular celebrities
const quotes = [
{
 quote: "Greatness is not guarding yourself from the people; greatness is being accepted by the people.",
 source: "Mike Tyson"
},
{
  quote: "He who is not courageous enough to take risks will accomplish nothing in life.",
  source: "Muhammed Ali",
  citation: "Ford News, p. 2.",
  year: "1923"
},
{
  quote: "Businesses that grow by development and improvement do not die",
  source: "Henry Ford"
},
{
  quote: "Just remember, you can't climb the ladder of success with your hands in your pockets.",
  source: "Arnold Schwarzenegger"
},
{
  quote:"Having a female as a best friend is like having chicken for a pet, you will eat it someday",
  source: "Pete Edochie"
}
];

// random background color function that returns hex color codes

color=()=>{
  let values =["A","B","C","D","E","F",0,1,2,3,4,5,6,7,8,9]
  let colorCode = "#";
  do{
      colorCode += values[Math.floor(Math.random() * values.length)];
  }while(colorCode.length<7)
  return colorCode
}


/***
 * `getRandomQuote` function
***/
// below returns random quotes object
getRandomQuote = ()=>{
  var randVar = Math.floor(Math.random()* quotes.length);
  let randQuote = quotes[randVar]; //save random quote onject in a variable
  return randQuote;
}

/***
 * `printQuote` function
***/

//this below displays random quotes on web page
printQuote = function(){
  //clickReset
  let txtColor = ["black", "white", "blue", "red"] 
  let printQ = getRandomQuote();
  let paragraph = "<p class='quote'>" + printQ.quote + "</p>";
  paragraph     +="<p class='source'>" + printQ.source;
  if (printQ.citation){
    paragraph   += "<span class='citation'>" + printQ.citation + "</span>";
  }
  if (printQ.year){
    paragraph   += "<span class='year'>" + printQ.year + "<span>";
  }
  paragraph     +="</p>";

  document.getElementById("quote-box").innerHTML = paragraph;
  document.querySelector("body").style.backgroundColor=color();
  document.querySelector("p").style.color=txtColor[Math.floor(Math.random()*txtColor.length)]
}      


//  randomly display different quotes every 6 seconds
window.setInterval(
  ifNotClicked=()=>{
    
      printQuote();
      }
      ,9000) 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// displays the next random quotes when the button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);