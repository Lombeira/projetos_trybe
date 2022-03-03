const jwt = require('jsonwebtoken');
const { AppError } = require('../error/AppError');
const { BlogPosts } = require('../models/BlogPosts');

class BlogPostsService {
  static async create(title, content, categoryIds, token) {
    const { identifier } = jwt.verify(token, process.env.JWT_SECRET);

    const post = await BlogPosts.create({
      userId: identifier,
      title,
      content,
      published: new Date(),
      updated: new Date(),
    });
    await post.setCategories(categoryIds);

    return post;
  }

  static async getAll() {
    const posts = await BlogPosts.findAll({
      include: [{ association: 'user' }, { association: 'categories' }],
    });

    return posts;
  }

  static async findById(id) {
    const post = await BlogPosts.findByPk(id, {
      include: [{ association: 'user' }, { association: 'categories' }],
    });

    if (!post) throw new AppError(404, 'Post does not exist');

    return post;
  }
}

module.exports = { BlogPostsService };
