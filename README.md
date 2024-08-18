# MobX MVVM Example Project

This project demonstrates the implementation of UI controls using the MVVM (Model-View-ViewModel) architecture pattern with React and MobX. The project includes two types of controls: a button control with configurable buttons on either side of a text input, and an autocomplete control that fetches country data based on user input.

## Project Structure

-   **`src/api/`**: Contains the API service and mock data (`apiService.ts`, `countries.json`).
-   **`src/components/`**: Contains the React components that serve as the View in the MVVM architecture, divided into `ButtonControl` and `Autocomplete` folders, each containing TypeScript and CSS files for the respective components.
-   **`src/App.tsx`**: The main component that combines the different controls for testing and demonstration.
-   **`src/App.css`**: Contains the global styles for the main application.

## Features

### Button Control

A configurable text input control that allows buttons to be placed on either side of the input field. The buttons can trigger different actions, such as clearing the text, setting a predefined value, or validating the input.

#### Example Scenarios:

-   **Control with 2 buttons on the right:**

    -   First button clears the input.
    -   Second button sets the input text to "Hello world!".

-   **Control with 1 button on the left and 1 button on the right:**
    -   Left button checks if the input is a number and displays it in an alert if valid.
    -   Right button shows an alert with the current input text.

### Autocomplete Control

A text input control that displays suggestions based on user input. The suggestions include the name, full name, and flag of countries. The control uses a mock API (`getCountryByName`) to fetch country data.

#### Example Scenarios:

-   **Autocomplete with a maximum of 3 suggestions.**
-   **Autocomplete with a maximum of 10 suggestions.**

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/johnimril/mobx-mvvm-example.git
    cd mobx-mvvm-example
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Install dependencies:
    ````bash
    npm start
     ```
    The application will be available at http://localhost:3000.
    ````

## Project Structure

-   React: A JavaScript library for building user interfaces.
-   MobX: A state management library that simplifies the management of application state.
-   TypeScript: A statically typed superset of JavaScript that provides type safety.

## MVVM Architecture

-   Model: The `apiService.ts` file acts as the model, fetching and returning data to the ViewModel.
-   ViewModel: The `ButtonControl.vm.ts` and Autocomplete.vm.ts files handle the business logic and state management.
-   View: The React components in the `components/` folder serve as the View, rendering the UI based on the state and logic provided by the ViewModel.
