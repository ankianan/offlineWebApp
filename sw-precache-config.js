var swPrecache = require('sw-precache');
var rootDir = process.cwd();

swPrecache.write(`${rootDir}/sw-prod.js`, {
	staticFileGlobs: [rootDir+'/index.html', rootDir + '/static/lib/materialize.min.css'],
	stripPrefix: "/scratch/ankit/repositories",
	navigateFallback: rootDir+'/index.html',
	navigateFallbackWhitelist: [/^\//],
	verbose: true
});

