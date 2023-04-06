import { Component } from '@angular/core';

interface Card {
  id: number;
  title: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [{
      id: 1,
      title: 'Iphone',
      price: '600$',
      image: 'https://img.zoommer.ge/zoommer-images/thumbs/0127468_apple-iphone-12-64gb-blue_550.png',
    },
    { 
      id: 2,
      title: 'Samsung',
      price: '500$',
      image: 'https://img.zoommer.ge/zoommer-images/thumbs/0164099_samsung-galaxy-a23-a235fd-6128gb-peach_550.jpeg',
    }   
  ]


  addCards(){
    this.cards.push(
    {
      id: 3,
      title: 'Iphone',
      price: '600$',
      image: 'https://img.zoommer.ge/zoommer-images/thumbs/0127468_apple-iphone-12-64gb-blue_550.png',
    },
    { 
      id: 4,
      title: 'Samsung',
      price: '500$',
      image: 'https://img.zoommer.ge/zoommer-images/thumbs/0164099_samsung-galaxy-a23-a235fd-6128gb-peach_550.jpeg',
    }   )
  }
}
