module.exports = (sequelize, dataTypes) => {
    let cols = {
        id_usuarios: {type: dataTypes.INTEGER, primaryKey:true, autoIncrement:true,},
        nombre: {type: dataTypes.STRING},
        apellido: {type: dataTypes.STRING},
        email: {type: dataTypes.STRING},
        password: {type: dataTypes.STRING},
        birthday: {type: dataTypes.DATE},
    };
    let config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const usuarios = sequelize.define("usuarios", cols, config);
    return usuarios;
}