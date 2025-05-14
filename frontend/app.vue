<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-blue-600">My Blog</NuxtLink>
        <nav class="flex gap-4">
          <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
          <NuxtLink to="/search" class="hover:text-blue-600">Search</NuxtLink>
        </nav>
      </div>
    </header>
    
    <main class="container mx-auto px-4 py-8">
      <NuxtPage />
    </main>
    
    <footer class="bg-white border-t mt-8 py-6">
      <div class="container mx-auto px-4 text-center text-gray-500">
        © 2025 My Blog - IMY 210 Assignment
      </div>
    </footer>
  </div>
</template>

<style>
.router-link-active {
  @apply text-blue-600 font-medium;
}
</style>