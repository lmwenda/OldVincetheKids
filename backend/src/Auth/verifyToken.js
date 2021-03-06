import jwt from 'json-web-token';

export default function verifyToken (req, res, next){

    const token = req.header('auth-token');
    if(!token) return res.status(400).send("Invalid Access Token.");

    try{
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verified;
        next();
    } 

    catch(err){
        res.status(400).send("Invalid Token:", err);
    }
}