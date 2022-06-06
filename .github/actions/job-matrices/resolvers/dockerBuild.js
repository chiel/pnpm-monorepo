const fs = require('fs');

module.exports = pkg => {
	try {
		fs.accessSync(`${pkg.path}/Dockerfile`);
		return true;
	} catch (err) {
		return false;
	}
};
