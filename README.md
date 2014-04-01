# React Server Side Rendering POC

I've used the [node-jsx](https://www.npmjs.org/package/node-jsx) module to seamlessly require `jsx` modules.

```js
var home = require('./app/home.jsx');
```

## Usage

Start the server

```shell
npm start
```

Run the benchmark

```shell
npm test
```

## Tooling support

* [Sublime Linter jsxhint](https://github.com/SublimeLinter/SublimeLinter-jsxhint)

## Drawbacks

* Any change in the code of the views/components require a server restart to be applied. Something that can be easily resolved using something like [supervisor](https://github.com/isaacs/node-supervisor).
* It is probably going to be impossible to have a React component using a underlying jQuery component in this situation, since we don't have the DOM in the server.
* You change the common pattern of requiring a module without an extension (you need to add `jsx`).
