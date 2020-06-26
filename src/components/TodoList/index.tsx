import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "../TodoItemCreator";
import TodoItem from "../TodoItem";
// import { todoListState } from "../../store/atoms";
import { filteredTodoListState } from "../../store/selectors";
import TodoListFilters from "../TodoListFilters";
import TodoListStats from "../TodoListStats";

function TodoList() {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListFilters />
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((todoItem: any) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
