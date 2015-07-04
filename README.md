# erdblock-markdown

## Description
Render markdown to a plugin.


## Config
| Name           | Description     | Values |
| -------------- | --------------- | ------ |
| `markdown`     | Markdown string | String |


## Example
````javascript
var markdown = require("erdblock-markdown")()
markdown.locals.config.markdown.setValue("#Markdown Erdblock Plugin\n [www.example.org](http://www.example.org/stuff)")
erdblock.addPlugin(markdown)
````
