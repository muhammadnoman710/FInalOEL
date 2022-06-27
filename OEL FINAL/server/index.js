const express = require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const app= express()

const EmployeeModel= require("./models/Employee");

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017',{
    useNewURLParser:true,
});

app.post("/insert",async (req, res)=> {
    const employeeName=req.body.employeeName;
    const designation=req.body.designation;
    const age=req.body.age;
    const salary=req.body.salary;
    const contact=req.body.contact;

    const employee= new EmployeeModel({ employeeName:employeeName, designation:designation, age:age, salary:salary, contact:contact});

    try{
        await employee.save();
        res.send("inserted data");
    }catch(err){
        console.log(err);
    }
})


app.get("/read",async (req, res)=> {
    EmployeeModel.find({},(err,result)=>{
        if(err){
            res.send(err);
         }
         res.send(result);
        
    })
})


// app.put("/update",async (req, res)=> {
//     const newFoodName=req.body.newFoodName;
//     const id=req.body.id;

//     try{
//         await FoodModel.findById(id,(err,updatedFood)=>{
//             updatedFood.foodName= newFoodName;
//             updatedFood.save();
//             res.send("update");
//         })
//     }catch(err){
//         console.log(err);
//     }
// })



// app.delete("/delete/:id",async (req, res)=> {
//    const id= req.params.id;
//    await FoodModel.findByIdAndRemove(id).exec();
//    res.send("deleted");
// })


app.listen(3001, () => {
    console.log("Server running");
})