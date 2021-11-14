const router = require("express").Router();
const Comment = require("../models/comments");

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    const date = req.body.date;
    const email = req.body.email;
    const id = req.body.id;

    const newCommentData = {
        name,
        message,
        date,
        email,
        id
    }

    const newComment = new Comment(newCommentData);

    newComment.save()
           .then(() => res.json('Comment Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Comment.find().then((Comments)=>{
        res.json(Comments);
    }).catch((err)=>{
        console.log(err);
    });

});

module.exports = router;

