'use strict';
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {

    const Photos = JSON.parse(fs.readFileSync('./data/poto.json', 'utf-8'))
    
    Photos.map(photo => {
      photo.createdAt = new Date()
      photo.updatedAt = new Date()
      return photo
    })

    return queryInterface.bulkInsert('Photos', Photos, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
