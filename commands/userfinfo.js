module.exports = {
    name: 'userinfo',
    description: 'Provides information about a mentioned user, or defaults to your information if no one is mentioned.',
    async execute(message) {
        // Check if a user is mentioned
        const mentionedUser = message.mentions.users.first();
        const user = mentionedUser || message.author;

        // Respond with the user information
        message.reply(`Username: ${user.username}\nID: ${user.id}\nDiscriminator: #${user.discriminator}\nAvatar URL: ${user.displayAvatarURL({ dynamic: true })}`);
    },
};
