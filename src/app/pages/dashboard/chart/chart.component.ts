import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Chart, ChartOptions, Plugin, registerables } from "chart.js";

import { randomData } from './../../../shared/utilities/app.function';

Chart.register(...registerables);

@Component({
 selector: "app-chart",
 templateUrl: "./chart.component.html",
 styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
 private chartInstance?: Chart;

 constructor() {}

 ngOnInit() {
   //Chart.defaults.plugins.legend
   //Chart.defaults.backgroundColor = "#293A58";
   // Chart.defaults.interaction.intersect = true;
   // Chart.defaults.interaction.mode = 'index'
 }

 ngAfterViewInit(): void {
   const me = this;
   me.initChart();
 }

 private initChart(): void {
   const me = this;
   const interval = setInterval(() => {
     const chartEl = document.getElementById("chartId") as HTMLCanvasElement;
     if (!!chartEl) {
       const ctx = chartEl.getContext("2d");
       if (ctx) {
         const options: ChartOptions<any> = me.getConfigOptionsChart();
         const data = me.getDataChart();
         me.chartInstance = new Chart(ctx, {
           type: "line",
           data,
           options,
         });
         clearInterval(interval);
       }
     }
   }, 10);
 }

 private updateDatasetsChart(): void {}

 private getDataChart() {
   const me = this;
   const datasets = me.getDatasetsChart();
   const labels = me.getLabelsChart();
   return {
     labels,
     datasets,
   };
 }

 private getDatasetsChart() {
   const canvas = document.getElementById(
     'chartId'
   ) as HTMLCanvasElement | null;

   const ctx = canvas!.getContext('2d');
   const gradient = ctx!.createLinearGradient(0, 0, 0, 310);
   gradient.addColorStop(0, 'rgba(222, 226, 235, 0.753)');
   gradient.addColorStop(1, 'rgba(121,136,163,0)');
   const fakeDatasets = [
     {
       label: "New Patients",
       data: [
         ...Array(200)
           .fill(2)
           .map((item) => randomData(0, 8)),
       ],
       backgroundColor:gradient,
       borderColor: "#8146FF",
       tension: 0.5,
       fill: true,
       pointRadius: [5, 5, 5, 5],
       pointBackgroundColor: ["#8146FF", "#8146FF", "#8146FF", "#8146FF"],
       pointBorderColor: "#fff",
       pointBorderWidth:[2],
        showLine:true
     },
     {
       label: "Old Patients",
       data: [
         ...Array(20)
           .fill(2)
           .map((item) => randomData(0, 8)),
       ],
       backgroundColor:gradient,
       borderColor: "#0075FF",
       tension: 0.5,
       fill: true,
       pointRadius: [5, 5, 5, 5],
       pointBackgroundColor: ["#0075FF", "#0075FF", "#0075FF", "#f0075FFff"],
       pointBorderColor: "#fff",
       pointBorderWidth:[2],
       showLine:true
     },
   ];
   return fakeDatasets;
 }

 private getLabelsChart() {
   const labels: string[] = [];
   Array(12)
     .fill(0)
     .map((_, index: number) => {
       const monthName = new Date();
       monthName.setMonth(index);
       labels.push(
         monthName.toLocaleDateString("default", { month: "short" })
       );
     });
   return labels;
 }

 private getConfigOptionsChart() {
   const me = this;
   const plugins = me.getConfigPluginsChart();
   return {
     responsive: true,
     plugins,
     interaction: {
       mode: "index",
       intersect: false,
       position: "nearest",
     },
     scales: {
       x: {
         grid:{
           color: 'rgba(200, 200, 200, .1)'
         }
       },
       y: {
         grid: {
           color: function (context:any) {
             if(context.tick.value < 1){
               return 'rgba(200, 200, 200, .1)'
             } 
             return '';
           }

         }
       },
     },
   };
 }

 private getConfigPluginsChart() {
   return {
     legend: {
       labels: {
         usePointStyle: true,
         pointStyle: "rectRounded",
       },
     },
     title: {
       display: true,
       text: "Hospital Survey",
       align: "start",
       padding: {
         top: 10,
         bottom: 10,
        
       },
       font: {
        weight: 300,
        size: 20,
        family:"'Inter','sans-serif'"
       },
       color: "#FFFFFF",
     },
   };
 }
}