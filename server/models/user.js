'use strict';

const bcrypt = require("bcryptjs")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Photo,{
        sourceKey:"id",
        foreignKey:"userId"
      })
    }
  };
  User.init({
    email: {type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:"Wrong Email Format"
        }
      }
    },
    password: {type:DataTypes.STRING,validate:{
      notEmpty:{
        args:true,
        msg:"Empty Password"
      }
    }}
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance,option)=>{
    const salt = bcrypt.genSaltSync(10)
    instance.password = bcrypt.hashSync(instance.password,salt)
  })
  return User;
};