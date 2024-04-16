const  express = require("express")

const app = express()
const route = require("../src/router/router")
const  notFound = require("../src/middleware/NotFound")

app.use(
    express.json()
)
app.use("/",route)
app.use(notFound)

app.listen(()=>{
    console.log("am here")})
