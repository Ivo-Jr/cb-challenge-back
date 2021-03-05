import Course from '../models/Course';

class CategoryController {
  async index(request, response) {
    const nameCourse = await Course.findAll({
      where: { category: 'Cálculos' },
      attributes: ['id', 'name', 'category', 'url', 'avatar_id'],
    });

    return response.json(nameCourse);
  }
}

export default new CategoryController();
