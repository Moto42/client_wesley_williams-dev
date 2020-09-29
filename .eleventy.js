
module.exports = function(eleventyConfig) {
  const configObject = {
    dir : {
      input: "_templates",
      output: "docs",
    }
  };

  eleventyConfig.setBrowserSyncConfig({
    port: 5050,
  });
  
  /** Passthrough copy
  * this code specifies which files and directories eleventy should pull from
  * the 'templates' folder and copy to the site.
  */
  // eleventyConfig.addPassthroughCopy("templates/FILEPATH");

  return configObject;
};
