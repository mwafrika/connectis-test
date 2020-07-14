const service = require('../Helper/messageService');
const db = require('../../../models/userModel'); 

class Message{
    static async message(req, res) {
        const { email } = req.user;
        const { message } = req.body;
        const newArt = {
          email,
          createdOn: new Date().toLocaleString(),
          message
        };
        const addmessage = await service.message(newArt);
        return res.status(201).send({
          status: 201,
          message: 'message envoye avec succes',
          data: addmessage,
        });
      }
      static async Allmessage(req, res){
        const all = await db.message.sort((a, b) => b.id - a.id);
        res.send({
          all
        })
      }
      static async singleMessage(req, res){
          const { email } = req.user; 
          const { id } = req.params;
        
          const message = db.message;
      
          const findMsg = await service.getSpecific(id, email, message);
          if (!findMsg) return res.status(404).send({ status: 'error', error: 'message non disponible' });
      
          return res.status(200).send({
            status: 'succes',
            data: findMsg,
          });
        
      }
}
module.exports = Message;

