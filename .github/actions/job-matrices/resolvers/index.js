module.exports = {
	'docker-build': require('./dockerBuild'),
	'docker-lint': require('./dockerLint'),
	'kubernetes-deploy': require('./kubernetesDeploy'),
};
