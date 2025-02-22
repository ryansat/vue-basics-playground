<script setup>
import { ref } from "vue";

const isOpen = ref(true);
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    class="sidebar"
    :class="{ 'sidebar-closed': !isOpen }"
  >
    <button
      @click="toggleSidebar"
      class="toggle-btn"
    >
      {{ isOpen ? "←" : "→" }}
    </button>
    <div
      class="sidebar-content"
      v-if="isOpen"
    >
      <h2>Navigation</h2>
      <nav>
        <ul>
          <li>
            <router-link
              to="/"
              class="hover:text-blue-500"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="hover:text-blue-500"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              class="hover:text-blue-500"
              >Contact</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 250px;
  background-color: #2c3e50;
  color: white;
  transition: all 0.3s ease;
}

.sidebar-closed {
  width: 50px;
}

.toggle-btn {
  position: absolute;
  right: -30px;
  top: 20px;
  background: #2c3e50;
  border: none;
  color: white;
  padding: 8px;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
}

.sidebar-content {
  padding: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 10px 0;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  color: #42b983;
}
</style>
