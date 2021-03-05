import Sequelize from 'sequelize';
import Course from '../app/models/Course';
import databaseConfig from '../config/database';

const models = [Course];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
