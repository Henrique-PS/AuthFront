import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent {
  public formAuth: FormGroup = this.formBuilder.group({
    email: [''/* valor do campo */, [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  public submitForm(){
    if(this.formAuth.valid){
      console.log('op')
    }
  }

  constructor(private formBuilder: FormBuilder) {}
}
