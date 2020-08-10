# Learning playground

This playground is setup with `jest` testing framework. 

## installing dependencies

``` sh
npm i
```

## run tests

To run tests ones.

``` sh
npm run test
```

To run tests on each save of files.

``` sh
npm run test:watch
```

To run just the one file with tests:

``` sh
npx jest <path to file> --watchAll
# eg
npx jest tasks/functions/4. alphabetic order/sortStringAlphabetically.spec.js --watchAll
```
