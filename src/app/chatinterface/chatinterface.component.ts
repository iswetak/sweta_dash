import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-chatinterface',
  templateUrl: './chatinterface.component.html',
  styleUrls: ['./chatinterface.component.scss']
})
export class ChatinterfaceComponent  implements OnInit  {

  constructor() { }

  ngOnInit() {
    // $(".dropdown-menu li a").click(function(){
  
    //   $(".btn:first-child").html($(this).text()+' <span class="caret"></span>');
      
    // });

  //   $(document).ready(function () {
  //     $('input[type="submit"]').attr('disabled', true);
  //     $('input[type="text"],textarea').on('keyup', function () {
  //         var textarea_value = $("#texta").val();
  //         var text_value = $('input[name="textField"]').val();
  //         if (textarea_value != '' && text_value != '') {
  //             $('input[type="submit"]').attr('disabled', false);
  //         } else {
  //             $('input[type="submit"]').attr('disabled', true);
  //         }
  //     });
  // });
  $("button").on("click", function() {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }
  });
  }

}
