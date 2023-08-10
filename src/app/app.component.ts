import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task';

<<<<<<< HEAD
  ngAfterViewInit()
=======
    ngAfterViewInit()
>>>>>>> c0531a4d6285e5825b5d634d12fb4f9a9585e7a4
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
