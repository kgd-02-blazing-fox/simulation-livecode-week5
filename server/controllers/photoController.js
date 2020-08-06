const {Image}=require('../models/index.js')

class PhotosController{
  static getPhoto(req,res,next){
    Image.findAll(
      // {where:}
    )
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
  }

}

module.exports=PhotosController