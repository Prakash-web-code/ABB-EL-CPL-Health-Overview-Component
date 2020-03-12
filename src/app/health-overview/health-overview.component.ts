import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-health-overview',
  templateUrl: './health-overview.component.html',
  styleUrls: ['./health-overview.component.css']
})
export class HealthOverviewComponent implements OnInit {
  healthTitle = 'Health Overview';

  constructor() { }
  highcharts = Highcharts;
 
  chartOptions = {   
     chart : {
      backgroundColor: null,
        plotBorderWidth: null,
        plotBackgroundColor: null,
        plotShadow: false,
        height: 400,
        width: 390
     },
     title : {
        text: '150',
        align: 'center',
        verticalAlign: 'middle',
        y: 20,
        x:-55,
        style: {
          fontWeight: 'bold',
          color: '#1F1F1F',
          fontSize: "44px",
          letterSpacing: "-3px"
    },   
     },
     subtitle: {
      text: 'Total assets',
      align: 'center',
        verticalAlign: 'middle',
        y: 25,
        x:-45,
        style: {
          color: '#1F1F1F',
          fontSize: "14px"
    },
  },
     credits: {
      enabled: false
  },
     tooltip : {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
     },
     plotOptions : {
       pie: {
         dataLabels: {
             enabled: false,
             distance: -100,
             style: {
                 fontWeight: 'bold',
                 color: 'red'
           },
           
         },
         startAngle: -360,
         endAngle: 360,
         center: ['48%', '45%'],
         size: '110%'
     }
     },
     legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      y: 100,
      x: 20,
      symbolHeight: 8,
      symbolWidth: 8,
      symbolRadius: 0
  },
     series : [{
      colorByPoint: true,
      data: [{
        name: '120 Active',
        y: 86,
        color: '#0CA919',
      }, {
        name: '3 Warnings',
        y: 8,
        color: '#FF7300',
      }, {
        name: '1 Critical',
        y: 1,
        color: '#F03040',
      }, {
        name: '26 Inactive',
        y: 5,
        color: '#DBDBDB',
      }],
      type: 'pie',
       name: 'Browser share',
       innerSize: '84%', 
      showInLegend: true,
     }],
     responsive: {
      rules: [{
          condition: {
              maxWidth: 250
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              }
          }
      }]
  }
  };
  ngOnInit(): void {
  }

}
