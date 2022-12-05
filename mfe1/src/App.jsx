import React from "react";
import ReactDOM from "react-dom";
import AddTodo from "./components/AddTodo";
import List from "./components/List";
import { Provider } from 'react-redux';
import store from './store';

import "./index.css";

const App = () => (
  <div>
    <h3>Todo App</h3>
    <Provider store = {store}> 
    <AddTodo/>
     <List/>
     </Provider>
  </div>
);

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
