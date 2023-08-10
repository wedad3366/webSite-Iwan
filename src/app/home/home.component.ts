import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private wowService:NgwWowService) { 
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
     // show the icons when reach the section 

    const animate = document.querySelectorAll('.show-icon')
    const options = {
      threshold: 0
    }
    const observer = new IntersectionObserver((entries)=>
    {
      console.log(entries)
      entries.forEach(el => {
        el.target.classList.toggle('animate' , el.isIntersecting)
      })
    },options)

    animate.forEach(showIcon=>{
      observer.observe(showIcon)
    })

    // Increase the numbers when reach the section 

    let numberDisplays = document.querySelectorAll('.number')
    let interval = 4000;

    numberDisplays.forEach((numberDisplay:any)=>
      {
        let startNumber = 0;
        let endNumber = parseInt(numberDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endNumber);
        let counter = setInterval(function()
        {
          startNumber += 1;
          numberDisplay.textContent = startNumber ;
          if(startNumber == endNumber)
          {
            clearInterval(counter);
          }
        } , duration)
      });
  }


  
}
