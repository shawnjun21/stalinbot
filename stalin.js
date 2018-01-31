// Email Squad Bot
// randomly says stuff as dumb as we do

// basic stuff
const Discord = require("discord.js");
const bot = new Discord.Client();

// feel free to change this next constant
// this is probability that the bot will respond to a message
// pretty much, it will respond once every _____ messages
// by default it will only respond to one out of thirty messages
// lower is more often, higher is less often
const probability = 1;

const templates = [
	"We must seize {noun} and protect Motherland.",
	"We are going to {verb} the {noun}!",
	"The proletariats shall no longer {verb}!",
	"Long live {noun}!",
	"Cyka blyat! The {noun} is {adj}!",
    "Let us sing the anthem of {noun}!",
    "Stand in breadline you {adj} {noun}.",
    "All hail Joseph Stalin and his {adj} {noun}!",
    "We will {verb} our way through Nazi Germany!",
    "The Americans and Britons will {verb} each other!",
    "Anything the French say is {adj}.",
    "What purge? Those {adj} Americans will accuse me of anything!",
];

const nouns = [
	"production",
	"capitalist pig",
	"bread",
	"breadline",
	"rifle",
	"Communist Manifesto",
	"Lenin",
	"Karl Marx",
    "Nazis",
    "proletariat",
    "Soviet Union",
    "Bourgeois",
];

const verbs = [
	"shoot",
	"kill",
	"eat",
	"seize",
	"rape",
    "fuck",
];

const adjectives = [
	"proletariat",
	"gopnik",
	"communist",
	"hungry",
	"capitalist",
    "Soviet",
    "Bourgeoisie",
];

bot.on("message", message =>
{
	var rando = Math.floor(Math.random() * probability) + 1;
	if (rando == 1 && !message.author.bot)
	{
		// A+ coding skills
		var raw = templates[Math.floor(Math.random() * templates.length)];
		raw = raw.replace("{noun}", nouns[Math.floor(Math.random() * nouns.length)]);
		raw = raw.replace("{verb}", verbs[Math.floor(Math.random() * verbs.length)]);
		var reply = raw.replace("{adj}", adjectives[Math.floor(Math.random() * adjectives.length)]);
		message.channel.send(reply);
	}
});

bot.login(token);
