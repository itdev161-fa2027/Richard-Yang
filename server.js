import express from 'express';
import connectDatabase from './config/db.js';
import {check, validationResult} from 'express-validator'


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
app.post('/api/users',[
    //validating data with 'check'
    //      (data, error output) validation
    check('name','Name is Required').not().isEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min:6})
],(req, res) =>{
    const errors = validationResult(req);
    //check for errors
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }else{
        //Here - save user to database
        return res.send(req.body);
    }
    
    res.send(req.body);
});


app.listen(3000, () => console.log('Express server running on port 3000'));

