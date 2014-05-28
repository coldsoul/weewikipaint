/*global desc, task, jake, fail, complete */
(function () {
    "use strict";

    desc("Build and test");
    task("default", ["lint", "test"]);

    desc("Lint everything");
    task("lint", [], function () {
        var lint = require("./build/lint/lint_runner.js");
        var files = new jake.FileList();
        files.include("**/*.js");
        files.exclude("node_modules");

        var passed = lint.validateFileList(files.toArray(), nodeLintOptions(), {});
        if(!passed) {
            fail("Linting failed!");
        }
    });

    desc("Test everything");
    task("test", [], function () {
        var reporter = require("nodeunit").reporters["default"];
        reporter.run(['src']);
    });

    desc("Integration");
    task("integrate", ["default"], function() {
        console.log("1. Make sure git status is clean.");
        console.log("2. Build on the integration box");
        console.log("   a. Walk over the integration box");
        console.log("   b. 'git pull'");
        console.log("   c. 'jake.sh'");
        console.log("3. 'git checkout integration'");
        console.log("4. 'git merge --no-ff --log'");
        console.log("5. 'git checkout master'");
    });

    function nodeLintOptions() {
        return {
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            node: true
        };
    }
}());
