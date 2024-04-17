const  express = require("express")

const app = express()
const port = 3060
app.use(
    express.json()
)

app.listen(port,()=>{
    console.log(`am here`)
})
