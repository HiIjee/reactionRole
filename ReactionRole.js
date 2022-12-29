const { SlashCommandBuilder } =require('@discordjs/Builders');
const { PermissionsBitField, ButtonStyle, ActionRowBuilder, ButtonBuilder, EmbedBuilder }=require('discord.js');



module.exports={
    data: new SlashCommandBuilder()
    .setName('reactrole')
    .setDescription('This is the reaction role message command')
    .addRoleOption(Option => Option.setName('role1').setDescription('This is the first role you want to set up').setRequired(true))
    .addRoleOption(Option => Option.setName('role2').setDescription('This is the second role you want to set up').setRequired(true))
    .addRoleOption(Option => Option.setName('role3').setDescription('This is the Thierd role you want to set up').setRequired(true))
    .addRoleOption(Option => Option.setName('role4').setDescription('This is the Four role you want to set up').setRequired(true))
    .addRoleOption(Option => Option.setName('role5').setDescription('This is the Five role you want to set up').setRequired(true)), //#اقصى عدد هو 5
    async execute(interaction , client) {
        const role1 = interaction.options.getRole(`role1`)
        const role2 = interaction.options.getRole(`role2`)
        const role3 = interaction.options.getRole(`role3`)
        const role4 = interaction.options.getRole(`role4`)
        const role5 = interaction.options.getRole(`role5`)
        if(interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return await interaction.reply({ content: "You must have admin perms to create a reaction role message", ephemeral: true});
        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button1')
            .setLabel(`${role1.name}`)
            .setStyle(ButtonStyle.Secondary),//Primary, a blurple button; Secondary, a grey button; Success, a green button; Danger, a red button; Link, a button that navigates to a URL.
        )
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button2')
            .setLabel(`${role2.name}`)
            .setStyle(ButtonStyle.Secondary),
        )    
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button3')
            .setLabel(`${role3.name}`)
            .setStyle(ButtonStyle.Secondary),
        )
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button4')
            .setLabel(`${role4.name}`)
            .setStyle(ButtonStyle.Secondary),
        )
        .addComponents(
            new ButtonBuilder()
            .setCustomId('button4')
            .setLabel(`${role4.name}`)
            .setStyle(ButtonStyle.Secondary),
        )
        const embed = new EmbedBuilder()
        .setColor("DarkPurple") 
        .setTitle(` Reaction Roles `)
        .setDescription(` (${role5}) (${role4}) (${role3}) (${role2}) (${role1})  اضفط على الرياكشن لتحصل على الرتبة `)
        await  interaction.reply({embeds: [embed], components: [button] });
        const collector = await interaction.channel.createMessageComponentcollector();
        collector.on('collect', async (i) => {
            const member= i.member;
            if(i.guild.members.me.roles.highest.postion < role1.postion){
                i.update({ content: "My role is below the I'm trying to give, I have shut this reaction role message down.", ephemeral: true}); 
                return;
            } else if(i.guild.members.me.roles.highest.postion < role2.postion){
                i.update({ content: "My role is below the I'm trying to give, I have shut this reaction role message down.", ephemeral: true}); 
                return;
            }else if(i.guild.members.me.roles.highest.postion < role3.postion){
                i.update({ content: "My role is below the I'm trying to give, I have shut this reaction role message down.", ephemeral: true}); 
                return;
            }else if(i.guild.members.me.roles.highest.postion < role4.postion){
                i.update({ content: "My role is below the I'm trying to give, I have shut this reaction role message down.", ephemeral: true}); 
                return;
            }else if(i.guild.members.me.roles.highest.postion < role5.postion){
                i.update({ content: "My role is below the I'm trying to give, I have shut this reaction role message down.", ephemeral: true}); 
                return;
            }
            if(i.customId === 'button1'){
                member.roles.add(role1);
                i.reply({ content: `You now have the role : ${role1.name}` , ephemeral: true})
            }
            if(i.customId === 'button2'){
                member.roles.add(role2);
                i.reply({ content: `You now have the role : ${role2.name}` , ephemeral: true})
            }
            if(i.customId === 'button3'){
                member.roles.add(role3);
                i.reply({ content: `You now have the role : ${role3.name}` , ephemeral: true})
            }
            if(i.customId === 'button4'){
                member.roles.add(role4);
                i.reply({ content: `You now have the role : ${role4.name}` , ephemeral: true})
            }
            if(i.customId === 'button5'){
                member.roles.add(role5);
                i.reply({ content: `You now have the role : ${role5.name}` , ephemeral: true})
            }
        })
    }
}
