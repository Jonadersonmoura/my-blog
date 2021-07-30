import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title = 'Feijão tropeiro';
  date = '30 de julho de 2021';
  receita = `
  <p>Receita simples e super nutritiva
  Essa receita de feijão tropeiro é muito legal, pois leva vários ingredientes, mas é super simples de ser preparada.
  
  Basta cozinhar o feijão (nesse caso, usei o roxinho) e deixar ele num ponto macio, mas não pode desmanchar. E em seguida, basta ir acrescentando os demais ingredientes que a receita pede, seguindo o modo de preparo, para que ele fique uma delícia. 
  
  Fritar bem o bacon e a linguiça, refogar bastante a cebola e o alho, são dicas simples, mas que vão deixar o seu feijão tropeiro muito mais gostoso. Siga o modo de preparo aqui na receita,  e eu te garanto que seu prato ficará uma delícia. 
  
  Ah, e pode servir com um arroz branco simples, mas, convenhamos, ele nem precisa de muita coisa, pois já é uma delícia por si só! Aproveite.
  </p>
  O que combina com feijão tropeiro: <br>
  ARROZ BRANCO
  CALDO DE FEIJÃO<br>
  FAROFA COM BACON<br>
  COUVE CROCANTE<br>
  COSTELA AO MOLHO DE LARANJA E MEL <br>
  Rendimento: 6 porçõesAproximadamente 230 kcal por porção<br>
  Preparo: 20 minutosRealização: 30 minutos<br>
  Categoria: comida brasileiraCozinha: brasileira<br>
  Disponível em: 02/03/2020Por: Lucilaine<br>
  Palavras-chaves: almoço de domingo, como fazer feijão tropeiro, comida mineira, cardápio, simples, fácil, rápido, salada, acompanhamento
  <br>
  <h1> Ingredientes</h1>
  * Feijão-roxinho (eu não encontrei, então usei o feijão bolinha): 2 xíc. (chá)<br> 
  * Folhas de louro: 1 unidade<br>
  * Bacon: 50 g<br>
  * Linguiça calabresa: 2 unidades<br>
  * Alho amassado: 2 dente(s)<br>
  * Cebola média picada: 1 unidade<br>
  * Ovos: 3 unidades<br>
  * Couve manteiga fatiada: 5 unidades<br>
  * Farinha de mandioca crua: 1 e 1/2 xíc. (chá)<br>
  <p>
  Modo de preparo:
  
  Cozinhe o feijão com a folha de louro na panela de sua preferenica, até que os grãos fiquem macios, mas sem desmanchar. 
  
  Após o cozimento, retire toda a agua do feijão e a folha de louro, deixando somente os grãos.
  
  Frite o bacon e a liguiça, escorra o excesso de gordura e junte o alho e a cebola, deixando refogar até dourar.
  
  
  Adicione os ovos, mexendo sempre, até que estejam cozidos.
  
  Junte o feijão, o caldo de carne dissolvido em meia xícara (chá) de água quente e a couve.
  
  Misture bem todos os ingredietes e deixe cozinhar para que o sabor incorpore na mistura.
  
  Por ultimo, acrescente a farinha, misturando bem e sirva em seguida.
  </p>
  `;
  imagem = 'https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg'

  constructor() { }

  ngOnInit(): void {
  }

}
