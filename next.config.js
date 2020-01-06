const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withSass({
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        );
        cfg.resolve.alias['@'] = path.join(__dirname);
        return cfg;
    }
});
