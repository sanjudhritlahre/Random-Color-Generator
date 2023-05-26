const getRandomColorGenerator = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);
    
    const randomHexCode = '#' + randomNumber.toString(16);
    // console.log(randomHexCode);

    // Set the Body Color randomHexCode Values
    document.body.style.backgroundColor = randomHexCode;
    document.getElementById('color-code').innerText = randomHexCode;

    // Copy Hex Code
    navigator.clipboard.writeText(randomHexCode);
}

// Event Call 
document.getElementById('btn').addEventListener('click', getRandomColorGenerator);


// Initial Call
getRandomColorGenerator();

setInterval(() => {
    getRandomColorGenerator();
}, 10000);