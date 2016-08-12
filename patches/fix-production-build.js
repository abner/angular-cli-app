/**
 * Corrige a build de production na versão corrente do Angular-cli
 * Ver issue: https://github.com/angular/angular-cli/issues/1644
 * Pull Request submetido: https://github.com/angular/angular-cli/pull/1662
 * @author: Abner Oliveira
 */

var replace = require("replace");


replace({
  regex: "mangle: { screw_ie8 : true }, //prod",
  replacement: "mangle: { screw_ie8 : true, keep_fnames: true }, //prod",
  paths: ['./node_modules/angular-cli/addon/ng2/models/webpack-build-production.ts'],
  recursive: false,
  silent: false
});