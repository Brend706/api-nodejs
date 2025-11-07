'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    //permite definir las asociaciones entre modelos
    static associate(models) {
      // define las relaciones con las otras tablas
      Usuario.belongsToMany(models.Rol, {
        through: models.UsuarioRol, // tabla intermedia que relaciona Usuario y Rol
        foreignKey: 'usuario_id', // clave foranea en la tabla intermedia que referencia a Usuario
        otherKey: 'rol_id', // clave foranea en la tabla intermedia que referencia a Rol
        onDelete: 'CASCADE', 
        onUpdate: 'CASCADE'
      });
    }
  }
  Usuario.init({
    //el id siempre debe estar definido en el modelo
    //se coloca manualmente en el modelo porque en la migracion se definieron propiedades adicionales
    id:{
      field:"id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      field:"username",
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      field:"email",
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      field:"password",
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      field:"is_active",
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    createdAt: {
      field:"created_at",
      type: DataTypes.DATE,
      defaultValue: new Date() //se usa new Date() porque Sequelize.fn("CURRENT_TIMESTAMP") no es compatible aqui
    },
    updatedAt: {
      field:"updated_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    timestamps: true, //se agrega para que maneje los campos createdAt y updatedAt
    modelName: 'Usuario',
    name:{ //
      singular: 'Usuario',
      plural: 'Usuarios'
    },
    tableName: 'usuarios' //nombre de la tabla en la base de datos
  });
  return Usuario;
};