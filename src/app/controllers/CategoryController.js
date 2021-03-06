import Course from '../models/Course';
import File from '../models/File';

class CategoryController {
  async index(request, response) {
    const { page = 1 } = request.query;
    const { category } = request.query;

    const categoryCourse = await Course.findAll({
      where: { category: `${category}` },
      attributes: ['id', 'name', 'category', 'url', 'avatar_id'],
      limit: 3,
      offset: (page - 1) * 3,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path'],
        },
      ],
    });

    return response.json(categoryCourse);
  }
}

export default new CategoryController();
