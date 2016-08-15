

## Curso de Angular 2

### O Que é o AngularJS?

- Single Page Applications

* Aplicações WEB projetos e implementados num modelo mais próximo à aplicações Desktop

* Busca fornecer ao usuário uma experiência de uso próxima à aplicações Desktop 

E na prática, como isso funciona?

* Templates HTML servidos estaticamente

* Aplicação cliente obtém dados de serviços REST e WebSockets

* As views são dinâmicamente renderizadas no navegador WEB


> É um modelo mais poderoso, interativo e também amigável para dispositivos móveis

## O Que é o Angular 2?

O framework Angular foi totalmente repensado, baseado em tecnologias mais modernas e um modelo arquitetural mais robusto do que o Angular JS.

Muitos dos conceitos permanecem:

* Permite modularização das aplicações

* MV* => MVC [Model View Controller] ou MVVM [Model View View-Model Controller]

* Serviços

* Diretivas

* Pipe (No AngularJS era chamado de filter)



O que surgiu no Angular 2:

* Componentes (foi posteriormente adicionado ao AngularJS 1.5 junto com outros conceitos que emergiram da arquitetura do Angular 2)

* Angular JS é baseado em DirtyCheck. Angular 2 é reativo e baseado em propagração de eventos entre os componentes.

* Foco em separação mais bem feita das camadas do núcleo do framework, permitindo que no Angular 2 seja possível abstrair totalmente a camada de View, o que tem possibilitado outros usos ao framework que vão além do ambiente de navegador WEB:

    - Mobile - com Native Script

    - Server Side Rendering

    - Compilação Ahead Of Time dos componentes (permite mais performance na execução das aplicações) 

* O uso do Typescript permitiu ferramentas mais poderosas ao desenvolvedor


# Arquitetura de uma aplicação Angular 2

## Diagrama Arquitetural 
<center>
<img src="imagens/overview2.png" alt="Diagrama arquitetural">
</center>



REF: angular.io/docs/ts/latest/guide/architecture.html

