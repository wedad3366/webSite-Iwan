import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  createContactForm=new FormGroup({
    name:new FormControl(''),
    phone:new FormControl(''),
    inquiry:new FormControl('')
  })

  constructor(private _service:ServicesService) { }

  ngOnInit(): void {
  }

  dataOfForm:any 
  contactUs(data:any)
  {
    this.dataOfForm=data.value
    this._service.createContactForm(this.dataOfForm).subscribe(data=>{
      console.log(this.dataOfForm)
      alert("your inquiry send")
    }
    ,
     error =>
    {
      alert("error")
    }
    )
  }

}
