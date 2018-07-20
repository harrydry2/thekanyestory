const express = require("express");
const router = express.Router();
const passport = require("passport");
const mainController = require("../controllers/mainController");
const userController = require("../controllers/userController");
const twitterController = require("../controllers/twitterController");

router.get("/", mainController.home);
router.post("/", mainController.addIdea);

// auth with twitter
router.get(
  "/auth/twitter",
  passport.authenticate("twitter", {
    scope: ["profile"]
  })
);

// callback route for twitter to redirect to
router.get(
  "/auth/twitter/redirect",
  passport.authenticate("twitter"),
  (req, res) => res.redirect("/")
);

// logout
router.get("/logout", userController.logout);

// specificStore
router.get("/ideas/:id", mainController.showIdea);

// Post Upvote / Comment Upvote
router.post("/api/ideas/:id/heart", mainController.upvoteStore);
router.post("/api/specificIdea/:id/vote", mainController.upvoteComment);

// Post Comment
router.post("/comment/:id", mainController.postComment);

router.get("/tweet", twitterController.twitter)

module.exports = router;
