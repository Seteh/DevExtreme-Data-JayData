module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: [
            "qunit"
        ],
        files: [
            "lib/qunit/qunit.css",

            "lib/jquery/jquery.js",
            "lib/globalize/globalize.js",
            "lib/devextreme/dx.all.js",

            "lib/datajs/datajs-*.min.js",
            
            "lib/crds-jaydata/jaydata.min.js",
            "lib/crds-jaydata/oDataProvider.min.js",

            "src/dx.data.jayData.js",

            "tests/queryJayDataTests.js"
        ],
        plugins: [
            "karma-qunit",
            "karma-coverage",
            "karma-junit-reporter",
            "karma-phantomjs-launcher"
        ],
        preprocessors: {
            "src/*.js": ["coverage"]
        },
        reporters: [
            "coverage",
            "progress",
            "junit",
            "dots"
        ],
        junitReporter: {
            outputDir: "shippable/testresults/",
            outputFile: "test-results.xml"
        },
        coverageReporter: {
            type: "cobertura",
            dir: "shippable/codecoverage/"
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["PhantomJS"],
        singleRun: true
    });
};