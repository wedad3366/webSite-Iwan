import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  createContactForm=new FormGroup({
    name:new FormControl(''),
    phone:new FormControl(''),
    inquiry:new FormControl('')
  })

  allProjects : any=[]
  allCategories:any=[]
  allServices:any=[]
  allcollaborators:any=[]
  
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

      this._service.getAllProjects().subscribe(
        data =>
        {
          this.allProjects=data 
          console.log(this.allProjects)
        }
      )

      /////////////////

      this._service.getAllCategories().subscribe(
        data=>{
          this.allCategories=data
          console.log(this.allCategories)
        }
      )

      ///////////////////////

      this._service.getAllServices().subscribe(
        data => {
          this.allServices=data
          console.log(this.allServices)
        }
      )

      ////////////////////

      
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


  filterCategory(event:any)
  {
    let value =event.target.value;
    console.log(value)

    if(value == "all")
      {
        this._service.getAllProjects().subscribe(
          data =>
          {
            this.allProjects=data 
            console.log(this.allProjects)
          }
        )
      } 
      else
      {
        this._service.getCategoryHomeDetails(value).subscribe(
          dataByCategory =>
          {
            this.allProjects=dataByCategory 
            console.log(this.allProjects)
          }
        )
      }

  
  }

  
}
