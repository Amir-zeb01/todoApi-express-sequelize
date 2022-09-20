const dbConfig = require('../config/db.config');
const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect:dbConfig.DIALECT,

    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

sequelize.authenticate().then(()=>{
    console.log("🚀 ~ database connected")
}).catch(err => {
    console.error("🚀 ~ database : ", err)
})

const db={};
db.Sequelize=Sequelize;
db.sequelize=sequelize;

// destructing error
// db.models={};
// db.Todos=require('./todos.model')(sequelize,DataTypes);
db.Todos=require('./todos.model')(sequelize,DataTypes);

db.sequelize.sync({force:false}).then(()=>{
    console.log('re-sync database successfully');
})

module.exports=db;