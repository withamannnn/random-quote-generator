const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "-- Franklin D. Roosevelt" },
    { quote: "In the middle of difficulty lies opportunity.", author: "-- Albert Einstein" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "-- Winston Churchill" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "-- Ralph Waldo Emerson" },
    { quote: "Believe you can and you're halfway there.", author: "-- Theodore Roosevelt" },
    { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "-- William Butler Yeats" },
    { quote: "The only way to do great work is to love what you do.", author: "-- Steve Jobs" },
    { quote: "The best way to predict the future is to create it.", author: "-- Peter Drucker" },
    { quote: "The only person you are destined to become is the person you decide to be.", author: "-- Ralph Waldo Emerson" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "-- Sam Levenson" },
    { quote: "You miss 100% of the shots you don't take.", author: "-- Wayne Gretzky" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "-- Confucius" },
    { quote: "Whether you think you can or you think you can't, you're right.", author: "-- Henry Ford" },
    { quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "-- Vince Lombardi" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "-- Charles R. Swindoll" },
    { quote: "Act as if what you do makes a difference. It does.", author: "-- William James" },
    { quote: "Change your thoughts and you change your world.", author: "-- Norman Vincent Peale" },
    { quote: "An unexamined life is not worth living.", author: "-- Socrates" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "-- Steve Jobs" },
    { quote: "The mind is everything. What you think you become.", author: "-- Buddha" },
    { quote: "The best revenge is massive success.", author: "-- Frank Sinatra" },
    { quote: "The purpose of our lives is to be happy.", author: "-- Dalai Lama" },
    { quote: "To succeed in life, you need two things: ignorance and confidence.", author: "-- Mark Twain" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "-- Walt Disney" },
    { quote: "It always seems impossible until it's done.", author: "-- Nelson Mandela" }
];


const randomQuotes = () => {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    let selectedQuote = quotes[randomQuote];
    document.getElementById("quoteSection").textContent = `“${selectedQuote.quote}”`;
    document.getElementById("authorSection").textContent = `${selectedQuote.author}`;
}

const speakQuote = () => {
    let quoteText = document.getElementById("quoteSection").textContent;
    let authorText = document.getElementById("authorSection").textContent;
    const utterance = new SpeechSynthesisUtterance(`${quoteText} ${authorText}`);
    speechSynthesis.speak(utterance);
}
window.onload = randomQuotes;