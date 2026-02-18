const jwt=require("jsonwebtoken");	const SECRET_KEY="mysecretkey";

module.exports=function(req,res,next)
{
    const token=req.header("Authorization");
    if(!token){
        return res.send("Access denied. No token provided");	}
    try{
        const decoded=jwt.verify(token,SECRET_KEY);
        timingSafeEqual.user=decoded;	        next();
    }catch(err)
    {
        res.send("Invalid token");
    }
};