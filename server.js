import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app=express();
app.use(express.json());
app.use(cors());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"manager",
    database:"abc"
})

app.get('/getEmpl/:id',(req,res)=>{
    const sql = "select name, email from student where id = ?";
    const id=req.params.id;
    db.query(sql,[id],(err,data)=>{
        if(err) 
        return res.json({Message:"Error inside Server"})
        
        return res.json(data);
    })
})

app.get('/',(req,res)=>{
    const sql="select * from student";
    db.query(sql,(err,data)=>{
        if(err) 
        return res.json({Message:"Error inside Server"})
        
        return res.json(data);
    })

})

app.post('/create',(req,res)=>{
    const sql="insert into student (`name`,`email`) values (?)";
    const values=[
        req.body.name,
        req.body.email
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) 
        return res.json("Error");
        
        return res.json(data);
    })
})

app.put('/update/:id',(req,res)=>{
    const sql="update student set `name`= ? ,`email`= ? where `id` = ?";
    const values=[
        req.body.name,
        req.body.email
    ]
    const id=req.params.id;
    db.query(sql,[...values,id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/delete/:id',(req,res)=>{
    const sql="delete from student where id = ?";
    const id=req.params.id;
    
    db.query(sql,[id],(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})


app.listen(8081,()=>{
    console.log("Listening on port 8081!!");
    console.log("THIS IS ASHWINI ....CODE FROM BACKEND TO BROWSER AT 8081 PORT");
})