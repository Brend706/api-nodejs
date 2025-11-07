'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rols', {
      id: {
        field:"id", //identificador del rol
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        field:"nombre", 
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion: {
        field:"descripcion",
        allowNull: true,
        type: Sequelize.STRING
      },
      is_active: {
        field:"is_active",
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        field:"created_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("CURRENT_TIMESTAMP") 
      },
      updatedAt: {
        field:"updated_at",
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("CURRENT_TIMESTAMP")
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rols');
  }
};