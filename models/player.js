const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    guildId: {
        type: Schema.Types.ObjectId,
        ref: 'Guild',
    },
    gameName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    guildName: {
        type: String,
        required: true,
    },
    guildRank: String,
    power: Number,
    powerRank: Number,
    armyATK: Number,
    armyHP: Number,
    ArmyDEF: Number,
    infATK: Number,
    infHP: Number,
    infDEF: Number,
    rangerATK: Number,
    rangerHP: Number,
    rangerDEF: Number,
    cavATK: Number,
    cavHP: Number,
    cavDEF: Number,
});

module.exports = mongoose.model("Player", playerSchema);
