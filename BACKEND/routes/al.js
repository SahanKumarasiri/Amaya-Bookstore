const router = require("express").Router();
const AL = require("../models/al");

router.route('/add').post((req, res) => {
    const noteName = req.body.noteName;
    const author = req.body.author;
    const noteURL = req.body.noteURL;
    const noteImage = req.body.noteImage;
    const category = req.body.category;
    const downloads =Number(req.body.downloads) + 1;
    const hearts =Number(req.body.hearts) + 1;

    const newALData = {
        noteName,
        author,
        noteURL,
        noteImage,
        downloads,
        hearts,
        category
    }

    const newAL = new AL(newALData);

    newAL.save()
           .then(() => res.json('AL Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    AL.find().then((ALs)=>{
        res.json(ALs);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const downloads = Number(req.body.downloads) + 1;

    const updateNovel = {downloads};

    await AL.findByIdAndUpdate(ID , updateNovel)
    .then(()=>{
        res.status(200).send({status : "AL Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/heart/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const hearts = Number(req.body.hearts) + 1;

    const updateNovel = {hearts};

    await AL.findByIdAndUpdate(ID , updateNovel)
    .then(()=>{
        res.status(200).send({status : "AL Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let ALID = req.params.id;

    await AL.findByIdAndDelete(ALID)
    .then(()=>{
        res.status(200).send({status : "AL has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

module.exports = router;