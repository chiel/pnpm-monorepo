const core = require('@actions/core');
const path = require('path');

const resolvers = require('./resolvers');

try {
	const parsedPackages = core.getInput('packages').split(',');

	const packages = parsedPackages.map(pkgName => {
		const pkgDir = pkgName.replace(/^[^\/]+\//, '');
		return {
			name: pkgName,
			path: path.resolve(process.cwd(), 'packages', pkgDir),
			dir: pkgDir,
		};
	});

	const jobs = Object.entries(resolvers).reduce((acc, [job, resolver]) => {
		const jobPackages = packages.filter(pkg => resolver(pkg)).map(pkg => pkg.dir);
		if (!jobPackages.length) return acc;
		return { ...acc, [job]: jobPackages };
	}, {});

	console.log('matrices', jobs);
	core.setOutput('matrices', JSON.stringify(jobs));
} catch (error) {
	core.setFailed(error.message);
}
