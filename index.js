const express = require('express');
const cors = require("cors");
const moviesList = require("./movies.json");

const app = express();
app.use(cors());
app.use(express.json());

// console.log("Movies List",moviesList);

const todoList=[];

app.get("/api/movies",(req,res) => {
    const {sample} = req.body;
    res.json({
        result:moviesList
    });
})

app.get("/api/todolist",(req,res) => {
    res.json({
        result:todoList
    });
})

app.post("/api/todolist/add",(req,res) => {
    console.log("REEEEEEEEEEEEEE post ####",req.body);
    todoList.push(req.body)
    res.json({
        result:todoList
    });
})

app.put("/api/todolist/update",(req,res) => {
    const {id} = req.body;
    console.log("Update params id",req.body);
    const objectIdToUpdate = id;
    const updatedObject = req.body;
    const updateTodoList = todoList.map(obj => obj.id === objectIdToUpdate ? updatedObject : obj);
    res.json({
        result:updateTodoList
    });
})

app.delete("/api/todolist/delete",(req,res) => {
    console.log("Delete item",);
    const deleteid =  req.body.params;
    const objWithIdIndex = todoList.findIndex((obj) => obj.id === deleteid);
    todoList.splice(objWithIdIndex, 1);
    res.json({
        result:todoList
    });
})


const PORT = 3005;
app.listen(PORT,()=>console.log(`server started in Port ${PORT}`));
