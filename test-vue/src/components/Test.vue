<template>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
    <h1 class="text-2xl font-bold mb-4">Test</h1>
    <p class="text-gray-700 mb-4">{{ message }}</p>
    <button
      @click="changeMessage"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Console Log Message
    </button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    changeMessage() {
      this.message = "Hello Vue!";
      console.log(this.message);
      alert(this.message);
    },
  },
};
</script>
