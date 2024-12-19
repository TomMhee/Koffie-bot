module.exports = {
    name: 'serverinfo',
    description: 'Provides information about the server.',
    async execute(message) {
        message.reply(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};