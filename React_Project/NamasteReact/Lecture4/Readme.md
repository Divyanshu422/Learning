# Developing the Food Odering application with Namaste react

- Install the package.json file -> followed by parcel -> followed by react and react-dom `npm i react-dom`
- Defining the scripts in the package.json file
- add the .gitignore file.
- In the index.html file -> add `type = "module"` in the script tag
- In the `App.js` file -> import the react and react-dom. create the root component in which the App component is rendered

# Lecture 4 Step and time Stamping:

- At 19 min: we added the logo in the header component
- At 35 minutes: Create the Body structure with no css and no content only the heading
- At 59 minutes: Creating the Restaurant card with dynamic data: `Using Props`: passing the props to component and reading the props in the component

# To Do:

1. naming convention -> in named export -> the name of import shall be same as name of export whereas in default export -> can be different

---

# Lecture 5: let get hook

- Compartmentalise the application into the component -> rather than placing whole code inside the App.js
- the extension used for the component is either `jsx or js`. [ No difference ]
  - Technically, .jsx is used to indicate that the file contains JSX syntax, which allows writing HTML-like code inside JavaScript.
  - However, many projects just use .js even when JSX is used, and modern tooling (like Babel) is capable of handling both .js and .jsx files the same way.
  - So, in practice, there is no functional difference if your environment is set up correctly to handle JSX in .js files.
- Never place the `hardcoded data like (mockData, Url etc)` into the component file rather create a folder with name like
  - utils
  - constant/config etc and place the hardcoded data in this folder
  - The name shall start with small letters

### At 1hour 15 min -> we are creating a button on which when we click only the top rated restaurant is shown.

- By top rated restaurant, we means rating is greater than 4.
- Create the button and use the onClick method which calls the callback function [becoz we are passing the data parameter]
- create the state variable and onClick update the state variable -> on this state variable call the map function

### Last 25 minutes of lecture 5:

- The author discuss about `Reconciliation algorithm or React Fiber`
- `Diffing Algorithm`
- `Virtual DOM`

# Lecture 6: Exploring the World -> Understanding the API call

- Understand the `Separation of concern` and `Single Responsibility principle` in monolithic architecture. [ Done in starting of 10 minutes of lecture ]
- To make an Api Call -> we use following Approach & `useEffect` Hook:
  - As soon the page loads on browser -> we render the page and post render we make the API call.

## useEffect Hook

- It takes 2 parameters: a `callback function` and `dependencies array`
- Imported as named_import
- the callback function in useEffect is called after the rendering of the page.

### See video: Time stamp Lecture 6:

- Using debugger for checking useEffect [ in inspect window ] => b
