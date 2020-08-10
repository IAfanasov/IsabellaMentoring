const getTheLongestWord = require('./longestWord');

describe.only('tests of getTheLongestWord', () => {
  
    [
        { text: 'Web Development Tutorial', expectedResult: 'Development' },
        { text: 'Write a JavaScript function', expectedResult: 'JavaScript' },
        { text: 'string as a parameter and find', expectedResult: 'parameter' }
    ]
        .forEach(testCase => {

            test(`return '${testCase.expectedResult}' for string '${testCase.text}'`, () => {
                const result = getTheLongestWord(testCase.text);

                expect(result).toBe(testCase.expectedResult);
            });
        })
})