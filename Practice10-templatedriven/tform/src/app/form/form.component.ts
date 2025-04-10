import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  submitted = false;
  submittedData = { name: '', email: '' };

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
      this.submittedData = form.value;
    }
  }
}
