module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Add a simple date filter
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

  // ✅ Add this new ISO date filter
  eleventyConfig.addFilter("isoDate", (value) => {
    try {
      return new Date(value).toISOString();
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
