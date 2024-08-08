const path = require('path');

module.exports = {
    mode: 'development', //para saber si esta en desarrollo o produccion
    entry: './src/index.js', //punto de entrada de tu aplicacion
    output: {
        filename: 'bundle.js', //nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), // carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, //regex para identificar archivos css
                use: ['style-loader', 'css-loader'], // loarders para procesar archivos scc
            },
            {
                test: /\.js$/, //regex para identificar archivos js
                exclude: /node_modules/, //excluir la carpeta mode_modules                      
                use: {
                    loader: 'babel-loader', //loader para convertir JS moderno al JS compatible con mas navegadroes
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }, 
            },
        ],
    },
    devtool: 'source-map', //genera source maps para facilitar la depuracion
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        contentBase: path.resolve(__dirname, 'dist'), //carpeta del que correra el servidor
        compress: true, // habilitar compresion gzip
        port: 9000 // puerto del servidor de desarrollo

    },
};