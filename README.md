# Dog Breed Quiz

This project is a simple dog breed quiz that fetches a random dog image and generates multiple-choice buttons for the user to guess the breed. The correct answer is highlighted after the user makes a choice.

## Features

- Fetches a random dog image from the Dog CEO API.
- Generates multiple-choice buttons for the user to guess the breed.
- Highlights the correct answer after the user makes a choice.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6)

## How to Run

1. Clone the repository.
2. Open the `index.html` file in your preferred web browser.

## Code Explanation

### Constants

- `RANDOM_IMG_ENDPOINT`: The endpoint to fetch a random dog image.
- `BREEDS`: An array of all possible dog breeds.

### Utility Functions

- `getRandomElement(array)`: Returns a randomly selected item from an array.
- `shuffleArray(array)`: Shuffles the order of items in an array in-place.

### Main Functions

#### getMultipleChoices(n, correctAnswer, possibleChoices)

Given an array of possible answers, a correct answer value, and a number of choices to get, this function returns a list of that many choices, including the correct answer and others from the array.

#### getBreedFromURL(url)

Given a URL such as "https://images.dog.ceo/breeds/poodle-standard/n02113799_2280.jpg", this function returns the breed name string as formatted in the breed list, e.g., "standard poodle".

#### fetchMessage(url)

Given a URL, this function fetches the resource at that URL, then parses the response as a JSON object, and finally returns the "message" property of its body.

#### renderButtons(choicesArray, correctAnswer)

Adds the multiple-choice buttons to the page and attaches an event handler function to compare the clicked button's value to the correct answer, and add "correct"/"incorrect" classes to the buttons as appropriate.

#### renderQuiz(imgUrl, correctAnswer, choices)

Adds the quiz content to the page, including the dog image and multiple-choice buttons.

#### loadQuizData()

Loads the data needed to display the quiz. It fetches a random dog image, determines the correct breed, generates multiple-choice options, and returns them.

#### initializeQuiz()

An asynchronous function that calls `loadQuizData()`, then calls `renderQuiz()` with the returned image URL, correct answer, and choices.

### How It Works

1. The `initializeQuiz` function is called to start the quiz.
2. `loadQuizData` fetches a random dog image URL, determines the correct breed, and generates multiple-choice options.
3. `renderQuiz` displays the dog image and the multiple-choice buttons.
4. When a button is clicked, it checks if the choice is correct and highlights the correct answer.

## License

This project is licensed under the MIT License.
