<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="user">
      <h1>{{ username }}</h1>
      <button @click="getRandonName">Get random name</button>
    </div>
    <div class="teste">
      {{ count }}
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
      <button @click="reset">Reset</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { counterStore } from "../store/counter";
import { userStore } from "../store/user";
export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState(counterStore, ["count"]),
    ...mapState(userStore, ["username"]),
  },
  setup() {
    // dá pra assinar várias stores diferentes aqui
    const counter = counterStore();
    const userActions = userStore();
    return { counter, userActions };
  },
  methods: {
    increment() {
      this.counter.increment();
    },
    decrement() {
      this.counter.decrement();
    },
    reset() {
      this.counter.reset();
    },
    getRandonName() {
      this.userActions.randonName();
    },
  },
};
</script>

<style scoped>
.teste {
  display: flex;
  width: 150px;
  margin: 0 auto;
  flex-direction: column;
  height: 180px;
  justify-content: space-between;
  margin-top: 50px;
}
button {
  cursor: pointer;
  border: none;
  height: 30px;
  border-radius: 5px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.226);
  transition: 0.5s ease-in-out;
  text-size-adjust: none;
}
button:active {
  transform: scale(1.1);
}
</style>