import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {



  constructor(
    private alert: AlertService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    // this.bankService.getAll().subscribe((res: any) => {
    //   this.bankList = res as BankDTO[];
    // });

  }

  onSubmit(ngForm: NgForm, role: 'ADMIN' | 'CUSTOMER') {

    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }



    const credentials = ngForm.form.value;
    this.auth.register(credentials, role);
    ngForm.resetForm();

  }



}
