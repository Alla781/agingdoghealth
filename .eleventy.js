const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy /assets straight to /_site/assets
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

  // Add a 'date' filter for Nunjucks templates
  eleventyConfig.addFilter("date", (value, format = "yyyy") => {
    if (!value) return "";
    return DateTime.fromJSDate(new Date(value)).toFormat(format);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html", "11ty.js"]
  };
};
