import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {

  @Input() title: string = '';
  @Input() date: string = '';
  @Input() receita: string = '';
  @Input() imagem: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
