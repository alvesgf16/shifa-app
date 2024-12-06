/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      middleName: {
        allowNull: true,
        type: Sequelize.STRING,
        field: 'middle_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'phone_number',
      },
      dateOfBirth: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        field: 'date_of_birth',
      },
      daysSober: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'days_sober',
      },
    });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('users');
  },
};
