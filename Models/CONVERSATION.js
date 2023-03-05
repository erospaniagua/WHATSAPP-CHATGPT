const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const CONVERSATIONSchema = new Schema(
    {
        User: String,
        Content: String,
    }
)
const CONVERSATION = mongoose.model('CONVERSATION', CONVERSATIONSchema);

console.log(CONVERSATIONSchema)

module.exports = CONVERSATION;