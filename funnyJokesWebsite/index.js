generateJoke();

async function generateJoke() {
	const jokeRes = await fetch('https://sv443.net/jokeapi/v2/joke/Any?type=single&category=funny,desi&flags=south%20asian', {
		headers: {
			'Accept': 'application/json'
		}
	});
	const joke = await jokeRes.json();
	document.getElementById('joke').innerHTML = joke.joke;
}