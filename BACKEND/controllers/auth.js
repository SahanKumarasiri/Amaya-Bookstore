const Admin = require("../models/auth");
const sendEmail = require("../utils/sendEmail");
const ErrorResponse = require("../utils/errorResponse");


//when we use asynchrones function we need try catch block
exports.registerAdmin = async (req , res , next) =>{  
   
    const {email , password} = req.body; //destructure method

    try {
        const admin = await Admin.create({
            email , password //this.password filed of user.js in models
        })
        sendAdminToken(admin , 200 , res);

    } catch (error) {
       next(error);
    }
}

exports.loginAdmin = async (req , res , next) =>{
    const {email , password} = req.body;
 
    if(!email || !password){ //backend validation
        return next(new ErrorResponse("Please provide an email and password" , 400)); //throws a new error
    }                                                                           //400 Bad Request
 
    try {
     
         const admin = await Admin.findOne({email}).select("+password");
 
         if(!admin){ //true
             return next(new ErrorResponse("Invalid Credentials" , 401));
         }
 
         const isMatch = await admin.matchAdminPasswords(password); //matching the passwords from the received from request and from the db
         
         if(!isMatch){
             return next(new ErrorResponse("Invalid Credentials" , 401)); //401 for unauthorized
         }
 
         sendAdminToken(admin , 200 , res);
 
    } catch (error) {
         res.status(500).json({ // 500 internal server error
             success:false,
             error:error.message
     })       
    }
 }

 //Subscribe the channel
exports.sendEmail = async (req , res , next) =>{
    const {email} = req.body;

    try {

        const message = `
        <p>Please add subscription to this : ${email}</p>
         `
        try {
            await sendEmail({
                to : "kumarasirisahan@gmail.com",
                subject : "About Subscription",
                text : message
            })

            res.status(200).json({ success : true , data : "Email Sent"});

        } catch (error) {
            res.status(500).json({ success : false , data : "Email could not be sent"});
            return next(new ErrorResponse("Email could not be sent") , 500);

        }
    } catch (error) {
        next(error);
    }
}

const sendAdminToken = (admin , statusCode , res)=>{ //JWT get
    const token = admin.getAdminSignedToken();
    res.status(200).json({success:true , token});
}