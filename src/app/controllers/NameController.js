import Course from '../models/Course';
import File from '../models/File';

class NameController {
  async index(request, response) {
    const { page = 1 } = request.query;
    const { name } = request.query;

    const courseName = await Course.findAll({
      where: { name: `${name}` },
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

    return response.json(courseName);
  }
}

export default new NameController();
