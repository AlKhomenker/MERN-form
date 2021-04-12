const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
//const postSchema = require('./models/model');


//data parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

/*app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);*/


//connect to db bu url
//'mongodb+srv://alin:Ft1gLRF8H8wh@cluster0.unayf.mongodb.net/list-db?retryWrites=true&w=majority'
mongoose.connect('mongodb+srv://alin:Ft1gLRF8H8wh@cluster0.unayf.mongodb.net/list-db', {
    useNewUrlParser:true,
    useUnifiedTopology:true});

//router
//app.use('/',require('./routes/route'))

/*app.get('/',function (req,res) {
    postSchema.find({},function (list) {

    });
    res.send('express here!');
})*/

app.use('/',require('./routes/route'));


/*app.post('/post', function(request, response) {

  const newData = {
       title: request.body.title,
       description: request.body.description
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
*/

app.listen(3001,function () {
    console.log("server started");
})