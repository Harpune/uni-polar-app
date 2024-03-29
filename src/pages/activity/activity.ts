import {Component, ViewChild} from '@angular/core';
import {NavParams, PopoverController} from 'ionic-angular';
import {Chart} from 'chart.js';
import {parse, toSeconds} from 'iso8601-duration';
import {PopoverPage} from "../popover/popover";
import {datatypes} from "../../assets/data/datatypes";

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  activity: any;

  summary: any;
  stepSamples: any;
  zoneSamples: any;

  @ViewChild('stepsCanvas') stepsCanvas;
  @ViewChild('zonesCanvas') zonesCanvas;
  stepsChart: any;
  zonesChart: any;

  constructor(private navParams: NavParams,
              private popoverCtrl: PopoverController) {
    this.activity = navParams.get('act');

    this.summary = this.activity['summary'];
    this.stepSamples = this.activity['steps'];
    this.zoneSamples = this.activity['zones'];

    console.log('Activity', this.activity);
    console.log('Step samples', this.stepSamples);
    console.log('ZoneSamples', this.zoneSamples);
  }

  ionViewDidLoad() {
    this.updateCharts();
  }

  updateCharts() {
    if (this.stepSamples) {
      let steps = [];
      let times = [];
      let count = 0;
      for (let step of this.stepSamples['samples']) {
        steps.push(step['steps']);
        times.push(count++ + ':00');
      }

      this.stepsChart = new Chart(this.stepsCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: times,
          datasets: [{
            data: steps,
            label: 'Schritte',
            borderColor: '#009de1',
            backgroundColor: 'rgba(0,157,225,0.4)'
          }]
        }
      });
    }
    /*
     * backgroundColor: [
     '#24BBFC',
     '#07B4FF',
     '#009DE1',
     '#006F9E',
     '#00577D',
     '#666'
     ]
     */
    // TODO zone zeit ordentlich dartestellen (nicht in Sekunden)
    // TODO zusätzliche Bar mit den Zeiten (dann ohne oberes TODO eventuell)
    if (this.zoneSamples) {
      let zones = [0, 0, 0, 0, 0, 0];
      for (let entry of this.zoneSamples['samples']) {
        for (let i = 0; i < entry['activity-zones'].length; i++) {
          zones[i] = zones[i] + toSeconds(parse(entry['activity-zones'][i]['inzone']));
        }

      }

      this.zonesChart = new Chart(this.zonesCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: ['Ruhe', 'Sitzen', 'Niedrig', 'Mittel', 'Hoch', 'Nicht an'],
          datasets: [{
            data: zones,
            backgroundColor: [
              '#f2637a',
              '#e22954',
              '#cf102f',
              '#a6041e',
              '#810014',
              '#666'
            ]
          }]
        },
        options: {
          maintainAspectRatio: false
        }
      });
    }
  }

  presentPopover(myEvent) {
    console.log('popover');
    let popover = this.popoverCtrl.create(PopoverPage, {
      'data': this.activity,
      'type': datatypes.activity
    });
    popover.present({
      ev: myEvent
    });
  }
}
