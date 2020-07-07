# React TODO App

Lab 26

In this lab, you will be creating a ToDo application, utilizing functional components and the Hooks API

Your ToDo application should have the following features:

- Users should have access to a form where a new ToDo task can be added. This form should have the following fields:
  - Task Description / Text
  - Assigned To
  - Status (complete or incomplete)
  - Difficulty (a number between 1 and 5)
- When users submit their new task form, they should see their task appear in a list of current tasks. This list should allow you to select any task to toggle it from complete to incomplete or vice versa.
- For this lab, your application does not have to persist tasks after application reload / refresh.
- The title on the browser tab should update to show the number of incomplete tasks. For example, the title could read “4 Incomplete ToDo Items” or something similar.

Lab 27

Your ToDo application should have the following features:

- Tasks should be persisted across page reloads through the use of an API, either your own or the provided 401 API server - See API documentation here
  - Note that when using the provided server, there may be multiple students changing the saved database tasks.
- Users should be able to delete existing tasks by clicking a “delete” button on each task item.
- Users should have access to a form where a new ToDo task can be added. This form should have the following fields:
  - Task Description / Text
  - Assigned To
  - Status (complete or incomplete)
  - Difficulty (a number between 1 and 5)
- When users submit their new task form, they should see their task appear in a list of current tasks. This list should allow you to select any task to toggle it from complete to incomplete or vice versa.
- The title on the browser tab should update to show the number of incomplete tasks. For example, the title could read “4 Incomplete ToDo Items” or something similar.

Lab 28

Your ToDo application should have the following features:

- You should have a settings component that lets users toggle the following features:
  - The maximum number of items on the screen, causing pagination if number of tasks exceeds this
  - Whether to show or hide tasks that have the status “complete”
- Tasks should be persisted across page reloads through the use of an API, either your own or the provided 401 API server - See API documentation here
  -Note that when using the provided server, there may be multiple students changing the saved database tasks.
- Users should be able to delete existing tasks by clicking a “delete” button on each task item.
- Users should have access to a form where a new ToDo task can be added. This form should have the following fields:
  - Task Description / Text
  - Assigned To
  - Status (complete or incomplete)
  - Difficulty (a number between 1 and 5)
- When users submit their new task form, they should see their task appear in a list of current tasks. This list should allow you to select any task to toggle it from complete to incomplete or vice versa.
- The title on the browser tab should update to show the number of incomplete tasks. For example, the title could read “4 Incomplete ToDo Items” or something similar.

## Author: Joel Watson

### Links and Resources

Lab 26

- [PR 26](https://github.com/401-advanced-javascript-joel/react-to-do/pull/2)
- [CI/CD 26](https://github.com/401-advanced-javascript-joel/react-to-do/pull/2/checks)
- [CodeSandbox 26](https://codesandbox.io/s/github/401-advanced-javascript-joel/react-to-do)

Lab 27

- [PR 27](https://github.com/401-advanced-javascript-joel/react-to-do/pull/3)
- [CI/CD 27](https://github.com/401-advanced-javascript-joel/react-to-do/pull/3/checks)
- [CodeSandbox 27](https://codesandbox.io/s/github/401-advanced-javascript-joel/react-to-do/tree/lab-27)

Lab 28

- [PR 28](https://github.com/401-advanced-javascript-joel/react-to-do/pull/4)
- [CI/CD 28](https://github.com/401-advanced-javascript-joel/react-to-do/pull/4/checks)
- [CodeSandbox 28](https://codesandbox.io/s/github/401-advanced-javascript-joel/react-to-do/tree/lab-28)

Deployed App

- [Netlify](https://confident-mcclintock-fe5308.netlify.app/)

### Setup

- `npm install`

### How to test

- `npm test`

### How to run

- `npm start`

### UML

![UML 26](https://raw.githubusercontent.com/401-advanced-javascript-joel/react-to-do/master/assets/lab-26.jpg)
