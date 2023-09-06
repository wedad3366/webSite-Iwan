import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss']
})
export class CollaboratorsComponent implements OnInit {
  createContactForm=new FormGroup({
    name:new FormControl(''),
    phone:new FormControl(''),
    inquiry:new FormControl('')
  })

  allcollaborators:any=[]
  constructor(private wowService:NgwWowService, private _service:ServicesService) { 
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


  ngAfterViewInit(): void {

    this._service.getAllcollaborators().subscribe(
      data =>
      {
        this.allcollaborators=data 
        console.log(this.allcollaborators)
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
