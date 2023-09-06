import { Component, OnInit } from '@angular/core';
declare var $: any;



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  
  }

  ngAfterViewInit(): void {

    let x = $(".big-nav").offset().top;

    $(window).scroll(function () {
      let widthScreen = $(window).width()

      if (widthScreen > 1280) {
        let y = $(window).scrollTop();
        if (y > x){   
          $(".big-nav").css("top", "0%");
        }
        else {
          $(".big-nav").css("top", "10.2%");
        }
      }
      else if (widthScreen <= 1280) {
        $(".big-nav").css("top", "0%");
      }
    }
    )
  }



}
