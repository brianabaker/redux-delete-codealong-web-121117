let id = 0;

export default function manageTodo(state = {
  todos: []
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      id++;
      const todo = Object.assign({}, action.todo, { id: id });
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      let keepTodos = state.todos.filter(todo => todo.id !== action.id)
      return { todos: keepTodos }
    default:
      return state;
  }
};
