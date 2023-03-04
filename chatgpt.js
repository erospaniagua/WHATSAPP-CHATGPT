const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion (message){
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{"role": "system", "content": "You are a helpful assistant that makes a lot of jokes."},
                   {"role": "user", "content": message}
                  ],
      });
      console.log(completion.data.choices[0].message);
      return completion.data.choices[0].message.content;
    
}
module.exports={runCompletion}

// async function runCompletion (message) {

//     const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: message,
//         max_tokens: 400,
//     });
//     return completion.data.choices[0].text;
// }

// module.exports={runCompletion}