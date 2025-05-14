<script setup>
const searchQuery = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const { searchPosts } = useStrapi()

const handleSearch = async () => {
  if (!searchQuery.value.trim()) return
  
  isLoading.value = true
  try {
    const { data } = await searchPosts(searchQuery.value)
    searchResults.value = data
  } catch (error) {
    console.error('Search failed:', error)
    searchResults.value = []
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Search Blog Posts</h1>
    
    <SearchBar 
      v-model="searchQuery"
      @search="handleSearch"
      class="mb-8"
    />
    
    <div v-if="isLoading" class="text-center py-8">
      <p>Searching...</p>
    </div>
    
    <div v-else>
      <div v-if="searchResults.length" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard 
          v-for="post in searchResults"
          :key="post.id"
          :post="post"
        />
      </div>
      
      <div v-else-if="searchQuery" class="text-center py-12">
        <p class="text-gray-500">No results found for "{{ searchQuery }}"</p>
      </div>
      
      <div v-else class="text-center py-12">
        <p class="text-gray-500">Enter a search term to find posts</p>
      </div>
    </div>
  </div>
</template>