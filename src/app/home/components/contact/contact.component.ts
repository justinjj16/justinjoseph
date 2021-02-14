import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery'
import { environment } from '../../../../environments/environment.prod';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactmeForm: FormGroup;
  emailvalidator = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.contactmeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailvalidator)]],
      message: ['']
    })
  }

  ngOnInit() {
  }
  contactme(e) {
    if (this.contactmeForm.valid) {
      e.preventDefault()
      $.ajax({
        url: environment.apiUrl,
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
        },
        error: function (err) {

        }
      })
      this.toastr.info('Please Wait...', '', {
        timeOut: 7000,
        progressAnimation: 'increasing',
        progressBar: true,
      });
      setTimeout(() => {
        this.contactmeForm.reset();
        this.toastr.clear();
        this.toastr.success("Thanks will contact via Email")
      }, 7000)

    } else {
      this.toastr.error('Please fill Correctly');
    }

  }
}
//https://script.google.com/macros/s/AKfycbxnEfk16ttETbOa4i4_bfNxGbK8jpenQoROC07znA/exec