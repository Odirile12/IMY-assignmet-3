<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <NuxtLink 
    :to="`/blog/${post.id}`"
    class="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
  >
    <div class="p-6">
      <span 
        class="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2"
      >
        {{ post.attributes.category }}
      </span>
      <h2 class="text-xl font-bold mb-2">{{ post.attributes.title }}</h2>
      <p class="text-gray-600 mb-4">
        By {{ post.attributes.author.data.attributes.username }}
      </p>
      <p class="text-gray-700 line-clamp-3">
        {{ post.attributes.content.replace(/<[^>]*>/g, '').substring(0, 150) }}...
      </p>
    </div>
  </NuxtLink>
</template>