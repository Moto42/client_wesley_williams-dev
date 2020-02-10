
module.exports = function(eleventyConfig) {
  const configObject = {
    dir : {
      input: "templates",
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
  eleventyConfig.addPassthroughCopy("templates/images");
  eleventyConfig.addPassthroughCopy("templates/scripts");
  eleventyConfig.addPassthroughCopy("templates/main.css");


  return configObject;
};
