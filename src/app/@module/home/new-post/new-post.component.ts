import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  formCadastrar;
  idReceita = 0;

  constructor(private fb: FormBuilder,
    private router: ActivatedRoute) {
    this.formCadastrar = this.fb.group({
      titulo: [null, [Validators.required]],
      imagem: [null, [Validators.required]],
      receita: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.router.params.subscribe(response => {
      this.idReceita = response.id;
    })
  }

}
