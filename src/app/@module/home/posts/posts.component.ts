import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/authentication/auth.service';
import { PostsService } from 'src/app/@core/service-http/posts.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from './dialog-confirm.component';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  logado: boolean = false;

  posts: any;

  constructor(private router: Router,
    private authService: AuthService,
    private postsService: PostsService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe(response => {
      this.logado = response;
    })

    this.postsService.getPosts().subscribe(response => {
      this.posts = response.map((item: any) => {
        return {
          id: item.payload.doc.id,
          titulo: item.payload.doc.data()['titulo'],
          imagem: item.payload.doc.data()['imagem'],
          receita: item.payload.doc.data()['receita'],
          date: this.convertDate(item.payload.doc.data()['date'])
        }
      })
    });
  }

  convertDate(date: any) {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  detalhereceita(id: number) {
    this.router.navigate([`post/${id}`])
  }

  editarPost(id: number) {
    this.router.navigate([`edit-post/${id}`])
  }

  removerPost(id: string, titulo: string) {
    const dialog = this.matDialog.open(DialogConfirmComponent, {
      data: {
        id: id,
        titulo: titulo
      }
    })

  }

}
