const router = require("express").Router();
const bodyParser = require("body-parser");
const friends = require("./../data/friends");

router.get("/friends", (req, res) => res.json(friends.list));

router.post("/friends",  function(req, res) {
  const newFriend = req.body;
  res.send(friends.findMatch(newFriend.scores))
  friends.addToList(newFriend);
});

module.exports = router;