/**
 *
 * Created by Jason on 2016/9/28.
 */
module.exports = {
    entry:{
        index:'./index.js'
    },
    output:{
        path:'./build',
        filename:'bundle.js',
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'jsx-loader'}
        ]
    }

}