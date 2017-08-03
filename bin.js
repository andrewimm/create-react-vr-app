#!/usr/bin/env node

'use strict';

const path = require('path');
const child_process = require('child_process');

const bin = path.resolve(__dirname, 'node_modules', '.bin', 'react-vr');

const args = process.argv.slice(2);
args.unshift('init');

child_process.spawn(bin, args, {stdio: 'inherit'});