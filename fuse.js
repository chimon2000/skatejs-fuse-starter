const {FuseBox, SVGPlugin, CSSPlugin, BabelPlugin} = require('fuse-box')

let fuse = new FuseBox({
    homeDir: 'src',
    sourcemaps: true,
    outFile: './dist/bundle.js',
    plugins: [
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin()
    ]
})

fuse.devServer('>main.ts')
