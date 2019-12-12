'use strict';
const moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    dueDate: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('dueDate')).format('YYYY-MM-DD')
      }
    },
    done: DataTypes.BOOLEAN
  }, {});
  Todo.associate = function (models) {
    // associations can be defined here
    Todo.belongsTo(models.User)
  };
  return Todo;
};