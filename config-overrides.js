const path = require('path');
const os = require('os');
const crypto = require('crypto');

module.exports = function override(config) {
    // Add 'path-browserify' as a fallback for the 'path' module
    config.resolve.fallback = { path: require.resolve('path-browserify') };
    
    config.resolve.fallback = { os: require.resolve('os-browserify') };
    config.resolve.fallback = { crypto: require.resolve('crypto-browserify') };

    return config;
};
