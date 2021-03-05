//Get quote form API
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete(){
    if(!loader.hidden) {
        quoteContainer.hidden=false;
        loader.hidden=true;
    }
}

async function getQuote(){
    loading();
    const proxyUrl= "https://jacinto-cors-proxy.herokuapp.com/";
    const apiUrl="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        if(data.quoteAuthor === '') {
            quoteAuthor.innerText = 'Unknown';
        } else{
            quoteAuthor.innerText = data.quoteAuthor;
        }

        if(data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        }else{
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        complete();
    } catch (error) {
        getQuote();
        console.log('whoops,no quote', error);
    }
}

function tweetQuote(){
    const quote = quoteText.innerText;
    const author = quoteAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click',tweetQuote);

//On Load 

getQuote();