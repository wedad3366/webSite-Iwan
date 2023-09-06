import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  createContactForm=new FormGroup({
    name:new FormControl(''),
    phone:new FormControl(''),
    inquiry:new FormControl('')
  })

  id:any
  allProjects:any=[]
  allCategories:any=[]

  constructor(private _service:ServicesService , private route:ActivatedRoute ) { 
    this.id = this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this._service.getAllProjects().subscribe(
      data =>
      {
        this.allProjects=data 
        console.log(this.allProjects)
      }
    )

    this._service.getAllCategories().subscribe(
      data=>{
        this.allCategories=data
        console.log(this.allCategories)
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
