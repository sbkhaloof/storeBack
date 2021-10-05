'use strict';

const POSTGRES_URI = process.env.POSTGRES_URI||'postgres://jfckdany:mz-7icwQv4ugAmY2lgMnYZyqrWZBhmVv@fanny.db.elephantsql.com/jfckdany';

const { Sequelize, DataTypes } = require('sequelize');

const products = require('./productsModel');
const Collection = require('./lib/collection');

let sequelize = new Sequelize(POSTGRES_URI, {});

const productsModel = products(sequelize,DataTypes);

const productsCollection = new Collection(productsModel);


module.exports = {
  db : sequelize,
  products : productsCollection,
};