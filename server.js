var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var webPackServer = new WebpackDevServer(
    webpack(config),
    {
        publicPath: config.output.publicPath,
        hot: false,
        historyApiFallback: true
    }
);

webPackServer.listen(3009,'localhost', function(err,result){
    if(err){
        return console.log(err);
    }
    console.log('Development Server Running on Port 3009');
});

// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(3004, 'localhost', function (err, result) {
//   if (err) {
//     return console.log(err);
//   }

//   console.log('Listening at http://localhost:3004/');
// });
