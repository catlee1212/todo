<template>
  <div
    class="todo"
    :class="{ todoDone: this.todo.done, todoOpen: !this.todo.done }"
  >
    <div class="state col-1" @click="toggleTodo()" v-if="this.todo.done">
      <font-awesome-icon class="fontAwesome" icon="fa-solid fa-check" />
    </div>

    <div class="state col-1" @click="toggleTodo()" v-if="!this.todo.done">
      <font-awesome-icon class="fontAwesome" icon="fa-solid fa-xmark" />
    </div>

    <div class="todoText col-8">{{ todo.todo }}</div>

    <button @click="removeTodo()" class="col-3">
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
