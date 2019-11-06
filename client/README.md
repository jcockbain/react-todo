# React Boilerplate

This is my personal React boilerplate, using Webpack 4 for both local development and production builds.

## Instructions

### Local Development

```
npm install
npm start
```

The app will open by default on <http://localhost:3000>. This is set in `webpack.dev.js`.

The page will automatically reload upon saved changes to the code.

### Production Build

```
npm run build
```

This builds the app with `webpack` to the `dist` folder, ready for production.

The configuration for this build is set by `webpack.prod.js`.

## Example Projects

- [React Weather App](https://github.com/jcockbain96/react-weather-app)

## Acknowledgements

- Based on [Build your own React boilerplate, by Seth Alexander](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd).
