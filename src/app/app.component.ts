import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task';
  
  showIcon:boolean=false;
  
  ngAfterViewInit()
  {
    
$(window).scroll(function(){
  let x=$(window).scrollTop();
  if( x>300)
    {
      $('.button-up').css('display','block')
    }
  else 
    {
      $('.button-up').css('display','none')
    }
    })
  
  
    $('.button-up').click(function(){
      $('html,body').animate({scrollTop:'0'},900)
    })
  }
}


