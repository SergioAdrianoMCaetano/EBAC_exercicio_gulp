const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

/*TAREFA Comprime Imagens*/
function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

/*TAREFA Comprime arquivos JS*/
function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

/*TAREFA - SourceMaps são arquivos que mapeiam código compilado (como arquivos minificados ou otimizados) de volta ao código-fonte original*/
function compilarSass(){
    return gulp.src('./source/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/style'));
}

/* exports.default = gulp.series(funcaoPadrao, dizOi);*/
/*exports.default = gulp.parallel(funcaoPadrao, dizOi);*/

exports.default = function(){
    gulp.watch('./source/style/*.scss', {ignoreInitial: false}, gulp.series(compilarSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
};
