const jokeText = document.getElementById('joke');
const JokeButton = document.getElementById('btn');

fetch('joke.json')
  .then(response => response.json())
  .then(data => {
    const jokes = data;

    JokeButton.addEventListener('click', () => {
      const randomJoke = getRandomJoke(jokes);
      jokeText.textContent = randomJoke.joke;
    });
  }).catch(error => {
    console.error('Error fetching jokes:', error);
    jokeText.textContent = 'Error fetching jokes. Please try again later.';
  });


function getRandomJoke(jokes) {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}