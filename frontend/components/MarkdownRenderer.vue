<script setup>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt()

defineProps({
  content: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div v-html="md.render(content)" class="prose"></div>
</template>