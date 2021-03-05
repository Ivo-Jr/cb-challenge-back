import Course from '../models/Course';

class CourseController {
  async store(request, response) {
    const nameExists = await Course.findOne({
      where: { name: request.body.name },
    });

    if (nameExists) {
      return response.status(400).json({ error: 'Course Name alredy exists.' });
    }

    const { id, name, descriptiomn, category, url } = await Course.create(
      request.body
    );

    return response.json({ id, name, descriptiomn, category, url });
  }

  async update(request, response) {
    return response.json({ ok: true });
  }
}

export default new CourseController();
