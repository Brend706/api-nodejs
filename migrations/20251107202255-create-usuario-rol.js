'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UsuarioRols', {
      id: {
        field:"id", 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        field:"usuario_id",
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rol_id: {
        field:"rol_id",
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('UsuarioRols');
  }
};