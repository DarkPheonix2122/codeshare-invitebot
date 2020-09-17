const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  let js1 = await db.fetch(`js1_${message.guild.id}`);
  let js2 = await db.fetch(`js2_${message.guild.id}`);
  let js3 = await db.fetch(`js3_${message.guild.id}`);
  let js4 = await db.fetch(`js4_${message.guild.id}`);
  let js5 = await db.fetch(`js5_${message.guild.id}`);
  let js6 = await db.fetch(`js6_${message.guild.id}`);
  let js7 = await db.fetch(`js7_${message.guild.id}`);
  let js8 = await db.fetch(`js8_${message.guild.id}`);
  let js9 = await db.fetch(`js9_${message.guild.id}`);
  let js10 = await db.fetch(`js10_${message.guild.id}`);

  let js11 = await db.fetch(`js11_${message.guild.id}`);
  let js22 = await db.fetch(`js22_${message.guild.id}`);
  let js33 = await db.fetch(`js33_${message.guild.id}`);
  let js44 = await db.fetch(`js44_${message.guild.id}`);
  let js55 = await db.fetch(`js55_${message.guild.id}`);
  let js66 = await db.fetch(`js66_${message.guild.id}`);
  let js77 = await db.fetch(`js77_${message.guild.id}`);
  let js88 = await db.fetch(`js88_${message.guild.id}`);
  let js99 = await db.fetch(`js99_${message.guild.id}`);
  let js100 = await db.fetch(`js100_${message.guild.id}`);
  let total;

  if (!js1) {
    total = "Hiç Davet ile Alınan Rol Yok!";
  }
  if (js1) {
    total = `<@&${js1}>: **${js11}** Invites`;
  }
  if (js2) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites`;
  }
  if (js3) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites\n<@&${js3}>: **${js33}** Invites`;
  }
  if (js4) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites\n<@&${js3}>: **${js33}** Invites\n<@&${js4}>: **${js44}** Invites`;
  }
  if (js5) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites\n<@&${js3}>: **${js33}** Invites\n<@&${js4}>: **${js44}** Invites\n<@&${js5}>: **${js55}** Invites`;
  }
  if (js6) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites\n<@&${js3}>: **${js33}** Invites\n<@&${js4}>: **${js44}** Invites\n<@&${js5}>: **${js55}** Invites\n<@&${js6}>: **${js66}** Invites`;
  }
  if (js7) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites\n<@&${js3}>: **${js33}** Invites\n<@&${js4}>: **${js44}** Invites\n<@&${js5}>: **${js55}** Invites\n<@&${js6}>: **${js66}** Invites\n<@&${js7}>: **${js77}** Invites`;
  }
  if (js8) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites\n<@&${js3}>: **${js33}** Invites\n<@&${js4}>: **${js44}** Invites\n<@&${js5}>: **${js55}** Invites\n<@&${js6}>: **${js66}** Invites\n<@&${js7}>: **${js77}** Invites\n<@&${js8}>: **${js88}** Invites`;
  }
  if (js9) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites\n<@&${js3}>: **${js33}** Invites\n<@&${js4}>: **${js44}** Invites\n<@&${js5}>: **${js55}** Invites\n<@&${js6}>: **${js66}** Invites\n<@&${js7}>: **${js77}** Invites\n<@&${js8}>: **${js88}** Invites\n<@&${js9}>: **${js99}** Invites`;
  }
  if (js10) {
    total = `<@&${js1}>: **${js11}** Invites\n<@&${js2}>: **${js22}** Invites\n<@&${js3}>: **${js33}** Invites\n<@&${js4}>: **${js44}** Invites\n<@&${js5}>: **${js55}** Invites\n<@&${js6}>: **${js66}** Invites\n<@&${js7}>: **${js77}** Invites\n<@&${js8}>: **${js88}** Invites\n<@&${js9}>: **${js99}** Invites\n<@&${js10}>: **${js100}** Invites`;
  }
  const embed = new Discord.RichEmbed()
    .setTitle(message.guild.name + " Ranks")
    .setColor("BLUE")
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)

    .setDescription(total);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "ranks",
  description: "rütbe-liste",
  usage: "rütbe-liste"
};
