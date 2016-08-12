import * as shelljs from 'shelljs';
import * as path from 'path';

let public_vendor_path: string = path.resolve(__dirname, '../public/vendor');

console.log('Copiando arquivos de fontes do bootstrap para a pasta public/vendor');
// criação das pastas de assets
let bootstrap_public_fonts_path = path.join(public_vendor_path, 'bootstrap/fonts');
shelljs.mkdir('-p', [bootstrap_public_fonts_path]);


// copiando os arquivos de fonts e/ou css para a pasta pública
let boostrap_sass_path = path.resolve(__dirname, '../node_modules/bootstrap-sass');
shelljs.cp(path.join(boostrap_sass_path, 'assets/fonts/bootstrap/*'), bootstrap_public_fonts_path);


// Arquivos do Angular Material 2
console.log('Copiando arquivos css de overlay do angular material 2');
let angular_material_assets_path = path.join(public_vendor_path, '@angular2-material/core/overlay');
shelljs.mkdir('-p', angular_material_assets_path);

let angular_material_path = path.resolve(__dirname, '../node_modules/@angular2-material');
shelljs.cp(path.join(angular_material_path, '/core/overlay/overlay.css'), angular_material_assets_path);


// Arquivos do Material Design Icons
console.log('Copiando arquivos de fonte do Material Design Icon');
let material_design_assets_path = path.join(public_vendor_path, 'material-design-icons/fonts');
shelljs.mkdir('-p', material_design_assets_path);
//

let material_design_icons_path = path.resolve(__dirname, '../node_modules/bootstrap-material-design-icons/fonts');
shelljs.cp(path.join(material_design_icons_path, 'MaterialIcons-*'), material_design_assets_path);


