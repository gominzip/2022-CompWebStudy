const quotes = [
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "In order to write about life first you must live it.",
        author: "Ernest Hemingway",
    },
    {
        quote: "Not how long, but how well you have lived is the main thing.",
        author: "Seneca",
    },
    {
        quote: "Life is not a problem to be solved, but a reality to be experienced.",
        author: "Soren Kierkegaard",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //랜덤으로 숫자

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;