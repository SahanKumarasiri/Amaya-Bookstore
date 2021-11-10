const router = require("express").Router();
const Programming = require("../models/programming");

router.route('/add').post((req, res) => {
    const bookName = req.body.bookName;
    const author = req.body.author;
    const bookURL = req.body.bookURL;
    const bookImage = req.body.bookImage;
    const downloads =req.body.downloads;

    const newProgrammingData = {
        bookName,
        author,
        bookURL,
        bookImage,
        downloads
    }

    const newProgramming = new Programming(newProgrammingData);

    newProgramming.save()
           .then(() => res.json('Programming Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Programming.find().then((Programmings)=>{
        res.json(Programmings);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let ProgrammingID = req.params.id;
    const bookName = req.body.bookName;
    const author = req.body.author;
    const bookURL = req.body.bookURL;
    const bookImage = req.body.bookImage;
    const downloads = Number(req.body.downloads);

    const updateProgramming = {bookName , author , bookURL , bookImage , downloads};

    await Programming.findByIdAndUpdate(ProgrammingID , updateProgramming)
    .then(()=>{
        res.status(200).send({status : "Programming Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let ProgrammingID = req.params.id;

    await Programming.findByIdAndDelete(ProgrammingID)
    .then(()=>{
        res.status(200).send({status : "Programming has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

module.exports = router;