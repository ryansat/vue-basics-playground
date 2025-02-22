<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const error = ref("");

const handleLogin = () => {
  if (username.value === "admin" && password.value === "admin") {
    error.value = "";
    router.push("/");
  } else {
    error.value = "Invalid credentials";
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Username</label
        >
        <input
          type="text"
          v-model="username"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter username"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2"
          >Password</label
        >
        <input
          type="password"
          v-model="password"
          class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Enter password"
        />
      </div>

      <div
        v-if="error"
        class="mb-4 text-red-500 text-sm text-center"
      >
        {{ error }}
      </div>

      <button
        @click="handleLogin"
        class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Login
      </button>
    </div>
  </div>
</template>
