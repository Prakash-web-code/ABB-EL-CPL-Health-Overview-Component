import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-health-overview',
  templateUrl: './health-overview.component.html',
  styleUrls: ['./health-overview.component.css']
})
export class HealthOverviewComponent implements OnInit {

  constructor() { }
  highcharts = Highcharts;
  chartOptions = {   
     chart : {
        plotBorderWidth: null,
        plotShadow: false,
        height: 300,
           width: 256
     },
     title : {
        text: 'Health Overview'   
     },
     tooltip : {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions : {
       pie: {
         dataLabels: {
             enabled: true,
             distance: -100,
             style: {
                 fontWeight: 'bold',
                 color: 'red'
           },
           showInLegend: true
         },
         startAngle: -360,
         endAngle: 360,
         center: ['53%', '45%'],
         size: '110%'
     }
     },
     legend: {
        width: 200,
        layout: 'vertical',
        useHTML: true,
        labelFormatter: function () {
            return "<div style='width:200px;'><span style='float:left;'>" + this.name + "</span><span style='float:right;margin-right: 30px;'>" + this.y + " kWh</span></div>";
        }
    },
     series : [{
        type: 'pie',
       name: 'Browser share',
       innerSize: '86%',
        data: [
         ['Chrome', 88],
         ['Firefox', 4],
         ['Internet Explorer', 4],
         ['Edge', 4],
        ]
     }]
  };
  ngOnInit(): void {
  }

}
