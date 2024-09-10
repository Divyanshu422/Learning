# Lecture 2: Igniting the application

- To initialise the `package.json` file, we need to use following command => `npm -y init`.
- The package.json file contains meta_Data, configuration and dependencies.

- After installing the packgae.json file -> we can install the dependencies. Installing the bundler `[ Parcel ]`. command used is `npm i -D parcel`. [ here -D is flag @ denoting the parcel is need at development environment and not at deployment phase ]

- Adding the `.gitignore` in the project so that node_modules shall not be commited to
- To ignite the application we will using the following command `npx parcel index.html`
  - the parcel host the application `@localhost:1234`
- Rather than install the CDN links for react and reactDOM: we can install react and reactDOM in the node modules:
  - `npm install react` && `npm install react-dom`
