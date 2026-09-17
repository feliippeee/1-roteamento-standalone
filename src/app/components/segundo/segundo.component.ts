import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  imports: [],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.scss'
})
export class SegundoComponent implements OnInit, OnDestroy  {

  ngOnInit() {
    console.log('SegundoComponent foi inicializado.');
  }
  ngOnDestroy() {
    console.log('SegundoComponent Destroy.');
  }

}
