/// <reference path="./typings/index.d.ts" />

const dir: any = require('require-dir')
dir('./gulp/tasks', { 'recurse': true })
