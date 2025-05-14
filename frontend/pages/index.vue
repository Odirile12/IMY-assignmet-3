<script setup>
const { getPosts } = useStrapi()
const selectedCategory = ref('all')

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (selectedCategory.value === 'all') return posts.value
  return posts.value.filter(post => post.attributes.category === selectedCategory.value)
})
const { getBlogPosts } = useStrapi()

// Correct way - pass a function that returns the promise
const { data: posts } = await useAsyncData('posts', () => getBlogPosts())

// If you need parameters:
const { data: techPosts } = await useAsyncData('tech-posts', () => 
  getBlogPosts({
    filters: { category: 'technology' },
    sort: ['createdAt:desc']
  })
)
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Latest Blog Posts</h1>
    <CategoryFilter v-model="selectedCategory" class="mb-8" />
    <div v-if="filteredPosts.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard 
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
      />
    </div>
    <div v-else class="text-center py-12">
      <p class="text-gray-500">No posts found</p>
    </div>
  </div>
</template>