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
- gulp can use `browserify` and `reactify` to compile `.jsx` files to `.js` files. the `gulp bundle` command does this and compiles it to `.tmp/app.js`
