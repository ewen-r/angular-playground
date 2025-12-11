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

# RUN DEVELOPMENT SERVER

```bash
cd angular-playground
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


# QUESTION SERVER
The application launched in the browser here will try to load questions from the Question Server detailed in
 `src/app/shared/services/quiz-service/quiz.service.ts`

Quiz server code is not included in this repo but can be found [here](https://github.com/ewen-r/api-server)

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
