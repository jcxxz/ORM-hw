const { Model, DataTypes, INTEGER } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    product_id: {type: DataTypes.INTEGER, references: {model: Product, key: 'id',}},
    tag_id: {type: DataTypes.INTEGER, references: {model: Tag, key: 'id',}},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
    tableName: 'producttags',
  }
);

module.exports = ProductTag;
