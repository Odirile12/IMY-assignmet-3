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
// composables/useStrapi.ts


// ===================================
// export const useStrapi = () => {
//   const config = useRuntimeConfig()
//   const strapiBaseUrl = config.public.strapiBaseURL || 'http://localhost:1337'

//   // Define types directly in the composable
//   type ImageFormat = {
//     url: string
//     width: number
//     height: number
//   }

//   type ImageData = {
//     data?: {
//       id: number
//       attributes: {
//         url: string
//         alternativeText?: string
//         formats?: {
//           thumbnail?: ImageFormat
//           small?: ImageFormat
//           medium?: ImageFormat
//           large?: ImageFormat
//         }
//       }
//     }
//   }

//   type AuthorData = {
//     data?: {
//       id: number
//       attributes: {
//         username: string
//         email?: string
//         avatar?: ImageData
//       }
//     }
//   }

//   type BlogPostAttributes = {
//     title: string
//     slug: string
//     content: string
//     excerpt?: string
//     category: 'technology' | 'design' | 'business' | 'science'
//     createdAt: string
//     updatedAt: string
//     publishedAt?: string
//     featured?: boolean
//     featuredImage?: ImageData
//     author?: AuthorData
//   }

//   type BlogPost = {
//     id: number
//     attributes: BlogPostAttributes
//   }

//   type StrapiResponse<T> = {
//     data: T
//     meta?: {
//       pagination?: {
//         page: number
//         pageSize: number
//         pageCount: number
//         total: number
//       }
//     }
//   }

//   /**
//    * Get all blog posts
//    */
//   const getBlogPosts = async (params?: {
//     filters?: Record<string, any>
//     sort?: string | string[]
//     populate?: string | object
//     fields?: string[]
//     pagination?: {
//       page?: number
//       pageSize?: number
//     }
//   }): Promise<BlogPost[]> => {
//     try {
//       const defaultParams = {
//         populate: {
//           featuredImage: {
//             fields: ['url', 'alternativeText', 'formats']
//           },
//           author: {
//             fields: ['username']
//           }
//         },
//         fields: ['title', 'slug', 'excerpt', 'category', 'createdAt'],
//         sort: ['createdAt:desc']
//       }

//       const response = await $fetch<StrapiResponse<BlogPost[]>>(
//         `${strapiBaseUrl}/api/blog-posts`,
//         {
//           params: {
//             ...defaultParams,
//             ...params
//           }
//         }
//       )
//       return response.data
//     } catch (error) {
//       console.error('Error fetching blog posts:', error)
//       return []
//     }
//   }

//   /**
//    * Get a single blog post by slug
//    */
//   const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
//     try {
//       const response = await $fetch<StrapiResponse<BlogPost[]>>(
//         `${strapiBaseUrl}/api/blog-posts`,
//         {
//           params: {
//             filters: { slug: { $eq: slug } },
//             populate: {
//               featuredImage: {
//                 populate: '*'
//               },
//               author: {
//                 populate: '*'
//               }
//             }
//           }
//         }
//       )
//       return response.data[0] || null
//     } catch (error) {
//       console.error(`Error fetching blog post with slug ${slug}:`, error)
//       return null
//     }
//   }

//   /**
//    * Create a new blog post
//    */
//   const createBlogPost = async (postData: {
//     title: string
//     content: string
//     excerpt?: string
//     category: string
//     featuredImage?: number // ID of uploaded image
//   }, token: string): Promise<BlogPost | null> => {
//     try {
//       const response = await $fetch<StrapiResponse<BlogPost>>(
//         `${strapiBaseUrl}/api/blog-posts`,
//         {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             data: postData
//           })
//         }
//       )
//       return response.data
//     } catch (error) {
//       console.error('Error creating blog post:', error)
//       return null
//     }
//   }

//   /**
//    * Upload image to Strapi
//    */
//   const uploadImage = async (file: File, token: string): Promise<number | null> => {
//     try {
//       const formData = new FormData()
//       formData.append('files', file)

//       const response = await $fetch<StrapiResponse<{ id: number }[]>>(
//         `${strapiBaseUrl}/api/upload`,
//         {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${token}`
//           },
//           body: formData
//         }
//       )
//       return response.data[0]?.id || null
//     } catch (error) {
//       console.error('Error uploading image:', error)
//       return null
//     }
//   }

//   return {
//     // Blog post methods
//     getBlogPosts,
//     getBlogPostBySlug,
//     createBlogPost,
//     uploadImage
//   }
// }


