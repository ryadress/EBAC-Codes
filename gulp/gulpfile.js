const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback){
    console.log("executando via gulp");
    callback();
}

function dizOi(callback){
    console.log("olá gulp");
    callback();
}

function dizTchau(){
    console.log("tchau gulp");
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;
exports.sass =  compilaSass;