const getTheFirstNonRepeatedCharacter = require('./getTheFirstNonRepeatedCharacter');

describe('tests of getTheFirstNonRepeatedCharacter', () => {
    test(`return 'e' for string 'abacddbec'`, () => {
        const result = getTheFirstNonRepeatedCharacter('abacddbec');

        expect(result).toBe('e');
    });

    test(`return 'null' for string 'abba'`, () => {
        const result = getTheFirstNonRepeatedCharacter('abba');

        expect(result).toBeNull();
    });

    test(`return 'i' for string 'isabella dang'`, () => {
        const result = getTheFirstNonRepeatedCharacter('isabella dang');

        expect(result).toBe('i');
    });

    [
        { text: 'amsterdam', expectedResult: 's' },
        { text: 'almere', expectedResult: 'a' },
        { text: 'netherlands', expectedResult: 't' }
    ]
        .forEach(testCase => {
            test(`return '${testCase.expectedResult}' for string '${testCase.text}'`, () => {
                const result = getTheFirstNonRepeatedCharacter(testCase.text);

                expect(result).toBe(testCase.expectedResult);
            });
        })
})