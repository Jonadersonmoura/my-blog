import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostsService } from 'src/app/@core/service-http/posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  template: `
    <h2 mat-dialog-title>{{ data.titulo }}</h2>
    <mat-dialog-content class="mat-typography">
      <h3>Tem certeza que deseja excluir essa receita?</h3>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="true" cdkFocusInitial (click)="removePost()">Excluir</button>
    </mat-dialog-actions>
  `,
  styles: [

  ]
})
export class DialogConfirmComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private postsService: PostsService,
    private _snackBar: MatSnackBar,
  ) { }

  removePost() {
    const messeger = `${this.data.titulo} apagado com Sucesso!`
    this.postsService.deletePost(this.data.id).then(() => {
      this._snackBar.open(messeger, 'fechar', {
        duration: 5000
      })
    })
  }
}
