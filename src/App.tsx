import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import Todo from './components/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="App"></div>;
      <Todo />
    </RecoilRoot>
  );
}

export default App;
