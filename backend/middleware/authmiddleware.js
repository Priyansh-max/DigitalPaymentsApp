import { secret } from "../config"

const authmiddleware = (req,res,next) => {
    const authheader = req.headers.authorization;

    if(!authheader || !authheader.startsWith('Bearer ')){
        return res.status(403).json({});
    }

    const token = authheader.split(' ')[1];

    try{
        const decode = jwt.decode(token , secret)

        req.userId = decode.userId //req me userId dalke bheja haii us route me jaha pe bhi authmiddleware use hoga

        next();

    }catch(err){
        return res.status(403).json({})
    }
}

module.exports = authmiddleware;