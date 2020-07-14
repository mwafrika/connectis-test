const helper = require('../Helper/Userservice');
const jwt = require('jsonwebtoken');

class User{
    static Signup(req, res){
      const user = req.body;
      const signup =  helper.Signup(user);
      console.log(signup);
      if(!signup){
        res.status(400).send({error: 'cet utilisateur exist dja'});
      } 
       return jwt.sign(signup, process.env.UserToken, (err, token) =>{
           console.log(token);
           res.send({
               token,
               signup
        });
       });
    }
    static SigninUser(req, res) {
        const user = req.body;
        const myUsers = helper.Signin(user);
        if (!myUsers) {
          res.status(401).send({
            status: '401',
            error: 'credentials identifiant non valide!!',
          });
        }
        return jwt.sign(myUsers, process.
          env.UserToken, (err, token) => {
          res.status(200).send({
            status: 200,
            message: 'connectez avec success',
            token,
            data: myUsers,
          });
        });
      }
      static users(req, res){

      }
      static logout(req, res){
        if(req.user){
            req.user = null;
        }
        console.log('looged out')
      }
}
module.exports = User;