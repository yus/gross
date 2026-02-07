module.exports = function(eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("css");
  
  // Tag system
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    let tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        if (typeof tags === "string") tags = [tags];
        tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
