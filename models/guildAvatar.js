const mongoose = require("mongoose");

const guilAvatarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const guildAvatar = mongoose.model("GuildAvatar", guilAvatarSchema);

module.exports = guildAvatar;