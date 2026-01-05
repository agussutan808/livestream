const fs = require('fs');
const path = require('path');

const requiredPaths = [
  'app.js',
  'package.json',
  'views',
  'public',
  path.join('db', 'database.js')
];

const missing = requiredPaths.filter((item) => !fs.existsSync(path.resolve(__dirname, '..', item)));

if (missing.length > 0) {
  console.error('Basic project files are missing:', missing.join(', '));
  process.exit(1);
}

console.log('Basic project sanity checks passed.');
