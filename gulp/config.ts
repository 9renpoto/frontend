/// <reference path="../typings/index.d.ts" />

import path = require('path');
let root: any = path.join(__dirname, '../');

export = {
  dist: path.join(root, 'dist'),
  root: root
};
