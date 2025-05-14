'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/blog-posts',
      handler: 'blog-post.find',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/blog-posts/:id',
      handler: 'blog-post.findOne',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/blog-posts/slug/:slug',
      handler: 'blog-post.findBySlug',
      config: {
        auth: false,
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/blog-posts',
      handler: 'blog-post.create',
      config: {
        auth: {
          strategy: 'jwt',
        },
        middlewares: ['plugin::users-permissions.rateLimit'], 
      },
    }
  ],
};