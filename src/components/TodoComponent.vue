<template>
  <div
    class="todo"
    :class="{ todoDone: this.todo.done, todoOpen: !this.todo.done }"
  >
    <div class="todoText" @click="toggleTodo()">{{ todo.todo }}</div>
    <button @click="removeTodo()">Delete todo</button>
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
