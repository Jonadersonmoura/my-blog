import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/@core/service-http/posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  formCadastrar;
  idReceita = '';

  constructor(private fb: FormBuilder,
    private router: ActivatedRoute,
    private postsService: PostsService,
    private _snackBar: MatSnackBar) {
    this.formCadastrar = this.fb.group({
      titulo: [null, [Validators.required]],
      imagem: [null, [Validators.required]],
      date: [null],
      receita: [null, [Validators.required]],
      comentarios: [null]
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(response => {
      this.idReceita = response.id;
    })

    if (this.idReceita) {
      this.postsService.getPostId(this.idReceita).subscribe(response => {
        this.formCadastrar.patchValue(response)
      })
    }
  }

  save() {
    this.formCadastrar.controls.date.setValue(new Date().toString())
    if (this.idReceita) {
      this.postsService.editPost(this.idReceita, this.formCadastrar.value)
        .then(() => {
          this._snackBar.open(`Receita ${this.formCadastrar.controls.titulo.value} adicionada com sucesso!`, 'fechar', {
            duration: 5000
          })
          this.formCadastrar.reset()
          this.formCadastrar.controls.titulo.setErrors(null)
          this.formCadastrar.controls.imagem.setErrors(null)
          this.formCadastrar.controls.receita.setErrors(null)
        })
    } else {
      this.postsService.newPost(this.formCadastrar.value)
        .then(() => {
          this._snackBar.open(`Receita ${this.formCadastrar.controls.titulo.value} adicionada com sucesso!`, 'fechar', {
            duration: 5000
          })
          this.formCadastrar.reset()
          this.formCadastrar.controls.titulo.setErrors(null)
          this.formCadastrar.controls.imagem.setErrors(null)
          this.formCadastrar.controls.receita.setErrors(null)
        })
    }
  }

}
