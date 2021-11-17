const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

    // Return your Object options:
    eleventyConfig.addPlugin(syntaxHighlight)
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}