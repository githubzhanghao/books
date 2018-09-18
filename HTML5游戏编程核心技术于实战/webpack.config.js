

const js = 'page24';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: `./src/${js}.js`,
    output: {
        path: path.resolve(__dirname, './dist/js/'),
        filename: `${js}.js`,
        publicPath: '/assets/'
    },
    module: {
        rules:[      
            {        
                test: /\.js[x]?$/,        
                exclude: /node_modules/     
            }
        ]

    },
    devServer: {
        inline: true
    },
    
    plugins: [
        new webpack.BannerPlugin('菜鸡教程')
    ]
}