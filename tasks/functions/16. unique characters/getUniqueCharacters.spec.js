const getUniqueCharacters = require('./getUniqueCharacters');

describe.only('tests of getUniqueCharacters', () => {
  
    [
        { text: 'thequickbrownfoxjumpsoverthelazydog', expectedResult: 'thequickbrownfxjmpsvlazydg' },
        { text: 'trololo', expectedResult: 'tr' },
        { text: 'write a javascript function to extract unique', expectedResult: 'wjvspfxq' }
    ]
        .forEach(testCase => {

            test(`return '${testCase.expectedResult}' for string '${testCase.text}'`, () => {
                const result = getUniqueCharacters(testCase.text);

                expect(result).toBe(testCase.expectedResult);
            });
        })
})