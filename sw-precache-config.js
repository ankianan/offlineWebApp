var swPrecache = require('sw-precache');
var rootDir = process.cwd();

swPrecache.write(`${rootDir}/sw-prod.js`, {
	staticFileGlobs: [
						rootDir + '/index.html',
						rootDir + '/static/**/*.css'
					],
	stripPrefix: "/scratch/ankit/repositories",
	verbose: true
});

