const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guildSchema = new Schema({
    guildName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    guildTag: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Guild", guildSchema);
