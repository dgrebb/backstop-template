const { homepage_default, about_default } = require("./scenarios");

module.exports = {
  id: "backstop-template",
  viewports: [
    {
      label: "xs",
      width: 320,
      height: 480,
    },
    {
      label: "sm",
      width: 375,
      height: 667,
    },
    {
      label: "md",
      width: 768,
      height: 1024,
    },
    {
      label: "lg",
      width: 1024,
      height: 768,
    },
    {
      label: "xl",
      width: 1280,
      height: 960,
    },
    {
      label: "2xl",
      width: 1536,
      height: 1280,
    },
  ],
  onBeforeScript: "puppet/onBefore.js",
  onReadyScript: "puppet/onReady.js",
  scenarios: [homepage_default, about_default],
  paths: {
    bitmaps_reference: "_ci/backstop/backstop_data/bitmaps_reference",
    bitmaps_test: "_ci/backstop/backstop_data/bitmaps_test",
    engine_scripts: "_ci/backstop/backstop_data/engine_scripts",
    html_report: "_ci/backstop/backstop_data/html_report",
    ci_report: "_ci/backstop/backstop_data/ci_report",
  },
  report: ["browser"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
    headless: "new",
  },
  asyncCaptureLimit: 5,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false,
};
