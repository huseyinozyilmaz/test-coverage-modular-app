var shell = require('shelljs');

console.log('building.....')
shell.rm('-rf', 'src/main/webapp/vendor/*');
shell.cp('-R', 'node_modules/angular', 'src/main/webapp/vendor');
shell.cp('-R', 'node_modules/angular-route', 'src/main/webapp/vendor');
shell.cp('-R', 'node_modules/angular-loader', 'src/main/webapp/vendor');
shell.cp('-R', 'node_modules/angular-mocks', 'src/main/webapp/vendor');
shell.cp('-R', 'node_modules/bootstrap', 'src/main/webapp/vendor');
