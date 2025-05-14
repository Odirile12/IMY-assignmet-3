<script setup lang="ts">
// Import required composables
import { useRoute } from 'vue-router'
import { useAsyncData } from '#app'
import { useStrapi } from '../../composables/useStrapi'

// Initialize composables
const route = useRoute()
const { getBlogPostBySlug } = useStrapi()

// Fetch blog post data
const { data: post, pending, error } = await useAsyncData(
  `blog-post-${route.params.slug}`,
  () => getBlogPostBySlug(route.params.slug as string)
)
</script>

<template>
  <div v-if="pending" class="text-center py-8">
    <p>Loading post...</p>
  </div>

  <div v-else-if="error" class="text-center py-8 text-red-500">
    <p>Error loading post: {{ error.message }}</p>
  </div>

  <div v-else-if="post" class="container mx-auto px-4 py-8 max-w-3xl">
    <article class="prose max-w-none">
      <h1 class="text-4xl font-bold mb-4">{{ post.attributes.title }}</h1>
      
      <div class="flex items-center gap-4 mb-8">
        <div v-if="post.attributes.author?.data" class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-2">
            <span class="text-gray-600 font-medium">
              {{ post.attributes.author.data.attributes.username.charAt(0).toUpperCase() }}
            </span>
          </div>
          <span>{{ post.attributes.author.data.attributes.username }}</span>
        </div>
        <span class="text-gray-500">
          {{ new Date(post.attributes.createdAt).toLocaleDateString() }}
        </span>
      </div>

      <div v-if="post.attributes.featuredImage?.data" class="mb-8">
        <img 
          :src="post.attributes.featuredImage.data.attributes.url" 
          :alt="post.attributes.featuredImage.data.attributes.alternativeText || post.attributes.title"
          class="w-full rounded-lg"
        >
      </div>

      <div class="prose max-w-none" v-html="post.attributes.content" />
    </article>
  </div>

  <div v-else class="text-center py-12">
    <p class="text-gray-500">Post not found</p>
    <NuxtLink to="/blog" class="text-blue-600 hover:underline mt-4 inline-block">
      Back to blog
    </NuxtLink>
  </div>
</template>