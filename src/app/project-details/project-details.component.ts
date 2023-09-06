import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ServicesService } from '../services.service';
declare var $: any;

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {


  slug:any;
  slugName:any;
  images:any=[];
  projectName:any;
  projectCategory:any;

  constructor(private route:ActivatedRoute , private _service:ServicesService) {
    this.slug = this.route.snapshot.paramMap.get("slug")
   }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {   
    this._service.getprojectDetails(this.slug).subscribe(data =>{
    this.projectName=data.name
    this.slugName=data.slug
    this.images=data.images
    this.projectCategory=data.category
     console.log(this.images)
    }
    )

  }

}
