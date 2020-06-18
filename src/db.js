const Sequelize = require("sequelize");

// Cargar films y generar la tabla en la db sin tener que entrar en la propia db.
// Traer el modelo
const FilmModel = require("./models/film");
const UserModel = require("./models/user");

// Conectar con la db mysql
const dbHostName = "sql2.freesqldatabase.com";
const dbName = "sql2348142";
const dbUserName = "sql2348142";
const dbPwd = "pR5!pN3!";
const dbPort = 3306;
const dbDialect = "mysql";

const sequelize = new Sequelize(dbName, dbUserName, dbPwd, {
  //Objeto con las diferentes opciones
  host: dbHostName,
  dialect: dbDialect,
});

// Crear, lanzar la función generada
// 1 argumento: el objeto sequelize que hemos creado
// 2 argumento: la propia libreria definida más arriba.
// Con esto ya tenemos el modelo film, el cual podemos sincronizar con la db.
const Film = FilmModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);

// Sincronizar.
// Devuelve una promesa
sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas.");
});

// Exportar para utilizarlo fuera
module.exports = {
  Film,
  User,
};
