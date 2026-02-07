const pluginTailwind = require("eleventy-plugin-tailwindcss");

module.exports = function(eleventyConfig) {
  // Add Tailwind plugin
  eleventyConfig.addPlugin(pluginTailwind, {
    src: "css/tailwind.css",
    keepFolderStructure: false,
  });
  
  // Pass through CSS
  eleventyConfig.addPassthroughCopy("css");
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
