import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  createContactForm=new FormGroup({
    YourName:new FormControl(''),
    phoneNumber:new FormControl(''),
    YourInquiry:new FormControl('')
  })

  allVideos:any =[]

  constructor(private _service:ServicesService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this._service.getAllVideos().subscribe(
      data =>
      {
        this.allVideos=data 
        console.log(this.allVideos)
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
