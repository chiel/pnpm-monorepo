const core = require('@actions/core');

const resolvers = require('./resolvers');

try {
	const packages = core.getInput('packages');
	console.log(`PACKAGES: ${packages}`);
	console.log('RESOLVERS', resolvers);

	core.setOutput('matrices', {});
} catch (error) {
	core.setFailed(error.message);
}
