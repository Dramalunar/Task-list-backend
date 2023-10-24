import pkg from 'jsonwebtoken';
const { sign } = pkg;

function generateAcessToken(user){
    return sign(user,process.env.SECRET,{expiresIn:"20m"});
}

export default generateAcessToken;