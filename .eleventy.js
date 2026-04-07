// .eleventy.js
module.exports = function(eleventyConfig) {
  // Bind to all interfaces so the dev server is reachable from the host browser
  eleventyConfig.setServerOptions({
    host: "0.0.0.0"
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy CNAME file for custom domain
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/assets/css/");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
