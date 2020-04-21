<div align=center>

# Help Queue

#### React Fundamentals Exercise for [Epicodus](https://www.epicodus.com/), 04.20.2020

#### By **Adela Darmansyah**

[Sample Component Diagram](#Sample-Component-Diagram) | [Notes](#Notes)

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/ayohana/help-queue/master?color=%23DE98B2&style=for-the-badge) ![GitHub language count](https://img.shields.io/github/languages/count/ayohana/help-queue?color=%23DE98B2&style=for-the-badge) ![GitHub top language](https://img.shields.io/github/languages/top/ayohana/help-queue?color=%23DE98B2&style=for-the-badge)

</div>

## Sample Component Diagram

Initial component diagram:

![Component Diagram](./public/sample-component-diagram.jpg)

Version 2.0:

![Component Diagram Version 2.0](./public/sample-component-diagram-2.jpg)

## Notes

### What is React?

* At its core, it's a JavaScript **library** for developing the view layer. A library focuses on one piece of functionality and that's exactly what React does. It isn't concerned with the back-end of an application. Instead, it manages how user interfaces look and behave.

* React is also **highly dynamic**. This means it can handle views that need to change a lot. React allows us to quickly and dynamically update the UI without reloading pages. Any application or site that requires frequent updates is a great candidate for React

### Why use React?

* **Component-Based** - which assists in organizing even the most complex user interfaces into small packages of dedicated functionality. We can also reuse components to keep projects organized and DRY.

* **Declarative** - declarative programming is when we write code that describes the intended end result instead of writing every single step required to reach that result. This saves us time and is also easier to read and understand.

* **Data Model Synchronization** - updating user interfaces to reflect changing application data is one of the most difficult challenges that web developers face on a day-to-day basis. React includes built-in functionality to automatically synchronize our data models with our user interface. That means when we update a piece of data in our application (called `state`), we can code our user interface to automatically update to reflect that change.

* **The Efficient Virtual DOM** - allows us to interact with the DOM more efficiently and with much less code than other libraries and frameworks.

* **Easier to Create Single Page Applications** - for example, Facebook, Gmail, Instagram, Twitter are single-page apps.

* **JSX** - allows developers to mix HTML with JavaScript. While not mandatory, developers report that JSX makes developing in React much easier. Nearly all React applications use JSX syntax.

* **Support** - Facebook and Instagram maintain React. These are large, established companies with the resources to support and maintain React (and its documentation) into the foreseeable future. Our applications will be more stable if we use well-supported tools.

* **Library Benefits** - Because React is just a view library, developers have tremendous flexibility to build out other parts of their applications as they see fit.

* **React Native and VR** - React developers can also explore building mobile-friendly applications with React Native. Both React and React Native follow the same design patterns. React is also developing React VR, a framework for building interactive virtual reality apps using React and JavaScript. Once you have a strong foundation in React, you'll be that much more prepared to build mobile-friendly and virtual reality applications.

### The Virtual DOM

1. **React Creates its own Virtual DOM
React is declarative**, which means we only need to declare what our UI should like. React will handle the rest. When we create React elements (such as a header or paragraph), we're actually creating new elements in the virtual DOM, not the real DOM. Creating and updating this virtual DOM is much faster than updating the actual DOM because it doesn't require communication with the browser.

2. **React Compares the "Actual" DOM to its Virtual DOM.**
After crafting its own virtual DOM, React then compares it to the "actual" DOM in the browser, noting any differences between the two.

3. **React Calculates Changes.** React then automatically calculates the least number of changes necessary to update the actual DOM to match its virtual DOM. This process is known as reconciliation.

4. **React Updates Actual DOM.** React then updates the real DOM to match the virtual DOM only once. This is much faster than calling the DOM multiple times, making each small change individually.

5. **Repeat.** This process repeats as the user interacts with the application. React continues to update its own virtual DOM as users complete actions that warrant updates to the user interface. While it's important to have a basic understanding of how the virtual DOM works, React will take care of the heavy lifting for us and allow us to create very efficient sites with relatively little code.

### Several key points of **React Components**:

* **Functional components** are literally functions that returns a React element. They can't store or alter state. We will mostly write functional components.

* **Class components** are classes that extend React's Component class. They **must** always include a `render()` method that will return a React element. _They are used when we need state._

* **Nesting components** is a big part of developing with React. Components can be parents, siblings, children or any combination thereof.

* Small, **modular components** are the way to go. This makes our code easier to understand and allows us to separate presentational concerns.

### More on React Components:

* Storing all components in a `components` directory is considered a best practice. However, note that index.js should not be added to our new `components` directory.

* Note that `Header.js` is capitalized. It is standard naming convention to capitalize component names.

* Generally, we will want our state to live in one place and be _the single source of truth_. Instead of each `Ticket.js` storing its own data (which wouldn't be a single source of truth), we'll have a parent component store all of the ticket data - that way, our state will be stored in one place.

### Props

* React components accept properties (known as **props**) passed down from a parent. Because React components are functions, these props are actually just a special kind of argument.

* **Props Are Read-Only.** React components aren't just functions - they are _pure functions_. As we know from our functional programming week, pure functions don't have side effects and don't alter state. We need to follow these same rules when we are working with props. We will **never alter the value of props** because this would alter the state of our application and break a cardinal rule of pure functions: no side effects. For that reason, it's very important to remember that **props are read-only.**

### Suggested Guidelines when using CSS

* Use extreme caution when using external stylesheets with React. Here are the suggested guidelines:

  * If your application will have any global style rules, put them in `index.css`.
  * If you plan to use stylesheets for individual components (_which we don't recommend_), make sure that classes and ids very specifically to pinpoint elements in that component.
  * Some animations and pseudo class selectors (like `hover`) can't be implemented with recommended practices like CSS objects - so stylesheets may be an acceptable option in these use cases.

### State VS Component

* State is something that can potentially change. In contrast, a component _cannot_ change its props. **State is fluid and ever-changing while props are not.**

* **As a rule, we should only define a component as a class if it absolutely requires state.**

* **If a component does not require state, it should be a stateless functional component.**

* **Avoiding unnecessary use of state is an important rule in React.**

### States

* **State** is anything in an application that we need to store and change.

* For instance, in our help queue, each time we add a new ticket, we need to update the application's state to hold the new ticket. Likewise, we'd need to update the application's state to edit or delete a ticket.

* **Local State** - lives in a _single_ component and is never used in other components.

  * Conditional rendering is a great example of local state and it's very common in dynamic applications. **Conditional rendering** - using a conditional to determine what content should be rendered. 

* **Shared State** - is shared by _multiple_ components and can get complicated very quickly.

  * Where should a shared state live? **At the lowest common ancestor for all the components that need that state.**

* We can define any default state a component should have in the **constructor**. _It is the only place we should define default state in a pure React application._

* **Always use the `setState()` (an async) method to update state in a pure React application** so that the component will re-render (basically, let React does its job!)




<details>

  <summary>README content generated by Create React App</summary>

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Available Scripts

  In the project directory, you can run:

  ### `npm start`

  Runs the app in the development mode.<br />
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  The page will reload if you make edits.<br />
  You will also see any lint errors in the console.

  ### `npm test`

  Launches the test runner in the interactive watch mode.<br />
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  ### `npm run build`

  Builds the app for production to the `build` folder.<br />
  It correctly bundles React in production mode and optimizes the build for the best performance.

  The build is minified and the filenames include the hashes.<br />
  Your app is ready to be deployed!

  See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  ### `npm run eject`

  **Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

  You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  ## Learn More

  You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  To learn React, check out the [React documentation](https://reactjs.org/).

  ### Code Splitting

  This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

  ### Analyzing the Bundle Size

  This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

  ### Making a Progressive Web App

  This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  ### Advanced Configuration

  This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

  ### Deployment

  This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

  ### `npm run build` fails to minify

  This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

</details>