### CONVERT DIGIT TO WORD

Project that converts numbers to words in multiple languages (ENGLISH | NEPALI)

## Table of Contents

- [Installation](#installation)
- [Feature](#feature)
- [Usage](#usage)
- [License](#license)

## Installation

Open a terminal or command prompt and run:

Using npm:

```shell
$ npm i number-converter
```

Using yarn:

```shell
$ yarn add number-converter
```

Using pnpm:

```shell
$ pnpm add number-converter
```

> You should see the number-converter in your package.json

## Features

- Convert digit to word
- Multi language
- Focus on high performance

### Usage

```js
import {numberToWordConverter} from 'number-converter';

console.log(numberToWordConverter(1)));
// output -> एक

console.log(numberToWordConverter(45)));
// output -> पैँतालीस

console.log(numberToWordConverter(535000)));
// output -> पाँच लाख पैंतीस हजार
```

> [!IMPORTANT]
> It is capable to return up to 1 trillion (10^12) (१ हजार उनान सय अर्व)

## License

[MIT](LICENSE)
