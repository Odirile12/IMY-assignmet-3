'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-post.blog-post', ({ strapi }) => ({
  // Custom controller method
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query('api::blog-post.blog-post').findOne({
      where: { slug },
      populate: ['author', 'featured_image'],
    });

    if (!entity) {
      return ctx.notFound('Blog post not found');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  // Custom create method
  async create(ctx) {
    const { user } = ctx.state;
    const { body } = ctx.request;

    if (!user) {
      return ctx.unauthorized('You must be logged in to create a post');
    }

    const entity = await strapi.entityService.create('api::blog-post.blog-post', {
      data: {
        ...body,
        author: user.id,
        publishedAt: body.published ? new Date() : null,
      },
      populate: ['author'],
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
