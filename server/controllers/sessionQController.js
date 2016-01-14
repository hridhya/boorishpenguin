var db = require('../db/index.js');

module.exports = {
  newSessionQ: function(req, res) {
    var txt = req.body.sessionQ
    var uid = req.body.userID;
    console.log(req);
    // var qid = req.body.id_question;
      db.SessionQuestion.create({
        text: txt,
        UserId: uid
      })
  },

  allSessionQ: function(req, res){
    db.findAll()
  }
}
