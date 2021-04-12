const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const postSchema = require('./model/schema');


const app = express();
//data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//connect to db bu url
mongoose.connect('mongodb+srv://alin:Ft1gLRF8H8wh@cluster0.unayf.mongodb.net/list-db?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true});

//router
//app.use('/',require('./routes/route'))

app.get('/',function (req,res) {
    postSchema.find({},function (list) {

    });
    res.send('express here!');
})

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);


app.post('/post', function(request, response) {

    const newData = {
        title: request.body.title,
        description: request.body.description,
    };

    const newDataPost = new postSchema(newData);

    newDataPost.save((error) => {
        if(error){
            response.status(500).json({msg:'Sorry,internal server errors'});
        }else{
            response.status(200).json({msg:'Data has been saved'});
        }
    });

    //console.log(newDataPost);
});


app.listen(3001,function () {
    console.log("server started");
})