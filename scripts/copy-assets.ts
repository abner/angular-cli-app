import * as shelljs from 'shelljs';
import * as path from 'path';

let public_vendor_path: string = path.resolve(__dirname, '../public/vendor');

console.log('Copiando arquivos de fontes do bootstrap para a pasta');
// criação das pastas de assets
let bootstrap_public_fonts_path = path.join(public_vendor_path, 'bootstrap/fonts');
shelljs.mkdir('-p', [bootstrap_public_fonts_path]);


// copiando os arquivos de fonts e/ou css para a pasta pública
let boostrap_sass_path = path.resolve(__dirname, '../node_modules/bootstrap-sass');
shelljs.cp(path.join(boostrap_sass_path, 'assets/fonts/bootstrap/*'), bootstrap_public_fonts_path);

