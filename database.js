const {Sequelize} = require("sequelize")


const sequelize = new Sequelize("todos-db","username","password",{
     host:'./dev.sqlite',
     dialect:'sqlite',
    
})


module.exports = sequelize ;
