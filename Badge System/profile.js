const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "profile",
    aliases: ['badge'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
     // GETTING USER 
     const user = message.author
     let badge= []

if (user.id === '709169539249864775') { // PUT THE BOT DEVELOPER ID HERE TO SHOW DEVELOPER BADGE
    badge.push("<:Developer:999718234678902835> Developer");
}
if (user.id === '709169539249864775') { // PUT THE BOT STAFF ID HERE TO SHOW STAFF BADGE
    badge.push("<:DiscordStaff:999698121225416734> Staff");
}
// YOU MAY ADD MORE LINES IF YOU WANT OR YOU MAY 
const badges = badge.join(` `) ? `${badge.join('\n')} ` : '<:early_supporter:999699760434909294> Member';
// ITS EMBED LINE 
const embed = new MessageEmbed()
.setAuthor(`${user.tag}`, user.displayAvatarURL({dynamic: true}))
    .addFields(
        { name: 'Badges', value: `${badges}`, inline: false },
    )
    .setThumbnail(user.avatarURL())
    .setTimestamp()
.setFooter(`Developed by AAYAN#5243`)
.setColor(`DARK_BUT_NOT_BLACK`)
// SENDING MESSAGE
message.channel.send({embeds: [embed]})
    }}

    // FOR HELP JOIN https:https://discord.gg/rFPkmgKWGr
    // IF YOU WANT TO MAKE THESE PROFILE SYSTEM BY ROLES IDS JOIN https://discord.gg/rFPkmgKWGr
    // BY DEVELOPER HANGOUT
