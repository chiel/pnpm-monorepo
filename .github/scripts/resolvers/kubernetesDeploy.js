const fs = require('fs');

module.exports = pkg => {
	try {
		fs.accessSync(`${pkg.path}/.k8s.template.yaml`);
		return true;
	} catch (err) {
		return false;
	}
};
