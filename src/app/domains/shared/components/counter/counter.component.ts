import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { state } from '@angular/animations';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //No asincrono, no promesas. Esto se corre antess del render
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //Corre antes y durante del render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //Corre despues del render y solo corre una vez. Util para async, promesas, subscribe, fetch, llamar a API's etc.
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval');
      this.counter.update((statePrev) => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    //Tambien corre despues del render, sirve para saber si los hijos de este componente ya fueren renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    //Cuando el componente se destruye
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
    //Aqui adentro puedo correr logicas async o no async, se pueden correr.
  }
}
