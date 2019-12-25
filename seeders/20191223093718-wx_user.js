'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
                                       /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
       let now = new Date();
      return queryInterface.bulkInsert(
        "WxUsers",
        [
          {
            name: "John Doe",
            createdAt: now,
            updatedAt: now
          }
        ],
        {}
      );
    
                                     },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
