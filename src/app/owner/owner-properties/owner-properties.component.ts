import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-properties',
  templateUrl: './owner-properties.component.html',
  styleUrls: ['./owner-properties.component.scss']
})
export class OwnerPropertiesComponent implements OnInit {

  public slideConfig = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
