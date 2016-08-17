
## Injeção de Dependências, Serviços e outros Providers


Injeção de dependência é um padrão de codificação em que uma classe recebe instâncias de objetos de outras classes que ela depende, ao invés de ela mesmo criar essas instâncias.

 

* Injetor de Dependências Hierárquico



Cada componente tem seu próprio injetor. E, também, compartilha seu injetor com seus componentes filhos.

Quando injetamos um provider (serviço, valor, factory) em algum componente, o Angular vai primeiramente vai procurar no injetor direto do componente,
caso não ache ele vai percorrendo a árvore de injetores até chegar no componente raiz e finalmente no injetor do módulo.

Isso é interessante, pois o injetor trata os serviços que ele provê como singleton.

Em termos gerais, o interessante é que os serviços não fiquem sendo declarados na lista de providers de cada componente, ainda mais aqueles criados para compartilhar alguma funcionalide comum ou algum acesso  a dados aos componentes.

Entretano, há situações em que podemos querer que um componente tenha sua própria instância isolada de um determinado serviço. 

Vamos ver um exemplo que podemos utilizar esse conceito:

> Vamos considerar a seguinte funcionalidade: o usuário quando inicializa a edição de um determinado conjunto de dados, quer desfazer todas as alterações feitas e retornar esse conjunto de dados para o seu estado inicial.

Vamos implementar o serviço `RestoreService` para esse fim.


```typescript
export class RestoreService<T> {
  originalItem: T;
  currentItem: T;
  setItem (item: T) {
    this.originalItem = item;
    this.currentItem = this.clone(item);
  }
  getItem (): T {
    return this.currentItem;
  }
  restoreItem (): T {
    this.currentItem = this.originalItem;
    return this.getItem();
  }
  clone (item: T): T {
    // super poor clone implementation
    return JSON.parse(JSON.stringify(item));
  }
}
```

Agora vamos pensar que este serviço foi declarado a nível de módulo e portanto temos uma única instância deste serviço provido pelo injeto do módulo da aplicação, ou então pelo componente raiz.

> O que aconteceria se tívessemos uma listagem de objetos que permitisse a visualização de múltiplos componentes e o processo de edição fosse na própria listagem.

Isso não funcionaria, não é verdade?

Para solucionar esta questão, temos que adicionar o serviço no injetor do referido compponente. Fazemos isso adicionando-o na lista de `providers` na definição do @Componente correspondente.

Fazendo isto, cada instância do componente terá sua própria instância do serviço RestoreService.


REF: [https://angular.io/docs/ts/latest/guide/hierarchical-dependency-injection.html](https://angular.io/docs/ts/latest/guide/hierarchical-dependency-injection.html)


## Serviços - Passo a Passo

https://git.serpro/angular/curso-angular2/blob/master/docs/SERVICOS.md


-- Acessando requisição Rest

https://git.serpro/angular/curso-angular2/blob/master/docs/BACKEND-PROTOTIPACAO.md

