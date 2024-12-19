module.exports = {
    name: 'remind',
    description: 'Sets a reminder for the user.',
    async execute(message, args) {
        const time = parseInt(args[0], 10);
        const reminder = args.slice(1).join(' ');

        if (isNaN(time) || !reminder) {
            return message.reply('Format: !remind <time_in_seconds> <message>');
        }

        message.reply(`Okay! I'll remind you in ${time} seconds.`);
        setTimeout(() => {
            message.reply(`Reminder: ${reminder}`);
        }, time * 1000);
    },
};