const {
  TodoInput,
  TodoHeader,
  TodoList
} = window.App;

class TodoApp extends React.Component {
  render() {
    return (

        

      <div>
        <TodoHeader />
        <TodoInput />
        <TodoList />

      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
