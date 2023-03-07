const mongoose = require('mongoose');

MongoDbs().catch(err => console.log(err));

async function MongoDbs() {
  await mongoose.connect('mongodb+srv://DatabaseDev:935115@cluster0.glhkzhq.mongodb.net/?retryWrites=true&w=majority')

const IaPromtSchema = new mongoose.Schema({messages:[
          {"role":{type:String}, "content":{type:String}}

  ]});

  // const IatextSchema = new mongoose.Schema({})

  const IaPromt = mongoose.model('IaPromt', IaPromtSchema);
  const System = new IaPromt({
    messages:[{"role": "system", "content": "You are a helpful assistant."}]
});
  await System.save();
console.log(System.messages[0]); // "You are a helpful assistant."

// UsertextSchema.methods.speak = function speak() {
//     const greeting = this.user
//       ? "Meow name is " + this.user
//       : "I don't have a name";
//     console.log(greeting);
//   };
  
// const newtext = new Usertext({ name: 'nuevo mensaje' }); 
// await newtext.save();
// newtext.speak(); 
};



// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://DatabaseDev:R9ezTnjU1TsAyhww@cluster0.glhkzhq.mongodb.net/?retryWrites=true&w=majority";

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('Whatapp_BOT');
//     const movies = database.collection('CONVERSATION');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = {model:"gpt-3.5-turbo"}
//     const movie = await movies.findOne(query);

//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


