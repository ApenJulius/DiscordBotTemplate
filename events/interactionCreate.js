module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction) {
        if (interaction.isCommand()) executeCommand(interaction); // Stops bot from triggering loop if done correctly
        
    }
};


async function executeCommand(interaction) {
    const command = interaction.client.commands.get(interaction.commandName)
    if (command) {
        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error)
            await interaction.reply({ content: `${error}`, ephemeral: true }).catch(err => {
                interaction.followUp({ content: `${err}`, ephemeral: true })
            }) // If fails just sends it right on back
        }
    }
}