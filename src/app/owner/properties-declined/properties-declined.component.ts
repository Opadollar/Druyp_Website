import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-properties-declined',
  templateUrl: './properties-declined.component.html',
  styleUrls: ['./properties-declined.component.scss']
})
export class PropertiesDeclinedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function applyCounter() {
      var counterele = $('.product-quantity');
      for (var i = 0; i < counterele.length; i++) {
        var counterId = $(counterele[i]).attr('id');
        console.log(counterId);
        quantityCounter(counterId);
      }
    }
    function quantityCounter(idattr) {
      var minus_btn = $('#' + idattr).find('.minusquant');
      var plus_btn = $('#' + idattr).find('.plusquant'),
        input = $('#' + idattr).find('input'),
        exactval = $(input).val(),
        minval = $(input).attr('minval'),
        maxval = $(input).attr('maxval');

      $(minus_btn).click(function () {
        if (exactval == minval) {
          return false;
        }
        else {
          exactval--;
          $(input).val(exactval);
        }
      })
      $(plus_btn).click(function () {
        if (exactval == maxval) {
          return false;
        }
        else {
          exactval++;
          $(input).val(exactval);
        }
        // console.log(exactval);
      })
    }
    applyCounter();
  }

}
