const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

	if (command = 'args-info') {
	if (!args.length_ {
	    return message.channel.send(`argument error, ${message.author}!`);
}
message.channel.send(`command name: ${command}`nArguments: ${args}`);
}
	if (message.content.startsWith(`${prefix}ping`)) {
	message.channel.send('Pong.');
} else if (message.content.startsWith(`${prefix}beep`)) {
	message.channel.send('Boop.');
	else if (message.content === `${prefix}server`) {
message.channel.send(`The server's name is: ${message.guild.name}`);
	}

	

client.login(token);
