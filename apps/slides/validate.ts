import { exec } from "node:child_process";
import vnu from "vnu-jar";

exec(`java -jar ${vnu} --skip-non-html dist`, (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`); // eslint-disable-line no-console
    process.exit(error.code);
  }
  console.error(stdout); // eslint-disable-line no-console
});
