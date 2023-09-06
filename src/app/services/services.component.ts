import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  createContactForm=new FormGroup({
    name:new FormControl(''),
    phone:new FormControl(''),
    inquiry:new FormControl('')
  })

  allServices:any=[]
  constructor(private wowService:NgwWowService , private _service:ServicesService) { 
    this.wowService.init(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       300,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
      }
    );
  }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this._service.getAllServices().subscribe(
      data =>
      {
        this.allServices=data 
        console.log(this.allServices)
      }
    )
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
