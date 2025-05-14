module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    
    if (!data.category) {
      data.category = 'technology';
    }
    
    if (data.title && !data.slug) {
      const { toSlug } = strapi.plugin('content-manager').service('helpers');
      data.slug = toSlug(data.title);
    }
  },

  async afterCreate(event) {
    const { result } = event;
    strapi.log.info(`New blog post created: ${result.title}`);
    
    // Example: Send notification
    try {
      await strapi.plugin('email').service('email').send({
        to: 'admin@example.com',
        subject: 'New Blog Post Created',
        text: `A new blog post "${result.title}" was created.`,
      });
    } catch (err) {
      strapi.log.error('Failed to send notification email', err);
    }
  }
};