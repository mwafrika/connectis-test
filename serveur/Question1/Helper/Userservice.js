const db = require('../../../models/userModel');
const service = require('../../../models/newUser');

class userService{
    static Signup(data){
        if(db.users.find(e => e.email === data.email)) return false;
        const newUser = new service();
    
        newUser.id = data.id;
        newUser.nom = data.nom;
        newUser.post_nom
        newUser.email = data.email;
        newUser.password = data.password;
    
        const newData = {
         id: db.users.length + 1,
         nom: newUser.nom,
         post_nom: newUser.post_nom,
         email: newUser.email,
         password: newUser.password
        }
        db.users.push(newData);
        const nouvau = {
            id: newData.id,
            nom: newData.nom,
            post_nom: newData.post_nom,
            email: newData.email,
            password: newData.password
        }
        return nouvau;
    }
    static Signin(userData) {
        const allData = db.users;
        const findUser = allData.find(((user) => user.email === userData.email));
        if (!findUser) return false;
        const userExist = {
          id: findUser.id,
          nom: findUser.nom,
          post_nom: findUser.post_nom,
          email: findUser.email,
        };
        return userExist;
      }
}

module.exports = userService;