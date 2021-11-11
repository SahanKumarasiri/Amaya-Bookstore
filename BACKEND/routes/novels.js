const router = require("express").Router();
const Novel = require("../models/novels");

router.route('/add').post((req, res) => {
    const bookName = req.body.bookName;
    const author = req.body.author;
    const bookURL = req.body.bookURL;
    const bookImage = req.body.bookImage;
    const category = req.body.category;
    const downloads =Number(req.body.downloads) + 1;
    const hearts =Number(req.body.hearts) + 1;

    const newNovelData = {
        bookName,
        author,
        bookURL,
        bookImage,
        downloads,
        hearts,
        category
    }

    const newNovel = new Novel(newNovelData);

    newNovel.save()
           .then(() => res.json('Novel Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Novel.find().then((novels)=>{
        res.json(novels);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const downloads = Number(req.body.downloads) + 1;

    const updateNovel = {downloads};

    await Novel.findByIdAndUpdate(ID , updateNovel)
    .then(()=>{
        res.status(200).send({status : "Novel Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/heart/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const hearts = Number(req.body.hearts) + 1;

    const updateNovel = {hearts};

    await Novel.findByIdAndUpdate(ID , updateNovel)
    .then(()=>{
        res.status(200).send({status : "Novel Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let NovelID = req.params.id;

    await Novel.findByIdAndDelete(NovelID)
    .then(()=>{
        res.status(200).send({status : "Novel has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

module.exports = router;