module.exports = function (sequelize, DataTypes) {
  return sequelize.define('boards', {
    id: {
      type: DataTypes.INTEGER,
      required: true,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      required: true,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      default: null,
    }
  }, {
      tableName: 'boards',
    })
}