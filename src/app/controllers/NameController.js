import Course from '../models/Course';

class NameController {
  async index(request, response) {
    const nameCourse = await Course.findAll({
      where: { name: 'Advocacia' },
      attributes: ['id', 'name', 'category', 'url', 'avatar_id'],
    });

    return response.json(nameCourse);
  }
}

export default new NameController();
