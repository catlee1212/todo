<template>
  <div class="outerContainer">
    <div class="todoBackground">
      <div class="todoHeadline">
        <h1>My todos</h1>
        <p v-if="openTodos.length > 0">Open todos: {{ openTodos.length }}</p>
        <p v-else>Congratulation there are no open todos</p>
      </div>
      <div class="addTodo">
        <input class="inputTodo" type="text" v-model="newTodo" />
        <button class="addButton" @click="addTodo()">
          <font-awesome-icon class="fontAwesome" icon="fa-solid fa-plus" />
          Add
        </button>
      </div>

      <div v-for="(todo, idx) in todos" :key="todo.todo">
        <TodoComponent
          :todoprop="todo"
          :todoidx="idx"
          @toggleDoneIndex="toggleDone"
          @removeTodoIndex="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TodoComponent from "./components/TodoComponent.vue";

export default {
  name: "App",
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
      this.storeTodos();
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.storeTodos();
    },
    addTodo() {
      if (this.newTodo.trim() == "") {
        return; // Errormessage
      }
      this.todos.push({ todo: this.newTodo, done: false });
      this.storeTodos();
    },
    storeTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  computed: {
    openTodos() {
      const openTodos = this.todos.filter((todo) => {
        return !todo.done;
      });
      return openTodos;
    },
  },
  components: {
    TodoComponent,
  },
  mounted() {
    let data = localStorage.getItem("todos");
    if (data !== "" && data !== null) {
      this.todos = JSON.parse(data);
    } else {
      this.todos = [];
    }
  },
};
</script>
