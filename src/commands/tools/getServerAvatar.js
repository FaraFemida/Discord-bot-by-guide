const { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName("getServerAvatar")
        .setType(ApplicationCommandType.User),
    async execute(interaction, client) {
        const targetUser = interaction.targetUser;
        const guild = interaction.guild;

        if (!guild) {
            return interaction.reply("This command can only be used in a server.");
        }

        const member = guild.members.cache.get(targetUser.id);
        if (!member) {
            return interaction.reply("User is not a member of this server.");
        }

        await interaction.reply({
            content: `${member.displayAvatarURL({ dynamic: true, size: 4096 })}`
        });
    },
};
