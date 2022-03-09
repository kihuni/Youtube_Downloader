let convertBtn = document.querySelector('.convert-button');
let URLinput = document.querySelector('.URL-input');
let serverUrl = 'http://localhost:4000';

convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});




function sendURL(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}