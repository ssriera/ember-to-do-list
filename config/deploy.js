module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ember-todo',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
