<attachment id="file:frontend/layouts/default.vue">
<template>
  <div>
    <header>
      <h1>My Blog</h1>
      <nav>
        <nuxt-link to="/">Home</nuxt-link>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <footer>
      <p>&copy; 2023 My Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
header {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
}

nav {
  margin: 1rem 0;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #f8f9fa;
}
</style>
</attachment>