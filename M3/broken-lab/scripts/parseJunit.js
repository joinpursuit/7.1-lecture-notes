const Parser = require("junitxml-to-javascript");
const path = require("path");
const fg = require("fast-glob");
const { notifyFail, notifyPass } = require("./notifySlack");

const repoName = process.env["CIRCLE_PROJECT_REPONAME"];
const webhookUrl = process.env["SLACK_WEBHOOK_URL"];
const username =
  process.env["CIRCLE_PR_USERNAME"] ||
  process.env["CIRCLE_USERNAME"] ||
  "default user";

let numSuites = 0;
const passedSuites = [];
const failedSuites = [];

/**
 * Determine how many test files passed and output to console.
 * This can be extended to send the same data elsewhere, ex: slack, LMS
 */

const passed = (suite) => suite.succeeded === suite.tests;

const parseAllFiles = async () => {
  const glob = __dirname + "/../reports/junit/junit*.xml";
  const fileNames = fg.sync(glob);
  numSuites = fileNames.length;

  for (const file of fileNames) {
    const report = await new Parser().parseXMLFile(file);
    const { testsuites } = report;

    let testFilePassed = testsuites.every((ts) => passed(ts));

    if (testFilePassed) {
      passedSuites.push(testsuites[0].name);
    } else {
      let failed = testsuites.filter((ts) => !passed(ts));
      failed.forEach((ts) => failedSuites.push(ts.name));
    }
  }

  if (passedSuites.length === numSuites) {
    notifyPass(numSuites);
  } else {
    notifyFail({ numSuites, passedSuites, failedSuites });
  }
};

parseAllFiles();
