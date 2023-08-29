import cac from "cac";
import { consola } from "consola";
const cli = cac();

cli
  .command("dev", "Start dev server")
  .option("--clear-screen", "Clear screen")
  .action((options) => {
    console.log(options.clearScreen);
  });

const command = cli.command(
  "new <type>",
  "generation type, ex: project,store,route,component"
);

const options = [
  { option: "--template [nameOrUrl]", desc: "template name or github url" },
].reduce((accumulator, currentValue) => {
  return command.option(currentValue.option, currentValue.desc);
}, command);

options.action((type, options) => {
  console.log(type, options);
  consola.box("Cycloid Toolkit");
});

cli.help();
cli.parse();
