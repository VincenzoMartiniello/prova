import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  constructor(private title:Title){
    this.title.setTitle("Chart");
  }
public barChartOptions={
    scaleShowVerticalLines:false,
    responsive:true
  }
public barChartType="bar";
public barChartLegend="true";
public barChartLabels=['2006','2007','2008','2009','2010','2011','2012'];
public barChartData=[
  {data:[65,59,80,81,56,55,40],label:'Series A'},
  {data:[28,48,40,19,86,27,90],label:'Series B'},
  {data:[28,48,40,19,86,27,90],label:'Series C'},
]
}