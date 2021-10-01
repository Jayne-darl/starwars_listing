const express = require("express")
const Movies = require("../milddleware/movies")
const Characters = require("../milddleware/characters")
const Comments = require("../controllers/comment");
const Comment = require("../controllers/comment");

const router = express.Router();
router.use(express.json());

router.get("/movies", Movies.getAllMovies);
router.get("/movies/:id", Movies.getAMovie);
router.get("/characters", Characters.getCharacters)
router.post("/comment", Comments.createComment)
router.get("/comment", Comments.getAllComment)
router.get("/comment/:id", Comment.getComment)

module.exports = router
