import {  Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-exampletable',
  templateUrl: './exampletable.component.html',
  styleUrls: ['./exampletable.component.scss']
})
export class ExampletableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  

  $(document).ready(function () {
    $('input[type="submit"]').attr('disabled', true);
    $('input[type="text"],textarea').on('keyup', function () {
        var textarea_value = $("#texta").val();
        var text_value = $('input[name="textField"]').val();
        if (textarea_value != '' ) {
            $('input[type="submit"]').attr('disabled', false);
        } else {
            $('input[type="submit"]').attr('disabled', true);
        }
    });

  });
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