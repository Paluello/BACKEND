# Regex String Generator (TypeScript)

A simple tool to generate random strings based on a given regular expression pattern using TypeScript.

## Installation

Using npm

```bash
npm install regex-randstr
```

Using yarn

```bash
yarn add regex-randstr
```

## Usage

```typescript
import { randString } from 'regex-randstr';

const randomString = randString('^[A-Za-z0-9]{5}$');
console.log(randomString); // Outputs a random 5-character alphanumeric string
```

## License
This plugin is licensed under the MIT License. See the LICENSE file for more information.
