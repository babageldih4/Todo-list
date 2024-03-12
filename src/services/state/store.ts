import create from "zustand";

// Define the type for a todo item
interface Todo {
  id: number;
  task: string;
  date: string | string[];
  completed?: boolean;
  pending?: boolean;
}

// Define the type for the todo store
interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  completedTodo: (id: number, bool: boolean) => void;
  // removeTodo: (id: string) => void;
  // toggleTodo: (id: string) => void;
}

// Create the store
const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  iscompleted: false,
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  completedTodo: (id: number, bool: boolean) =>
    set((state) => {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === id) {
          state.todos[i].completed = bool;
          return { todos: state.todos };
        }
      }
    }),
}));
// removeTodo: (id) =>
//   set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
// toggleTodo: (id) =>
//   set((state) => ({
//     todos: state.todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ),
//   })),
// }));

export default useTodoStore;
