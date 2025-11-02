export default function(eleventyConfig) {
  // Passthrough
  eleventyConfig.addPassthroughCopy({ "css": "css" });
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addPassthroughCopy({ "admin": "admin" });

  // Watch targets
  eleventyConfig.addWatchTarget("css/");

  // Collections
  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi.getFilteredByGlob("./articles/*/.md").sort((a,b)=> (b.date - a.date))
  );
  eleventyConfig.addCollection("dogs", (collectionApi) =>
    collectionApi.getFilteredByGlob("./dogs/*/.md").sort((a,b)=> a.data.title.localeCompare(b.data.title))
  );

  // Filters
  eleventyConfig.addFilter("iso", date => new Date(date).toISOString());
  eleventyConfig.addFilter("date", date => new Date(date).toDateString());
  eleventyConfig.addFilter("url", (s) => (s || "").replace(/\/$/, ""));

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}