/**
 * Interface que representa os dados de login necessários
 * para a realziação da autenticação
 * @export
 * @interface LoginInformation
 */
export interface LoginInformation {
    email: string;
    password: string;
    keepLogged: boolean;
}
