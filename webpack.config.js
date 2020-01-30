var path=require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(__dirname);

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
            template: path.resolve(__dirname,'./index.html'),
            filename: path.resolve(__dirname,'./dist/index.html') //relative to root of the application
        })
    ]
};
module.exports = (env)=>{
   
// vérifier le variable d'env
   console.log('---> env',env , "--->__dirname:",__dirname);
   return commonConfig;
};