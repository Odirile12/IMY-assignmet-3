<script setup>
const route = useRoute()
const { getPost } = useStrapi()
const { data: post } = await useAsyncData(`post-${route.params.id}`,
  () => getPost(route.params.id))
</script>

<template>
  <div v-if="post?.data">
    <article class="prose max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">{{ post.data.attributes.title }}</h1>
      
      <div class="flex items-center gap-4 mb-8">
        <div class="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span class="text-gray-600 font-medium">
            {{ post.data.attributes.author.data.attributes.username.charAt(0).toUpperCase() }}
          </span>
        </div>
        <div>
          <p class="font-medium">{{ post.data.attributes.author.data.attributes.username }}</p>
          <p class="text-sm text-gray-500">
            {{ new Date(post.data.attributes.createdAt).toLocaleDateString() }}
          </p>
        </div>
      </div>
      
      <MarkdownRenderer :content="post.data.attributes.content" />
    </article>
  </div>
  
  <div v-else class="text-center py-12">
    <p class="text-gray-500">Post not found</p>
  </div>
</template>