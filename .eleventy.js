module.exports = function (eleventyConfig) {
  // Copy /assets straight to /_site/assets
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });

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
