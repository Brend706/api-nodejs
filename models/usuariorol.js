'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioRol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // relacion con la tabla Usuario 
      /*UsuarioRol.belongsTo(models.Usuario, {
        through: models.UsuarioRol, //llama a la tabla intermedia 
        foreignKey: 'usuario_id',
        onDelete: 'CASCADE', //se elimina si se elimina el usuario
        onUpdate: 'CASCADE' //se actualiza si se actualiza el usuario
      });

      // relacion con la tabla Rol
      UsuarioRol.belongsTo(models.Rol, { 
        through: models.UsuarioRol, //llama a la tabla intermedia
        foreignKey: 'rol_id',
        onDelete: 'CASCADE', //se elimina si se elimina el rol
        onUpdate: 'CASCADE' //se actualiza si se actualiza el rol
      });*/
    }
  }
  UsuarioRol.init({
    id:{
      field:"id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    usuarioId: {
      field:"usuario_id",
      allowNull: false,
      type: DataTypes.INTEGER
    },
    rolId: {
      field:"rol_id",
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      field:"created_at",
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      field:"updated_at",
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    timestamps: true,
    modelName: 'UsuarioRol',
    tableName: 'usuarios_roles'
  });
  return UsuarioRol;
};