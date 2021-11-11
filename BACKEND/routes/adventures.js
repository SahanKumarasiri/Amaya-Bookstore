const router = require("express").Router();
const Adventure = require("../models/adventures");

router.route('/add').post((req, res) => {
    const bookName = req.body.bookName;
    const author = req.body.author;
    const bookURL = req.body.bookURL;
    const bookImage = req.body.bookImage;
    const category = req.body.category;
    const downloads =Number(req.body.downloads) + 1;
    const hearts =Number(req.body.hearts) + 1;

    const newAdventureData = {
        bookName,
        author,
        bookURL,
        bookImage,
        downloads,
        hearts,
        category
    }

    const newAdventure = new Adventure(newAdventureData);

    newAdventure.save()
           .then(() => res.json('Adventure Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Adventure.find().then((Adventures)=>{
        res.json(Adventures);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const downloads = Number(req.body.downloads) + 1;

    const updateAdventure = {downloads};

    await Adventure.findByIdAndUpdate(ID , updateAdventure)
    .then(()=>{
        res.status(200).send({status : "Adventure Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/heart/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const hearts = Number(req.body.hearts) + 1;
    
    const updateAdventure = {hearts};

    await Adventure.findByIdAndUpdate(ID , updateAdventure)
    .then(()=>{
        res.status(200).send({status : "Adventure Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let AdventureID = req.params.id;

    await Adventure.findByIdAndDelete(AdventureID)
    .then(()=>{
        res.status(200).send({status : "Adventure has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});

module.exports = router;