const Commando = require("discord.js-commando");

const client = new Commando.Client({
  owner: "220584715265114113"
});

const path = require("path");

client.registry
  // Registers your custom command groups
  .registerGroups([
    ["fun", "Fun commands"],
    ["some", "Some group"],
    ["other", "Some other group"]
  ])

  // Registers all built-in groups, commands, and argument types
  .registerDefaults()

  // Registers all of your commands in the ./commands/ directory
  .registerCommandsIn(path.join(__dirname, "commands"));

client.login(process.env.BOT_TOKEN);
