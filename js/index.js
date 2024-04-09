// JavaScript Code for clould resume

const counter = document.querySelector(". counter-number");
async function updateCounter() {
    let respose = await fetch("https://dacsscdowtlh5sktgzqkwkjsya0pkixd.lambda-url.us-west-2.on.aws/");
    let data = await respose.json();
    counter.innerHTML = ' Views: ${data}';
}

updateCounter();