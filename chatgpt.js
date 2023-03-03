const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function runCompletion (message) {
    // const { from, body } = message;
    // const queue=[]
    // const completion = await openai.sendMessage(body,{
    //     conversationId: !queue.length 
    //     ? undefined 
    //     :queue[queue.length - 1].conversationId,
    //     perentMessageId: !queue.length
    //     ? undefined 
    //     :queue[queue.length - 1].id,
    // });

    // queue.push(completion);

    //     const parseMesage = {
    //         ...completion,
    //         awnser: completion, text,
    //     };
    //     sendFlowSimple([parseMesage], from)
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 200,
    });
    return completion.data.choices[0].text;
}

module.exports={runCompletion}