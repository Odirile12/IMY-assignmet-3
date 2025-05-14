<script setup lang="ts">
const { getPosts } = useStrapi()
const { data: posts } = await useAsyncData('blog-posts', () => 
  getPosts({
    populate: ['featuredImage'],
    fields: ['title', 'excerpt', 'slug']
  })
)
</script>

<template>
  <div class="container mx-auto py-12">
    <h1 class="text-3xl font-bold mb-8">Blog</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <BlogPostCard 
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>