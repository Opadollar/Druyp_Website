import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-list-new-property',
  templateUrl: './list-new-property.component.html',
  styleUrls: ['./list-new-property.component.scss']
})
export class ListNewPropertyComponent implements OnInit {

  public cartArray: any = [];



  listNewProperty = new FormGroup({

  })

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

  triggerFileInput(event) {
    var ele = event.target || event.srcElement || event.currentTarget;
    var target_ele = ele as HTMLElement;
    var input_ele = target_ele.dataset.file;
    console.log(input_ele);
    var fileinput = document.getElementById(input_ele);
    fileinput.click();
  }
  getProfilePic(event) {
    var ele = event.target || event.srcElement || event.currentTarget as HTMLElement;
    console.log(ele.value);
  }

  // ----- counter



}
