module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    './public/': '/',
  });

  eleventyConfig.addWatchTarget('./public/styles.css');
};
