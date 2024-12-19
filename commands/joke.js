const axios = require('axios');

module.exports = {
    name: 'dadjoke',
    description: 'Fetches a random dad joke from an external API.',
    async execute(message) {
        try {
            const response = await axios.get('https://icanhazdadjoke.com/', {
                headers: { 'Accept': 'application/json' },
            });
            message.reply(response.data.joke);
        } catch (error) {
            console.error(error);
            message.reply('I couldn’t fetch a dad joke at the moment. Try again later!');
        }
    },
};