const express=require("express");
const app=express();

const sequelize=require("./config/database");
const Student=require("./models/Student");

app.use(express.json());

sequelize.sync()
.then(()=>
{
    console.log("Database is connected &table created");
})
.catch(err=>{
    console.log("DB Error",err);
});

app.get("/students",async(req,res)=>
{
    const students=await Student.findAll(); 
    res.json(students);
});

app.post("/students",async(req,res)=>{
    const student=await Student.create(req.body);
    res.send(student);
});

app.put("/students/:id",async(req,res)=>
{
await Student.update(req.body,{
    where:{id:req.params.id}

});res.send("Student updated");});


app.delete("/students/:id",async(req,res)=>{
    await Student.destroy({
        where:{id:req.params.id}
    });
    res.send("Student deleted");
});
app.listen(3000,()=>{
console.log("Server running on  http://localhost:3000");
});