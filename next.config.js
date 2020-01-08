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
        cfg.resolve.alias['@components'] = path.join(__dirname) + '/components';
        cfg.resolve.alias['@content'] = path.join(__dirname) + '/content';
        return cfg;
    }
});
