# react-star-wars-search

Star Wars Information Search Application created with ReactJS

## Stack Used

- [React](https://reactjs.org/)
  - PropTypes
  - React Router
- [Redux](https://redux.js.org/)
  - React Redux
- [axios](https://github.com/axios/axios)
- [Redux Pack](https://github.com/lelandrichardson/redux-pack)
- [Bootstrap 4](https://getbootstrap.com/)
- [Cypress](https://cypress.io)

## Implemented Features

- Basic search with "typing intention handler"
- Loader
- Separated page for Details ( using React Router)
- Different statuses for empty list

## Run / Build Instructions

### To run it locally:

From the root directory:

- `npm install`
- `npm start`

It will start the Webpack dev server at the port `8080`

### To run the tests (Cypress)

From the root directory:

- `npm run test` to run the tests only if the application is already running with `npm start`
- `npm run start:test` to run the application and tests in the console ( in case the app is not running yet)
- `npm run test:console` to open the cypress view

### To have a production build:

From the root directory:

- `npm install`
- `npm run build`

It will create a `dist` folder with the static assets to be deployed
