const db = require('../../../models/userModel')
class message{
    static message(data) {
        const newArticle = {
          id: db.message.length + 1,
          ...data,
        };
        db.message.push(newArticle);
        return newArticle;
      }
      static getSpecific(artID, userEmail, comment) {
        const specific = db.message.find(((msg) => msg.id == artID && msg.email == userEmail));
        const details = {
          ...specific,
        };
        if (!details) return false;
        return details;
      }
}
module.exports = message;
