const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  // Friendly readable date
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

  // ISO date (used in <time datetime="{{ page.date | iso }}">)
  eleventyConfig.addFilter("isoDate", (value) => {
    try {
      return new Date(value).toISOString();
    } catch (e) {
      return value;
    }
  });

  // Alias: Eleventy templates sometimes use |iso instead of |isoDate
  eleventyConfig.addFilter("iso", (value) => {
    try {
      return new Date(value).toISOString();
    } catch (e) {
      return value;
    }
  });
// Add sitemap plugin for auto-generated sitemap.xml
eleventyConfig.addPlugin(pluginSitemap, {
  sitemap: {
    hostname: "https://agingdoghealth.netlify.app",
  },
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
