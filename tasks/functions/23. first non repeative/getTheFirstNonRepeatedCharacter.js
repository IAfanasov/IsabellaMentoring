/**
 * @param {string} text 
 * @returns {string}
 */
function getTheFirstNonRepeatedCharacter(text) {
    const frequencyCounter = {}
    for (let val of text) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
    }
    console.log(frequencyCounter);
    // Convert the object into array
    const countedArray = Object.entries(frequencyCounter);
    console.log(countedArray);
    // Find the array element = 1
    let found = countedArray.find(element => element[1] === 1);
    if (found === undefined) {
        return null
    } else {
        return found[0];
    }
}
module.exports = getTheFirstNonRepeatedCharacter;