const express = require("express")
const bodyParser = require('body-parser');
const app = express();
const rootRouter = require('./routes/index')
const cors = require('cors');

app.use(cors());
//using body-parser middle ware both ways are okayy
//for version before express 4.16
app.use(bodyParser.json());
//for version after express 4.16
app.use(express.json())


app.use("/api/v1" , rootRouter)

app.listen(3000,()=>{
    console.log("Backend running")
})