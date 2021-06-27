import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

   status:false;

    itemsList=[
      {name:"Pizza",price:120, status:false},
      {name:"Cheese",price:180, status:false},
      {name:"Mushroom",price:240, status:false},
      {name:"Ice Cream",price:320, status:false},
      {name:"Tomato Soup",price:80, status:false},
  ];
   
    subtotal=0;
    tip=0 ;

    total=0;

   
  

 ngOnInit(): void {
   
 
}

getPrice(price,status){
    if (status==false){
      this.subtotal+= price;
    }else{
      this.subtotal-=price;
    }
 
  
}

tipPer(tip){
     this.total = (tip*this.subtotal)/100  + this.subtotal; 
}


}
