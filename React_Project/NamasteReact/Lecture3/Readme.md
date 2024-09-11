# Lecture 3:

- Included the script for start and build
- Writing the jsx inside of the react code and rendering the jsx `See_file: index2.js`

# How jsx is different from the html:

- In JSX, the `className` attribute is used to define a CSS class, whereas in HTML, the `class` attribute is used.
- In JSX, attribute names follow `camelCase convention` (e.g., onClick), whereas in HTML, attribute names are written in lowercase (e.g., onclick).

# Multiple line jsx code:

- To write JSX across multiple lines, you need to enclose the code inside `parentheses ()` for proper formatting.
- JSX must be wrapped in a single parent element, such as a `<div> or <React.Fragment>` component. If there are multiple root elements, they should be wrapped inside a parent container or fragment.

# React Components:

- There are 2 types of component in react:

  - class_based component => not used
  - functional component -> a Js Function which return the jsx

- The name of functional component shall starts in capital letter
- To render the functional component we need to use the angular bracket. eg:
  - Let suppose we have Header component => so to render it we need to use `root.render<Header/>`
