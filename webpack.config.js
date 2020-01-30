var path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig ={

    entry:{
        app:path.resolve(__dirname,"./src/index.js")
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"[name][hash].js"
    },
    plugins :[
        new HtmlWebpackPlugin({
            hash: true,
            title: 'My Awesome application',
            myPageHeader: 'Hello World',
            template: path.resolve(__dirname,  'index.html'),            
            filename: path.resolve(__dirname,'./dist/index.html') //relative to root of the application
        })
    ]
};

const productionConfig = () => commonConfig;
const developmentConfig = () => {
    const config = {
    devServer: {
        // Enable history API fallback so HTML5 History API based
        // routing works. Good for complex setups.
        historyApiFallback: true,
        // Display only errors to reduce the amount of output.
        stats: 'errors-only',
        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host:"localhost", // process.env.HOST, // Defaults to `localhost`
        port:8083, // process.env.PORT, // Defaults to 8080
      },
    };
    return Object.assign({},commonConfig,config);
};

module.exports = (env)=>{
  //  console.log('---> env',env , "--->__dirname:",__dirname ,'process:',JSON.stringify(process.env));
    if( env === 'production'){
        return productionConfig();
    }
    return developmentConfig();
};