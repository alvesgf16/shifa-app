module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    password: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
  }, { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.JournalEntry, {
      foreignKey: 'authorId',
      as: 'journalEntries',
    });
  };

  return User;
};
