var friendsArray = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });
  app.post("/api/friends", function(req, res) {
    friendsArray.push(req.body);
    res.json(true);
  });
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsArray.length = 0;
    res.json({ ok: true });
  });
};
