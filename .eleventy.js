const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const CleanCSS = require("clean-css")
const { DateTime } = require('luxon')

module.exports = function (eleventyConfig) {

    eleventyConfig.setBrowserSyncConfig({

        extensions: ["html"]
    
    })

    
    // Return your Object options:
    eleventyConfig.addPlugin(syntaxHighlight)

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles
    })

	eleventyConfig.addFilter('postDate', function(dateObj) {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
    
	eleventyConfig.addFilter('parseURL', function(i) {
		o = i.split('/')
		o.shift()
		o.pop()
		o.pop()
		return o
    })
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
}