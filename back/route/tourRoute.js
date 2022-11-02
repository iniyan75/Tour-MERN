const express= require('express')
const router=express.Router();
const tour=require("../model.js")
// const place=require("../searchdata")
const places =require('../placemodel')
const mainplaces =require('../mainmodel')

router.route("/mainplaces/:id").post( async (req,res)=>{
    const {id}=req.params
  const uname=req.body.uname
  const review=req.body.review

    const Tour =await  mainplaces.findById(id)
    const  newtour=({uname,review})
  Tour.reviews.push(newtour)
    Tour.save()

})


router.route('/places/:id').get(async(req,res)=>{
    const {id}=req.params
    try{
    const Tour = await mainplaces.findById(id)
    res.status(200).json(Tour)
    }catch(err){
        console.log(err.message)
    }
})
router.route("/places").get((req,res)=>{
    
    //  const q=req.query.q
  
    //  const keys=["name"]
    // const search=(data)=>{
    //     return data.filter((item)=>
    // keys.some((key)=>item[key].toLowerCase().includes(q)))
    //  }
    mainplaces.find()
    .then(foundreviews=>res.json(foundreviews))
    
    

    
})


module.exports=router;