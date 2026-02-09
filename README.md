# Gilded Rose

This is the Gilded Rose kata in TypeScript.

## About the Gilded Rose Kata

The Gilded Rose is a refactoring kata that simulates an inventory management system for a fantasy inn. The system manages items with different aging behaviors:

- Regular items decrease in quality over time
- "Aged Brie" increases in quality as it ages
- "Backstage passes" have complex quality rules based on concert dates
- "Sulfuras" is a legendary item that never changes
- "Conjured" items degrade twice as fast as regular items


## Prerequisites

- **Node.js**: Version 18.x or higher (tested: v22.16.0)
- **npm**: Comes with Node.js (tested: 10.9.2)

## Note on Running Scripts
You can run TypeScript scripts using either `ts-node` (installed globally or as a dev dependency) or with `npx` (which uses the local version if available). If you don't have `ts-node` installed globally, simply prefix commands with `npx` as shown in the examples below.

## Project Structure

```
app/                    # Main application code
├── gilded-rose.ts     # Core GildedRose class and Item model
├── helper.ts          # Utility functions
├── constants/         # Application constants
├── factory/           # Quality updater factory pattern
└── updaters/          # Item-specific quality update logic

test/                  # Test suites
├── jest/             # Jest test files
├── mocha/            # Mocha test files
├── vitest/           # Vitest test files
└── golden-master-text-test.ts  # Text-based approval testing

docs/                 # Documentation
└── GildedRoseRequirements.md   # Original requirements
```

## Getting started

### Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

There are two unit test frameworks to choose from, Jest and Mocha.

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```


## Run the TextTest fixture from the Command-Line

```sh
npx ts-node -r tsconfig-paths/register test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node -r tsconfig-paths/register test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).


## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python

## Development Workflow

1. **Install dependencies**: `npm install`
2. **Run tests**: `npm run test:jest` (or your preferred test runner)
3. **Run the application**: `npx ts-node -r tsconfig-paths/register test/golden-master-text-test.ts`
4. **Make changes** to the code in the `app/` directory
5. **Re-run tests** to ensure your changes work correctly or run `npm run test:jest:watch`

