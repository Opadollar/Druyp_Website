import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slideConfig = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<img src="assets/images/icons/ic_arrow_right.png" class="rightarrow">',
    prevArrow: '<img src="assets/images/icons/ic_arrow_left.png" class="leftarrow">',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: null,
          prevArrow: null,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: null,
          prevArrow: null,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  public slideConfigMockup = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<img src="assets/images/icons/ic_arrow_right.png" class="rightarrow">',
    prevArrow: '<img src="assets/images/icons/ic_arrow_left.png" class="leftarrow">',
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  public products = [
    {
      "id": "1",
      "nametitle": "315 Lorem Park, London, UK",
      "price": "1850",
      "bedrooms": "5",
      "bathrooms": "3",
      "size": "1850",
      "imgurl": "./assets/images/products/img_2.jpg"
    },
    {
      "id": "2",
      "nametitle": "Little white house",
      "price": "1780",
      "bedrooms": "4",
      "bathrooms": "2",
      "size": "1540",
      "imgurl": "./assets/images/products/ic_booked_property_2.png"
    },
    {
      "id": "3",
      "nametitle": "The brown cottage",
      "price": "1760",
      "bedrooms": "2",
      "bathrooms": "6",
      "size": "950",
      "imgurl": "./assets/images/products/img_3.jpg"
    },
    {
      "id": "4",
      "nametitle": "Little white house",
      "price": "1780",
      "bedrooms": "4",
      "bathrooms": "2",
      "size": "1540",
      "imgurl": "./assets/images/products/ic_booked_property_2.png"
    },
  ]

  public mockupslider = [
    {
      "id": "1",
      "imgurl": "assets/images/pictures/our_app_mobile_1.png"
    },
    {
      "id": "2",
      "imgurl": "assets/images/pictures/our_app_mobile_2.png"
    },
    {
      "id": "3",
      "imgurl": "assets/images/pictures/our_app_mobile_3.png"
    },
    {
      "id": "4",
      "imgurl": "assets/images/pictures/our_app_mobile_1.png"
    }
  ]


  // carousel


  searchFilter = new FormGroup({});


  constructor() { }

  ngOnInit(): void {
  }

  onClickFilterBtn(event) {
    //-------- Focus on Filter Select ---------
    // debugger;
    var parentNode = document.querySelector('#filterSearch');
    var ele_target = event.target || event.srcElement || event.currentTarget;
    var clickedele = event.target as HTMLElement;
    if (clickedele.nodeName == 'BUTTON') {
      var data_attr = clickedele.dataset.select;
      console.log(data_attr);
      var select_box = document.getElementById(data_attr);
      setTimeout(() => {
        select_box.onchange;
      }, 10)
    } else {
      console.log(clickedele.nodeName);
    }
    // if (clickedele.tagName == 'button') {
    //   // var attr_val = data_attr.nodeValue;
    //   console.log('hii');
    // }

  }

  getSelectVal(event) {
    // debugger;
    var ele_target = event.target || event.srcElement || event.currentTarget as HTMLElement;
    console.log(ele_target.value);
  }


}
