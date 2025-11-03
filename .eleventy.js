module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Add a simple date filter (Eleventy complains if none exist)
  eleventyConfig.addFilter("date", (value) => {
    try {
      return new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return value;
    }
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
  };
};
