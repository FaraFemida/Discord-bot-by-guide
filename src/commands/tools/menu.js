const {
    SlashCommandBuilder,
    StringSelectMenuBuilder,
    ActionRowBuilder,
    StringSelectMenuOptionBuilder
} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Returns a select menu.'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new StringSelectMenuOptionBuilder({
                    label: `Option #1`,
                    value: `https://youtube.com/femidayt`
                }),
                new StringSelectMenuOptionBuilder({
                    label: `Option #2`,
                    value: `https://www.youtube.com/channel/UC31s0baiSBAiM0jG4quIrqg`
                })
            );
            
        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        });
    },
};