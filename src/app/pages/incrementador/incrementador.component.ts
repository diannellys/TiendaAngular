import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 10;
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor()
  {
      console.log('Leyenda', this.leyenda);
      console.log('progreso', this.progreso);
  }

  ngOnInit()
  {

  }





  incrementar( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progreso = 100;
    }else if ( newValue <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

  }

  cambiarValor( valor: number ) {

    if ( this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if ( this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );

    this.txtProgress.nativeElement.focus();

  }


}
