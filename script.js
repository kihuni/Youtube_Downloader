let Btn = document.querySelector('.convert-button');
let URLinput = document.querySelector('.URL-input');
let serverUrl = 'http://localhost:4000';

Btn.addEventListener('click', () => {
	if (URLinput.value) {
		downloadMp4(URLinput.value);
	} else {
        alert('Enter YouTube URL');
	}
});

async function downloadMp4(query) {
	const res = await fetch(`${serverUrl}/downloadmp4?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverUrl}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert('Invalid url');
	}
}