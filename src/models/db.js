import Sequelize from 'sequelize';
import CONFIG from '../config';
const db = new Sequelize(CONFIG.DB.dbname, CONFIG.DB.user, CONFIG.DB.pass, {
  host: CONFIG.DB.host,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default db;