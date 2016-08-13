import { Injectable } from '@angular/core';
import { User, LoginInformation } from '../models';

/**
 * Serviço de autenticação 
 * Permite realizar o login e provê informações à respeito do usuário logado 
 * @export
 * @class AuthenticationService
 */
@Injectable()
export class AuthenticationService {

  private _loggedUser: User = null;

  constructor() { }

  /**
   * Retorna true se há um usuário autenticado
   * 
   * @returns {boolean}
   */
  isLoggedIn(): boolean {
    return false;
  }

  /**
   * retorna o usuário atualmente logado
   * @returns {User}
   */
  get loggedUser(): User {
    return this._loggedUser;
  }

  /**
   * Método que permite realizar o login de um usuário na aplicação 
   * 
   * @param {LoginInformation} login
   * @returns {User}
   */
  login(login: LoginInformation): User {
    this._loggedUser = this.checkLogin(login);
    return this.loggedUser;
  }

  private checkLogin(login: LoginInformation): User {
    return new User();
  }
}
