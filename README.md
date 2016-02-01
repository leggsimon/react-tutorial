# React & Express Full Stack App from [this PluralSight tutorial](https://app.pluralsight.com/library/courses/react-express-full-stack-app-build/description)
## Running
To install:

```
git clone https://github.com/leggsimon/react-tutorial
cd react-tutorial
npm install
```

To run the server:

```
gulp live-server
```

To compile to JS:

```
gulp bundle
```

And go to [`localhost:3000`](http://localhost:3000)

### Things I've Learnt
#### Gulp
- adding `gulp-live-server` restarts the server whenever we change the `main.js` file
- gulp can use `browserify` and `reactify` to compile `.jsx` files to `.js` files. the `gulp bundle` task does this and compiles it to `.tmp/app.js`
- gulp can chain tasks (for example the `serve` task runs `bundle` and `live-server`, in that order, before running it's own tasks)

#### React
- react classes return an object which have a render function. This contains html specific to this component.

```js
module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Grocery Listify</h1>
      </div>
    );
  }
})
```

and is rendered like this

```js
var GroceryItemList = require('./components/GroceryItemList.jsx');
React.render(<GroceryItemList />, app)
```

this is done in the `main.jsx` file which gets compiled to js
