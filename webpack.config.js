const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// make sure index.html is in the root not in the client folder. If you do then put contenst base in dev server 
// make sure that dev department 
module.exports = {
    // indicates which folder WP should start with creating dependancy graph. First file that will be run 
    entry: './client/index.js',
    // dictates where WP will split the folder out at once its created. 
    // in this case we send it to dist folder 
    output:{
        path: path.resolve(__dirname, 'build'), // npm run build creates the dist/build folder.  We are sending the bundled file to the dist file once its created on run npm start
        filename: 'bundle.js'
    },
    //mode: 'development', // will make the code uglified and minified if its production 
    devServer: { 
        // dev server affects the entry and output in development mode 
        // contentbase is where the bundled files. Root directory is the client folder we are in 
    contentBase: path.resolve(__dirname, '/'),
        // dev server has a mini server that opens a port to LH8080 and does hot reload every time we change something
        // this is good for react but we still want our backend API's to handle route req to server
        // when the client req API route the 8080 will send it to LH 3000 ( where our server lives )
            proxy: {
            '/build/': 'http://localhost:3000'
            },
            historyApiFallback:true, // tm blog lol 
          
            publicPath: '/' // used for dev server. Instead of usuing file in fle tree we have a public path that helps us connnect our files serverd from WP memory instead of disk. 
            // currently our Dev server folder (client) now lives in the WPD memory so we need to pull info from there 
    },
    
    module: {
        rules: [
            {
                test: /\.jsx?/, // we only want to check for JSX to complie usuing babel 
                exclude: /(node_modules|bower_components)/, // we dont want to compile node modules 
              use: {
                loader: 'babel-loader', // babel is the compiler 
                options: {
                  presets: ['@babel/preset-env','@babel/preset-react'] // other presets required by babel to work with environment and react 
                }
              }
            },
            { // need to npm download all loaders as well as npm node-Sass
                test: /.(css|scss)$/, // we only want to compile SCSS
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                ]
              }
          ]
        }, 
        plugins: [
            new HtmlWebpackPlugin({ // instead of having to put script tag for bundle.js into my html file this plug in puts it in for you 
              template: './index.html',
            }),
          ]
}