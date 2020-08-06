'use strict';
const {
  Model
} = require('sequelize');

const {hashSync} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Photo)
    }
  };
  User.init({
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail:{
          args : true,
          msg: "Must be in email format"
        }
      }
    },
    password:{
      type:DataTypes.STRING,
      unique: true
    } 
  }, {
    hooks:{
      beforeCreate(user){
        user.password = hashSync(user.password)
      }
    }
  },{
    sequelize,
    modelName: 'User',
  });
  return User;
};