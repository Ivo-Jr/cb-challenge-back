import Course from '../models/Course';
import File from '../models/File';

class NameController {
  async index(request, response) {
    const nameCourse = await Course.findAll({
      where: { name: 'Advocacia' },
      attributes: ['id', 'name', 'category', 'url', 'avatar_id'],
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
