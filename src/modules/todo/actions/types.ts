import {
  FetchTodosAction,
  DeleteTodoAction,
} from 'modules/todo/actions/index.ts';
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
