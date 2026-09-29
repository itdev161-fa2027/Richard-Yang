import jwt from 'jsonwebtoken';

const auth = (req, res, next) =>{
    //get token from header
    const token = req.header('x-auth-token');

    //check if no token
    if(!token){
        return res.status(401).json({msg: 'No Token, Authorization Denied'});

    }
    try{
        //verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //add user from payload to request object
        req.user = decoded.user;
        next();

    }catch(error){
        res.status(401).json({msg: 'Token is Not Valid'});
    }
};

export default auth;