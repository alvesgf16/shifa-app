module.exports = (sequelize, DataTypes) => {
  const JournalEntry = sequelize.define('JournalEntry', {
    mood: DataTypes.STRING,
    // title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
  }, { tableName: 'JournalEntries', timestamps: true, updatedAt: false });

  JournalEntry.associate = (models) => {
    JournalEntry.belongsTo(models.User, {
      foreignKey: 'authorId',
      as: 'journalEntries',
    });
  };

  return JournalEntry;
};
