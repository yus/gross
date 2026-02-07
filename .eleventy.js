const pluginTailwind = require("eleventy-plugin-tailwindcss");

module.exports = function(eleventyConfig) {
  // Add Tailwind plugin
  eleventyConfig.addPlugin(pluginTailwind, {
    src: "css/tailwind.css",
    keepFolderStructure: false,
  });
  
  // Pass through CSS
  eleventyConfig.addPassthroughCopy("css");
  // Create tag collection
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    let tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") {
          tags = [tags];
        }
        tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  });
  
  // Create pages for each tag
  eleventyConfig.addCollection("postsByTag", function(collectionApi) {
    let tagMap = {};
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") {
          tags = [tags];
        }
        tags.forEach(tag => {
          if (!tagMap[tag]) {
            tagMap[tag] = [];
          }
          tagMap[tag].push(item);
        });
      }
    });
    return tagMap;
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
