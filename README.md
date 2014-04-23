# React Server Side Rendering POC

Simple POC to test React server side rendering capabilities and code sharing.

I've used the [node-jsx](https://www.npmjs.org/package/node-jsx) module to seamlessly require `jsx` modules.

```js
var home = require('./app/home.jsx');
```

## Usage

Start the server

```shell
npm start
```

Run the (stupid) benchmark

```shell
npm test
```

## Using JSX as views

It is possible to use [express-react-views](https://github.com/reactjs/express-react-views) to handle the JSX as views (althogh it still have the same problem of requiring server restart to reflect changes in the views code). Might be an option, although it limits its use as real components in the client.

## Drawbacks

* Any change in the code of the views/components require a server restart to be applied. Something that can be easily resolved using something like [supervisor](https://github.com/isaacs/node-supervisor).
* It is probably going to be impossible to have a React component using a underlying jQuery component in this situation, since we don't have the DOM in the server.
* You change the common pattern of requiring a module without an extension (you need to add `jsx`).

## References

* [Pete Hunt's example](https://github.com/petehunt/react-server-rendering-example).

