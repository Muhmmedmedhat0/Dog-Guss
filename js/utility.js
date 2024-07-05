// Utility function to get a randomly selected item from an array
function getRandomElement(array) {
  const i = Math.floor(Math.random() * array.length);
  return array[i];
}

// Utility function to shuffle the order of items in an array in-place
function shuffleArray(array) {
  return array.sort((a, b) => Math.random() - 0.5);
}

// TODO: 1
// Given an array of possible answers, a correct answer value, and a number of choices to get,
// return a list of that many choices, including the correct answer and others from the array
function getMultipleChoices(n, correctAnswer, possibleChoices) {
  // Use a while loop and the getRandomElement() function
  const choices = [];
  choices.push(correctAnswer);
  while (choices.length < n) {
    const choice = getRandomElement(possibleChoices);
    // Make sure there are no duplicates in the array
    if (!choices.includes(choice)) {
      choices.push(choice);
    }
  }
  return shuffleArray(choices);
}

export { getMultipleChoices };
