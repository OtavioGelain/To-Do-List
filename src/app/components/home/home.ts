import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    NgOptimizedImage
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
