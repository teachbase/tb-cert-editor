exports.config = {
  paths: {
    watched: [ 'src', 'assets' ],
    public: 'public'
  },

  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    },
    postcss: {
      processors: [
        require('postcss-nested')
      ]
    },
    autoReload: {
      enabled: true
    },
    watcher: {
      awaitWriteFinish: true,
      usePolling: true
    }
  },

  modules: {
    nameCleaner: function (path) {
      return path.replace(/^src\//, '');
    }
  },

  server: {
    port: 3000,
    hostname: '0.0.0.0'
  },

  npm: {
    globals: {
      ReactDOM: 'react-dom',
      React: 'react'
    }
  }
};
