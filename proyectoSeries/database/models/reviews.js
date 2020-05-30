module.exports = (sequelize, dataTypes) => {
    let cols = {
        idreviews: {type: dataTypes.INTEGER, primaryKey:true, autoIncrement:true,},
        idseries: {type: dataTypes.INTEGER},
        id_usuarios: {type: dataTypes.INTEGER},
        createdAt: {type: dataTypes.DATE},
        updatedAt: {type: dataTypes.DATE},
        texto: {type: dataTypes.STRING},
        rating: {type: dataTypes.INTEGER},
    };
    let config = {
        tableName: "reviews",
        timestamps: false,
    };

    const reviews = sequelize.define("reviews", cols, config);
    reviews.associate = function(models){
        reviews.belongsTo(models.usuarios, {
          as: "usuarios",
         foreignKey: "id_usuarios"
         })
      }
      return reviews;
}