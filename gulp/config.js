var src        = 'app';
var build      = 'build';
var dev        = 'build/dev';
var prod       = 'build/prod';
var srcAssets  = 'app/_assets';
var devAssets  = 'build/assets';
var prodAssets = 'build/prod/assets';

module.exports = {
    browsersync: {
        dev: {
            server: {
                baseDir: [dev, build, src]
            },
            port: 9999,
            files: [
                devAssets + '/css/*.css',
                devAssets + '/js/*.js',
                devAssets + '/img/**/*',
                devAssets + '/font/*',
            ]
        },
        prod: {
            server: {
                baseDir: prod
            },
            port: 9998
        }
    },
    delete: {
        src: [devAssets]
    },
    jekyll: {
        dev: {
            src: src,
            dest: dev,
            config: '_config.yml'
        },
        prod: {
            src: src,
            dest: prod,
            config: '_config.yml,_config.build.yml'
        }
    },
    sass: {
        src: srcAssets + '/scss/**/*.{sass,scss}',
        dest: devAssets + '/css',
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemapPath: '../../_assets/scss'
        }
    },
    autoprefixer: {
        browsers: ['last 2 versions'],
        cascade:  true
    },
    browserify: {
        // Enable source maps
        debug: true,
        // Additional file extensions to make optional
        extensions: ['.coffee', '.hbs'],
        // A spearate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries:    './' + srcAssets + '/js/app.js',
            dest:       devAssets + '/js',
            outputName: 'app.js'
        }]
    },
    scsslint: {
        src: [
            srcAssets + '/scss/**/*.{sass,scss}',
        ]
    },
    jshint: {
        src: srcAssets + '/js/*.js'
    },
    images: {
        src: srcAssets + '/img/**/*',
        dest: devAssets + '/img'
    },
    sprites: {
        src: srcAssets + '/img/sprite/icon/*.png',
        dest: {
            css: srcAssets + '/scss/sprite/',
            img: srcAssets + 'img/sprite/'
        },
        options: {
            cssName: '_sprites.scss',
            cssFormat: 'css',
            cssOpts: {
                cssClass: function(item) {
                    // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
                    if (item.name.indexOf('-hover') != -1) {
                        return '.icon-' + item.name.replace('-hover', ':hover');
                    // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
                    } else {
                        return '.icon-' + item.name;
                    }
                }
            }
        },
        imgName: 'icon-sprite.png',
        imgPath: '/assets/img/sprite/icon-sprite.png'
    },
    copyfonts: {
        dev: {
            src:  srcAssets + '/font/*',
            dest: devAssets + '/font'
        },
        prod: {
            src:  devAssets + '/font/*',
            dest: prodAssets + '/font'
        }
    },
    optimize: {
        css: {
            src:  devAssets + '/css/*.css',
            dest: prodAssets + '/css/',
            option: {
                keepSpecialComments: 0
            }
        },
        js: {
            src:  devAssets + 'js/*.js',
            dest: prodAssets + '/js/',
            options: {}
        },
        images: {
            src:  devAssets + '/img/**/*.{jpg,jpeg,png,gif}',
            dest: prodAssets + '/img/',
            options: {
                optimizationLevel: 3,
                progressive: true,
                interlaced: true
            }
        },
        html: {
            src:  prod + '/**/*.html',
            dest: prod,
            options: {
                collapseWhitespace: true
            }
        }
    },
    watch: {
        jekyll: [
            '_config.yml',
            '_config.build.yml',
            src + '/_data/**/*.{json,yml,csv}',
            src + '/_includes/**/*.{html,xml}',
            src + '/_layouts/*.html',
            src + '/_plugins/*.rb',
            src + '/_posts/*.{markdown,md}',
            src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
            src + '/*',
        ],
        sass:    srcAssets + '/scss/**/*.{sass,scss}',
        scripts: srcAssets + '/js/**/*.js',
        images:  srcAssets + '/img/**/*',
        sprites: srcAssets + '/img/**/*.png'
    },
    revision: {
        src: {
            assets: [
                prodAssets + '/css/*.css',
                prodAssets + '/js/*.js',
                prodAssets + '/img/**/*'
            ],
            base: prod
        },
        dest: {
            assets: prod,
            manifest: {
                name: 'manifest.json',
                path: prodAssets
            }
        }
    },
    collect: {
        src: [
            prodAssets + '/manifest.json',
            prod + '/**/*.{html,xml,txt,json,css,js}',
            '!' + prod + '/feed.xml'
        ],
        dest: prod
    }
};