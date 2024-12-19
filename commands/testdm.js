module.exports = {
    name: 'testdm',
    description: 'Replies in the server instead of sending a DM.',
    async execute(message) {
        try {
            // Reply in the channel where the command was issued
            message.reply('Hello! This is a test reply in the server.');
        } catch (error) {
            console.error('Could not send message:', error);
            message.reply('Something went wrong while sending the message.');
        }
    },
};
