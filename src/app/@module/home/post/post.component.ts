import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/@core/service-http/posts.service';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  idReceita = '';
  post: any;
  comments: any;
  formComentarios;

  constructor(private router: ActivatedRoute,
    private postsService: PostsService,
    private fb: FormBuilder) {
    this.formComentarios = this.fb.group({
      nome: [null, [Validators.required]],
      date: [null],
      comentario: [null, [Validators.required]]
    })
  }

  async ngOnInit() {
    this.router.params.subscribe(response => {
      this.idReceita = response.id;
    })

    this.postsService.getPostId(this.idReceita).subscribe(response => {
      this.post = response;
    })

    this.postsService.getCommentsPostId(this.idReceita).subscribe(response => {
      this.comments = response
    })
  }

  convertDate(date: any) {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }

  save() {
    this.formComentarios.get('date')?.setValue(new Date().toString())
    this.postsService.editPostComment(this.idReceita, this.formComentarios.value).then(() => {
      this.formComentarios.reset(this.formComentarios)
      this.formComentarios.controls.nome.setErrors(null)
      this.formComentarios.controls.date.setErrors(null)
      this.formComentarios.controls.comentario.setErrors(null)
    })
  }

}
