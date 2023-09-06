import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-categories',
  templateUrl: './project-categories.component.html',
  styleUrls: ['./project-categories.component.scss']
})
export class ProjectCategoriesComponent implements OnInit {
  slug:any;
  categoryName:any;
  categoryBySlug:any=[]
  projectById:any=[]

  

  constructor(private _service:ServicesService , private route:ActivatedRoute ) { 
    this.slug = this.route.snapshot.paramMap.get("slug")
  }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this._service.getCategoryDetails(this.slug).subscribe(
      databycategory =>
      {
        this.categoryBySlug=databycategory.data
        this.categoryName=databycategory.category
        console.log(databycategory)
      }
    )
  }


}
