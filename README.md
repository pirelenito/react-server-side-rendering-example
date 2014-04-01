# React Server Side Rendering POC

I've used the [node-jsx](https://www.npmjs.org/package/node-jsx) module to seamlessly require `jsx` modules.

```js
var home = require('./app/home.jsx');
```

The only drawback in this approach from using a template language for example is that any change in the code of the views/components require a server restart to be applied. Something that can be easily resolved using something like [supervisor](https://github.com/isaacs/node-supervisor).

## Tooling support

* [Sublime Linter jsxhint](https://github.com/SublimeLinter/SublimeLinter-jsxhint)
