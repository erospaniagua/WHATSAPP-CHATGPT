// const { Configuration, OpenAIApi } = require("openai");
// require('dotenv').config();
// const mongoose = require ('mongoose');

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// async function runCompletion (messagew){
//     const completion = await openai.createChatCompletion(
//         mongoose.CONVERSATION.Schema.obj
// );
//       console.log(completion.data.choices[0].message);
//       return completion.data.choices[0].message.content;
// }
    
// module.exports={runCompletion}

const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion (messagew){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "You are a helpful assistant that responds in an pasive-agresive manner ."},
                   {"role": "user", "content": messagew}
                  ],
      });
      console.log(completion.data.choices[0].message);
      return completion.data.choices[0].message.content;
    
}
module.exports={runCompletion}


