module.exports = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',      // Inserta CSS en el DOM
            'css-loader',        // Interpreta los archivos CSS
            {
              loader: 'sass-loader', // Compila Sass a CSS
              options: {
                // Es importante tener la opción `modules` configurada si estás usando CSS Modules
                modules: true
              }
            }
          ]
        }
      ]
    }
  };
  