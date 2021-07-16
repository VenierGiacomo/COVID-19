import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItaCovidData }  from 'src/app/dataitaly';

@Component({
  selector: 'app-italia-stat',
  templateUrl: './italia-stat.page.html',
  styleUrls: ['./italia-stat.page.scss'],
})
export class ItaliaStatPage implements OnInit {
  title = 'Angular Charts';
  selectedView='casi totali'
  totali: any[];
  dimessi: any[];
  deceduti: any[];
  // options for the chart
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Casi totali';
  xAxisLabel2: string = 'Numero dimessi';
  xAxisLabel3: string = 'Numeor deceduti';
  colorSchemew = {
    domain: ['#e0bb2e']
  };
  colorSchemes = {
    domain: ['#29c467']
  };
  colorSchemed = {
    domain: ['#e04055']
  };
  regionsdata: Array<number> = []
  regionsdata2: Array<number> = []
  regionsdata3: Array<number> = []
  regionsdata1: any
  // Ng model
  // line, area
  autoScale = true;
  nome;
  show = false
  oggi  
  constructor(public modalController: ModalController) { }

  ngOnInit() {
   setTimeout(()=>{
    this.show=true
   }) 
    var itadata = ItaCovidData.data
    

    var oggi = "2020-03-15 17:00:00"
    this.oggi = oggi
    for ( let dati of itadata){
        this.regionsdata.push(dati.totale_casi)
        this.regionsdata2.push(dati.dimessi_guariti)
        this.regionsdata3.push(dati.deceduti)
        if  (dati.data == oggi){
        this.regionsdata1 = {
          nome: dati.denominazione_regione,
          totale_casi: dati.totale_casi,
          dimessi_guariti: dati.dimessi_guariti,
          deceduti: dati.deceduti
        }
      }
    }
    var today = new Date().getDate()
    var month = new Date().getMonth()
    this.totali= [
      {
        "name": "Casi totali",
        "series": [
          {
            "name": "      ",
            "value": this.regionsdata[this.regionsdata.length-10]
          },
          {
            "name": `${today-8}/${month}`,
            "value": this.regionsdata[this.regionsdata.length-9]
          },
          {
            "name": "    ",
            "value": this.regionsdata[this.regionsdata.length-8]
          },
          {
            "name": `${today-6}/${month}`,
            "value": this.regionsdata[this.regionsdata.length-7]
          },
          {
            "name": "   ",
            "value":this.regionsdata[this.regionsdata.length-6]
          },
          {
            "name": `${today-4}/${month}`,
            "value":this.regionsdata[this.regionsdata.length-5]
          },
          {
            "name": "  ",
            "value": this.regionsdata[this.regionsdata.length-4]
          },
          {
            "name": `${today-2}/${month}`,
            "value":this.regionsdata[this.regionsdata.length-3]
          },
          {
            "name": " ",
            "value": this.regionsdata[this.regionsdata.length-2]
          },
          {
            "name": `${today}/${month}`,
            "value": this.regionsdata[this.regionsdata.length-1]
          },
        ]
      },
    ];
    this.dimessi= [
      {
        "name": "N. dimessi",
        "series": [
          {
            "name": "      ",
            "value": this.regionsdata2[this.regionsdata2.length-10]
          },
          {
            "name": `${today-8}/${month}`,
            "value": this.regionsdata2[this.regionsdata2.length-9]
          },
          {
            "name": "    ",
            "value": this.regionsdata2[this.regionsdata2.length-8]
          },
          {
            "name": `${today-6}/${month}`,
            "value": this.regionsdata2[this.regionsdata2.length-7]
          },
          {
            "name": "   ",
            "value":this.regionsdata2[this.regionsdata2.length-6]
          },
          {
            "name": `${today-4}/${month}`,
            "value":this.regionsdata2[this.regionsdata2.length-5]
          },
          {
            "name": "  ",
            "value": this.regionsdata2[this.regionsdata2.length-4]
          },
          {
            "name": `${today-2}/${month}`,
            "value":this.regionsdata2[this.regionsdata2.length-3]
          },
          {
            "name": " ",
            "value": this.regionsdata2[this.regionsdata2.length-2]
          },
          {
            "name": `${today}/${month}`,
            "value": this.regionsdata2[this.regionsdata2.length-1]
          },
        ]
      },
    ];
    this.deceduti= [
      {
        "name": "N. deceduti",
        "series": [
          {
            "name": "      ",
            "value": this.regionsdata3[this.regionsdata3.length-10]
          },
          {
            "name": `${today-8}/${month}`,
            "value": this.regionsdata3[this.regionsdata3.length-9]
          },
          {
            "name": "    ",
            "value": this.regionsdata3[this.regionsdata3.length-8]
          },
          {
            "name": `${today-6}/${month}`,
            "value": this.regionsdata3[this.regionsdata3.length-7]
          },
          {
            "name": "   ",
            "value":this.regionsdata3[this.regionsdata3.length-6]
          },
          {
            "name": `${today-4}/${month}`,
            "value":this.regionsdata3[this.regionsdata3.length-5]
          },
          {
            "name": "  ",
            "value": this.regionsdata3[this.regionsdata3.length-4]
          },
          {
            "name": `${today-2}/${month}`,
            "value":this.regionsdata3[this.regionsdata3.length-3]
          },
          {
            "name": " ",
            "value": this.regionsdata3[this.regionsdata3.length-2]
          },
          {
            "name": `${today}/${month}`,
            "value": this.regionsdata3[this.regionsdata3.length-1]
          },
        ]
      },
    ];
  }
async closeModal(){
    await this.modalController.dismiss();
  }
}
