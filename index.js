const discord = require('discord.js');
const ReactionRole = require('./ReactionRole');
const client= new discord.Client();
const config= require('./config.json')
const { execute, collector, member, embed,button, data,SlashCommandBuilder, PermissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder }= require("./ROLES/ReactionRole.js")


client.on('ready', () =>{
    console.log('Im here')
})

client.login(config.TOKEN)

execute();


