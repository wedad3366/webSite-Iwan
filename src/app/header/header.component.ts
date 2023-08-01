import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit():void{

    let x = $("header").offset().top;
      $(window).scroll(function(){
  
        let y= $(window).scrollTop();
        if(y > x)
        {
          $("header").css("top" , "0%"); 
        }
        else{
          $("header").css("top" , "10.3%");
        }
      }
      )
  
      $(window).resize(function(){
        let oldwindow=$(window).width()
        if(oldwindow<=1000)
        {
          $(".small-nav").css("display" , "none");
          $("header").css("top" , "0%");

          let x = $("header").offset().top;
          $(window).scroll(function(){
      
            let y= $(window).scrollTop();
            if(y > x)
            {
              $("header").css("top" , "0%"); 
            }
            else if (y<x){
              $("header").css("top" , "0%");
            }
          }
          )

        }
        else{
          $(".small-nav").css("display" , "block");
          $("header").css("top" , "10.3%");
          let x = $("header").offset().top;
          $(window).scroll(function(){
            let y= $(window).scrollTop();
            if(y > x)
            {
              $("header").css("top" , "0%"); 
            }
            else{
              $("header").css("top" , "10.3%");
            }
          }
          )
        }
      })
     
  
  }


}
