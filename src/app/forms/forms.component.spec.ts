/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { FormsComponent } from './forms.component';

import { TestBed, getTestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppModule } from '../app.module';

/**
 * Exemplo de testes de um componente Angular 2
 */
describe('Component: Forms', () => { // <= descrevendo o component FormsComponent

  beforeEach(() => {
    // TestBed é a classe utilizada para realizar o setup do teste
    // com ela criamos um modulo de teste e adicionamos nesse módulo, nosso componente a ser testado
    TestBed.configureTestingModule({
      imports: [ // <= Import são os módulos que são dependências para o funcionamento do componente a ser testado
        BrowserModule,
        CommonModule,
        FormsModule
      ],
      declarations: [FormsComponent] // <= adicionamos em `declarations` o(s) component(s) a serem utilizados no teste
    });
  });

  it('should create an instance', () => {
    // neste teste criamos uma instância do FormsComponent e testamos unitariamente a classe do componente sem utilizar a infra do Angular 2
    let component = new FormsComponent();
    expect(component).toBeTruthy();
  });

  /**
   * @author: Abner Oliveira
   * O parametro done recebe uma função de callback passado pelo Jasmine
   * quando a função passada como corpo do teste jasmine possui um argumento, o jasmine passa uma
   * funcao de callback que serve para que o corpo do teste sinalize que o teste acabou.
   * Isto é útil quando iremos testar funcionalidades assíncronas, como neste caso a seguir
   */
  it('creates component using TestBed', (done) => {
    /// aqui criamos uma instância do componente FormsComponent utilizando a classe utilitária TestBed
    let fixture: ComponentFixture<FormsComponent> = TestBed.createComponent(FormsComponent);

    // O objeto fixture é do tipo ComponenteFixture. Uma classe do módulo de teste do Angular 2 que encapsula
    // algumas partes do componente angular 2:
    // - fixture.componentInstance é a instância do componente FormsComponente, e é o modelController deste componente
    // - fixture.debugElement e fixture.nativeElement referenciam a view (nativa = ao objeto DOM propriamente dito),
    // e o debugElement é uma abstração do elemento HTML que possui alguns métodos para manipular e inspecionar o DOM 

    // aqui estamos definindo o valor da propriedade campoNome utilizando a instância do componente
    fixture.componentInstance.campoNome = 'Abner';

    // estamos chamando aqui a função detectChanges pois queremos que o Angular detecte a mudanças e, como
    // no FormsComponent utilizamos o bind de duas vias, esperamos que a modificação da informação na propriedade do componente
    // seja refletida na view
    fixture.detectChanges();

    // utilizamos do debugElement aqui para obter o elemento input
    let input: HTMLInputElement = fixture.debugElement.query(By.css('input[name="campoNome"]')).nativeElement;

    // o ngModel no Angular 2 é sempre assíncrono, então não temos a garantia de que ao chamarmos detectChanges 
    // o atributo .value do input já foi setado. Por isso utilizamos aqui o fixture.whenStable,
    // que é uma função que retorna uma promise que é resolvida quando o ciclo de detecção de mudanças foi finalizado

    return fixture.whenStable().then(() => { // => passamos uma função de callback para o then da promise retornada pelo whenStable()
      expect(input.value).toEqual('Abner'); // verificamos que o input.value confere com o valor informado
      // e então chamamos o done para que o jasmine saiba que o testes finalizou
      done();
    });
  });

  it('hides input when formDisabled is true', () => {
    let fixture: ComponentFixture<FormsComponent> = TestBed.createComponent(FormsComponent);
    fixture.componentInstance.formDisabled = true;
    fixture.detectChanges();
    let input: HTMLInputElement = fixture.debugElement.query(By.css('input[name="campoNome"]')).nativeElement;
    expect(input.hidden).toEqual(true);
  });
});
