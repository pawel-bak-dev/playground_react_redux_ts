import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { TodoList } from './modules/todo/components/TodoList.tsx';
import './index.css';
import { reducers } from './modules/todo/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <h3 className="font-bold underline">Todo List</h3>
          <TodoList />
        </div>
        <div className="basis-1/2">
          <h3 className="font-bold underline">Github Finder</h3>
        </div>
      </div>
    </Provider>
  </React.StrictMode>
);
