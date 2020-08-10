const sortStringAlphabetically = require('./sortStringAlphabetically');

describe.only('tests of sortStringAlphabetically', () => {
  
    [
        { text: 'webmaster', expectedResult: 'abeemrstw' },
        { text: 'almere', expectedResult: 'aeelmr' },
        { text: 'netherlands', expectedResult: 'adeehlnnrst' }
    ]
        .forEach(testCase => {

            test(`return '${testCase.expectedResult}' for string '${testCase.text}'`, () => {
                const result = sortStringAlphabetically(testCase.text);

                expect(result).toBe(testCase.expectedResult);
            });
        })
})