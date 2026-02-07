module.exports = function(eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("_site/css"); // Also copy from built location
  
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
  
  // Create postsByTag collection
  eleventyConfig.addCollection("postsByTag", function(collectionApi) {
    const postsByTag = {};
    const allPosts = collectionApi.getFilteredByTag("posts");
    
    allPosts.forEach(post => {
      if (post.data.tags) {
        const tags = Array.isArray(post.data.tags) ? post.data.tags : [post.data.tags];
        tags.forEach(tag => {
          if (tag !== "posts") { // Skip the "posts" tag itself
            if (!postsByTag[tag]) postsByTag[tag] = [];
            postsByTag[tag].push(post);
          }
        });
      }
    });
    
    return postsByTag;
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};
