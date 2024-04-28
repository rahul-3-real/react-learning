# Context API Documentation

The Context API in React allows you to manage global state and share data across multiple components without passing props through intermediate components. This documentation provides steps for creating and using the Context API with `createContext` and `useReducer` hooks.

## Steps for Using Context API

1. **Creating Context with createContext**

   - Use `createContext` to create a new context. This function returns a Context object, which consists of a Provider and a Consumer.

   ```javascript
   import { createContext } from "react";

   const MyContext = createContext();
   ```

2. **Making Reducer Actions for the Created Context (Methods)**

   - Define actions for your context by creating a reducer function. This function will handle state updates based on dispatched actions.

   ```javascript
   const myReducer = (state, action) => {
     switch (action.type) {
       case "ACTION_TYPE":
         // Update state based on action
         return newState;
       default:
         return state;
     }
   };
   ```

3. **Creating Context Provider and Adding useReducer for Dispatching Different Methods/Actions**

   - Create a Provider component to wrap your application or a specific part of it. Inside this Provider, use `useReducer` hook to manage state and dispatch actions.

   ```javascript
   import { createContext, useReducer } from "react";

   // Define initial state
   const initialState = {};

   // Create reducer function
   const myReducer = (state, action) => {
     switch (action.type) {
       case "ACTION_TYPE":
         // Update state based on action
         return newState;
       default:
         return state;
     }
   };

   // Create Context
   const MyContext = createContext();

   // Create Context Provider
   export const MyContextProvider = ({ children }) => {
     const [state, dispatch] = useReducer(myReducer, initialState);

     // Define methods/actions to be provided to consumers
     const myMethod = () => {
       // Dispatch an action
       dispatch({ type: "ACTION_TYPE" });
     };

     // Define value object to be provided to consumers
     const contextValue = {
       state,
       myMethod,
     };

     return (
       <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
     );
   };
   ```

## Using Context API

- Wrap your application or the relevant part of it with the Context Provider (`MyContextProvider` in this example).

  ```javascript
  import React from "react";
  import ReactDOM from "react-dom";
  import { MyContextProvider } from "./MyContextProvider";
  import App from "./App";

  ReactDOM.render(
    <MyContextProvider>
      <App />
    </MyContextProvider>,
    document.getElementById("root")
  );
  ```

- Access the context and consume the provided state and methods in your components using the `useContext` hook.

  ```javascript
  import React, { useContext } from "react";
  import { MyContext } from "./MyContext";

  const MyComponent = () => {
    const { state, myMethod } = useContext(MyContext);

    return (
      <div>
        {/* Render components based on context state */}
        <button onClick={myMethod}>Click Me</button>
      </div>
    );
  };

  export default MyComponent;
  ```

## Additional Notes

- Ensure that the components consuming the context are nested within the Context Provider.
- You can pass initial state to the useReducer hook to initialize the context state.
- Avoid passing large or frequently updated objects through context, as it may lead to unnecessary re-renders.
- If you need to update context state asynchronously (e.g., making API requests), consider using other state management solutions like Redux or async context.
