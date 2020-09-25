The main goal of webpack will bundle files into single .js.
By loading css or images from code (`app.js`) we have control
on loading them programmatically. If you do not need this degree
of file loading, then you can simply place them into "build" folder.

On top of webpack-demo, we will add the following:

1. Webpack loaders for asset management.

    See https://webpack.js.org/guides/asset-management

2. In main.js, use import to load resources:

    import './main.css';
    import Pic from './pic_trulli.jpg';

NOTE: For images, it will be packaged and renamed with an uuid as file name!

NOTE: How the main.css is also bundled inside the bundle.js!
