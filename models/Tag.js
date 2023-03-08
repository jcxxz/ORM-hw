const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Product = require('./Product.js');
const ProductTag = require('./ProductTag.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    tag_name: {type: DataTypes.STRING},

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
    tableName: 'tags',
  }
);

Tag.belongsToMany(Product, {through: ProductTag});

module.exports = Tag;