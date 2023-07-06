const express=require('express');
const eobj=express();
const studentRoute=express.Router();
//student model
let Student=require('../Models/Student');
//Add student(create api)
studentRoute.route('/create').post((req,res,next)=>
{
    Student.create(req.body,(error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })

});
//GEt all Students data
studentRoute.route('/').get((req,res)=>
{
    Student.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })

});
//get single student information by id
studentRoute.route('read/:id').get((req,res)=>{
    Student.findById(req.params.id,(error,data)=>{
        if(error){
            return next (error)
        }else{
            res.json(data)
        }
    })
})

//Update Student data information
studentRoute.route('/update/:id').put((req,res,next)=>{
    Student.findByIdAndUpdate(req.params.id,{$set:req,body},(error,data)=>{
        if(error){
            return next (error);
            console.log(error)
        }else{
            res.json(data);
            console.log("Data updated Successfully")
        }
    })
})
 
//Delete student 
studentRoute.route('/delete/:id').delete((req, res, next) => {
    Student.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  module.exports = studentRoute;


