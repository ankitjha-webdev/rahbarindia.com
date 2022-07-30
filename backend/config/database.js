import { Sequelize } from "sequelize";
 
const db = new Sequelize('rahbarindia', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;