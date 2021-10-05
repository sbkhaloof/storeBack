'use strict';


const products = (sequelize , DataTypes) => sequelize.define('products' ,{
    category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inventoryCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imeage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
} );

module.exports= products;