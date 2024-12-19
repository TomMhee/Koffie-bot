module.exports = {
    name: 'role',
    description: 'Manage roles for the user.',
    async execute(message, args) {
        const action = args[0];
        const roleName = args.slice(1).join(' ');

        if (!['add', 'remove'].includes(action)) {
            return message.reply('Specify whether to add or remove the role.');
        }

        if (!roleName) {
            return message.reply('Provide a role name.');
        }

        const role = message.guild.roles.cache.find(r => r.name === roleName);
        if (!role) {
            return message.reply(`Role "${roleName}" not found!`);
        }

        if (action === 'add') {
            message.member.roles.add(role).then(() => {
                message.reply(`You now have the "${roleName}" role!`);
            }).catch(err => {
                console.error(err);
                message.reply('I couldn’t assign that role.');
            });
        } else if (action === 'remove') {
            message.member.roles.remove(role).then(() => {
                message.reply(`The "${roleName}" role has been removed.`);
            }).catch(err => {
                console.error(err);
                message.reply('I couldn’t remove that role.');
            });
        }
    },
};