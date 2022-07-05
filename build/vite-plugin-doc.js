const getTransform = require('./utils/getTransform');
const fileRegex = /\.(md|vue)$/;

const createDocPlugin = () => {
  return {
    name: 'doc-vite',
    transform(src, id) {
      if (fileRegex.test(id)) {
        return getTransform(id);
      }
    }
  };
};

module.exports = createDocPlugin;
