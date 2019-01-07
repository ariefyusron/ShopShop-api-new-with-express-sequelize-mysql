'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    total: DataTypes.INTEGER
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.hasMany(models.Order, {
      foreignKey: 'transaction_id'
    })
  };
  return Transaction;
};