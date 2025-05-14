<script setup>
const model = defineModel()
const categories = ['all', 'technology', 'design', 'business', 'science']
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category"
      @click="model = category"
      class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
      :class="{
        'bg-blue-600 text-white': model === category,
        'bg-gray-200 text-gray-700 hover:bg-gray-300': model !== category
      }"
    >
      {{ category.charAt(0).toUpperCase() + category.slice(1) }}
    </button>
  </div>
</template>