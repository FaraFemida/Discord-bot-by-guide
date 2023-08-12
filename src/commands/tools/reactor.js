const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reactor")
        .setDescription("Returns reactions."),
    async execute(interaction, client) {
        const message = await interaction.reply({
            content: `React here!`,
            fetchReply: true,
        });

        const emoji1 = client.emojis.cache.find((emoji) => emoji.id == "1139855620422508604");

        message.react(emoji1);
    },
};