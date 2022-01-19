# :woman_technologist: Voicemod frontend code challenge

This repository contains a React application that has been developed for the selection process of senior frontend developer in Voicemod.

It is mainly a voice selector with the following features:

- Select a voice
- Add or Delete the voice you want from the favorite voices section
- You can also use and combine header elements:
  - Filter voices by name
  - Filter voices by category
  - Sort voices ascending and descending
  - Use the dice icon to select a random voice

## :gear: Requirements

The only requirement to use this repository is to have installed [nodejs](https://nodejs.org/en/) from version 14 onwards.

## :dart: Getting started

Once you meet all requirements you need to install application dependencies from the root directory of the repository:

```shell
npm install
```

And after that, you can start your application locally just typing:

```shell
npm start
```

This will automatically open the application in your current active web browser ([http://localhost:3000](http://localhost:3000)) and Voila! :rocket:

## :information_source: How to use

In this section you will find a few more details on how to work with this repository.

### Files structure

The repository have the following files structure:

```text
.
├── public
│   └── assets
└── src
    ├── components
    │   ├── Fav
    │   ├── ListOfVoices
    │   ├── Voice
    │   └── VoiceSelector
    └── resources
```

As you can see the structure is quite intuitive, since we have some public assets in the `public/assets` folder and the source code lives under the `src/` folder.

Inside there, we can also see a specific folder for each component the application has in the `components/` folder as well as another auxiliar folder `resources/` in this case used to separate GlobalState definitions from the rest of the applicaiton.

In each component folder you will find anything related to it, thus `.css` with style code, `.js` with logic and visual definition as well as `test.js` files containing component unitary tests.

### Run tests

Since all dependencies have been already satisfied and installed, if you want to run the application tests just:

```shell
npm test
```

### Pre-commit

A pre-commit configuration file is provided in this repo to perform some linterns, validations and so on in order to avoid commit code to the repo that later will fail in validations step in the build pipeline. Ideally this should be also included in a CI pipeline.

In order to use, you will need to install another requirement:

```shell
pip install pre-commit
```

The first execution can be slower because of installation of dependencies. Further executions will use the pre-commit cache.

Once you have all the requirements achieved, you have to install pre-commit in the local repository:

```shell
pre-commit install
```

And you can test it's working with the following:

```shell
➜ pre-commit run --all-files

Trim Trailing Whitespace.................................................Passed
Check for added large files..............................................Passed
Check python ast.....................................(no files to check)Skipped
Check for case conflicts.................................................Passed
Check that executables have shebangs.................(no files to check)Skipped
Check JSON...............................................................Passed
Check for merge conflicts................................................Passed
Check vcs permalinks.....................................................Passed
Detect AWS Credentials...................................................Passed
Check github workflows format........................(no files to check)Skipped
Markdownlint.............................................................Passed
HTML linter..............................................................Passed
ECMAScript linter........................................................Passed
```

Pre-commit hooks will run automatically before any commit over the related files included in that commit.

## :unicorn: Improvements and future work

- Add **more tests**, to improve the possibility that the application's functionalities do what is expected from them
- Simulated **API for local development**. The creation of an API that eases communication with the data through the different requests it offers. In this case, if an API had been provided to make requests to obtain the necessary data for each functionality, it would not have been necessary to use the `use-global-state` library (which has been used to simplify) and the code of the requests would have been stored inside the `src/` directory, under a subfolder called `services/`, where the code of the different services would be located in an isolated and orderly way
- Another option may be to use **localStorage** for data storage, retrieval and processing. This form also overrides the use of the use-global-state library
- Componentize the `<VoiceSelector />` component and try to offer smaller components to improve the management of the different functionalities and their testing

## :bulb: References

- [use-global-state](https://github.com/dai-shi/react-hooks-global-state). This is a library to provide global state with React Hooks without Context API. The library helps to obtain and manage global data through the application without sending requests to an API
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro). This library is built on top of the DOM Testing Library. It is a collection of utilities that makes it easier to test a React application. It also adds some API's to ease React components inspection providing different methods to do so
- [eslint](https://www.npmjs.com/package/eslint). Probably this one does not need any introduction, but `eslint` is a tool for identifying and reporting patterns found in ECMAScript/JavaScript code. Shows syntax errors and errors when best practices are not followed, offers suggestions for improving code, and helps maintain consistent style in code
