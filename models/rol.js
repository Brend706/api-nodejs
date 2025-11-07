'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //asociaciones entre modelos
    static associate(models) {
      //relacion con la tabla de usuarios a traves de la tabla intermedia UsuarioRol
      Rol.belongsToMany(models.Usuario, {
        through: models.UsuarioRol, //llama a la tabla intermedia
        foreignKey: 'rol_id', // clave foranea 1
        otherKey: 'usuario_id', // clave foranea 2
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'
      });
    }
  }
  Rol.init({
    //agregar el ID de la tabla rol
    //tratar a todos los atributos como objetos para definir propiedades adicionales
    id:{
      field:"id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nombre: {
      field:"nombre",
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      field:"descripcion",
      type: DataTypes.STRING,
      allowNull: true
    },
    isAactive: {
      field:"is_active",
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      field:"created_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date() 
    },
    updatedAt: {
      field:"updated_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    timestamps: true, //se agrega para que maneje las fechas automaticamente de createdAt y updatedAt
    modelName: 'Rol',
    name:{
      singular: 'Rol',
      plural: 'Roles'
    },
    tableName: 'roles' //nombre de la tabla en la base de datos
  });
  return Rol;
};