const express = require('express');
const app = express();
const listRoute=require('./lists')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port=5000;
dotenv.config();
try {
    mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }).then(()=>{
          console.log("mogo db connected");
      })
} catch (error) {
    console.log(error);
}
 
app.use(express.json());
app.use('/api/list',listRoute);

app.listen(port,() =>{
    console.log("Backend program is running");
})