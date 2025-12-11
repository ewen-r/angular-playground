# ANGULAR-PLAYGROUND

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

# REQUIRED

- [git](https://git-scm.com/install/)
- [node](https://nodejs.org/en)

# CHECK-OUT THE REPO

```bash
mkdir angular-playground
cd angular-playground && git clone https://github.com/ewen-r/angular-playground.git .
```

# INIT

```bash
cd angular-playground
npm i
```

# START THE QUESTION SERVER

The application in this repo retrieves quiz questions from a server using a REST API.  In order to get some decent functionality out of this app you will need to have an accessible instance of the quiz server.

Quiz server code is not included in this repo but can be found [here](https://github.com/ewen-r/api-server)

## Using local quiz server

- Checkout the [api-server repository](https://github.com/ewen-r/api-server)
- Follow the instructions in that repo's README and start the server.
  Note down the server address (ikely to be localhost:4000)
- Update the ip and port in file: `src/app/shared/services/quiz-service/quiz.service.ts`

  ```ts
  /** URL of quiz api server.  */
  // private url = 'https://api-server-j2h3.onrender.com';
  private url = 'http://localhost:4000';
  ```

# RUN THE APPLICATION

```bash
cd angular-playground
npm start
```

Navigate your browser to `http://localhost:4200/`.  
The application will automatically reload if you change any of the source files.

# DEV NOTES

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
