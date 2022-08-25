/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
 * Array of at least 5 quote objects with quote and source parameters, and optional citation, year, and category parameters
***/
let quotes = [{
  quote: "You cannot do kindness too soon, for you never know how soon it will be too late.",
  source: "Ralph Waldo Emerson",
  category: "inspiring"
},
{
  quote: "Yer a wizard Harry.",
  source: "Rubeus Hagrid",
  citation: "Harry Potter and the Sorceror's Stone",
  year: "1997",
  category: "wisdom"
},
{
  quote: "It does not do well to dwell on dreams and forget to live.",
  source: "Albus Dumbledore",
  citation: "Harry Potter and the Sorceror's Stone",
  year: "1997"
},
{
  quote: "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.",
  source: "Albus Dumbledore",
  citation: "Harry Potter and the Sorceror's Stone",
  year: "1997"
},
{
  quote: "Dobby is free.",
  source: "Dobby",
  citation: "Harry Potter and the Chamber of Secrets",
  year: "1998",
  category: "heartwarming"
},
{
  quote: "Fear of a name only increases fear of the thing itself.",
  source: "Hermione Granger",
  citation: "Harry Potter and the Chamber of Secrets",
  year: "1998"
},
{
  quote: "I solemnly swear I am up to no good.",
  source: "Harry Potter",
  citation: "Harry Potter and the Prisoner of Azkaban",
  year: "1999"
},
{
  quote: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
  source: "Albus Dumbledore",
  citation: "Harry Potter and the Prisoner of Azkaban",
  year: "1999"
}]

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // Creates random number from 1 to the number of quotes in quotes array and saves result into randomNum variable
  let randomNum = Math.floor(Math.random() * quotes.length)
  // Uses randomNum as index into quotes array to get a random quote, and saves result into quote variable
  let quote = quotes[randomNum]
  // Returns quote variable
  return quote
}

/***
 * `printQuote` function
***/
function printQuote() {
  // Calls getRandomQuote and saves result in returnedQuote
  let returnedQuote = getRandomQuote()
  // Uses quote and source from returnedQuote object to build partial HTML code
  let HTMLString = `
    <p class="quote">${returnedQuote.quote}</p>
    <p class="source">${returnedQuote.source}`
  // Checks if returnedQuote object has citation, year, or category keys and if it does, concatenates more HTML
  if (returnedQuote.citation) {
    HTMLString += `<span class="citation">${returnedQuote.citation}</span>`
  }
  if (returnedQuote.year) {
    HTMLString += `<span class="year">${returnedQuote.year}</span>`
  }
  if (returnedQuote.category) {
    HTMLString += `<br><span class="category">Tag: ${returnedQuote.category}</span>`
  }
  // Concatenates final closing p tag to HTML
  HTMLString += "</p>"
  // Assigns the final HTML string to the relevant part of the document inner HTML, in this case "quote-box"
  document.getElementById("quote-box").innerHTML = HTMLString
  // Calls the randomColor function to change the background color of the page with each quote change
  document.body.style.backgroundColor = randomColor()
}

/***
 * `randomColorNum` function
 * randomColorNum function returns a random number between 1 and 255
***/
function randomColorNum() {
  let colorNum = Math.floor(Math.random() * 255) + 1
  return colorNum
}
/***
 * `randomColor` function
 * randomColor function calls randomColorNum 3 times within a template literal creating an rgb color ("rgb(###,###,###)")
 * rgb template literal is returned
***/
function randomColor() {
  rgbColor = `rgb(${randomColorNum()}, ${randomColorNum()}, ${randomColorNum()})`
  return rgbColor
}

/***
 * `setInterval` function
 * Auto-refreshes the quote by calling the printQuote function every 20000 milliseconds (20 seconds)
***/
setInterval(printQuote, 20000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);