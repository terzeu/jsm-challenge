# jsm-challenge

This project was developed to complete the Juntos Somos + Frontend challenge.

## The BFF Server

The backend was created to solve the CORS problem with the guiven API. How suggest by the challenge it is a BFF, so responsibilities like data pagination and filtering is have been guiven to the serve. Improments like data indenxing and response customization were also made.

Project repository: [https://github.com/terzeu/jsm-challenge-bff](https://github.com/terzeu/jsm-challenge-bff)
The Server is hospeded in: [https://jsm-challenge-bff.herokuapp.com/](https://jsm-challenge-bff.herokuapp.com/)

The problem: It was deployed with Heroku free cloud server, this implies in a [Dynos](https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping) limitation. When the serve no receive traffic for 30 minutes it sleeps causing a delay when is waking up again (after the server wake up the response is faster).

You can ignore this problem using the serve in your localhost, clonning the project, and changing the VUE_APP_BASE_API in ".env.development" file in this Frontend project:

```sh
git clone https://github.com/terzeu/jsm-challenge-bff.git
cd jsm-challenge-bff
npm install
npm run start
```

## Project Setup

### Install dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
You can check de coverage of components tested with:

```sh
npm run coverage
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```
It was configured with 2 times retry, this necessity hapens because of [the Backend Server Error](#the-bff-server) described above.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Next Steps

 - Up code coverage to 100%
 - Improvements to mobile experience
 - Improvements in general user experience (transactions, loads, empty states, etc...)
