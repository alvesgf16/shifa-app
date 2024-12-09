/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // role: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      // },
      // username: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      // },
      password: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // middleName: {
      //   allowNull: true,
      //   type: Sequelize.STRING,
      // },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // address: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      // },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      // phoneNumber: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      // },
      // dateOfBirth: {
      //   allowNull: false,
      //   type: Sequelize.DATEONLY,
      // },
      // daysSober: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER,
      // },
    });
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.dropTable('Users');
  },
};
