'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //sirve para crear la tabla usuario en la base de datos
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        field:"id", // nombre de la columna en la base de datos
        allowNull: false, // no permite valores nulos
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        field:"username",
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        field:"email",
        allowNull: false,
        unique: true, // para que el correo sea unico en la base de datos
        type: Sequelize.STRING
      },
      password: {
        field:"password",
        allowNull: false,
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
        defaultValue: Sequelize.fn("CURRENT_TIMESTAMP") // establece la fecha y hora actual por defecto
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
    await queryInterface.dropTable('Usuarios');
  }
};