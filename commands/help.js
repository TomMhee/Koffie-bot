module.exports = {
    name: 'help',
    description: 'Lists all available commands.',
    async execute(message, args, client) {
        const commands = client.commands.map(cmd => `- !${cmd.name}: ${cmd.description}`).join('\n');
        message.reply(`Available commands:\n${commands}`);
    },
};