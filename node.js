const express=equire("express");
app.use(express.json());
let users=[
    {id:1,name:"Alice",email:"alice@example.com"},
    {id:2,name:"Bob",email:"bob@example.com"}
];
app.put("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const userIndex=users.findIndex(user=>user.id===id);
    if(userIndex===-1){
        return res.status(404).json({message:"User not found"});
    }
    users[userIndex]={...users[userIndex],...req.body};
    res.json(users[userIndex]);
});