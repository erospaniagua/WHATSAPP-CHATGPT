const {mongoose} = require('mongoose');
require('dotenv').config()
MongoDbs().catch(err => console.log(err));
const PhoneAndText  = require("../app")


async function MongoDbs() {
  const PhoneAndTexts = PhoneAndText;
  
 
  await mongoose.connect('mongodb+srv://DatabaseDev:935115@cluster0.glhkzhq.mongodb.net/?retryWrites=true&w=majority')

const IaPromtSchema = new mongoose.Schema({
  User: {"Phonenumber":{type:String}},
  messages:[
          {"role":{type:String}, "content":{type:String}}

  ]});
  const IaPromt = mongoose.model('IaPromt', IaPromtSchema);
  const System = new IaPromt({
    User: {"Phonenumber": PhoneAndText.Phone},
    messages:[{"role": "system", "content": "You are a helpful assistant."},
              {"role": "user", "content": PhoneAndText.Messagew},
              

  ]

});


// console.log(System.User);
  await System.save();
};



