const { BlogPostsService } = require('../services/BlogPostsService');

class BlogPostsController {
  static async create(req, res) {
    const token = req.headers.authorization;
    const { title, content, categoryIds } = req.body;

    const post = await BlogPostsService.create(
      title,
      content,
      categoryIds,
      token,
    );

    return res.status(201).json(post);
  }

  static async getAll(_req, res) {
    const posts = await BlogPostsService.getAll();

    return res.status(200).json(posts);
  }

  static async findById(req, res) {
    try {
      const { id } = req.params;

      const post = await BlogPostsService.findById(id);

      return res.status(200).json(post);
    } catch (err) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

module.exports = { BlogPostsController };
