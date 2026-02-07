// eleventy.config.mjs
export default function(eleventyConfig) {
  // Copy CSS
  eleventyConfig.addPassthroughCopy("css");
  
  // Posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse();
  });
  
  // Tag list collection
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
  
  // v3: You can use async/await in config!
  
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    // Template engine for markdown files
    markdownTemplateEngine: "liquid",  // or "njk" or remove for default
    
    // Template engine for HTML files
    htmlTemplateEngine: "njk"
  };
};
