import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  newUserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[0-9]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    course: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required)
  })

  get nameControl() {
    return this.newUserForm.get('name');
  }

  get lastnameControl() {
    return this.newUserForm.get('lastname');
  }

  get phoneControl() {
    return this.newUserForm.get('phone');
  }

  get mailControl() {
    return this.newUserForm.get('email');
  }

  get courseControl() {
    return this.newUserForm.get('course');
  }

  get countryControl() {
    return this.newUserForm.get('country');
  }

  onSubmit() {
    if(this.newUserForm.valid) {
      Swal.fire({
        title: 'Guardado',
        text: 'El nuevo usuario fue creado con éxito',
        icon: 'success'
      })
      this.newUserForm.reset();
    }else {
      Swal.fire({
        title: 'Creación fallida',
        text: 'Verifique la información del formulario',
        icon: 'error'
      })
      this.newUserForm.markAllAsTouched();
    }

  }
}
