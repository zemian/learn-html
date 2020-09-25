// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['mocha', 'chai'],
        files: [
            {pattern: 'src/*.js', included: false, watched: false},
            {pattern: 'test/*.js', included: false, watched: false}
        ],
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-html-reporter'
        ],
        reporters: ['progress', 'html'],
        browsers: ['ChromeHeadless']
    });
};
