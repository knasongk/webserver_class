#!/usr/bin/env node

'use strict'

var username = process.argv[2];

if(!username) {
	var appName = process.argv[1].split(require('path').sep).pop();

	console.error('Missing argument! example: %s YOUR_NAME', appName);

	process.exit(1);
}

console.log('Hello %s!', username);
