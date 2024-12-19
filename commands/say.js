module.exports = {
    name: 'say',
    description: 'Make the bot say something.',
    async execute(message, args) {
        const text = args.join(' ');
        if (!text) {
            return message.reply('You need to provide a message!');
        }
        message.channel.send(text);
    },
};
