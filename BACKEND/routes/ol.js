const router = require("express").Router();
const OL = require("../models/ol");

router.route('/add').post((req, res) => {
    const noteName = req.body.noteName;
    const author = req.body.author;
    const noteURL = req.body.noteURL;
    const noteImage = req.body.noteImage;
    const downloads = req.body.downloads;

    const newOLData = {
        noteName,
        author,
        noteURL,
        noteImage,
        downloads
    }

    const newOL = new OL(newOLData);

    newOL.save()
           .then(() => res.json('OL Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    OL.find().then((OLs)=>{
        res.json(OLs);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let OLID = req.params.id;
    const noteName = req.body.noteName;
    const author = req.body.author;
    const noteURL = req.body.noteURL;
    const noteImage = req.body.noteImage;
    const downloads = Number(req.body.downloads);

    const updateOL = {noteName , author , noteURL , noteImage , downloads};

    await OL.findByIdAndUpdate(OLID , updateOL)
    .then(()=>{
        res.status(200).send({status : "OL Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let OLID = req.params.id;

    await OL.findByIdAndDelete(OLID)
    .then(()=>{
        res.status(200).send({status : "OL has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

module.exports = router;