const fs = require('fs-extra');

const docLoader = require('../loader/md');

module.exports = async function getTransform(path) {
  if (path.endsWith('.md')) {
    const code = await fs.readFile(path, 'utf-8');
    return docLoader(code, path);
  }
};
