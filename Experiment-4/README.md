## **Aim**
To understand and implement different ways of managing state in a React application, including Local State using hooks and Global State using Context API and Redux.

## **Theory**
State management is the process of managing the data that a localized component or an entire application needs to render.

Local State: Managed within a single component using the useState hook. It is ideal for data that doesn't need to be shared elsewhere.

Global State (Context API): A built-in React feature that allows sharing data across the component tree without "prop drilling."

Global State (Redux): A predictable state container for JavaScript apps that uses a centralized Store, Reducers, and Actions to manage complex global states.

## **Folder Structure & Implementation**
Based on the project structure:

components/context: Contains logic for Global State using React Context.

store: Contains Store.jsx and CounterReducer.jsx for Redux implementation.

CounterLocalState: Component demonstrating the useState hook.

 ## **Steps to Run**
Install Dependencies: Run npm install in the terminal to install React, Redux, and React-Redux.

Start Development Server: Run npm run dev to launch the Vite application.

Local State: Observe the counter incrementing independently in the Local State component.

Context API: Check how the state is shared across multiple components using the Provider.

Redux: Observe the state being dispatched through actions and updated via the centralized Reducer.

## **Learning Outcomes**
Learned how to use the useState hook for component-level data.

Gained hands-on experience in setting up a Context.Provider and useContext hook.

Understood the Redux workflow.

Identified when to use Local vs. Global state based on application complexity.

## **Conclusion**
This experiment successfully demonstrates the implementation of various state management techniques. While useState is sufficient for simple tasks, Context API and Redux provide more robust solutions for handling data across large-scale applications.