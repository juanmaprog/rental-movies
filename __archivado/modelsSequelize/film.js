// Tabla películas

// Exportar la función que luego se reutilizará
// Recibe la propia instancia de sequelize y qué tipo de datos se van a ingresar en la db
module.exports = (sequelize, type) => {
  return sequelize.define("film", {
    title: type.STRING,
    description: type.STRING,
    score: type.INTEGER,
    director: type.STRING,
  });
};
