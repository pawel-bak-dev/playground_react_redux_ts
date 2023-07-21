import { combineReducers } from 'redux';
import { todosReducer } from 'modules/todo/reducers/todos.ts';
import { Todo } from 'modules/todo/actions';

export interface StoreState {
  todos: Todo[];
}
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
