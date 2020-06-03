module.exports = (sequelize, dataTypes) => {
    let cols = {
        id_usuarios: {type: dataTypes.INTEGER, primaryKey:true, autoIncrement:true,},
        usuario: {type: dataTypes.STRING},
        email: {type: dataTypes.STRING},
        password: {type: dataTypes.STRING},
        birthday: {type: dataTypes.DATE},
        genero_fav: {type: dataTypes.INTEGER},
        serie_fav: {type: dataTypes.STRING}
    };
    let config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const usuarios = sequelize.define("usuarios", cols, config);
    usuarios.associate = function(models){
        usuarios.hasMany(models.reviews, {
            as: "reviews",
            foreignKey: "id_usuarios"
        })}
      return usuarios;
}