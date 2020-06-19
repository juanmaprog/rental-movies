// Tabla usuarios

// Exportar la función que luego se reutilizará
// Recibe la propia instancia de sequelize y qué tipo de datos se van a ingresar en la db
module.exports = (sequelize, type) => {
  return sequelize.define("user", {
    username: type.STRING,
    email: type.STRING,
    password: type.STRING(150),
  });
};
