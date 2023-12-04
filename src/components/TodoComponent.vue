<template>
  <div
    class="todo"
    :class="{ todoDone: this.todo.done, todoOpen: !this.todo.done }"
  >
    <div class="state" @click="toggleTodo()" v-if="this.todo.done">
      <font-awesome-icon class="fontAwesome" icon="fa-solid fa-check" />
    </div>

    <div class="state" @click="toggleTodo()" v-if="!this.todo.done">
      <font-awesome-icon class="fontAwesome" icon="fa-solid fa-xmark" />
    </div>

    <div class="todoText">{{ todo.todo }}</div>
    <button @click="removeTodo()">
      <font-awesome-icon class="fontAwesome" icon="fa-solid fa-trash" />
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoComponent",
  props: ["todoprop", "todoidx"],
  data() {
    return {
      todo: this.todoprop,
    };
  },
  methods: {
    toggleTodo() {
      this.$emit("toggleDoneIndex", this.todoidx);
    },
    removeTodo() {
      this.$emit("removeTodoIndex", this.todoidx);
    },
  },
};
</script>
