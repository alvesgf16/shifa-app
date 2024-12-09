module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // role: DataTypes.STRING,
    // username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    // middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    // address: DataTypes.STRING,
    email: DataTypes.STRING,
    // phoneNumber: DataTypes.STRING,
    // dateOfBirth: DataTypes.DATEONLY,
    // daysSober: DataTypes.INTEGER,
  }, { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.JournalEntry, {
      foreignKey: 'authorId',
      as: 'journalEntries',
    });
  };

  return User;
};
