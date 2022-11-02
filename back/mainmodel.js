


const mongoose=require('mongoose')

const mainplaceschema={
    pname:String,
    image:String,
    location:String,
    places:[
        {
            lname:String,
            limage:String,
            special:String,
            
        }
    ],
    reviews:[
        {
            uname:String,
            review:String
        }
    ],
    hotels:[
        {
            hname:String,
            himage:String,
            hprice:String
        }
    ]
  

}

const mainplaces=mongoose.model("mainplaces",mainplaceschema);

module.exports= mainplaces;