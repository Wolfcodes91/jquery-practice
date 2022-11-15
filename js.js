
const numbers = [1,2,3,4,5]

function logPairs(numbers) {
    let answers = [];
    let counter = 0;
    numbers.forEach((number, idx) => {
        while (counter < numbers.length) {
            answers.push(`${number} - ${numbers[counter]}`)
            counter ++
        }
        counter = idx + 1
    })  
    return answers
}

console.log('Answer: ', logPairs(numbers))