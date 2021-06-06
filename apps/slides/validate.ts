"use strict";

const { exec } = require("child_process");
const vnu = require("vnu-jar");

exec(`java -jar ${vnu} --skip-non-html dist`, (error: any, stdout: any) => {
  if (error) {
    console.error(`exec error: ${error}`); // eslint-disable-line no-console
    process.exit(error.code);
  }
  console.error(stdout); // eslint-disable-line no-console
});
