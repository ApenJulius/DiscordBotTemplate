

module.exports = {
    name: 'ready',
    once: false,
    async execute(client) {
        console.log(`${client.user.username} is ready in ${client.guilds.cache.size} servers!\n${client.guilds.cache.map(guild => ` - ${guild.name} (${guild.id})`).join('\n')}`)
    }
};