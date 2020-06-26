import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno"; // precisamos importar todos os módulos aqui
import User from "../models/User";
import Foto from "../models/Foto";

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models)); // se existir o model ele conecta

module.exports = connection;
