module.exports = {
  dialect: 'postgres',
  port: '5433',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'cb-challenge',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
