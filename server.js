const express = require("express") 
const app = express();
const bodyParser = require("body-parser")
const sequelize = require("./database")
const router = require("./router/todo")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
// database
sequelize.sync({force:true}).then(()=> console.log("db is ready"));


// routes 
app.use("/api/v1",router);


app.listen(4000,()=>{
    console.log(`server listening at port 4000`)
})

