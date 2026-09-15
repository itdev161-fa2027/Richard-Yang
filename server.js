import express from 'express';
import connectDatabase from './config/db.js';

//initialize express app
const app = express();

connectDatabase();

//Middleware
app.use(express.json());

app.get('/',(req,res) =>
    res.send('http get request sent to root api endpoint')
);

/**
 * @route POST api/user
 * @desc Register user
 */
app.post('/api/users',(req, res) =>{
    console.log(req,body);
    res.send(req.body);
});


app.listen(3000, () => console.log('Express server running on port 3000'));

