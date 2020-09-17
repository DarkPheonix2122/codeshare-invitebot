const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args, tools) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  let moder = client.commands
    .filter(command => command.conf.katagori === "moderasyon")
    .map(command => {
      return `\`${prefix}${command.help.name}\``;
    })
    .join(",");
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription(
      `\`${prefix}addInvite\`, \`${prefix}addRank\`\n\`${prefix}removeInvite\`, \`${prefix}deleteRanks\`\n\`${prefix}inviteLog\`\n\`${prefix}rank\`, \`${prefix}ranks\``
    )
    .setFooter(client.user.username, client.user.avatarURL)
    .setTitle("INVITE COMMAND MENU")
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);

  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invitehelp"],
  permLevel: 0
};

exports.help = {
  name: "inviteHelp"
};
