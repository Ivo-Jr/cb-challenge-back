import Course from '../models/Course';
import File from '../models/File';

class NameController {
  async index(request, response) {
    const { page = 1 } = request.query;

    const nameCourse = await Course.findAll({
      where: { name: 'Advocacia tributária' },
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

    return response.json(nameCourse);
  }
}

export default new NameController();
