/* @flow */

var marked = require('marked');
marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: false,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false
});
var express = require("express")

module.exports = function(){
	var app = express()

	app.locals.title = "Markdown"
	
	app.locals.config = {
		markdown: {
			label: 'Markdown',
			value: '',
			setValue: function(v){
				this.value = v
			},
			type: 'textarea',
			isValid: function(value){
				return null
			}
		}
	}

	app.html = function(){
		return marked(app.locals.config.markdown.value)
	}
	app.less = function(){
		return ""
	}
	return app
}
