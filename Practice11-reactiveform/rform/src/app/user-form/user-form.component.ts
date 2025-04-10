import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      people: this.fb.array([this.createPerson(true)]),
      terms: [false, Validators.requiredTrue],
    });
  }

  createPerson(isFirstPerson: boolean = false): FormGroup {
    const formGroup: any = {
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', Validators.required],
    };

    if (isFirstPerson) {
      formGroup.email = [
        '',
        [
          Validators.required,
          Validators.email,
          //Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ],
      ];
      formGroup.password = ['', [Validators.required, Validators.minLength(6)]];
    }

    return this.fb.group(formGroup);
  }

  get people(): FormArray {
    return this.userForm.get('people') as FormArray;
  }

  addPerson(): void {
    this.people.push(this.createPerson());
  }

  removePerson(index: number): void {
    if (this.people.length > 1) {
      this.people.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      alert('Form submitted successfully!');
      console.log('Form Submitted!', this.userForm.value);
    } else {
      alert('Please fill out the form correctly.');
      console.log('Form is not valid');
    }
  }
}
