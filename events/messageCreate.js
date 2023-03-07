require("dotenv").config();

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message) {
        if (message.author.bot == process.env.clientId) return; // Stops bot from triggering loop if done correctly
        
        
        // do your stuff
        await message.reply("fixed")
    }
};