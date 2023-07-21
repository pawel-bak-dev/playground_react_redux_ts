import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from 'modules/todo/actions';
import { StoreState } from 'modules/todo/reducers';

interface TodoListProps {
  todos: Todo[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface TodoListState {
  fetching: boolean;
}

class _TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: Readonly<TodoListProps>) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  onButtonClick(): void {
    this.setState({ fetching: true });
    this.props.fetchTodos();
  }

  onDeleteButtonClick(id: number): void {
    this.props.deleteTodo(id);
  }

  renderList(): React.ReactElement[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id}>
          <button onClick={() => this.onDeleteButtonClick(todo.id)}>
            Delete
          </button>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onButtonClick()}>Fetch</button>
        {this.state.fetching && 'LOADING'}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const TodoList = connect(mapStateToProps, { fetchTodos, deleteTodo })(
  _TodoList
);
