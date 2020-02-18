// two things needed for config
// entry (where does site start), app.js for us
// output, where is the output file to run things
const path = require('path');

console.log(path.join(__dirname, 'public'));
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),    // must be absolute path
        filename: 'bundle.js'
    }, 
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,  // run babel on .js files
            exclude: /node_modules/ 
        },{
            test: /\.s?css$/,
            use: [      // an array of 'loader'
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

// loader