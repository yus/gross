export default function(eleventyConfig) {
  // Copy CSS
  // eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy("img");
  
  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse();
  });
  
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tags = new Set();
    const posts = collectionApi.getFilteredByTag("posts");
    
    for (const post of posts) {
      if (post.data.tags) {
        for (const tag of post.data.tags) {
          if (tag !== "posts") tags.add(tag);
        }
      }
    }
    
    return Array.from(tags).sort();
  });
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    // CRITICAL: Liquid for .md, Nunjucks only for layouts
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid"
  };
};
