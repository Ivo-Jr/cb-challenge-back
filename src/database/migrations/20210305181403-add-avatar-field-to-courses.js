module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('courses', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: (queryInterface) => queryInterface.removeColumn('courses', 'avatar_id'),
};
