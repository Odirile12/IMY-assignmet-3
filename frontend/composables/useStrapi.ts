export const useStrapi = () => {
  const config = useRuntimeConfig()
  
  const getPosts = async () => {
    return await $fetch(`${config.public.strapiBaseURL}/api/blog-posts?populate=*`)
  }
  
  const getPost = async (id: string) => {
    return await $fetch(`${config.public.strapiBaseURL}/api/blog-posts/${id}?populate=*`)
  }
  
  const searchPosts = async (query: string) => {
    return await $fetch(`${config.public.strapiBaseURL}/api/blog-posts?filters[title][$contains]=${query}&populate=*`)
  }
  
  return { getPosts, getPost, searchPosts }
}