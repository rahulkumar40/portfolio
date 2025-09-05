const connection = require('./config/dbConnection')
const cors = require('cors');
const contactRouter = require('./router/contactRoute');
const express = require('express')

const app = express();

app.use(express.json());
connection();
app.use(cors({
    origin:"https://rahulportfolio-l8wg.onrender.com",
    methods:["GET","POST", "PUT", "DELETE"],
    credentials:true
}))

app.use('/api/port',contactRouter  )


app.get('/', (req,res)=>{
    res.send(`<h1>This is my portfolio website</h1>`)
})

app.listen(3000, ()=>{
    console.log("Server is running now ", 3000)
})