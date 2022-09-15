import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() img!: string;

  imageDefault = "https://www.redeszone.net/app/uploads-redeszone.net/2021/09/Error-404-01-e1633683457508.jpg" 
  
  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    //aca tambien puedo configurar la imagen en error
    console.log("imagen por defecto");
    
  }

}
