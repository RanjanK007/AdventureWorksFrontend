import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sales,Custom} from '../interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
inputValue:string='';
inputValueParsed:number=0;
displayTable:boolean=false;
displaySubTable:boolean=false;

sales:Sales[]=[
  {
    order_year:2004,
    time_to_ship:7,
    total:1000,
  },
  {
    order_year:2004,
    time_to_ship:8,
    total:1200,
  },
  {
    order_year:2004,
    time_to_ship:7,
    total:1300,
  },
  {
    order_year:2004,
    time_to_ship:8,
    total:1500,
  }
];

records:Custom[]=[
  {
    order_date:new Date('31-Dec-2004'),
    ship_date:new Date('31-Dec-2004'),
    sales_order_id:456,
    contact_name:'William Hapke',
    total:2000,
  },
  {
    order_date:new Date('31-Dec-2004'),
    ship_date:new Date('31-Dec-2004'),
    sales_order_id:456,
    contact_name:'William Hapke',
    total:2000,
  },
  {
    order_date:new Date('31-Dec-2004'),
    ship_date:new Date('31-Dec-2004'),
    sales_order_id:456,
    contact_name:'William Hapke',
    total:2000,
  },
  {
    order_date:new Date('31-Dec-2004'),
    ship_date:new Date('31-Dec-2004'),
    sales_order_id:456,
    contact_name:'William Hapke',
    total:2000,
  },
]
handleButtonClick(){
  this.displayTable=true;
  console.log(this.inputValue);
  console.log('Button clicked! Input Value: ',this.inputValueParsed);
}
handleInputChange(){
console.log(this.inputValue);
this.inputValueParsed=parseInt(this.inputValue,10);
}

expandRow(){
  this.displaySubTable=!this.displaySubTable
  console.log('I got clicked');
}


searchGoogle(){
window.open(`http://www.google.com?q=William`)
}
}