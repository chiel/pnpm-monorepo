const core = require('@actions/core');

const resolvers = require('./resolvers');
console.log('RESOLVERS', resolvers);

try {
	const parsedPackages = core.getInput('packages').split(',');
	console.log(`PACKAGES: ${parsedPackages}`);

	const packages = parsedPackages.map(pkgName => {
		const pkgDir = pkgName.replace(/^[^\/]+\//, '');
		return {
			name: pkgName,
			path: path.resolve(process.cwd(), 'packages', pkgDir),
			dir: pkgDir,
		};
	});

	console.log('PACKAGES', packages);

	const jobs = Object.entries(resolvers).reduce((acc, [job, resolver]) => {
		const jobPackages = packages.filter(pkg => resolver(pkg)).map(pkg => pkg.dir);
		if (!jobPackages.length) return acc;
		return { ...acc, [job]: jobPackages };
	}, {});

	console.log('JOBS', jobs);

	core.setOutput('job_matrices', {});
} catch (error) {
	core.setFailed(error.message);
}
