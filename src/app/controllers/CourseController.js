import jwt from 'jsonwebtoken';
import Course from '../models/Course';
import authConfig from '../../config/auth';

class CourseController {
  async store(request, response) {
    const nameExists = await Course.findOne({
      where: { name: request.body.name },
    });

    if (nameExists) {
      return response.status(400).json({ error: 'Course Name alredy exists.' });
    }

    const { id, name, description, category, url } = await Course.create(
      request.body
    );

    return response.json({
      course: { id, name, description, category, url },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async update(request, response) {
    const { name } = request.body;

    const course = await Course.findByPk(request.courseId);

    if (name !== course.name) {
      const nameExists = await Course.findOne({
        where: { name },
      });

      if (nameExists) {
        return response
          .status(400)
          .json({ error: 'Course Name alredy exists.' });
      }
    }

    const { id, description, url } = await course.update(request.body);

    return response.json({ id, name, description, url });
  }
}

export default new CourseController();
