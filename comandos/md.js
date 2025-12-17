
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('md')
    .setDescription('Envía un mensaje directo a todos los miembros del servidor')
    .addStringOption(option =>
      option.setName('mensaje')
        .setDescription('El mensaje a enviar')
        .setRequired(true)
    ),
async execute(interaction) {
  
  const memberRoles = interaction.member.roles.cache;


  const adminRoles = memberRoles.filter(role => role.permissions.has('Administrator'));

  if (adminRoles.size === 0) {
    return interaction.reply({ content: 'No tienes permisos de administrador para usar este comando.', ephemeral: true });
  }

  const mensaje = interaction.options.getString('mensaje');
  const members = await interaction.guild.members.fetch();

  let enviados = 0;
  let fallidos = 0;

  await interaction.reply({ content: 'Enviando mensajes...', ephemeral: true });

  for (const member of members.values()) {
    if (member.user.bot) continue;

    try {
      await member.send(mensaje);
      enviados++;
      await new Promise(resolve => setTimeout(resolve, 1000)); // espera 1s para evitar límites
    } catch (err) {
      fallidos++;
    }
  }

  await interaction.followUp({
    content: `Mensaje enviado a ${enviados} usuarios.\n Falló en ${fallidos} usuarios.`,
    ephemeral: true
  });
  }
