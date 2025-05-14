<script setup>
const model = defineModel()
const emit = defineEmits(['search'])
</script>

<template>
  <div class="relative max-w-md">
    <input
      v-model="model"
      type="text"
      placeholder="Search posts or authors..."
      class="w-full pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      @keyup.enter="emit('search')"
    >
    <button
      @click="emit('search')"
      class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
</template>