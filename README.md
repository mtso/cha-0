# CHA-0

CHA-0 is a color hashing algorithm designed to output a random hex color string for a given string input. CHA-0 gives a good distribution over the hex color space through a multiplicative hashing scheme.

[![Build Status](https://travis-ci.org/mtso/cha-0.svg?branch=master)](https://travis-ci.org/mtso/cha-0)

## Install

With npm:
```
$ npm install --save cha-0
```

With yarn:
```
$ yarn add cha-0
```

## Usage

```js
const cha0 = require('cha-0')
const fooColor = cha0('foo')
console.log('#' + fooColor) // "#3dc680"
```

[Try it out at runkit.com](https://npm.runkit.com/cha-0)
