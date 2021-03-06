// import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Course from '../models/Course';
import File from '../models/File';
// import authConfig from '../../config/auth';

class CourseController {
  async index(request, response) {
    const { page = 1 } = request.query;

    const findAll = await Course.findAll({
      attributes: ['id', 'name', 'category', 'url', 'avatar_id'],
      limit: 3,
      offset: (page - 1) * 3,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return response.json(findAll);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
      category: Yup.string().required(),
      url: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const nameExists = await Course.findOne({
      where: { name: request.body.name },
    });

    if (nameExists) {
      return response.status(400).json({ error: 'Course name alredy exists.' });
    }

    const { id, name, description, category, url } = await Course.create(
      request.body
    );

    return response.json({
      course: { id, name, description, category, url },
      // token: jwt.sign({ id }, authConfig.secret, {
      //   expiresIn: authConfig.expiresIn,
      // }),
    });
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
      category: Yup.string(),
      url: Yup.string(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { name } = request.body;

    // const { id } = request.params
    // const course = await Course.findByPk(request.courseId);
    const course = await Course.findByPk(request.params.id);

    if (name && name !== course.name) {
      const nameExists = await Course.findOne({
        where: { name },
      });

      if (nameExists) {
        return response
          .status(400)
          .json({ error: 'Course Name alredy exists.' });
      }
    }

    const { id, description, category, url } = await course.update(
      request.body
    );

    await course.save();

    return response.json({ id, name, description, category, url });
  }

  async delete(request, response) {
    const { id } = await Course.findByPk(request.params.id);

    await Course.destroy({
      where: { id },
      force: true,
    });

    return response.json();
  }
}

export default new CourseController();
