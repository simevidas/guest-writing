const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy({ './public/': '/' });
  eleventyConfig.addPassthroughCopy('**/*.{jpg,jpeg,png,gif,mp4,webm}');
  eleventyConfig.addWatchTarget('./public/styles.css');
};
