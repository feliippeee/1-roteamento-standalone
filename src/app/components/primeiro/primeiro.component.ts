import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  imports: [],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.scss'
})
export class PrimeiroComponent implements OnInit, OnDestroy  {
  ngOnInit() {
    console.log('PrimeiroComponent foi inicializado.');
  }
  ngOnDestroy() {
    console.log('PrimeiroComponent Destroy.');
  }
  
}
