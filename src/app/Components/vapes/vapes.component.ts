import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vapes",
  templateUrl: "./vapes.component.html",
  styleUrls: ["./vapes.component.css"]
})
export class VapesComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
  }
  getUrl(){
    return '../../../vape/src/utils/img/Background.png';
  }
  si:boolean =false;
  anim(){
    this.si = true;
    // setTimeout(function(){ this.si = false }, 5000);
  }
  product: any[] = [// Consumir mediante servicio 
    {
      id: 121,
      title: "xxxxx",
      price: 320000,
      url: '../../../vape/src/utils/img/vape1.png'
    },
    {
      id: 121,
      title: "xxxxx",
      price: 250000,
      url: '../../../vape/src/utils/img/vape2.png'
    },
    {
      id: 121,
      title: "xxxxx",
      price: 750000,
      url: '../../../vape/src/utils/img/vape3.png'
    },
    {
      id: 121,
      title: "xxxxx",
      price: 120000,
      url: '../../vape/src/utils/img/vape4.png'
    },
    {
      id: 121,
      title: "xxxxx",
      price: 230000,
      url: '../../vape/src/utils/img/vape5.png'
    },
    {
      id: 121,
      title: "xxxxx",
      price: 560000,
      url: '../../vape/src/utils/img/vape6.png'
    },
    {
      id: 121,
      title: "xxxxx",
      price: 180000,
      url: '../../vape/src/utils/img/vape7.png'
    },
    {
      id: 121,
      title: "xxxxx",
      price: 350000,
      url: '../../vape/src/utils/img/vape8.png'
    }
  ];
}
