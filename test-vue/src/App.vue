<script setup>
import Test from "./components/Test.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.app-container {
  display: flex;
}

.main-content {
  margin-left: 250px;
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
