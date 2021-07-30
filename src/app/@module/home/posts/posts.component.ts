import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = [
    {
      id: 1,
      title: 'Feijão tropeiro',
      date: '30 de Agosto de 2021',
      receita: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagem: 'https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg'
    },
    {
      id: 2,
      title: 'Feijão tropeiro',
      date: '30 de Agosto de 2021',
      receita: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagem: 'https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg'
    },
    {
      id: 3,
      title: 'Feijão tropeiro',
      date: '30 de Agosto de 2021',
      receita: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagem: 'https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg'
    },
    {
      id: 4,
      title: 'Feijão tropeiro',
      date: '30 de Agosto de 2021',
      receita: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      imagem: 'https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  detalhereceita(id: number) {
    console.log(id)
  }

}
