<script setup lang="ts">
defineProps<{
  post: {
    id: number
    attributes: {
      title: string
      excerpt: string
      slug: string
      featuredImage?: {
        data?: {
          attributes: {
            url: string
          }
        }
      }
    }
  }
}>()
</script>

<template>
  <NuxtLink :to="`/blog/${post.attributes.slug}`" class="block group">
    <div class="overflow-hidden rounded-lg">
      <img 
        v-if="post.attributes.featuredImage?.data"
        :src="post.attributes.featuredImage.data.attributes.url"
        :alt="post.attributes.title"
        class="w-full h-48 object-cover transition-transform group-hover:scale-105"
      >
      <div v-else class="w-full h-48 bg-gray-200 flex items-center justify-center">
        <span class="text-gray-500">No image</span>
      </div>
    </div>
    <div class="mt-4">
      <h3 class="text-xl font-bold">{{ post.attributes.title }}</h3>
      <p class="mt-2 text-gray-600">{{ post.attributes.excerpt }}</p>
    </div>
  </NuxtLink>
</template>