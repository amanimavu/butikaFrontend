module.exports = {
    images: {
        //domains: ['afternoon-fjord-70820.herokuapp.com'],
        domains: ['localhost'],
      },
    webpack(config){
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        },
        {
            test: /\.json5$/i,
            loader: 'json5-loader',
            type: 'javascript/auto'
        }
        );

        return config;
    }
}