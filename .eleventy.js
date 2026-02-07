module.exports = function(eleventyConfig) {
  // 1. Copy CSS to output
  eleventyConfig.addPassthroughCopy("css");
  
  // 2. Create posts collection (MOST IMPORTANT!)
  eleventyConfig.addCollection("posts", function(collectionApi) {
    // Get all items with "posts" tag and reverse for chronological order
    return collectionApi.getFilteredByTag("posts").reverse();
  });
  
  // 3. Create tagList collection (for tag pages)
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    let tagSet = new Set();
    const allPosts = collectionApi.getFilteredByTag("posts");
    
    allPosts.forEach(post => {
      if (post.data.tags && Array.isArray(post.data.tags)) {
        post.data.tags.forEach(tag => {
          // Skip the default "posts" tag
          if (tag !== "posts") {
            tagSet.add(tag);
          }
        });
      }
    });
    
    return Array.from(tagSet).sort();
  });
  
  // 4. Create postsByTag collection (OPTIONAL - for easier filtering)
  eleventyConfig.addCollection("postsByTag", function(collectionApi) {
    const postsByTag = {};
    const allPosts = collectionApi.getFilteredByTag("posts");
    
    allPosts.forEach(post => {
      if (post.data.tags && Array.isArray(post.data.tags)) {
        post.data.tags.forEach(tag => {
          if (tag !== "posts") {
            if (!postsByTag[tag]) postsByTag[tag] = [];
            postsByTag[tag].push(post);
          }
        });
      }
    });
    
    return postsByTag;
  });
  
  // 5. Add custom filter for tag checking
  eleventyConfig.addFilter("hasTag", function(post, tagName) {
    if (!post.data || !post.data.tags) return false;
    return post.data.tags.includes(tagName);
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    // Optional: Set markdown template engine to nunjucks for consistency
    markdownTemplateEngine: "njk"
  };
};
