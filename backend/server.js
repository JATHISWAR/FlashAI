import express from 'express';
import mongoose from 'mongoose';
import Cards from './models/flashcards.js';
import Cors from 'cors';

//App Config

const app = express();
const port = process.env.PORT||8001;
const connection_url = `mongodb+srv://admin:Ja*28022000@cluster0.yqr50.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


//Middlewares
app.use(express.json());
app.use(Cors());

//DB Conifg

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,

})


//API Endpoints
app.get('/', (req,res)=> res.status(200).send('Hello Guys!'));
app.post('/flashai/cards',(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })

})

app.get('/flashai/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

//Listener
app.listen(port,()=>console.log(`listening on local host: ${port}`));