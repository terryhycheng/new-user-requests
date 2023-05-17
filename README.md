<a name="readme-top"></a>

<br />
<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/terryhycheng/new-user-requests">
    <img src="./public/pobl-logo.png" alt="Logo" width="120" height="auto">
  </a>

<h3 align="center">Pobl Technical Test</h3>
<p>A React App to handle new starter requests</p>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Clone the project](#clone-the-project)
    - [Install packages](#install-packages)
  - [Start](#start)
    - [Run Cypress Tests](#run-cypress-tests)
    - [Run the app](#run-the-app)

<!-- ABOUT THE PROJECT -->

## About the Project

![privew](/public/preview.png)

This application was developed for `Pobl` to handle new starter requests. To ensure maintainability, it was built using the `TypeScript` development tool and the `Cypress` testing library, providing type safety and comprehensive test coverage.

For styling purposes, the application utilizes `TailwindCSS` to apply inline styles directly within the component files.

As for backend, `json-server` is acting as a server with routes by reading `src/data/data.json` to handle backend logics in this project.

### Features

- **Add New Requests**: Users can create new starter requests
- **Change Request's Status**: User can toggle the request as `completed` or `incomplete`
- **Remove Requests**: User can remove requests from the list
- **Filtering**: User can filter requests by business area and status
- **Responsive Layout**: The app can be viewed on both laptop and mobile

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Tech Stack

This project was built with the following tools:

- [![React][react-shield]][react-url]
- [![typescript][typescript-shield]][typescript-url]
- [![tailwindcss][tailwindcss-shield]][tailwindcss-url]
- [![Cypress][cypress-shield]][cypress-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This section shows you how to set up this project locally. First, get a local copy up and running follow these simple steps.

### Prerequisites

You have to make sure that `npm` and `node` have been installed in your local machine before running the project. If not, follow the steps below.

- npm

  ```sh
  npm install npm@latest -g
  npm -v
  ```

- nvm & node

  ```sh
  # visit https://github.com/nvm-sh/nvm on how to install nvm
  nvm install node
  node -v
  ```

  <p align="right">(<a href="#readme-top">back to top</a>)</p>

### Installation

#### Clone the project

```bash
  git clone hhttps://github.com/terryhycheng/new-user-requests.git
```

#### Install packages

```bash
cd new-user-requests
npm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Start

#### Run Cypress Tests

Before running the app, you can run the following to make sure all components are working as expected.

```bash
  npm run test
```

#### Run the app

This project used `concurrently` to run both the frontend and `json-server` server in one terminal. Port `3005` and `5050` are the default ports.

```bash
  npm run start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[typescript-shield]: https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[react-shield]: https://img.shields.io/badge/reactjs-20232a?style=for-the-badge&logo=react&logoColor=61dafb
[react-url]: https://reactjs.org/
[cypress-shield]: https://img.shields.io/badge/cypress-007780?style=for-the-badge&logo=cypress&logoColor=white
[cypress-url]: https://www.cypress.io/
[tailwindcss-shield]: https://img.shields.io/badge/tailwindcss-0f172a?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8
[tailwindcss-url]: https://tailwindcss.com/
