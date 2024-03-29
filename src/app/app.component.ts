import {Component} from '@angular/core';

import {Platform} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {LoginPage} from "../pages/login/login";
import {TabsPage} from "../pages/tabs/tabs";
import {LocalDataProvider} from "../providers/local-data/local-data";
import {datatypes} from "../assets/data/datatypes";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{ title: string, icon: string, component: any }>;
  rootPage: any = LoginPage;
  token: any;

  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen) {

    //localStorage.removeItem('token');
    this.token = JSON.parse(localStorage.getItem('token'));
    console.log('Token logged in ', this.token);

    //this.lazyResetData();

    if (this.token) {
      this.rootPage = TabsPage;
      this.saveDummyData();
      //this.getAllData(this.token);
    } else {
      this.rootPage = LoginPage;
    }

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  lazyResetData() {
    let user = JSON.parse(localStorage.getItem(String(this.token.x_user_id)))['user'];

    let json = {
      'exercise-transaction': [],
      'activity-transaction': [],
      'physical-information-transaction': [],
      'user': user
    };

    localStorage.setItem(String(this.token.x_user_id), JSON.stringify(json));
  }

  saveDummyData() {
    let activityData = [
      {
        "id": 111,
        "polar-user": "https://www.polaraccesslink/v3/users/1",
        "transaction-id": 1111,
        "date": "2010-12-31",
        "created": "2016-04-27T20:11:33.000Z",
        "calories": 2329,
        "active-calories": 428,
        "duration": "PT2H30M",
        "active-steps": 1600
      }, {
        "interval": 0,
        "samples": [
          {
            "steps": 0,
            "time": "00:00:00.000"
          }, {
            "steps": 1,
            "time": "01:00:00.000"
          }, {
            "steps": 10,
            "time": "02:00:00.000"
          }, {
            "steps": 20,
            "time": "03:00:00.000"
          }, {
            "steps": 30,
            "time": "04:00:00.000"
          }, {
            "steps": 40,
            "time": "05:00:00.000"
          }, {
            "steps": 110,
            "time": "06:00:00.000"
          }, {
            "steps": 120,
            "time": "07:00:00.000"
          }, {
            "steps": 10,
            "time": "08:00:00.000"
          }, {
            "steps": 340,
            "time": "09:00:00.000"
          }, {
            "steps": 20,
            "time": "10:00:00.000"
          }, {
            "steps": 0,
            "time": "11:00:00.000"
          }, {
            "steps": 0,
            "time": "12:00:00.000"
          }, {
            "steps": 120,
            "time": "13:00:00.000"
          }, {
            "steps": 120,
            "time": "14:00:00.000"
          }, {
            "steps": 140,
            "time": "15:00:00.000"
          }, {
            "steps": 1000,
            "time": "16:00:00.000"
          }, {
            "steps": 1230,
            "time": "17:00:00.000"
          }, {
            "steps": 130,
            "time": "18:00:00.000"
          }, {
            "steps": 0,
            "time": "19:00:00.000"
          }, {
            "steps": 0,
            "time": "20:00:00.000"
          }, {
            "steps": 0,
            "time": "21:00:00.000"
          }, {
            "steps": 20,
            "time": "22:00:00.000"
          }, {
            "steps": 10,
            "time": "23:00:00.000"
          },
        ]
      }, {
        "interval": 0,
        "samples": [
          {
            "activity-zones": [
              {
                "index": 0,
                "inzone": "PT10M30S"
              }, {
                "index": 1,
                "inzone": "PT20M0S"
              }, {
                "index": 2,
                "inzone": "PT30M30S"
              }, {
                "index": 3,
                "inzone": "PT40M0S"
              }, {
                "index": 4,
                "inzone": "PT50M30S"
              },
            ],
            "time": "string"
          }
        ]
      }
    ];
    LocalDataProvider.save(datatypes['activity'], activityData);

    let trainingData = [];

    trainingData[0] = {
      "upload-time": "2008-10-13T10:40:02.000Z",
      "id": 999,
      "polar-user": "https://www.polaraccesslink/v3/users/1",
      "transaction-id": 9999,
      "device": "Polar M400",
      "start-time": "2008-10-13T10:40:02.000Z",
      "duration": "PT2H30M",
      "calories": 530,
      "distance": 1600,
      "heart-rate": {
        "average": 129,
        "maximum": 147
      },
      "training-load": 143.22,
      "sport": "RUNNING",
      "has-route": true,
      "club-id": 999,
      "club-name": "Polar Club",
      "detailed-sport-info": "RUNNING"
    };

    trainingData[1] = {
      "zone": [
        {
          "index": 0,
          "lower-limit": 88,
          "upper-limit": 105,
          "in-zone": "PT18M4S"
        }, {
          "index": 1,
          "lower-limit": 105,
          "upper-limit": 123,
          "in-zone": "PT35M0S"
        }, {
          "index": 2,
          "lower-limit": 123,
          "upper-limit": 140,
          "in-zone": "PT45M0S"
        }, {
          "index": 3,
          "lower-limit": 140,
          "upper-limit": 158,
          "in-zone": "PT55M15S"
        }, {
          "index": 4,
          "lower-limit": 158,
          "upper-limit": 175,
          "in-zone": "PT5M0S"
        }
      ]
    };

    trainingData[2] = `<?xml version="1.0" encoding="utf-8"?><gpx creator="Garmin Desktop App" version="1.1" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/WaypointExtension/v1 http://www8.garmin.com/xmlschemas/WaypointExtensionv1.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www8.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/ActivityExtension/v1 http://www8.garmin.com/xmlschemas/ActivityExtensionv1.xsd http://www.garmin.com/xmlschemas/AdventuresExtensions/v1 http://www8.garmin.com/xmlschemas/AdventuresExtensionv1.xsd http://www.garmin.com/xmlschemas/PressureExtension/v1 http://www.garmin.com/xmlschemas/PressureExtensionv1.xsd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:wptx1="http://www.garmin.com/xmlschemas/WaypointExtension/v1" xmlns:gpxtrx="http://www.garmin.com/xmlschemas/GpxExtensions/v3" xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1" xmlns:gpxx="http://www.garmin.com/xmlschemas/GpxExtensions/v3" xmlns:trp="http://www.garmin.com/xmlschemas/TripExtensions/v1" xmlns:adv="http://www.garmin.com/xmlschemas/AdventuresExtensions/v1" xmlns:prs="http://www.garmin.com/xmlschemas/PressureExtension/v1">

  <metadata>
    <link href="http://www.garmin.com">
      <text>Garmin International</text>
    </link>
    <time>2012-12-03T18:05:03Z</time>
    <bounds maxlat="50.718614039942622" maxlon="6.465599527582526" minlat="50.702664786949754" minlon="6.442962186411023" />
  </metadata>
  <trk>
    <name>_EV_WW-23_Kuhkopfsteig u EB_62st</name>
    <extensions>
      <gpxx:TrackExtension>
        <gpxx:DisplayColor>Red</gpxx:DisplayColor>
      </gpxx:TrackExtension>
    </extensions>
    <trkseg>
      <trkpt lat="50.716779660433531" lon="6.445616148412228">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:08:42Z</time>
      </trkpt>
      <trkpt lat="50.716779576614499" lon="6.445615980774164">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:08:43Z</time>
      </trkpt>
      <trkpt lat="50.716779157519341" lon="6.445617070421577">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:08:44Z</time>
      </trkpt>
      <trkpt lat="50.716758202761412" lon="6.445621429011226">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:08:58Z</time>
      </trkpt>
      <trkpt lat="50.716767506673932" lon="6.445646155625582">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:09:08Z</time>
      </trkpt>
      <trkpt lat="50.716753425076604" lon="6.445663925260305">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:09:18Z</time>
      </trkpt>
      <trkpt lat="50.716756945475936" lon="6.445622351020575">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:09:24Z</time>
      </trkpt>
      <trkpt lat="50.716748395934701" lon="6.445599216967821">
        <ele>167.41</ele>
        <time>2012-12-03T09:09:29Z</time>
      </trkpt>
      <trkpt lat="50.716743031516671" lon="6.445606173947454">
        <ele>167.41</ele>
        <time>2012-12-03T09:09:38Z</time>
      </trkpt>
      <trkpt lat="50.716745210811496" lon="6.445606760680676">
        <ele>167.41</ele>
        <time>2012-12-03T09:09:39Z</time>
      </trkpt>
      <trkpt lat="50.716744204983115" lon="6.445661243051291">
        <ele>165</ele>
        <time>2012-12-03T09:10:32Z</time>
      </trkpt>
      <trkpt lat="50.716739343479276" lon="6.445662165060639">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:10:33Z</time>
      </trkpt>
      <trkpt lat="50.716737080365419" lon="6.445629308000207">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:10:40Z</time>
      </trkpt>
      <trkpt lat="50.716743702068925" lon="6.445604329928756">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:10:48Z</time>
      </trkpt>
      <trkpt lat="50.716740097850561" lon="6.445592511445284">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:11:02Z</time>
      </trkpt>
      <trkpt lat="50.716747473925352" lon="6.445606425404549">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:11:09Z</time>
      </trkpt>
      <trkpt lat="50.716748312115669" lon="6.445591505616903">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:11:17Z</time>
      </trkpt>
      <trkpt lat="50.716749904677272" lon="6.445602737367153">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:11:22Z</time>
      </trkpt>
      <trkpt lat="50.716745797544718" lon="6.445600977167487">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:11:39Z</time>
      </trkpt>
      <trkpt lat="50.716764992102981" lon="6.445607515051961">
        <ele>165</ele>
        <time>2012-12-03T09:11:40Z</time>
      </trkpt>
      <trkpt lat="50.716773625463247" lon="6.445581195876002">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:11:44Z</time>
      </trkpt>
      <trkpt lat="50.716755269095302" lon="6.445585135370493">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:11:50Z</time>
      </trkpt>
      <trkpt lat="50.71674931794405" lon="6.445584883913398">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:12:00Z</time>
      </trkpt>
      <trkpt lat="50.716747725382447" lon="6.445569712668657">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:12:15Z</time>
      </trkpt>
      <trkpt lat="50.716736242175102" lon="6.445584129542112">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:12:36Z</time>
      </trkpt>
      <trkpt lat="50.716729201376438" lon="6.445587398484349">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:12:49Z</time>
      </trkpt>
      <trkpt lat="50.716758873313665" lon="6.445590164512396">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:13:01Z</time>
      </trkpt>
      <trkpt lat="50.716793239116669" lon="6.445563258603215">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:13:08Z</time>
      </trkpt>
      <trkpt lat="50.716780330985785" lon="6.445632744580507">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:13:15Z</time>
      </trkpt>
      <trkpt lat="50.71677865460515" lon="6.445625619962812">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:13:23Z</time>
      </trkpt>
      <trkpt lat="50.716759879142046" lon="6.445647580549121">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:13:25Z</time>
      </trkpt>
      <trkpt lat="50.716692237183452" lon="6.445717820897698">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:13:31Z</time>
      </trkpt>
      <trkpt lat="50.716610513627529" lon="6.445775153115392">
        <ele>165</ele>
        <time>2012-12-03T09:13:42Z</time>
      </trkpt>
      <trkpt lat="50.716599700972438" lon="6.445764508098364">
        <ele>165</ele>
        <time>2012-12-03T09:13:52Z</time>
      </trkpt>
      <trkpt lat="50.716609340161085" lon="6.445747744292021">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:14:05Z</time>
      </trkpt>
      <trkpt lat="50.716616967692971" lon="6.445721257477999">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:14:15Z</time>
      </trkpt>
      <trkpt lat="50.716627361252904" lon="6.445744140073657">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:14:29Z</time>
      </trkpt>
      <trkpt lat="50.716632222756743" lon="6.445831060409546">
        <ele>165</ele>
        <time>2012-12-03T09:14:37Z</time>
      </trkpt>
      <trkpt lat="50.71661839261651" lon="6.44586643204093">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:14:45Z</time>
      </trkpt>
      <trkpt lat="50.716626774519682" lon="6.445867270231247">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:14:51Z</time>
      </trkpt>
      <trkpt lat="50.71667748503387" lon="6.445917058736086">
        <ele>163.56</ele>
        <time>2012-12-03T09:14:58Z</time>
      </trkpt>
      <trkpt lat="50.716664828360081" lon="6.44594899378717">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:15:07Z</time>
      </trkpt>
      <trkpt lat="50.716617554426193" lon="6.44601060077548">
        <ele>163.56</ele>
        <time>2012-12-03T09:15:15Z</time>
      </trkpt>
      <trkpt lat="50.716621242463589" lon="6.446014204993844">
        <ele>164.03999999999999</ele>
        <time>2012-12-03T09:15:17Z</time>
      </trkpt>
      <trkpt lat="50.716639431193471" lon="6.446019988507032">
        <ele>164.03999999999999</ele>
        <time>2012-12-03T09:15:19Z</time>
      </trkpt>
      <trkpt lat="50.716676479205489" lon="6.44605896435678">
        <ele>164.03999999999999</ele>
        <time>2012-12-03T09:15:26Z</time>
      </trkpt>
      <trkpt lat="50.716655943542719" lon="6.446013199165463">
        <ele>164.03999999999999</ele>
        <time>2012-12-03T09:15:41Z</time>
      </trkpt>
      <trkpt lat="50.716632725670934" lon="6.445995597168803">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:15:48Z</time>
      </trkpt>
      <trkpt lat="50.716642281040549" lon="6.445970702916384">
        <ele>164.03999999999999</ele>
        <time>2012-12-03T09:15:56Z</time>
      </trkpt>
      <trkpt lat="50.716641526669264" lon="6.44595880061388">
        <ele>164.03999999999999</ele>
        <time>2012-12-03T09:15:57Z</time>
      </trkpt>
      <trkpt lat="50.716626942157745" lon="6.445914627984166">
        <ele>164.03999999999999</ele>
        <time>2012-12-03T09:16:00Z</time>
      </trkpt>
      <trkpt lat="50.716517139226198" lon="6.445881351828575">
        <ele>164.03999999999999</ele>
        <time>2012-12-03T09:16:10Z</time>
      </trkpt>
      <trkpt lat="50.716459220275283" lon="6.445896858349443">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:16:20Z</time>
      </trkpt>
      <trkpt lat="50.716440780088305" lon="6.445907922461629">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:16:21Z</time>
      </trkpt>
      <trkpt lat="50.716423764824867" lon="6.445937007665634">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:16:23Z</time>
      </trkpt>
      <trkpt lat="50.716452011838555" lon="6.44599886611104">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:16:31Z</time>
      </trkpt>
      <trkpt lat="50.716462405398488" lon="6.446030382066965">
        <ele>163.56</ele>
        <time>2012-12-03T09:16:37Z</time>
      </trkpt>
      <trkpt lat="50.716463327407837" lon="6.446028118953109">
        <ele>163.08000000000001</ele>
        <time>2012-12-03T09:16:46Z</time>
      </trkpt>
      <trkpt lat="50.716509176418185" lon="6.446053013205528">
        <ele>162.59999999999999</ele>
        <time>2012-12-03T09:16:55Z</time>
      </trkpt>
      <trkpt lat="50.716518899425864" lon="6.446003643795848">
        <ele>162.12</ele>
        <time>2012-12-03T09:17:01Z</time>
      </trkpt>
      <trkpt lat="50.71649769321084" lon="6.445998698472977">
        <ele>161.63999999999999</ele>
        <time>2012-12-03T09:17:11Z</time>
      </trkpt>
      <trkpt lat="50.716489646583796" lon="6.446017390117049">
        <ele>162.12</ele>
        <time>2012-12-03T09:17:19Z</time>
      </trkpt>
      <trkpt lat="50.716512948274612" lon="6.446026610210538">
        <ele>162.12</ele>
        <time>2012-12-03T09:17:27Z</time>
      </trkpt>
      <trkpt lat="50.716525688767433" lon="6.446055276319385">
        <ele>162.12</ele>
        <time>2012-12-03T09:17:37Z</time>
      </trkpt>
      <trkpt lat="50.716536249965429" lon="6.446044631302357">
        <ele>160.68000000000001</ele>
        <time>2012-12-03T09:17:47Z</time>
      </trkpt>
      <trkpt lat="50.716519989073277" lon="6.446036584675312">
        <ele>161.16</ele>
        <time>2012-12-03T09:17:57Z</time>
      </trkpt>
      <trkpt lat="50.716505572199821" lon="6.446015629917383">
        <ele>160.68000000000001</ele>
        <time>2012-12-03T09:18:10Z</time>
      </trkpt>
      <trkpt lat="50.716485036537051" lon="6.446042787283659">
        <ele>162.12</ele>
        <time>2012-12-03T09:18:19Z</time>
      </trkpt>
      <trkpt lat="50.716486712917686" lon="6.446053851395845">
        <ele>162.12</ele>
        <time>2012-12-03T09:18:25Z</time>
      </trkpt>
      <trkpt lat="50.716490736231208" lon="6.446030717343092">
        <ele>161.16</ele>
        <time>2012-12-03T09:18:32Z</time>
      </trkpt>
      <trkpt lat="50.716521916911006" lon="6.446075309067965">
        <ele>162.12</ele>
        <time>2012-12-03T09:18:38Z</time>
      </trkpt>
      <trkpt lat="50.716515379026532" lon="6.446097102016211">
        <ele>163.08000000000001</ele>
        <time>2012-12-03T09:18:46Z</time>
      </trkpt>
      <trkpt lat="50.716514708474278" lon="6.446083271875978">
        <ele>162.59999999999999</ele>
        <time>2012-12-03T09:19:00Z</time>
      </trkpt>
      <trkpt lat="50.716501884162426" lon="6.446091569960117">
        <ele>163.56</ele>
        <time>2012-12-03T09:19:11Z</time>
      </trkpt>
      <trkpt lat="50.71648646146059" lon="6.446078913286328">
        <ele>163.56</ele>
        <time>2012-12-03T09:19:26Z</time>
      </trkpt>
      <trkpt lat="50.716489646583796" lon="6.446061646565795">
        <ele>163.56</ele>
        <time>2012-12-03T09:19:29Z</time>
      </trkpt>
      <trkpt lat="50.716457962989807" lon="6.445988137274981">
        <ele>165</ele>
        <time>2012-12-03T09:19:37Z</time>
      </trkpt>
      <trkpt lat="50.716455029323697" lon="6.445985203608871">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:19:38Z</time>
      </trkpt>
      <trkpt lat="50.716435415670276" lon="6.445967182517052">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:19:47Z</time>
      </trkpt>
      <trkpt lat="50.716406833380461" lon="6.445996267721057">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:19:52Z</time>
      </trkpt>
      <trkpt lat="50.716363582760096" lon="6.446026274934411">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:19:58Z</time>
      </trkpt>
      <trkpt lat="50.716317314654589" lon="6.44602426327765">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:20:03Z</time>
      </trkpt>
      <trkpt lat="50.716245146468282" lon="6.445980845019221">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:20:13Z</time>
      </trkpt>
      <trkpt lat="50.716229723766446" lon="6.445976821705699">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:20:24Z</time>
      </trkpt>
      <trkpt lat="50.716217067092657" lon="6.445956034585834">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:20:36Z</time>
      </trkpt>
      <trkpt lat="50.716277249157429" lon="6.446003308519721">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:20:42Z</time>
      </trkpt>
      <trkpt lat="50.7162303943187" lon="6.445995094254613">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:20:46Z</time>
      </trkpt>
      <trkpt lat="50.716210696846247" lon="6.44597640261054">
        <ele>165</ele>
        <time>2012-12-03T09:20:48Z</time>
      </trkpt>
      <trkpt lat="50.716192089021206" lon="6.44591529853642">
        <ele>164.52000000000001</ele>
        <time>2012-12-03T09:20:57Z</time>
      </trkpt>
      <trkpt lat="50.716226790100336" lon="6.445930888876319">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:21:15Z</time>
      </trkpt>
      <trkpt lat="50.716229304671288" lon="6.445921501144767">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:21:26Z</time>
      </trkpt>
      <trkpt lat="50.716210193932056" lon="6.445942288264632">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:21:32Z</time>
      </trkpt>
      <trkpt lat="50.716196866706014" lon="6.445964835584164">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:21:36Z</time>
      </trkpt>
      <trkpt lat="50.71621673181653" lon="6.446026358753443">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:21:39Z</time>
      </trkpt>
      <trkpt lat="50.716268280521035" lon="6.446158457547426">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:21:49Z</time>
      </trkpt>
      <trkpt lat="50.716266771778464" lon="6.446187291294336">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:21:54Z</time>
      </trkpt>
      <trkpt lat="50.716230059042573" lon="6.446234565228224">
        <ele>167.41</ele>
        <time>2012-12-03T09:22:03Z</time>
      </trkpt>
      <trkpt lat="50.716245397925377" lon="6.446222746744752">
        <ele>167.41</ele>
        <time>2012-12-03T09:22:18Z</time>
      </trkpt>
      <trkpt lat="50.716265179216862" lon="6.446174466982484">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:22:25Z</time>
      </trkpt>
      <trkpt lat="50.716272387653589" lon="6.446162480860949">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:22:31Z</time>
      </trkpt>
      <trkpt lat="50.716274315491319" lon="6.446143705397844">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:22:37Z</time>
      </trkpt>
      <trkpt lat="50.716221425682306" lon="6.446192739531398">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:22:43Z</time>
      </trkpt>
      <trkpt lat="50.716157807037234" lon="6.446262057870626">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:22:50Z</time>
      </trkpt>
      <trkpt lat="50.716091003268957" lon="6.446336572989821">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:22:58Z</time>
      </trkpt>
      <trkpt lat="50.716059906408191" lon="6.446360545232892">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:23:02Z</time>
      </trkpt>
      <trkpt lat="50.716060660779476" lon="6.446426007896662">
        <ele>167.41</ele>
        <time>2012-12-03T09:23:08Z</time>
      </trkpt>
      <trkpt lat="50.716093853116035" lon="6.446446292102337">
        <ele>168.37</ele>
        <time>2012-12-03T09:23:15Z</time>
      </trkpt>
      <trkpt lat="50.716105420142412" lon="6.446487866342068">
        <ele>167.41</ele>
        <time>2012-12-03T09:23:23Z</time>
      </trkpt>
      <trkpt lat="50.716088740155101" lon="6.446510078385472">
        <ele>168.37</ele>
        <time>2012-12-03T09:23:36Z</time>
      </trkpt>
      <trkpt lat="50.716066109016538" lon="6.446519214659929">
        <ele>168.37</ele>
        <time>2012-12-03T09:23:51Z</time>
      </trkpt>
      <trkpt lat="50.716047836467624" lon="6.446500606834889">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:23:59Z</time>
      </trkpt>
      <trkpt lat="50.716043058782816" lon="6.446519801393151">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:24:12Z</time>
      </trkpt>
      <trkpt lat="50.71607063524425" lon="6.446506893262267">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:24:24Z</time>
      </trkpt>
      <trkpt lat="50.716071557253599" lon="6.446447800844908">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:24:37Z</time>
      </trkpt>
      <trkpt lat="50.716063091531396" lon="6.446438161656261">
        <ele>167.41</ele>
        <time>2012-12-03T09:24:38Z</time>
      </trkpt>
      <trkpt lat="50.716054374352098" lon="6.446435730904341">
        <ele>167.41</ele>
        <time>2012-12-03T09:24:39Z</time>
      </trkpt>
      <trkpt lat="50.715974997729063" lon="6.446425169706345">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:24:47Z</time>
      </trkpt>
      <trkpt lat="50.715972483158112" lon="6.446423158049583">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:24:49Z</time>
      </trkpt>
      <trkpt lat="50.715969130396843" lon="6.44642785191536">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:24:56Z</time>
      </trkpt>
      <trkpt lat="50.715912552550435" lon="6.446488369256258">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:25:02Z</time>
      </trkpt>
      <trkpt lat="50.715812807902694" lon="6.446568416431546">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:25:10Z</time>
      </trkpt>
      <trkpt lat="50.715771066024899" lon="6.446598758921027">
        <ele>171.25</ele>
        <time>2012-12-03T09:25:14Z</time>
      </trkpt>
      <trkpt lat="50.715719852596521" lon="6.446611415594816">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:25:21Z</time>
      </trkpt>
      <trkpt lat="50.715699233114719" lon="6.446651816368103">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:25:31Z</time>
      </trkpt>
      <trkpt lat="50.715665873140097" lon="6.446666149422526">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:25:40Z</time>
      </trkpt>
      <trkpt lat="50.715667465701699" lon="6.446675704792142">
        <ele>169.81</ele>
        <time>2012-12-03T09:25:41Z</time>
      </trkpt>
      <trkpt lat="50.715679535642266" lon="6.446702694520354">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:25:48Z</time>
      </trkpt>
      <trkpt lat="50.715613821521401" lon="6.446785759180784">
        <ele>169.81</ele>
        <time>2012-12-03T09:25:55Z</time>
      </trkpt>
      <trkpt lat="50.715510975569487" lon="6.446870751678944">
        <ele>169.81</ele>
        <time>2012-12-03T09:26:04Z</time>
      </trkpt>
      <trkpt lat="50.71543344296515" lon="6.446910314261913">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:26:12Z</time>
      </trkpt>
      <trkpt lat="50.715415757149458" lon="6.446876619011164">
        <ele>166.93000000000001</ele>
        <time>2012-12-03T09:26:19Z</time>
      </trkpt>
      <trkpt lat="50.715413326397538" lon="6.446875780820847">
        <ele>166.44999999999999</ele>
        <time>2012-12-03T09:26:20Z</time>
      </trkpt>
      <trkpt lat="50.715411063283682" lon="6.446850970387459">
        <ele>169.81</ele>
        <time>2012-12-03T09:26:32Z</time>
      </trkpt>
      <trkpt lat="50.715388180688024" lon="6.446897322311997">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:26:39Z</time>
      </trkpt>
      <trkpt lat="50.71538558229804" lon="6.446918277069926">
        <ele>167.41</ele>
        <time>2012-12-03T09:26:53Z</time>
      </trkpt>
      <trkpt lat="50.715389102697372" lon="6.446911990642548">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T09:26:55Z</time>
      </trkpt>
      <trkpt lat="50.71539874188602" lon="6.446894053369761">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:27:01Z</time>
      </trkpt>
      <trkpt lat="50.715399496257305" lon="6.446890700608492">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:27:02Z</time>
      </trkpt>
      <trkpt lat="50.715408381074667" lon="6.446889443323016">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:27:06Z</time>
      </trkpt>
      <trkpt lat="50.715394970029593" lon="6.446927413344383">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:27:21Z</time>
      </trkpt>
      <trkpt lat="50.715409470722079" lon="6.446935711428523">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:27:34Z</time>
      </trkpt>
      <trkpt lat="50.715277288109064" lon="6.447065630927682">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:27:45Z</time>
      </trkpt>
      <trkpt lat="50.715150637552142" lon="6.447162022814155">
        <ele>168.37</ele>
        <time>2012-12-03T09:27:55Z</time>
      </trkpt>
      <trkpt lat="50.715082241222262" lon="6.447234945371747">
        <ele>169.81</ele>
        <time>2012-12-03T09:28:02Z</time>
      </trkpt>
      <trkpt lat="50.715022897347808" lon="6.447276016697288">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:28:09Z</time>
      </trkpt>
      <trkpt lat="50.714908400550485" lon="6.447382718324661">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:28:18Z</time>
      </trkpt>
      <trkpt lat="50.714875711128116" lon="6.447357488796115">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:28:25Z</time>
      </trkpt>
      <trkpt lat="50.714851152151823" lon="6.447367547079921">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:28:29Z</time>
      </trkpt>
      <trkpt lat="50.714853582903743" lon="6.447370313107967">
        <ele>165.96000000000001</ele>
        <time>2012-12-03T09:28:30Z</time>
      </trkpt>
      <trkpt lat="50.71484855376184" lon="6.447378611192107">
        <ele>168.37</ele>
        <time>2012-12-03T09:28:44Z</time>
      </trkpt>
      <trkpt lat="50.714870346710086" lon="6.447427729144692">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:28:50Z</time>
      </trkpt>
      <trkpt lat="50.71474839001894" lon="6.447534011676908">
        <ele>169.81</ele>
        <time>2012-12-03T09:29:00Z</time>
      </trkpt>
      <trkpt lat="50.714635653421283" lon="6.447622021660209">
        <ele>168.37</ele>
        <time>2012-12-03T09:29:10Z</time>
      </trkpt>
      <trkpt lat="50.714601874351501" lon="6.447649262845516">
        <ele>168.37</ele>
        <time>2012-12-03T09:29:18Z</time>
      </trkpt>
      <trkpt lat="50.714572789147496" lon="6.447663260623813">
        <ele>168.37</ele>
        <time>2012-12-03T09:29:27Z</time>
      </trkpt>
      <trkpt lat="50.714575471356511" lon="6.447666026651859">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:29:34Z</time>
      </trkpt>
      <trkpt lat="50.714568682014942" lon="6.44767633639276">
        <ele>168.37</ele>
        <time>2012-12-03T09:29:40Z</time>
      </trkpt>
      <trkpt lat="50.714518139138818" lon="6.447757389396429">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:29:48Z</time>
      </trkpt>
      <trkpt lat="50.714507661759853" lon="6.447768034413457">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:29:59Z</time>
      </trkpt>
      <trkpt lat="50.714507410302758" lon="6.447770968079567">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:30:10Z</time>
      </trkpt>
      <trkpt lat="50.71451679803431" lon="6.447727549821138">
        <ele>167.41</ele>
        <time>2012-12-03T09:30:20Z</time>
      </trkpt>
      <trkpt lat="50.714505985379219" lon="6.447743307799101">
        <ele>168.37</ele>
        <time>2012-12-03T09:30:25Z</time>
      </trkpt>
      <trkpt lat="50.714486371725798" lon="6.44777406938374">
        <ele>167.41</ele>
        <time>2012-12-03T09:30:31Z</time>
      </trkpt>
      <trkpt lat="50.71449626237154" lon="6.447808938100934">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:30:38Z</time>
      </trkpt>
      <trkpt lat="50.714487712830305" lon="6.447862247005105">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:30:42Z</time>
      </trkpt>
      <trkpt lat="50.714522749185562" lon="6.447973726317287">
        <ele>168.37</ele>
        <time>2012-12-03T09:30:51Z</time>
      </trkpt>
      <trkpt lat="50.714563066139817" lon="6.448034578934312">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:30:56Z</time>
      </trkpt>
      <trkpt lat="50.714503806084394" lon="6.447935672476888">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:31:04Z</time>
      </trkpt>
      <trkpt lat="50.714495843276381" lon="6.447909520938993">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:31:11Z</time>
      </trkpt>
      <trkpt lat="50.714438343420625" lon="6.447839615866542">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:31:18Z</time>
      </trkpt>
      <trkpt lat="50.714429542422295" lon="6.447829641401768">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:31:19Z</time>
      </trkpt>
      <trkpt lat="50.714429123327136" lon="6.447816900908947">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:31:24Z</time>
      </trkpt>
      <trkpt lat="50.714375814422965" lon="6.447770297527313">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:31:31Z</time>
      </trkpt>
      <trkpt lat="50.714325774461031" lon="6.447723945602775">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:31:37Z</time>
      </trkpt>
      <trkpt lat="50.714259641245008" lon="6.447625877335668">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:31:46Z</time>
      </trkpt>
      <trkpt lat="50.714253773912787" lon="6.447592684999108">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T09:31:49Z</time>
      </trkpt>
      <trkpt lat="50.714266262948513" lon="6.447553038597107">
        <ele>168.37</ele>
        <time>2012-12-03T09:31:56Z</time>
      </trkpt>
      <trkpt lat="50.714265508577228" lon="6.447554044425488">
        <ele>168.37</ele>
        <time>2012-12-03T09:32:07Z</time>
      </trkpt>
      <trkpt lat="50.714265089482069" lon="6.44755613990128">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:32:08Z</time>
      </trkpt>
      <trkpt lat="50.714234244078398" lon="6.447488497942686">
        <ele>168.37</ele>
        <time>2012-12-03T09:32:14Z</time>
      </trkpt>
      <trkpt lat="50.714230388402939" lon="6.447494113817811">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:32:21Z</time>
      </trkpt>
      <trkpt lat="50.71422996930778" lon="6.447504423558712">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:32:35Z</time>
      </trkpt>
      <trkpt lat="50.714238183572888" lon="6.447500232607126">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:32:45Z</time>
      </trkpt>
      <trkpt lat="50.714240279048681" lon="6.447501154616475">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:32:58Z</time>
      </trkpt>
      <trkpt lat="50.714211445301771" lon="6.447513476014137">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:33:14Z</time>
      </trkpt>
      <trkpt lat="50.714225526899099" lon="6.447440385818481">
        <ele>168.37</ele>
        <time>2012-12-03T09:33:19Z</time>
      </trkpt>
      <trkpt lat="50.714256707578897" lon="6.447411635890603">
        <ele>168.37</ele>
        <time>2012-12-03T09:33:27Z</time>
      </trkpt>
      <trkpt lat="50.714259138330817" lon="6.447449354454875">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:33:39Z</time>
      </trkpt>
      <trkpt lat="50.714252516627312" lon="6.44746326841414">
        <ele>169.81</ele>
        <time>2012-12-03T09:33:48Z</time>
      </trkpt>
      <trkpt lat="50.714249918237329" lon="6.447454215958715">
        <ele>169.81</ele>
        <time>2012-12-03T09:33:59Z</time>
      </trkpt>
      <trkpt lat="50.714247906580567" lon="6.447446253150702">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:34:00Z</time>
      </trkpt>
      <trkpt lat="50.714206835255027" lon="6.44741146825254">
        <ele>169.81</ele>
        <time>2012-12-03T09:34:07Z</time>
      </trkpt>
      <trkpt lat="50.714191244915128" lon="6.447508614510298">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:34:14Z</time>
      </trkpt>
      <trkpt lat="50.714178755879402" lon="6.447554379701614">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:34:21Z</time>
      </trkpt>
      <trkpt lat="50.714167859405279" lon="6.447547925636172">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:34:35Z</time>
      </trkpt>
      <trkpt lat="50.714172050356865" lon="6.447557313367724">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:34:43Z</time>
      </trkpt>
      <trkpt lat="50.714186886325479" lon="6.44751314073801">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:34:58Z</time>
      </trkpt>
      <trkpt lat="50.714189317077398" lon="6.44754976965487">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:35:12Z</time>
      </trkpt>
      <trkpt lat="50.71419870480895" lon="6.447491180151701">
        <ele>169.81</ele>
        <time>2012-12-03T09:35:26Z</time>
      </trkpt>
      <trkpt lat="50.714199710637331" lon="6.447461508214474">
        <ele>169.81</ele>
        <time>2012-12-03T09:35:29Z</time>
      </trkpt>
      <trkpt lat="50.714147156104445" lon="6.4473772700876">
        <ele>169.81</ele>
        <time>2012-12-03T09:35:37Z</time>
      </trkpt>
      <trkpt lat="50.714121256023645" lon="6.447340305894613">
        <ele>169.81</ele>
        <time>2012-12-03T09:35:40Z</time>
      </trkpt>
      <trkpt lat="50.714056128636003" lon="6.447235448285937">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T09:35:48Z</time>
      </trkpt>
      <trkpt lat="50.71398220025003" lon="6.447117514908314">
        <ele>169.81</ele>
        <time>2012-12-03T09:35:57Z</time>
      </trkpt>
      <trkpt lat="50.713972141966224" lon="6.447105947881937">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:35:58Z</time>
      </trkpt>
      <trkpt lat="50.713963760063052" lon="6.44706454128027">
        <ele>169.81</ele>
        <time>2012-12-03T09:36:04Z</time>
      </trkpt>
      <trkpt lat="50.713989660143852" lon="6.447101756930351">
        <ele>169.81</ele>
        <time>2012-12-03T09:36:14Z</time>
      </trkpt>
      <trkpt lat="50.713992426171899" lon="6.447093207389116">
        <ele>169.81</ele>
        <time>2012-12-03T09:36:18Z</time>
      </trkpt>
      <trkpt lat="50.713977590203285" lon="6.447071749716997">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:36:20Z</time>
      </trkpt>
      <trkpt lat="50.713913636282086" lon="6.446982314810157">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:36:26Z</time>
      </trkpt>
      <trkpt lat="50.713832918554544" lon="6.446873852983117">
        <ele>169.81</ele>
        <time>2012-12-03T09:36:34Z</time>
      </trkpt>
      <trkpt lat="50.713744573295116" lon="6.446773605421186">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:36:43Z</time>
      </trkpt>
      <trkpt lat="50.713688498362899" lon="6.446699257940054">
        <ele>169.81</ele>
        <time>2012-12-03T09:36:50Z</time>
      </trkpt>
      <trkpt lat="50.713626304641366" lon="6.446646116673946">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:36:56Z</time>
      </trkpt>
      <trkpt lat="50.713542150333524" lon="6.446561543270946">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:37:05Z</time>
      </trkpt>
      <trkpt lat="50.713505605235696" lon="6.446485687047243">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:37:12Z</time>
      </trkpt>
      <trkpt lat="50.713465372100472" lon="6.446430450305343">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:37:18Z</time>
      </trkpt>
      <trkpt lat="50.713459001854062" lon="6.44641226157546">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:37:31Z</time>
      </trkpt>
      <trkpt lat="50.713392198085785" lon="6.446334393694997">
        <ele>169.81</ele>
        <time>2012-12-03T09:37:39Z</time>
      </trkpt>
      <trkpt lat="50.713352300226688" lon="6.446296591311693">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:37:43Z</time>
      </trkpt>
      <trkpt lat="50.7132981531322" lon="6.446212017908692">
        <ele>169.81</ele>
        <time>2012-12-03T09:37:51Z</time>
      </trkpt>
      <trkpt lat="50.71326102130115" lon="6.446153931319714">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T09:37:58Z</time>
      </trkpt>
      <trkpt lat="50.713240820914507" lon="6.446122163906694">
        <ele>169.81</ele>
        <time>2012-12-03T09:38:01Z</time>
      </trkpt>
      <trkpt lat="50.713140070438385" lon="6.446042116731405">
        <ele>171.25</ele>
        <time>2012-12-03T09:38:11Z</time>
      </trkpt>
      <trkpt lat="50.713082067668438" lon="6.445973552763462">
        <ele>171.25</ele>
        <time>2012-12-03T09:38:19Z</time>
      </trkpt>
      <trkpt lat="50.712992046028376" lon="6.445894511416555">
        <ele>171.25</ele>
        <time>2012-12-03T09:38:27Z</time>
      </trkpt>
      <trkpt lat="50.712912417948246" lon="6.44581169821322">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:38:35Z</time>
      </trkpt>
      <trkpt lat="50.712834382429719" lon="6.445726957172155">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:38:44Z</time>
      </trkpt>
      <trkpt lat="50.712748887017369" lon="6.44559670239687">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:38:53Z</time>
      </trkpt>
      <trkpt lat="50.712679568678141" lon="6.445513218641281">
        <ele>171.25</ele>
        <time>2012-12-03T09:39:01Z</time>
      </trkpt>
      <trkpt lat="50.712629863992333" lon="6.445419592782855">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:39:08Z</time>
      </trkpt>
      <trkpt lat="50.712582254782319" lon="6.445378856733441">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:39:13Z</time>
      </trkpt>
      <trkpt lat="50.712517881765962" lon="6.445266120135784">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:39:23Z</time>
      </trkpt>
      <trkpt lat="50.712455855682492" lon="6.445240722969174">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T09:39:31Z</time>
      </trkpt>
      <trkpt lat="50.712443785741925" lon="6.445215996354818">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:39:38Z</time>
      </trkpt>
      <trkpt lat="50.712421406060457" lon="6.445136787369847">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:39:44Z</time>
      </trkpt>
      <trkpt lat="50.712376981973648" lon="6.445095464587212">
        <ele>171.25</ele>
        <time>2012-12-03T09:39:49Z</time>
      </trkpt>
      <trkpt lat="50.712302383035421" lon="6.445005023851991">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:39:58Z</time>
      </trkpt>
      <trkpt lat="50.712221078574657" lon="6.444909386336803">
        <ele>171.25</ele>
        <time>2012-12-03T09:40:08Z</time>
      </trkpt>
      <trkpt lat="50.712149497121572" lon="6.444830512627959">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:40:17Z</time>
      </trkpt>
      <trkpt lat="50.712119154632092" lon="6.444778963923454">
        <ele>171.25</ele>
        <time>2012-12-03T09:40:26Z</time>
      </trkpt>
      <trkpt lat="50.712106246501207" lon="6.444731187075377">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T09:40:34Z</time>
      </trkpt>
      <trkpt lat="50.712039610370994" lon="6.444627419114113">
        <ele>171.25</ele>
        <time>2012-12-03T09:40:43Z</time>
      </trkpt>
      <trkpt lat="50.711959814652801" lon="6.444534882903099">
        <ele>171.25</ele>
        <time>2012-12-03T09:40:53Z</time>
      </trkpt>
      <trkpt lat="50.711900135502219" lon="6.444493057206273">
        <ele>171.25</ele>
        <time>2012-12-03T09:40:59Z</time>
      </trkpt>
      <trkpt lat="50.711857052519917" lon="6.444426001980901">
        <ele>171.25</ele>
        <time>2012-12-03T09:41:07Z</time>
      </trkpt>
      <trkpt lat="50.711864093318582" lon="6.444397252053022">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T09:41:18Z</time>
      </trkpt>
      <trkpt lat="50.711872726678848" lon="6.444397252053022">
        <ele>171.25</ele>
        <time>2012-12-03T09:41:30Z</time>
      </trkpt>
      <trkpt lat="50.711814053356647" lon="6.444346038624644">
        <ele>171.25</ele>
        <time>2012-12-03T09:41:39Z</time>
      </trkpt>
      <trkpt lat="50.711728306487203" lon="6.444293232634664">
        <ele>171.25</ele>
        <time>2012-12-03T09:41:46Z</time>
      </trkpt>
      <trkpt lat="50.711624622344971" lon="6.444195415824652">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T09:41:54Z</time>
      </trkpt>
      <trkpt lat="50.711533343419433" lon="6.444119475781918">
        <ele>172.69</ele>
        <time>2012-12-03T09:42:03Z</time>
      </trkpt>
      <trkpt lat="50.711511382833123" lon="6.444085780531168">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T09:42:08Z</time>
      </trkpt>
      <trkpt lat="50.711440639570355" lon="6.444025430828333">
        <ele>173.16999999999999</ele>
        <time>2012-12-03T09:42:14Z</time>
      </trkpt>
      <trkpt lat="50.711372494697571" lon="6.443936163559556">
        <ele>173.16999999999999</ele>
        <time>2012-12-03T09:42:23Z</time>
      </trkpt>
      <trkpt lat="50.711332680657506" lon="6.443890063092113">
        <ele>173.66</ele>
        <time>2012-12-03T09:42:27Z</time>
      </trkpt>
      <trkpt lat="50.711277024820447" lon="6.443831054493785">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T09:42:36Z</time>
      </trkpt>
      <trkpt lat="50.711224973201752" lon="6.44378243945539">
        <ele>174.62</ele>
        <time>2012-12-03T09:42:44Z</time>
      </trkpt>
      <trkpt lat="50.711131263524294" lon="6.443702895194292">
        <ele>175.09999999999999</ele>
        <time>2012-12-03T09:42:53Z</time>
      </trkpt>
      <trkpt lat="50.711080804467201" lon="6.443648664280772">
        <ele>175.09999999999999</ele>
        <time>2012-12-03T09:42:58Z</time>
      </trkpt>
      <trkpt lat="50.710995057597756" lon="6.443576328456402">
        <ele>175.58000000000001</ele>
        <time>2012-12-03T09:43:05Z</time>
      </trkpt>
      <trkpt lat="50.710953650996089" lon="6.443554870784283">
        <ele>176.53999999999999</ele>
        <time>2012-12-03T09:43:13Z</time>
      </trkpt>
      <trkpt lat="50.710904281586409" lon="6.443512374535203">
        <ele>176.53999999999999</ele>
        <time>2012-12-03T09:43:20Z</time>
      </trkpt>
      <trkpt lat="50.710854912176728" lon="6.443513631820679">
        <ele>176.53999999999999</ele>
        <time>2012-12-03T09:43:31Z</time>
      </trkpt>
      <trkpt lat="50.71082666516304" lon="6.44344917498529">
        <ele>177.02000000000001</ele>
        <time>2012-12-03T09:43:38Z</time>
      </trkpt>
      <trkpt lat="50.710761118680239" lon="6.443354124203324">
        <ele>177.02000000000001</ele>
        <time>2012-12-03T09:43:45Z</time>
      </trkpt>
      <trkpt lat="50.710710575804114" lon="6.443264689296484">
        <ele>177.97999999999999</ele>
        <time>2012-12-03T09:43:54Z</time>
      </trkpt>
      <trkpt lat="50.710709234699607" lon="6.443200651556253">
        <ele>178.46000000000001</ele>
        <time>2012-12-03T09:44:01Z</time>
      </trkpt>
      <trkpt lat="50.710699427872896" lon="6.443205513060093">
        <ele>177.97999999999999</ele>
        <time>2012-12-03T09:44:09Z</time>
      </trkpt>
      <trkpt lat="50.710684005171061" lon="6.443247757852078">
        <ele>178.46000000000001</ele>
        <time>2012-12-03T09:44:22Z</time>
      </trkpt>
      <trkpt lat="50.710642514750361" lon="6.443174667656422">
        <ele>178.94</ele>
        <time>2012-12-03T09:44:29Z</time>
      </trkpt>
      <trkpt lat="50.710561880841851" lon="6.44307928159833">
        <ele>179.41999999999999</ele>
        <time>2012-12-03T09:44:36Z</time>
      </trkpt>
      <trkpt lat="50.7105369027704" lon="6.443017926067114">
        <ele>179.90000000000001</ele>
        <time>2012-12-03T09:44:43Z</time>
      </trkpt>
      <trkpt lat="50.710499854758382" lon="6.443023793399334">
        <ele>181.34999999999999</ele>
        <time>2012-12-03T09:44:51Z</time>
      </trkpt>
      <trkpt lat="50.710421316325665" lon="6.443026978522539">
        <ele>181.83000000000001</ele>
        <time>2012-12-03T09:44:59Z</time>
      </trkpt>
      <trkpt lat="50.71039910428226" lon="6.443008203059435">
        <ele>182.78999999999999</ele>
        <time>2012-12-03T09:45:05Z</time>
      </trkpt>
      <trkpt lat="50.710313860327005" lon="6.442969311028719">
        <ele>184.71000000000001</ele>
        <time>2012-12-03T09:45:14Z</time>
      </trkpt>
      <trkpt lat="50.710217216983438" lon="6.442962186411023">
        <ele>186.15000000000001</ele>
        <time>2012-12-03T09:45:23Z</time>
      </trkpt>
      <trkpt lat="50.710135828703642" lon="6.443026643246412">
        <ele>187.11000000000001</ele>
        <time>2012-12-03T09:45:31Z</time>
      </trkpt>
      <trkpt lat="50.710044633597136" lon="6.44311792217195">
        <ele>188.56</ele>
        <time>2012-12-03T09:45:40Z</time>
      </trkpt>
      <trkpt lat="50.709959389641881" lon="6.443226803094149">
        <ele>190.47999999999999</ele>
        <time>2012-12-03T09:45:51Z</time>
      </trkpt>
      <trkpt lat="50.709887808188796" lon="6.443302072584629">
        <ele>190.96000000000001</ele>
        <time>2012-12-03T09:45:59Z</time>
      </trkpt>
      <trkpt lat="50.709801726043224" lon="6.443408103659749">
        <ele>190.47999999999999</ele>
        <time>2012-12-03T09:46:08Z</time>
      </trkpt>
      <trkpt lat="50.709742968901992" lon="6.443477841094136">
        <ele>192.40000000000001</ele>
        <time>2012-12-03T09:46:15Z</time>
      </trkpt>
      <trkpt lat="50.709718409925699" lon="6.443482702597976">
        <ele>191.91999999999999</ele>
        <time>2012-12-03T09:46:20Z</time>
      </trkpt>
      <trkpt lat="50.709725366905332" lon="6.443429309874773">
        <ele>192.40000000000001</ele>
        <time>2012-12-03T09:46:27Z</time>
      </trkpt>
      <trkpt lat="50.709708770737052" lon="6.443488150835037">
        <ele>192.40000000000001</ele>
        <time>2012-12-03T09:46:34Z</time>
      </trkpt>
      <trkpt lat="50.709702149033546" lon="6.443508602678776">
        <ele>193.84</ele>
        <time>2012-12-03T09:46:41Z</time>
      </trkpt>
      <trkpt lat="50.70969745516777" lon="6.44353911280632">
        <ele>194.31999999999999</ele>
        <time>2012-12-03T09:46:43Z</time>
      </trkpt>
      <trkpt lat="50.709669124335051" lon="6.443602479994297">
        <ele>193.84</ele>
        <time>2012-12-03T09:46:51Z</time>
      </trkpt>
      <trkpt lat="50.70967742241919" lon="6.443570461124182">
        <ele>193.84</ele>
        <time>2012-12-03T09:46:58Z</time>
      </trkpt>
      <trkpt lat="50.70965294726193" lon="6.443580267950892">
        <ele>194.31999999999999</ele>
        <time>2012-12-03T09:47:00Z</time>
      </trkpt>
      <trkpt lat="50.709643391892314" lon="6.443653861060739">
        <ele>194.31999999999999</ele>
        <time>2012-12-03T09:47:07Z</time>
      </trkpt>
      <trkpt lat="50.709661999717355" lon="6.443664925172925">
        <ele>194.31999999999999</ele>
        <time>2012-12-03T09:47:17Z</time>
      </trkpt>
      <trkpt lat="50.709671219810843" lon="6.443657046183944">
        <ele>194.80000000000001</ele>
        <time>2012-12-03T09:47:32Z</time>
      </trkpt>
      <trkpt lat="50.709671638906002" lon="6.443623853847385">
        <ele>195.28</ele>
        <time>2012-12-03T09:47:42Z</time>
      </trkpt>
      <trkpt lat="50.709661161527038" lon="6.443597786128521">
        <ele>195.28</ele>
        <time>2012-12-03T09:47:54Z</time>
      </trkpt>
      <trkpt lat="50.709616653621197" lon="6.443557217717171">
        <ele>195.28</ele>
        <time>2012-12-03T09:48:03Z</time>
      </trkpt>
      <trkpt lat="50.709611708298326" lon="6.443563168868423">
        <ele>195.28</ele>
        <time>2012-12-03T09:48:09Z</time>
      </trkpt>
      <trkpt lat="50.709597626700997" lon="6.443588146939874">
        <ele>195.28</ele>
        <time>2012-12-03T09:48:14Z</time>
      </trkpt>
      <trkpt lat="50.709483465179801" lon="6.443646987900138">
        <ele>196.72999999999999</ele>
        <time>2012-12-03T09:48:23Z</time>
      </trkpt>
      <trkpt lat="50.709408866241574" lon="6.443681688979268">
        <ele>198.65000000000001</ele>
        <time>2012-12-03T09:48:30Z</time>
      </trkpt>
      <trkpt lat="50.709409117698669" lon="6.443689651787281">
        <ele>197.69</ele>
        <time>2012-12-03T09:48:35Z</time>
      </trkpt>
      <trkpt lat="50.709328735247254" lon="6.443774979561567">
        <ele>198.65000000000001</ele>
        <time>2012-12-03T09:48:43Z</time>
      </trkpt>
      <trkpt lat="50.709261847659945" lon="6.443818984553218">
        <ele>200.09</ele>
        <time>2012-12-03T09:48:50Z</time>
      </trkpt>
      <trkpt lat="50.709281880408525" lon="6.443827282637358">
        <ele>200.09</ele>
        <time>2012-12-03T09:48:58Z</time>
      </trkpt>
      <trkpt lat="50.709290765225887" lon="6.443814039230347">
        <ele>200.09</ele>
        <time>2012-12-03T09:49:05Z</time>
      </trkpt>
      <trkpt lat="50.70925229229033" lon="6.443772464990616">
        <ele>200.56999999999999</ele>
        <time>2012-12-03T09:49:11Z</time>
      </trkpt>
      <trkpt lat="50.709239216521382" lon="6.443777997046709">
        <ele>201.05000000000001</ele>
        <time>2012-12-03T09:49:13Z</time>
      </trkpt>
      <trkpt lat="50.709150116890669" lon="6.443838262930512">
        <ele>202.00999999999999</ele>
        <time>2012-12-03T09:49:22Z</time>
      </trkpt>
      <trkpt lat="50.709088509902358" lon="6.443890146911144">
        <ele>204.41999999999999</ele>
        <time>2012-12-03T09:49:29Z</time>
      </trkpt>
      <trkpt lat="50.709025897085667" lon="6.443958627060056">
        <ele>204.41999999999999</ele>
        <time>2012-12-03T09:49:37Z</time>
      </trkpt>
      <trkpt lat="50.708971582353115" lon="6.444003051146865">
        <ele>205.38</ele>
        <time>2012-12-03T09:49:43Z</time>
      </trkpt>
      <trkpt lat="50.708884494379163" lon="6.44398863427341">
        <ele>205.86000000000001</ele>
        <time>2012-12-03T09:49:52Z</time>
      </trkpt>
      <trkpt lat="50.708887428045273" lon="6.443977989256382">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T09:50:00Z</time>
      </trkpt>
      <trkpt lat="50.708875358104706" lon="6.443985952064395">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T09:50:11Z</time>
      </trkpt>
      <trkpt lat="50.708867479115725" lon="6.444013947620988">
        <ele>207.30000000000001</ele>
        <time>2012-12-03T09:50:13Z</time>
      </trkpt>
      <trkpt lat="50.70874803699553" lon="6.444101454690099">
        <ele>208.74000000000001</ele>
        <time>2012-12-03T09:50:23Z</time>
      </trkpt>
      <trkpt lat="50.70865667425096" lon="6.444139424711466">
        <ele>209.22</ele>
        <time>2012-12-03T09:50:32Z</time>
      </trkpt>
      <trkpt lat="50.708575202152133" lon="6.44415182992816">
        <ele>210.19</ele>
        <time>2012-12-03T09:50:39Z</time>
      </trkpt>
      <trkpt lat="50.708500016480684" lon="6.44416406750679">
        <ele>211.15000000000001</ele>
        <time>2012-12-03T09:50:46Z</time>
      </trkpt>
      <trkpt lat="50.708425836637616" lon="6.444140262901783">
        <ele>209.69999999999999</ele>
        <time>2012-12-03T09:50:54Z</time>
      </trkpt>
      <trkpt lat="50.708437571302056" lon="6.444138586521149">
        <ele>210.66999999999999</ele>
        <time>2012-12-03T09:51:03Z</time>
      </trkpt>
      <trkpt lat="50.708400188013911" lon="6.444162223488092">
        <ele>210.66999999999999</ele>
        <time>2012-12-03T09:51:10Z</time>
      </trkpt>
      <trkpt lat="50.708391889929771" lon="6.444165324792266">
        <ele>210.66999999999999</ele>
        <time>2012-12-03T09:51:13Z</time>
      </trkpt>
      <trkpt lat="50.708244871348143" lon="6.444236235693097">
        <ele>210.19</ele>
        <time>2012-12-03T09:51:24Z</time>
      </trkpt>
      <trkpt lat="50.70819147862494" lon="6.44424956291914">
        <ele>211.15000000000001</ele>
        <time>2012-12-03T09:51:28Z</time>
      </trkpt>
      <trkpt lat="50.708089722320437" lon="6.444269930943847">
        <ele>211.63</ele>
        <time>2012-12-03T09:51:36Z</time>
      </trkpt>
      <trkpt lat="50.70808058604598" lon="6.444268506020308">
        <ele>212.59</ele>
        <time>2012-12-03T09:51:37Z</time>
      </trkpt>
      <trkpt lat="50.708033060654998" lon="6.444253083318472">
        <ele>211.63</ele>
        <time>2012-12-03T09:51:43Z</time>
      </trkpt>
      <trkpt lat="50.708024008199573" lon="6.444265488535166">
        <ele>212.11000000000001</ele>
        <time>2012-12-03T09:51:50Z</time>
      </trkpt>
      <trkpt lat="50.707954522222281" lon="6.444266075268388">
        <ele>212.59</ele>
        <time>2012-12-03T09:51:58Z</time>
      </trkpt>
      <trkpt lat="50.707971705123782" lon="6.444265237078071">
        <ele>212.59</ele>
        <time>2012-12-03T09:52:11Z</time>
      </trkpt>
      <trkpt lat="50.707993917167187" lon="6.444259034469724">
        <ele>212.59</ele>
        <time>2012-12-03T09:52:19Z</time>
      </trkpt>
      <trkpt lat="50.707905320450664" lon="6.444285102188587">
        <ele>213.06999999999999</ele>
        <time>2012-12-03T09:52:26Z</time>
      </trkpt>
      <trkpt lat="50.707843210548162" lon="6.444296082481742">
        <ele>214.03</ele>
        <time>2012-12-03T09:52:31Z</time>
      </trkpt>
      <trkpt lat="50.707802223041654" lon="6.444311840459704">
        <ele>214.50999999999999</ele>
        <time>2012-12-03T09:52:35Z</time>
      </trkpt>
      <trkpt lat="50.707756290212274" lon="6.444323407486081">
        <ele>214.99000000000001</ele>
        <time>2012-12-03T09:52:39Z</time>
      </trkpt>
      <trkpt lat="50.707654114812613" lon="6.444327849894762">
        <ele>215.94999999999999</ele>
        <time>2012-12-03T09:52:48Z</time>
      </trkpt>
      <trkpt lat="50.707557890564203" lon="6.444341009482741">
        <ele>217.88</ele>
        <time>2012-12-03T09:52:57Z</time>
      </trkpt>
      <trkpt lat="50.707460409030318" lon="6.444337069988251">
        <ele>218.36000000000001</ele>
        <time>2012-12-03T09:53:06Z</time>
      </trkpt>
      <trkpt lat="50.707382876425982" lon="6.444330280646682">
        <ele>219.80000000000001</ele>
        <time>2012-12-03T09:53:13Z</time>
      </trkpt>
      <trkpt lat="50.707292603328824" lon="6.444310834631324">
        <ele>220.28</ele>
        <time>2012-12-03T09:53:23Z</time>
      </trkpt>
      <trkpt lat="50.707250442355871" lon="6.444321312010288">
        <ele>220.75999999999999</ele>
        <time>2012-12-03T09:53:31Z</time>
      </trkpt>
      <trkpt lat="50.707182632759213" lon="6.444334052503109">
        <ele>221.72</ele>
        <time>2012-12-03T09:53:36Z</time>
      </trkpt>
      <trkpt lat="50.707158325240016" lon="6.444329023361206">
        <ele>221.24000000000001</ele>
        <time>2012-12-03T09:53:38Z</time>
      </trkpt>
      <trkpt lat="50.707068722695112" lon="6.444333046674728">
        <ele>221.24000000000001</ele>
        <time>2012-12-03T09:53:46Z</time>
      </trkpt>
      <trkpt lat="50.707058245316148" lon="6.444332292303443">
        <ele>221.72</ele>
        <time>2012-12-03T09:53:47Z</time>
      </trkpt>
      <trkpt lat="50.707004936411977" lon="6.444339584559202">
        <ele>220.75999999999999</ele>
        <time>2012-12-03T09:53:52Z</time>
      </trkpt>
      <trkpt lat="50.706899911165237" lon="6.444340758025646">
        <ele>222.19999999999999</ele>
        <time>2012-12-03T09:54:01Z</time>
      </trkpt>
      <trkpt lat="50.706802178174257" lon="6.444348469376564">
        <ele>223.63999999999999</ele>
        <time>2012-12-03T09:54:10Z</time>
      </trkpt>
      <trkpt lat="50.706780971959233" lon="6.444346038624644">
        <ele>224.12</ele>
        <time>2012-12-03T09:54:12Z</time>
      </trkpt>
      <trkpt lat="50.706702684983611" lon="6.44435559399426">
        <ele>225.09</ele>
        <time>2012-12-03T09:54:20Z</time>
      </trkpt>
      <trkpt lat="50.706626828759909" lon="6.444377219304442">
        <ele>226.53</ele>
        <time>2012-12-03T09:54:28Z</time>
      </trkpt>
      <trkpt lat="50.706570753827691" lon="6.44435559399426">
        <ele>226.53</ele>
        <time>2012-12-03T09:54:36Z</time>
      </trkpt>
      <trkpt lat="50.706562958657742" lon="6.44437369890511">
        <ele>227.49000000000001</ele>
        <time>2012-12-03T09:54:43Z</time>
      </trkpt>
      <trkpt lat="50.706475451588631" lon="6.444406555965543">
        <ele>228.93000000000001</ele>
        <time>2012-12-03T09:54:51Z</time>
      </trkpt>
      <trkpt lat="50.70640261285007" lon="6.44444108940661">
        <ele>229.41</ele>
        <time>2012-12-03T09:54:58Z</time>
      </trkpt>
      <trkpt lat="50.706382328644395" lon="6.444428600370884">
        <ele>229.41</ele>
        <time>2012-12-03T09:55:04Z</time>
      </trkpt>
      <trkpt lat="50.706386854872108" lon="6.444409992545843">
        <ele>230.37</ele>
        <time>2012-12-03T09:55:20Z</time>
      </trkpt>
      <trkpt lat="50.706352656707168" lon="6.444434216246009">
        <ele>230.84999999999999</ele>
        <time>2012-12-03T09:55:25Z</time>
      </trkpt>
      <trkpt lat="50.706333965063095" lon="6.444469084963203">
        <ele>231.33000000000001</ele>
        <time>2012-12-03T09:55:34Z</time>
      </trkpt>
      <trkpt lat="50.70632885210216" lon="6.444477299228311">
        <ele>231.33000000000001</ele>
        <time>2012-12-03T09:55:35Z</time>
      </trkpt>
      <trkpt lat="50.706264143809676" lon="6.444503702223301">
        <ele>231.81</ele>
        <time>2012-12-03T09:55:40Z</time>
      </trkpt>
      <trkpt lat="50.706144534051418" lon="6.444573439657688">
        <ele>232.78</ele>
        <time>2012-12-03T09:55:50Z</time>
      </trkpt>
      <trkpt lat="50.706050572916865" lon="6.44464829005301">
        <ele>233.74000000000001</ele>
        <time>2012-12-03T09:55:59Z</time>
      </trkpt>
      <trkpt lat="50.706004723906517" lon="6.444713920354843">
        <ele>234.22</ele>
        <time>2012-12-03T09:56:07Z</time>
      </trkpt>
      <trkpt lat="50.705987876281142" lon="6.44472355954349">
        <ele>234.69999999999999</ele>
        <time>2012-12-03T09:56:16Z</time>
      </trkpt>
      <trkpt lat="50.705906571820378" lon="6.444794805720449">
        <ele>236.13999999999999</ele>
        <time>2012-12-03T09:56:24Z</time>
      </trkpt>
      <trkpt lat="50.705856112763286" lon="6.444877199828625">
        <ele>237.09999999999999</ele>
        <time>2012-12-03T09:56:31Z</time>
      </trkpt>
      <trkpt lat="50.705796601250768" lon="6.444955570623279">
        <ele>236.62</ele>
        <time>2012-12-03T09:56:39Z</time>
      </trkpt>
      <trkpt lat="50.705726612359285" lon="6.445073839277029">
        <ele>237.58000000000001</ele>
        <time>2012-12-03T09:56:48Z</time>
      </trkpt>
      <trkpt lat="50.70566232316196" lon="6.445195376873016">
        <ele>238.53999999999999</ele>
        <time>2012-12-03T09:56:56Z</time>
      </trkpt>
      <trkpt lat="50.705599542707205" lon="6.445314818993211">
        <ele>238.53999999999999</ele>
        <time>2012-12-03T09:57:05Z</time>
      </trkpt>
      <trkpt lat="50.705533158034086" lon="6.445433590561152">
        <ele>237.58000000000001</ele>
        <time>2012-12-03T09:57:14Z</time>
      </trkpt>
      <trkpt lat="50.705479430034757" lon="6.445529982447624">
        <ele>237.09999999999999</ele>
        <time>2012-12-03T09:57:24Z</time>
      </trkpt>
      <trkpt lat="50.705454116687179" lon="6.44558060914278">
        <ele>237.09999999999999</ele>
        <time>2012-12-03T09:57:30Z</time>
      </trkpt>
      <trkpt lat="50.705413212999701" lon="6.445626458153129">
        <ele>236.62</ele>
        <time>2012-12-03T09:57:37Z</time>
      </trkpt>
      <trkpt lat="50.705366274341941" lon="6.445705918595195">
        <ele>236.13999999999999</ele>
        <time>2012-12-03T09:57:43Z</time>
      </trkpt>
      <trkpt lat="50.705280778929591" lon="6.445798287168145">
        <ele>235.66</ele>
        <time>2012-12-03T09:57:52Z</time>
      </trkpt>
      <trkpt lat="50.705223195254803" lon="6.445840951055288">
        <ele>235.18000000000001</ele>
        <time>2012-12-03T09:58:01Z</time>
      </trkpt>
      <trkpt lat="50.705232080072165" lon="6.445845309644938">
        <ele>235.18000000000001</ele>
        <time>2012-12-03T09:58:10Z</time>
      </trkpt>
      <trkpt lat="50.705165108665824" lon="6.445894930511713">
        <ele>235.18000000000001</ele>
        <time>2012-12-03T09:58:16Z</time>
      </trkpt>
      <trkpt lat="50.705102831125259" lon="6.446024933829904">
        <ele>234.69999999999999</ele>
        <time>2012-12-03T09:58:26Z</time>
      </trkpt>
      <trkpt lat="50.705113979056478" lon="6.446053851395845">
        <ele>235.66</ele>
        <time>2012-12-03T09:58:34Z</time>
      </trkpt>
      <trkpt lat="50.705109788104892" lon="6.446058796718717">
        <ele>236.62</ele>
        <time>2012-12-03T09:58:56Z</time>
      </trkpt>
      <trkpt lat="50.705103920772672" lon="6.4460389316082">
        <ele>237.09999999999999</ele>
        <time>2012-12-03T09:59:12Z</time>
      </trkpt>
      <trkpt lat="50.705107105895877" lon="6.446019234135747">
        <ele>236.13999999999999</ele>
        <time>2012-12-03T09:59:27Z</time>
      </trkpt>
      <trkpt lat="50.705115236341953" lon="6.445995094254613">
        <ele>236.13999999999999</ele>
        <time>2012-12-03T09:59:43Z</time>
      </trkpt>
      <trkpt lat="50.705076176673174" lon="6.44597782753408">
        <ele>236.13999999999999</ele>
        <time>2012-12-03T09:59:52Z</time>
      </trkpt>
      <trkpt lat="50.70508036762476" lon="6.446007331833243">
        <ele>236.13999999999999</ele>
        <time>2012-12-03T10:00:03Z</time>
      </trkpt>
      <trkpt lat="50.705089252442122" lon="6.44613859243691">
        <ele>237.09999999999999</ele>
        <time>2012-12-03T10:00:10Z</time>
      </trkpt>
      <trkpt lat="50.705116242170334" lon="6.446294663473964">
        <ele>238.53999999999999</ele>
        <time>2012-12-03T10:00:18Z</time>
      </trkpt>
      <trkpt lat="50.705151278525591" lon="6.446427013725042">
        <ele>239.99000000000001</ele>
        <time>2012-12-03T10:00:26Z</time>
      </trkpt>
      <trkpt lat="50.705169215798378" lon="6.446572439745069">
        <ele>241.91</ele>
        <time>2012-12-03T10:00:36Z</time>
      </trkpt>
      <trkpt lat="50.705183381214738" lon="6.446675704792142">
        <ele>242.87</ele>
        <time>2012-12-03T10:00:44Z</time>
      </trkpt>
      <trkpt lat="50.705175250768661" lon="6.44678114913404">
        <ele>243.83000000000001</ele>
        <time>2012-12-03T10:00:51Z</time>
      </trkpt>
      <trkpt lat="50.705164354294538" lon="6.446898244321346">
        <ele>245.27000000000001</ele>
        <time>2012-12-03T10:01:00Z</time>
      </trkpt>
      <trkpt lat="50.705169886350632" lon="6.447010897099972">
        <ele>246.72</ele>
        <time>2012-12-03T10:01:08Z</time>
      </trkpt>
      <trkpt lat="50.705155218020082" lon="6.447131261229515">
        <ele>248.16</ele>
        <time>2012-12-03T10:01:17Z</time>
      </trkpt>
      <trkpt lat="50.705140717327595" lon="6.447276771068573">
        <ele>248.63999999999999</ele>
        <time>2012-12-03T10:01:26Z</time>
      </trkpt>
      <trkpt lat="50.705137448385358" lon="6.447366708889604">
        <ele>249.59999999999999</ele>
        <time>2012-12-03T10:01:34Z</time>
      </trkpt>
      <trkpt lat="50.705122947692871" lon="6.447447258979082">
        <ele>250.08000000000001</ele>
        <time>2012-12-03T10:01:41Z</time>
      </trkpt>
      <trkpt lat="50.705100568011403" lon="6.447528311982751">
        <ele>251.52000000000001</ele>
        <time>2012-12-03T10:01:48Z</time>
      </trkpt>
      <trkpt lat="50.705078272148967" lon="6.447641719132662">
        <ele>253.44</ele>
        <time>2012-12-03T10:01:56Z</time>
      </trkpt>
      <trkpt lat="50.705053880810738" lon="6.447803070768714">
        <ele>255.84999999999999</ele>
        <time>2012-12-03T10:02:05Z</time>
      </trkpt>
      <trkpt lat="50.705028651282191" lon="6.44792159087956">
        <ele>256.81</ele>
        <time>2012-12-03T10:02:13Z</time>
      </trkpt>
      <trkpt lat="50.705015575513244" lon="6.448024185374379">
        <ele>258.25</ele>
        <time>2012-12-03T10:02:20Z</time>
      </trkpt>
      <trkpt lat="50.704982550814748" lon="6.448216550052166">
        <ele>260.64999999999998</ele>
        <time>2012-12-03T10:02:30Z</time>
      </trkpt>
      <trkpt lat="50.704940808936954" lon="6.44827731885016">
        <ele>260.64999999999998</ele>
        <time>2012-12-03T10:02:37Z</time>
      </trkpt>
      <trkpt lat="50.704947598278522" lon="6.448273295536637">
        <ele>261.62</ele>
        <time>2012-12-03T10:02:46Z</time>
      </trkpt>
      <trkpt lat="50.705001829192042" lon="6.44828611984849">
        <ele>261.62</ele>
        <time>2012-12-03T10:02:54Z</time>
      </trkpt>
      <trkpt lat="50.705016497522593" lon="6.448216969147325">
        <ele>261.13999999999999</ele>
        <time>2012-12-03T10:03:10Z</time>
      </trkpt>
      <trkpt lat="50.704991184175014" lon="6.448269272223115">
        <ele>260.64999999999998</ele>
        <time>2012-12-03T10:03:17Z</time>
      </trkpt>
      <trkpt lat="50.70494256913662" lon="6.448368430137634">
        <ele>261.62</ele>
        <time>2012-12-03T10:03:23Z</time>
      </trkpt>
      <trkpt lat="50.704903760924935" lon="6.448342697694898">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:03:31Z</time>
      </trkpt>
      <trkpt lat="50.704906024038792" lon="6.448362311348319">
        <ele>261.62</ele>
        <time>2012-12-03T10:03:41Z</time>
      </trkpt>
      <trkpt lat="50.704891355708241" lon="6.448368681594729">
        <ele>261.13999999999999</ele>
        <time>2012-12-03T10:03:49Z</time>
      </trkpt>
      <trkpt lat="50.704882135614753" lon="6.448404220864177">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:03:55Z</time>
      </trkpt>
      <trkpt lat="50.704864868894219" lon="6.448422661051154">
        <ele>261.62</ele>
        <time>2012-12-03T10:04:05Z</time>
      </trkpt>
      <trkpt lat="50.704861097037792" lon="6.448433306068182">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:04:11Z</time>
      </trkpt>
      <trkpt lat="50.704774595797062" lon="6.448487536981702">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:04:19Z</time>
      </trkpt>
      <trkpt lat="50.704682478681207" lon="6.448542354628444">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:04:26Z</time>
      </trkpt>
      <trkpt lat="50.704624392092228" lon="6.448590299114585">
        <ele>261.62</ele>
        <time>2012-12-03T10:04:34Z</time>
      </trkpt>
      <trkpt lat="50.70460444316268" lon="6.448621982708573">
        <ele>261.62</ele>
        <time>2012-12-03T10:04:40Z</time>
      </trkpt>
      <trkpt lat="50.704652052372694" lon="6.448590634390712">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:04:52Z</time>
      </trkpt>
      <trkpt lat="50.704653142020106" lon="6.448582671582699">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:05:04Z</time>
      </trkpt>
      <trkpt lat="50.70465037599206" lon="6.448574373498559">
        <ele>261.62</ele>
        <time>2012-12-03T10:05:19Z</time>
      </trkpt>
      <trkpt lat="50.704644257202744" lon="6.448608655482531">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:05:30Z</time>
      </trkpt>
      <trkpt lat="50.70457661524415" lon="6.448640171438456">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:05:34Z</time>
      </trkpt>
      <trkpt lat="50.704519031569362" lon="6.448686271905899">
        <ele>261.13999999999999</ele>
        <time>2012-12-03T10:05:42Z</time>
      </trkpt>
      <trkpt lat="50.704420879483223" lon="6.448722900822759">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:05:50Z</time>
      </trkpt>
      <trkpt lat="50.704310825094581" lon="6.448740754276514">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:06:01Z</time>
      </trkpt>
      <trkpt lat="50.704318704083562" lon="6.44870731048286">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:06:07Z</time>
      </trkpt>
      <trkpt lat="50.704308059066534" lon="6.448741173371673">
        <ele>263.06</ele>
        <time>2012-12-03T10:06:13Z</time>
      </trkpt>
      <trkpt lat="50.704291798174381" lon="6.448766319081187">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:06:15Z</time>
      </trkpt>
      <trkpt lat="50.704250475391746" lon="6.4488710090518">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:06:22Z</time>
      </trkpt>
      <trkpt lat="50.704196831211448" lon="6.448999838903546">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:06:32Z</time>
      </trkpt>
      <trkpt lat="50.704141343012452" lon="6.449110815301538">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:06:41Z</time>
      </trkpt>
      <trkpt lat="50.704127177596092" lon="6.449147276580334">
        <ele>261.62</ele>
        <time>2012-12-03T10:06:49Z</time>
      </trkpt>
      <trkpt lat="50.704080825671554" lon="6.449219109490514">
        <ele>261.13999999999999</ele>
        <time>2012-12-03T10:06:58Z</time>
      </trkpt>
      <trkpt lat="50.704061714932323" lon="6.449225563555956">
        <ele>261.62</ele>
        <time>2012-12-03T10:07:04Z</time>
      </trkpt>
      <trkpt lat="50.704045621678233" lon="6.449261270463467">
        <ele>261.62</ele>
        <time>2012-12-03T10:07:12Z</time>
      </trkpt>
      <trkpt lat="50.703986864537001" lon="6.449353219941258">
        <ele>261.62</ele>
        <time>2012-12-03T10:07:19Z</time>
      </trkpt>
      <trkpt lat="50.703891813755035" lon="6.449426896870136">
        <ele>261.62</ele>
        <time>2012-12-03T10:07:28Z</time>
      </trkpt>
      <trkpt lat="50.703813442960382" lon="6.449510380625725">
        <ele>261.62</ele>
        <time>2012-12-03T10:07:37Z</time>
      </trkpt>
      <trkpt lat="50.703750997781754" lon="6.449600486084819">
        <ele>261.62</ele>
        <time>2012-12-03T10:07:46Z</time>
      </trkpt>
      <trkpt lat="50.70371026173234" lon="6.449680617079139">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:07:53Z</time>
      </trkpt>
      <trkpt lat="50.703667430207133" lon="6.449766363948584">
        <ele>261.13999999999999</ele>
        <time>2012-12-03T10:07:59Z</time>
      </trkpt>
      <trkpt lat="50.703592915087938" lon="6.449891421943903">
        <ele>261.62</ele>
        <time>2012-12-03T10:08:08Z</time>
      </trkpt>
      <trkpt lat="50.703565087169409" lon="6.449910448864102">
        <ele>261.13999999999999</ele>
        <time>2012-12-03T10:08:14Z</time>
      </trkpt>
      <trkpt lat="50.703459726646543" lon="6.449892343953252">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:08:22Z</time>
      </trkpt>
      <trkpt lat="50.703376745805144" lon="6.449792264029384">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:08:32Z</time>
      </trkpt>
      <trkpt lat="50.703368112444878" lon="6.449781199917197">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:08:33Z</time>
      </trkpt>
      <trkpt lat="50.703288232907653" lon="6.4496532920748">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:08:43Z</time>
      </trkpt>
      <trkpt lat="50.703279096633196" lon="6.449615238234401">
        <ele>262.10000000000002</ele>
        <time>2012-12-03T10:08:45Z</time>
      </trkpt>
      <trkpt lat="50.703248921781778" lon="6.449531083926559">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:08:51Z</time>
      </trkpt>
      <trkpt lat="50.703209023922682" lon="6.449445337057114">
        <ele>263.54000000000002</ele>
        <time>2012-12-03T10:08:58Z</time>
      </trkpt>
      <trkpt lat="50.703174155205488" lon="6.449371492490172">
        <ele>262.57999999999998</ele>
        <time>2012-12-03T10:09:03Z</time>
      </trkpt>
      <trkpt lat="50.703129060566425" lon="6.449211146682501">
        <ele>263.54000000000002</ele>
        <time>2012-12-03T10:09:13Z</time>
      </trkpt>
      <trkpt lat="50.703116655349731" lon="6.44917200319469">
        <ele>263.54000000000002</ele>
        <time>2012-12-03T10:09:17Z</time>
      </trkpt>
      <trkpt lat="50.703058317303658" lon="6.449117101728916">
        <ele>263.54000000000002</ele>
        <time>2012-12-03T10:09:26Z</time>
      </trkpt>
      <trkpt lat="50.703047253191471" lon="6.449096314609051">
        <ele>263.06</ele>
        <time>2012-12-03T10:09:36Z</time>
      </trkpt>
      <trkpt lat="50.703037278726697" lon="6.449077120050788">
        <ele>264.01999999999998</ele>
        <time>2012-12-03T10:09:43Z</time>
      </trkpt>
      <trkpt lat="50.703032920137048" lon="6.449068738147616">
        <ele>263.06</ele>
        <time>2012-12-03T10:09:49Z</time>
      </trkpt>
      <trkpt lat="50.703026633709669" lon="6.449073180556297">
        <ele>264.01999999999998</ele>
        <time>2012-12-03T10:10:02Z</time>
      </trkpt>
      <trkpt lat="50.703022945672274" lon="6.449128249660134">
        <ele>264.01999999999998</ele>
        <time>2012-12-03T10:10:10Z</time>
      </trkpt>
      <trkpt lat="50.703002410009503" lon="6.449168734252453">
        <ele>265.94</ele>
        <time>2012-12-03T10:10:18Z</time>
      </trkpt>
      <trkpt lat="50.703005427494645" lon="6.449233694002032">
        <ele>267.86000000000001</ele>
        <time>2012-12-03T10:10:28Z</time>
      </trkpt>
      <trkpt lat="50.703010791912675" lon="6.449326062574983">
        <ele>269.79000000000002</ele>
        <time>2012-12-03T10:10:38Z</time>
      </trkpt>
      <trkpt lat="50.703009953722358" lon="6.449423292651773">
        <ele>271.23000000000002</ele>
        <time>2012-12-03T10:10:47Z</time>
      </trkpt>
      <trkpt lat="50.702989334240556" lon="6.44953602924943">
        <ele>273.63</ele>
        <time>2012-12-03T10:10:57Z</time>
      </trkpt>
      <trkpt lat="50.70299444720149" lon="6.44963183440268">
        <ele>274.58999999999997</ele>
        <time>2012-12-03T10:11:06Z</time>
      </trkpt>
      <trkpt lat="50.702999727800488" lon="6.449699811637402">
        <ele>276.51999999999998</ele>
        <time>2012-12-03T10:11:14Z</time>
      </trkpt>
      <trkpt lat="50.703011797741055" lon="6.449789665639401">
        <ele>277.95999999999998</ele>
        <time>2012-12-03T10:11:23Z</time>
      </trkpt>
      <trkpt lat="50.703004170209169" lon="6.449882788583636">
        <ele>278.92000000000002</ele>
        <time>2012-12-03T10:11:32Z</time>
      </trkpt>
      <trkpt lat="50.703011127188802" lon="6.44996702671051">
        <ele>281.31999999999999</ele>
        <time>2012-12-03T10:11:40Z</time>
      </trkpt>
      <trkpt lat="50.703017245978117" lon="6.450001811608672">
        <ele>281.31999999999999</ele>
        <time>2012-12-03T10:11:49Z</time>
      </trkpt>
      <trkpt lat="50.703023616224527" lon="6.450041038915515">
        <ele>281.80000000000001</ele>
        <time>2012-12-03T10:11:56Z</time>
      </trkpt>
      <trkpt lat="50.703050773590803" lon="6.450066352263093">
        <ele>284.20999999999998</ele>
        <time>2012-12-03T10:12:06Z</time>
      </trkpt>
      <trkpt lat="50.70307751186192" lon="6.450105160474777">
        <ele>286.61000000000001</ele>
        <time>2012-12-03T10:12:16Z</time>
      </trkpt>
      <trkpt lat="50.703090755268931" lon="6.450163582339883">
        <ele>288.05000000000001</ele>
        <time>2012-12-03T10:12:26Z</time>
      </trkpt>
      <trkpt lat="50.703101065009832" lon="6.450271792709827">
        <ele>291.42000000000002</ele>
        <time>2012-12-03T10:12:39Z</time>
      </trkpt>
      <trkpt lat="50.703077930957079" lon="6.450333651155233">
        <ele>292.86000000000001</ele>
        <time>2012-12-03T10:12:48Z</time>
      </trkpt>
      <trkpt lat="50.703087905421853" lon="6.4504424482584">
        <ele>294.30000000000001</ele>
        <time>2012-12-03T10:12:58Z</time>
      </trkpt>
      <trkpt lat="50.703074913471937" lon="6.450576726347208">
        <ele>297.18000000000001</ele>
        <time>2012-12-03T10:13:12Z</time>
      </trkpt>
      <trkpt lat="50.703070051968098" lon="6.450640428811312">
        <ele>298.63</ele>
        <time>2012-12-03T10:13:22Z</time>
      </trkpt>
      <trkpt lat="50.703061753883958" lon="6.450692564249039">
        <ele>299.58999999999997</ele>
        <time>2012-12-03T10:13:29Z</time>
      </trkpt>
      <trkpt lat="50.703096119686961" lon="6.450734976679087">
        <ele>300.55000000000001</ele>
        <time>2012-12-03T10:13:37Z</time>
      </trkpt>
      <trkpt lat="50.703104585409164" lon="6.450776215642691">
        <ele>301.02999999999997</ele>
        <time>2012-12-03T10:13:46Z</time>
      </trkpt>
      <trkpt lat="50.703084301203489" lon="6.450818376615644">
        <ele>301.99000000000001</ele>
        <time>2012-12-03T10:14:00Z</time>
      </trkpt>
      <trkpt lat="50.703072398900986" lon="6.450894232839346">
        <ele>303.43000000000001</ele>
        <time>2012-12-03T10:14:08Z</time>
      </trkpt>
      <trkpt lat="50.703123947605491" lon="6.451016860082746">
        <ele>305.36000000000001</ele>
        <time>2012-12-03T10:14:20Z</time>
      </trkpt>
      <trkpt lat="50.703125204890966" lon="6.451203022152185">
        <ele>306.80000000000001</ele>
        <time>2012-12-03T10:14:32Z</time>
      </trkpt>
      <trkpt lat="50.703139454126358" lon="6.451362362131476">
        <ele>308.24000000000001</ele>
        <time>2012-12-03T10:14:41Z</time>
      </trkpt>
      <trkpt lat="50.703166360035539" lon="6.451445175334811">
        <ele>309.68000000000001</ele>
        <time>2012-12-03T10:14:51Z</time>
      </trkpt>
      <trkpt lat="50.703188488259912" lon="6.451533185318112">
        <ele>310.63999999999999</ele>
        <time>2012-12-03T10:15:00Z</time>
      </trkpt>
      <trkpt lat="50.703199803829193" lon="6.451624967157841">
        <ele>312.56999999999999</ele>
        <time>2012-12-03T10:15:11Z</time>
      </trkpt>
      <trkpt lat="50.703199217095971" lon="6.451688334345818">
        <ele>314.97000000000003</ele>
        <time>2012-12-03T10:15:20Z</time>
      </trkpt>
      <trkpt lat="50.703191589564085" lon="6.451766369864345">
        <ele>315.93000000000001</ele>
        <time>2012-12-03T10:15:27Z</time>
      </trkpt>
      <trkpt lat="50.703185386955738" lon="6.451814565807581">
        <ele>316.41000000000003</ele>
        <time>2012-12-03T10:15:37Z</time>
      </trkpt>
      <trkpt lat="50.703189661726356" lon="6.45186435431242">
        <ele>316.88999999999999</ele>
        <time>2012-12-03T10:15:44Z</time>
      </trkpt>
      <trkpt lat="50.703205419704318" lon="6.451923362910748">
        <ele>319.77999999999997</ele>
        <time>2012-12-03T10:15:53Z</time>
      </trkpt>
      <trkpt lat="50.703219585120678" lon="6.451972397044301">
        <ele>321.22000000000003</ele>
        <time>2012-12-03T10:16:01Z</time>
      </trkpt>
      <trkpt lat="50.703209359198809" lon="6.452019168063998">
        <ele>321.69999999999999</ele>
        <time>2012-12-03T10:16:09Z</time>
      </trkpt>
      <trkpt lat="50.703192595392466" lon="6.452063173055649">
        <ele>323.13999999999999</ele>
        <time>2012-12-03T10:16:18Z</time>
      </trkpt>
      <trkpt lat="50.703204665333033" lon="6.452146824449301">
        <ele>324.57999999999998</ele>
        <time>2012-12-03T10:16:27Z</time>
      </trkpt>
      <trkpt lat="50.70323484018445" lon="6.45214045420289">
        <ele>326.01999999999998</ele>
        <time>2012-12-03T10:16:34Z</time>
      </trkpt>
      <trkpt lat="50.70325680077076" lon="6.45219661295414">
        <ele>327.47000000000003</ele>
        <time>2012-12-03T10:16:44Z</time>
      </trkpt>
      <trkpt lat="50.703279515728354" lon="6.452268529683352">
        <ele>328.91000000000003</ele>
        <time>2012-12-03T10:16:52Z</time>
      </trkpt>
      <trkpt lat="50.703319497406483" lon="6.452318988740444">
        <ele>329.38999999999999</ele>
        <time>2012-12-03T10:17:01Z</time>
      </trkpt>
      <trkpt lat="50.703337267041206" lon="6.452365508303046">
        <ele>332.75</ele>
        <time>2012-12-03T10:17:10Z</time>
      </trkpt>
      <trkpt lat="50.703345062211156" lon="6.452427366748452">
        <ele>332.75</ele>
        <time>2012-12-03T10:17:18Z</time>
      </trkpt>
      <trkpt lat="50.703335842117667" lon="6.452493835240603">
        <ele>334.68000000000001</ele>
        <time>2012-12-03T10:17:27Z</time>
      </trkpt>
      <trkpt lat="50.703342296183109" lon="6.452545886859298">
        <ele>335.16000000000003</ele>
        <time>2012-12-03T10:17:36Z</time>
      </trkpt>
      <trkpt lat="50.703349923714995" lon="6.452568098902702">
        <ele>336.12</ele>
        <time>2012-12-03T10:17:44Z</time>
      </trkpt>
      <trkpt lat="50.703347828239202" lon="6.452644541859627">
        <ele>338.04000000000002</ele>
        <time>2012-12-03T10:17:54Z</time>
      </trkpt>
      <trkpt lat="50.70334573276341" lon="6.452696761116386">
        <ele>338.51999999999998</ele>
        <time>2012-12-03T10:18:01Z</time>
      </trkpt>
      <trkpt lat="50.703344726935029" lon="6.452736239880323">
        <ele>340.44</ele>
        <time>2012-12-03T10:18:11Z</time>
      </trkpt>
      <trkpt lat="50.703336931765079" lon="6.45273313857615">
        <ele>339.95999999999998</ele>
        <time>2012-12-03T10:18:22Z</time>
      </trkpt>
      <trkpt lat="50.703329220414162" lon="6.452788710594177">
        <ele>341.41000000000003</ele>
        <time>2012-12-03T10:18:31Z</time>
      </trkpt>
      <trkpt lat="50.703310277312994" lon="6.452819975093007">
        <ele>341.41000000000003</ele>
        <time>2012-12-03T10:18:37Z</time>
      </trkpt>
      <trkpt lat="50.703304409980774" lon="6.452859956771135">
        <ele>342.37</ele>
        <time>2012-12-03T10:18:43Z</time>
      </trkpt>
      <trkpt lat="50.703281359747052" lon="6.452896166592836">
        <ele>343.81</ele>
        <time>2012-12-03T10:18:49Z</time>
      </trkpt>
      <trkpt lat="50.703270463272929" lon="6.452929442748427">
        <ele>345.73000000000002</ele>
        <time>2012-12-03T10:18:55Z</time>
      </trkpt>
      <trkpt lat="50.703266272321343" lon="6.452948888763785">
        <ele>347.64999999999998</ele>
        <time>2012-12-03T10:18:59Z</time>
      </trkpt>
      <trkpt lat="50.70329393260181" lon="6.4529481343925">
        <ele>345.25</ele>
        <time>2012-12-03T10:19:10Z</time>
      </trkpt>
      <trkpt lat="50.703305918723345" lon="6.45296280272305">
        <ele>347.64999999999998</ele>
        <time>2012-12-03T10:19:15Z</time>
      </trkpt>
      <trkpt lat="50.703297201544046" lon="6.452957941219211">
        <ele>345.73000000000002</ele>
        <time>2012-12-03T10:19:18Z</time>
      </trkpt>
      <trkpt lat="50.703320167958736" lon="6.452998761087656">
        <ele>347.64999999999998</ele>
        <time>2012-12-03T10:19:27Z</time>
      </trkpt>
      <trkpt lat="50.703360484912992" lon="6.453063804656267">
        <ele>348.13</ele>
        <time>2012-12-03T10:19:36Z</time>
      </trkpt>
      <trkpt lat="50.703359981998801" lon="6.453108061105013">
        <ele>349.10000000000002</ele>
        <time>2012-12-03T10:19:42Z</time>
      </trkpt>
      <trkpt lat="50.703380098566413" lon="6.453148042783141">
        <ele>351.5</ele>
        <time>2012-12-03T10:19:51Z</time>
      </trkpt>
      <trkpt lat="50.703387139365077" lon="6.45319783128798">
        <ele>352.45999999999998</ele>
        <time>2012-12-03T10:19:58Z</time>
      </trkpt>
      <trkpt lat="50.703376326709986" lon="6.453225575387478">
        <ele>352.94</ele>
        <time>2012-12-03T10:20:06Z</time>
      </trkpt>
      <trkpt lat="50.703371213749051" lon="6.453244434669614">
        <ele>352.94</ele>
        <time>2012-12-03T10:20:17Z</time>
      </trkpt>
      <trkpt lat="50.703341877087951" lon="6.453295815736055">
        <ele>354.38</ele>
        <time>2012-12-03T10:20:24Z</time>
      </trkpt>
      <trkpt lat="50.703337350860238" lon="6.453288104385138">
        <ele>354.86000000000001</ele>
        <time>2012-12-03T10:20:26Z</time>
      </trkpt>
      <trkpt lat="50.703320251777768" lon="6.453235382214189">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:20:33Z</time>
      </trkpt>
      <trkpt lat="50.703296363353729" lon="6.453196993097663">
        <ele>354.38</ele>
        <time>2012-12-03T10:20:46Z</time>
      </trkpt>
      <trkpt lat="50.703285969793797" lon="6.453200345858932">
        <ele>354.86000000000001</ele>
        <time>2012-12-03T10:20:56Z</time>
      </trkpt>
      <trkpt lat="50.703298877924681" lon="6.453217025846243">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T10:21:10Z</time>
      </trkpt>
      <trkpt lat="50.703352186828852" lon="6.453241668641567">
        <ele>353.89999999999998</ele>
        <time>2012-12-03T10:21:19Z</time>
      </trkpt>
      <trkpt lat="50.703333159908652" lon="6.453299755230546">
        <ele>354.86000000000001</ele>
        <time>2012-12-03T10:21:26Z</time>
      </trkpt>
      <trkpt lat="50.703301895409822" lon="6.453312076628208">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:21:33Z</time>
      </trkpt>
      <trkpt lat="50.703298626467586" lon="6.453304616734386">
        <ele>357.75</ele>
        <time>2012-12-03T10:21:42Z</time>
      </trkpt>
      <trkpt lat="50.70330080576241" lon="6.453317021951079">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T10:21:48Z</time>
      </trkpt>
      <trkpt lat="50.703292340040207" lon="6.453304281458259">
        <ele>356.31</ele>
        <time>2012-12-03T10:22:04Z</time>
      </trkpt>
      <trkpt lat="50.703285550698638" lon="6.453304030001164">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:22:12Z</time>
      </trkpt>
      <trkpt lat="50.703298877924681" lon="6.453292295336723">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:22:26Z</time>
      </trkpt>
      <trkpt lat="50.70328077301383" lon="6.453285673633218">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:22:37Z</time>
      </trkpt>
      <trkpt lat="50.703279012814164" lon="6.453282488510013">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T10:22:38Z</time>
      </trkpt>
      <trkpt lat="50.703272642567754" lon="6.453314339742065">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T10:22:52Z</time>
      </trkpt>
      <trkpt lat="50.7032754085958" lon="6.453286679461598">
        <ele>354.86000000000001</ele>
        <time>2012-12-03T10:22:59Z</time>
      </trkpt>
      <trkpt lat="50.70327389985323" lon="6.453292043879628">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:23:00Z</time>
      </trkpt>
      <trkpt lat="50.703277587890625" lon="6.453289780765772">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:23:08Z</time>
      </trkpt>
      <trkpt lat="50.703299716114998" lon="6.453267317265272">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:23:32Z</time>
      </trkpt>
      <trkpt lat="50.70333156734705" lon="6.453267987817526">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:23:50Z</time>
      </trkpt>
      <trkpt lat="50.703330645337701" lon="6.453273855149746">
        <ele>356.31</ele>
        <time>2012-12-03T10:24:00Z</time>
      </trkpt>
      <trkpt lat="50.703307846561074" lon="6.453262707218528">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:24:17Z</time>
      </trkpt>
      <trkpt lat="50.703286724165082" lon="6.453270586207509">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:24:33Z</time>
      </trkpt>
      <trkpt lat="50.703277671709657" lon="6.453273687511683">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T10:24:44Z</time>
      </trkpt>
      <trkpt lat="50.703282449394464" lon="6.453281901776791">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T10:24:49Z</time>
      </trkpt>
      <trkpt lat="50.703295776620507" lon="6.453305957838893">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:25:04Z</time>
      </trkpt>
      <trkpt lat="50.703284796327353" lon="6.453291038051248">
        <ele>357.75</ele>
        <time>2012-12-03T10:25:26Z</time>
      </trkpt>
      <trkpt lat="50.703284963965416" lon="6.453290116041899">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T10:25:30Z</time>
      </trkpt>
      <trkpt lat="50.703281527385116" lon="6.4532779622823">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:25:37Z</time>
      </trkpt>
      <trkpt lat="50.703279851004481" lon="6.453241920098662">
        <ele>353.89999999999998</ele>
        <time>2012-12-03T10:25:52Z</time>
      </trkpt>
      <trkpt lat="50.703286724165082" lon="6.453261869028211">
        <ele>357.75</ele>
        <time>2012-12-03T10:25:58Z</time>
      </trkpt>
      <trkpt lat="50.703289322555065" lon="6.453267401084304">
        <ele>357.75</ele>
        <time>2012-12-03T10:25:59Z</time>
      </trkpt>
      <trkpt lat="50.703314132988453" lon="6.453295899555087">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:26:14Z</time>
      </trkpt>
      <trkpt lat="50.703330561518669" lon="6.453333618119359">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:26:17Z</time>
      </trkpt>
      <trkpt lat="50.703343134373426" lon="6.453453144058585">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:26:23Z</time>
      </trkpt>
      <trkpt lat="50.703385714441538" lon="6.45350662060082">
        <ele>356.31</ele>
        <time>2012-12-03T10:26:32Z</time>
      </trkpt>
      <trkpt lat="50.703380517661572" lon="6.453521121293306">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:26:39Z</time>
      </trkpt>
      <trkpt lat="50.703362999483943" lon="6.453512571752071">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T10:26:54Z</time>
      </trkpt>
      <trkpt lat="50.703390492126346" lon="6.453554900363088">
        <ele>356.31</ele>
        <time>2012-12-03T10:27:03Z</time>
      </trkpt>
      <trkpt lat="50.703386468812823" lon="6.453559845685959">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:27:13Z</time>
      </trkpt>
      <trkpt lat="50.703377919271588" lon="6.453575100749731">
        <ele>356.31</ele>
        <time>2012-12-03T10:27:24Z</time>
      </trkpt>
      <trkpt lat="50.703395772725344" lon="6.453588679432869">
        <ele>356.31</ele>
        <time>2012-12-03T10:27:31Z</time>
      </trkpt>
      <trkpt lat="50.703406250104308" lon="6.453609047457576">
        <ele>356.31</ele>
        <time>2012-12-03T10:27:38Z</time>
      </trkpt>
      <trkpt lat="50.703407926484942" lon="6.453596893697977">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:27:47Z</time>
      </trkpt>
      <trkpt lat="50.703403316438198" lon="6.453633522614837">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:27:57Z</time>
      </trkpt>
      <trkpt lat="50.70341563783586" lon="6.45367568358779">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:28:05Z</time>
      </trkpt>
      <trkpt lat="50.703435335308313" lon="6.453751539811492">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:28:15Z</time>
      </trkpt>
      <trkpt lat="50.703433658927679" lon="6.453703762963414">
        <ele>356.31</ele>
        <time>2012-12-03T10:28:21Z</time>
      </trkpt>
      <trkpt lat="50.70341513492167" lon="6.453674677759409">
        <ele>356.31</ele>
        <time>2012-12-03T10:28:43Z</time>
      </trkpt>
      <trkpt lat="50.703411530703306" lon="6.453671911731362">
        <ele>356.31</ele>
        <time>2012-12-03T10:28:53Z</time>
      </trkpt>
      <trkpt lat="50.703408932313323" lon="6.453677527606487">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:29:01Z</time>
      </trkpt>
      <trkpt lat="50.703438855707645" lon="6.45375732332468">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:29:10Z</time>
      </trkpt>
      <trkpt lat="50.703472131863236" lon="6.453855223953724">
        <ele>354.38</ele>
        <time>2012-12-03T10:29:17Z</time>
      </trkpt>
      <trkpt lat="50.703502893447876" lon="6.453952873125672">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:29:24Z</time>
      </trkpt>
      <trkpt lat="50.703534074127674" lon="6.454068627208471">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:29:33Z</time>
      </trkpt>
      <trkpt lat="50.703560058027506" lon="6.454167198389769">
        <ele>357.75</ele>
        <time>2012-12-03T10:29:41Z</time>
      </trkpt>
      <trkpt lat="50.703575313091278" lon="6.45429921336472">
        <ele>357.75</ele>
        <time>2012-12-03T10:29:50Z</time>
      </trkpt>
      <trkpt lat="50.703590149059892" lon="6.454419912770391">
        <ele>359.67000000000002</ele>
        <time>2012-12-03T10:29:59Z</time>
      </trkpt>
      <trkpt lat="50.703588640317321" lon="6.454433491453528">
        <ele>359.19</ele>
        <time>2012-12-03T10:30:00Z</time>
      </trkpt>
      <trkpt lat="50.703568104654551" lon="6.454512197524309">
        <ele>360.63</ele>
        <time>2012-12-03T10:30:07Z</time>
      </trkpt>
      <trkpt lat="50.703563578426838" lon="6.454592496156693">
        <ele>361.58999999999997</ele>
        <time>2012-12-03T10:30:14Z</time>
      </trkpt>
      <trkpt lat="50.7035758998245" lon="6.454598363488913">
        <ele>362.06999999999999</ele>
        <time>2012-12-03T10:30:22Z</time>
      </trkpt>
      <trkpt lat="50.703590651974082" lon="6.454591825604439">
        <ele>362.55000000000001</ele>
        <time>2012-12-03T10:30:26Z</time>
      </trkpt>
      <trkpt lat="50.703577157109976" lon="6.454590484499931">
        <ele>363.51999999999998</ele>
        <time>2012-12-03T10:30:37Z</time>
      </trkpt>
      <trkpt lat="50.703574307262897" lon="6.454582270234823">
        <ele>362.55000000000001</ele>
        <time>2012-12-03T10:30:38Z</time>
      </trkpt>
      <trkpt lat="50.703522004187107" lon="6.454598112031817">
        <ele>363.04000000000002</ele>
        <time>2012-12-03T10:30:45Z</time>
      </trkpt>
      <trkpt lat="50.703516891226172" lon="6.454590819776058">
        <ele>363.04000000000002</ele>
        <time>2012-12-03T10:30:57Z</time>
      </trkpt>
      <trkpt lat="50.70355779491365" lon="6.454593921080232">
        <ele>363.04000000000002</ele>
        <time>2012-12-03T10:31:04Z</time>
      </trkpt>
      <trkpt lat="50.703553603962064" lon="6.454623257741332">
        <ele>363.04000000000002</ele>
        <time>2012-12-03T10:31:16Z</time>
      </trkpt>
      <trkpt lat="50.70356466807425" lon="6.454675393179059">
        <ele>363.04000000000002</ele>
        <time>2012-12-03T10:31:30Z</time>
      </trkpt>
      <trkpt lat="50.703591071069241" lon="6.454684361815453">
        <ele>363.04000000000002</ele>
        <time>2012-12-03T10:31:40Z</time>
      </trkpt>
      <trkpt lat="50.70361940190196" lon="6.454732473939657">
        <ele>362.55000000000001</ele>
        <time>2012-12-03T10:31:47Z</time>
      </trkpt>
      <trkpt lat="50.703672543168068" lon="6.454801457002759">
        <ele>361.58999999999997</ele>
        <time>2012-12-03T10:31:54Z</time>
      </trkpt>
      <trkpt lat="50.703680757433176" lon="6.454849233850837">
        <ele>361.11000000000001</ele>
        <time>2012-12-03T10:32:01Z</time>
      </trkpt>
      <trkpt lat="50.703701376914978" lon="6.454902710393071">
        <ele>361.11000000000001</ele>
        <time>2012-12-03T10:32:09Z</time>
      </trkpt>
      <trkpt lat="50.703747142106295" lon="6.455013016238809">
        <ele>360.63</ele>
        <time>2012-12-03T10:32:19Z</time>
      </trkpt>
      <trkpt lat="50.703763402998447" lon="6.455067750066519">
        <ele>360.14999999999998</ele>
        <time>2012-12-03T10:32:27Z</time>
      </trkpt>
      <trkpt lat="50.703799277544022" lon="6.455171518027782">
        <ele>359.67000000000002</ele>
        <time>2012-12-03T10:32:37Z</time>
      </trkpt>
      <trkpt lat="50.70384755730629" lon="6.455222060903907">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T10:32:45Z</time>
      </trkpt>
      <trkpt lat="50.703918468207121" lon="6.455275118350983">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:32:54Z</time>
      </trkpt>
      <trkpt lat="50.703982086852193" lon="6.455359440296888">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:33:04Z</time>
      </trkpt>
      <trkpt lat="50.703991139307618" lon="6.455371929332614">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:33:06Z</time>
      </trkpt>
      <trkpt lat="50.704061547294259" lon="6.455457676202059">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T10:33:14Z</time>
      </trkpt>
      <trkpt lat="50.704141343012452" lon="6.455551972612739">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T10:33:23Z</time>
      </trkpt>
      <trkpt lat="50.704166572540998" lon="6.455664457753301">
        <ele>352.94</ele>
        <time>2012-12-03T10:33:31Z</time>
      </trkpt>
      <trkpt lat="50.704235220327973" lon="6.455807369202375">
        <ele>352.45999999999998</ele>
        <time>2012-12-03T10:33:39Z</time>
      </trkpt>
      <trkpt lat="50.704260030761361" lon="6.455886410549283">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T10:33:46Z</time>
      </trkpt>
      <trkpt lat="50.704291295260191" lon="6.455978443846107">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T10:33:55Z</time>
      </trkpt>
      <trkpt lat="50.704320883378386" lon="6.456101071089506">
        <ele>356.31</ele>
        <time>2012-12-03T10:34:04Z</time>
      </trkpt>
      <trkpt lat="50.704343765974045" lon="6.456187404692173">
        <ele>357.75</ele>
        <time>2012-12-03T10:34:11Z</time>
      </trkpt>
      <trkpt lat="50.704358350485563" lon="6.456331489607692">
        <ele>359.67000000000002</ele>
        <time>2012-12-03T10:34:20Z</time>
      </trkpt>
      <trkpt lat="50.704360110685229" lon="6.456379517912865">
        <ele>359.67000000000002</ele>
        <time>2012-12-03T10:34:23Z</time>
      </trkpt>
      <trkpt lat="50.704372683539987" lon="6.456488482654095">
        <ele>361.58999999999997</ele>
        <time>2012-12-03T10:34:31Z</time>
      </trkpt>
      <trkpt lat="50.704378802329302" lon="6.456597866490483">
        <ele>363.04000000000002</ele>
        <time>2012-12-03T10:34:39Z</time>
      </trkpt>
      <trkpt lat="50.704381987452507" lon="6.456650421023369">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:34:47Z</time>
      </trkpt>
      <trkpt lat="50.70439824834466" lon="6.456725019961596">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:34:55Z</time>
      </trkpt>
      <trkpt lat="50.704396571964025" lon="6.456767432391644">
        <ele>365.44</ele>
        <time>2012-12-03T10:34:58Z</time>
      </trkpt>
      <trkpt lat="50.704395063221455" lon="6.45681512542069">
        <ele>365.44</ele>
        <time>2012-12-03T10:35:01Z</time>
      </trkpt>
      <trkpt lat="50.704391626641154" lon="6.456932807341218">
        <ele>366.39999999999998</ele>
        <time>2012-12-03T10:35:09Z</time>
      </trkpt>
      <trkpt lat="50.704386681318283" lon="6.456959545612335">
        <ele>366.39999999999998</ele>
        <time>2012-12-03T10:35:11Z</time>
      </trkpt>
      <trkpt lat="50.704370755702257" lon="6.457092650234699">
        <ele>366.39999999999998</ele>
        <time>2012-12-03T10:35:20Z</time>
      </trkpt>
      <trkpt lat="50.704353824257851" lon="6.457102540880442">
        <ele>365.44</ele>
        <time>2012-12-03T10:35:28Z</time>
      </trkpt>
      <trkpt lat="50.704348795115948" lon="6.457103379070759">
        <ele>366.39999999999998</ele>
        <time>2012-12-03T10:35:35Z</time>
      </trkpt>
      <trkpt lat="50.704355165362358" lon="6.457093572244048">
        <ele>367.36000000000001</ele>
        <time>2012-12-03T10:35:42Z</time>
      </trkpt>
      <trkpt lat="50.704348795115948" lon="6.45709415897727">
        <ele>366.88</ele>
        <time>2012-12-03T10:35:55Z</time>
      </trkpt>
      <trkpt lat="50.704303281381726" lon="6.457128273323178">
        <ele>366.88</ele>
        <time>2012-12-03T10:36:03Z</time>
      </trkpt>
      <trkpt lat="50.704271849244833" lon="6.457139756530523">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:36:12Z</time>
      </trkpt>
      <trkpt lat="50.704305125400424" lon="6.457101451233029">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:36:27Z</time>
      </trkpt>
      <trkpt lat="50.704366900026798" lon="6.457085022702813">
        <ele>366.88</ele>
        <time>2012-12-03T10:36:35Z</time>
      </trkpt>
      <trkpt lat="50.704385591670871" lon="6.45709658972919">
        <ele>366.88</ele>
        <time>2012-12-03T10:36:45Z</time>
      </trkpt>
      <trkpt lat="50.704384753480554" lon="6.45713028497994">
        <ele>366.88</ele>
        <time>2012-12-03T10:36:52Z</time>
      </trkpt>
      <trkpt lat="50.704398918896914" lon="6.457146294414997">
        <ele>367.36000000000001</ele>
        <time>2012-12-03T10:36:58Z</time>
      </trkpt>
      <trkpt lat="50.704419538378716" lon="6.457125591114163">
        <ele>366.88</ele>
        <time>2012-12-03T10:37:10Z</time>
      </trkpt>
      <trkpt lat="50.704426160082221" lon="6.457117460668087">
        <ele>367.36000000000001</ele>
        <time>2012-12-03T10:37:27Z</time>
      </trkpt>
      <trkpt lat="50.704426830634475" lon="6.457117544487119">
        <ele>367.36000000000001</ele>
        <time>2012-12-03T10:37:44Z</time>
      </trkpt>
      <trkpt lat="50.704461615532637" lon="6.457136487588286">
        <ele>366.88</ele>
        <time>2012-12-03T10:37:52Z</time>
      </trkpt>
      <trkpt lat="50.704484833404422" lon="6.457156436517835">
        <ele>366.39999999999998</ele>
        <time>2012-12-03T10:37:54Z</time>
      </trkpt>
      <trkpt lat="50.704515343531966" lon="6.45724511705339">
        <ele>366.39999999999998</ele>
        <time>2012-12-03T10:38:02Z</time>
      </trkpt>
      <trkpt lat="50.704526407644153" lon="6.457276716828346">
        <ele>365.44</ele>
        <time>2012-12-03T10:38:12Z</time>
      </trkpt>
      <trkpt lat="50.704545015469193" lon="6.457367492839694">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:38:20Z</time>
      </trkpt>
      <trkpt lat="50.704577788710594" lon="6.457489281892777">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:38:28Z</time>
      </trkpt>
      <trkpt lat="50.704587930813432" lon="6.457537477836013">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:38:35Z</time>
      </trkpt>
      <trkpt lat="50.70459270849824" lon="6.457554660737515">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:38:37Z</time>
      </trkpt>
      <trkpt lat="50.704629002138972" lon="6.457684161141515">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:38:45Z</time>
      </trkpt>
      <trkpt lat="50.704630007967353" lon="6.457737302407622">
        <ele>364</ele>
        <time>2012-12-03T10:38:51Z</time>
      </trkpt>
      <trkpt lat="50.704635204747319" lon="6.457780217751861">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:38:57Z</time>
      </trkpt>
      <trkpt lat="50.704659428447485" lon="6.457909550517798">
        <ele>364</ele>
        <time>2012-12-03T10:39:06Z</time>
      </trkpt>
      <trkpt lat="50.704665379598737" lon="6.4579854067415">
        <ele>364</ele>
        <time>2012-12-03T10:39:13Z</time>
      </trkpt>
      <trkpt lat="50.704699410125613" lon="6.458106860518456">
        <ele>363.51999999999998</ele>
        <time>2012-12-03T10:39:21Z</time>
      </trkpt>
      <trkpt lat="50.704726651310921" lon="6.458224458619952">
        <ele>363.04000000000002</ele>
        <time>2012-12-03T10:39:28Z</time>
      </trkpt>
      <trkpt lat="50.704762106761336" lon="6.458297716453672">
        <ele>364</ele>
        <time>2012-12-03T10:39:34Z</time>
      </trkpt>
      <trkpt lat="50.70477987639606" lon="6.458351109176874">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:39:41Z</time>
      </trkpt>
      <trkpt lat="50.704812901094556" lon="6.458407435566187">
        <ele>364</ele>
        <time>2012-12-03T10:39:48Z</time>
      </trkpt>
      <trkpt lat="50.704817762598395" lon="6.458436772227287">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:39:54Z</time>
      </trkpt>
      <trkpt lat="50.704827401787043" lon="6.458446579053998">
        <ele>364</ele>
        <time>2012-12-03T10:40:08Z</time>
      </trkpt>
      <trkpt lat="50.704831592738628" lon="6.458460660651326">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:40:14Z</time>
      </trkpt>
      <trkpt lat="50.704878950491548" lon="6.458514472469688">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:40:22Z</time>
      </trkpt>
      <trkpt lat="50.704887667670846" lon="6.458554789423943">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:40:29Z</time>
      </trkpt>
      <trkpt lat="50.704893618822098" lon="6.458563255146146">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:40:40Z</time>
      </trkpt>
      <trkpt lat="50.704907532781363" lon="6.458585634827614">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:40:55Z</time>
      </trkpt>
      <trkpt lat="50.7048917748034" lon="6.458548335358501">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:41:07Z</time>
      </trkpt>
      <trkpt lat="50.704923290759325" lon="6.458587562665343">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:41:20Z</time>
      </trkpt>
      <trkpt lat="50.704954890534282" lon="6.458598794415593">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:41:40Z</time>
      </trkpt>
      <trkpt lat="50.704960087314248" lon="6.458570966497064">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:41:57Z</time>
      </trkpt>
      <trkpt lat="50.704955477267504" lon="6.458539115265012">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:42:15Z</time>
      </trkpt>
      <trkpt lat="50.704949526116252" lon="6.458563674241304">
        <ele>364</ele>
        <time>2012-12-03T10:42:31Z</time>
      </trkpt>
      <trkpt lat="50.704907868057489" lon="6.458602650091052">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:42:48Z</time>
      </trkpt>
      <trkpt lat="50.70495530962944" lon="6.458531906828284">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:43:04Z</time>
      </trkpt>
      <trkpt lat="50.704965284094214" lon="6.458534672856331">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:43:16Z</time>
      </trkpt>
      <trkpt lat="50.704945167526603" lon="6.458534253761172">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:43:26Z</time>
      </trkpt>
      <trkpt lat="50.704946676269174" lon="6.458566440269351">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:43:40Z</time>
      </trkpt>
      <trkpt lat="50.7049694750458" lon="6.458598710596561">
        <ele>364</ele>
        <time>2012-12-03T10:43:47Z</time>
      </trkpt>
      <trkpt lat="50.704989088699222" lon="6.45862746052444">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T10:43:51Z</time>
      </trkpt>
      <trkpt lat="50.705036949366331" lon="6.458713039755821">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:43:58Z</time>
      </trkpt>
      <trkpt lat="50.705089922994375" lon="6.458805659785867">
        <ele>365.44</ele>
        <time>2012-12-03T10:44:05Z</time>
      </trkpt>
      <trkpt lat="50.705109871923923" lon="6.458911942318082">
        <ele>365.44</ele>
        <time>2012-12-03T10:44:13Z</time>
      </trkpt>
      <trkpt lat="50.705157816410065" lon="6.459014620631933">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:44:20Z</time>
      </trkpt>
      <trkpt lat="50.70521866902709" lon="6.459123166278005">
        <ele>365.44</ele>
        <time>2012-12-03T10:44:28Z</time>
      </trkpt>
      <trkpt lat="50.705273319035769" lon="6.459222408011556">
        <ele>365.92000000000002</ele>
        <time>2012-12-03T10:44:37Z</time>
      </trkpt>
      <trkpt lat="50.705302488058805" lon="6.459322655573487">
        <ele>366.88</ele>
        <time>2012-12-03T10:44:46Z</time>
      </trkpt>
      <trkpt lat="50.70533593185246" lon="6.459413096308708">
        <ele>368.31999999999999</ele>
        <time>2012-12-03T10:44:55Z</time>
      </trkpt>
      <trkpt lat="50.705393012613058" lon="6.45947864279151">
        <ele>369.27999999999997</ele>
        <time>2012-12-03T10:45:02Z</time>
      </trkpt>
      <trkpt lat="50.705435173586011" lon="6.459537232294679">
        <ele>372.17000000000002</ele>
        <time>2012-12-03T10:45:09Z</time>
      </trkpt>
      <trkpt lat="50.7054702937603" lon="6.459615770727396">
        <ele>372.64999999999998</ele>
        <time>2012-12-03T10:45:17Z</time>
      </trkpt>
      <trkpt lat="50.705486554652452" lon="6.459656842052937">
        <ele>372.64999999999998</ele>
        <time>2012-12-03T10:45:21Z</time>
      </trkpt>
      <trkpt lat="50.705528380349278" lon="6.459761532023549">
        <ele>373.61000000000001</ele>
        <time>2012-12-03T10:45:28Z</time>
      </trkpt>
      <trkpt lat="50.705568697303534" lon="6.459891870617867">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T10:45:36Z</time>
      </trkpt>
      <trkpt lat="50.705561824142933" lon="6.459941240027547">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T10:45:42Z</time>
      </trkpt>
      <trkpt lat="50.705500720068812" lon="6.459971331059933">
        <ele>375.05000000000001</ele>
        <time>2012-12-03T10:45:49Z</time>
      </trkpt>
      <trkpt lat="50.705487644299865" lon="6.459988011047244">
        <ele>375.05000000000001</ele>
        <time>2012-12-03T10:45:57Z</time>
      </trkpt>
      <trkpt lat="50.705492841079831" lon="6.459985747933388">
        <ele>375.05000000000001</ele>
        <time>2012-12-03T10:46:09Z</time>
      </trkpt>
      <trkpt lat="50.705511448904872" lon="6.459986502304673">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T10:46:11Z</time>
      </trkpt>
      <trkpt lat="50.70554849691689" lon="6.459982311353087">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T10:46:15Z</time>
      </trkpt>
      <trkpt lat="50.705599375069141" lon="6.460066298022866">
        <ele>375.52999999999997</ele>
        <time>2012-12-03T10:46:23Z</time>
      </trkpt>
      <trkpt lat="50.705615300685167" lon="6.460192278027535">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T10:46:32Z</time>
      </trkpt>
      <trkpt lat="50.705619156360626" lon="6.460164031013846">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T10:46:43Z</time>
      </trkpt>
      <trkpt lat="50.705614127218723" lon="6.460188338533044">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T10:46:53Z</time>
      </trkpt>
      <trkpt lat="50.705622592940927" lon="6.460208455100656">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T10:47:05Z</time>
      </trkpt>
      <trkpt lat="50.705634076148272" lon="6.460179034620524">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T10:47:14Z</time>
      </trkpt>
      <trkpt lat="50.705651342868805" lon="6.46015883423388">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T10:47:16Z</time>
      </trkpt>
      <trkpt lat="50.70568579249084" lon="6.460157241672278">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T10:47:24Z</time>
      </trkpt>
      <trkpt lat="50.705671543255448" lon="6.460160342976451">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T10:47:30Z</time>
      </trkpt>
      <trkpt lat="50.705621838569641" lon="6.460200073197484">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T10:47:37Z</time>
      </trkpt>
      <trkpt lat="50.705619994550943" lon="6.460194205865264">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T10:47:41Z</time>
      </trkpt>
      <trkpt lat="50.705617060884833" lon="6.460190182551742">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T10:47:48Z</time>
      </trkpt>
      <trkpt lat="50.705572469159961" lon="6.460279366001487">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T10:47:56Z</time>
      </trkpt>
      <trkpt lat="50.705566434189677" lon="6.460286071524024">
        <ele>378.89999999999998</ele>
        <time>2012-12-03T10:47:57Z</time>
      </trkpt>
      <trkpt lat="50.705543803051114" lon="6.460365280508995">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T10:48:04Z</time>
      </trkpt>
      <trkpt lat="50.705514634028077" lon="6.460432922467589">
        <ele>379.38</ele>
        <time>2012-12-03T10:48:11Z</time>
      </trkpt>
      <trkpt lat="50.705489823594689" lon="6.46048472262919">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T10:48:17Z</time>
      </trkpt>
      <trkpt lat="50.705455709248781" lon="6.460536103695631">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T10:48:25Z</time>
      </trkpt>
      <trkpt lat="50.70533693768084" lon="6.460652109235525">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T10:48:33Z</time>
      </trkpt>
      <trkpt lat="50.70532226935029" lon="6.460744058713317">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T10:48:41Z</time>
      </trkpt>
      <trkpt lat="50.705308690667152" lon="6.460879677906632">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T10:48:50Z</time>
      </trkpt>
      <trkpt lat="50.705258985981345" lon="6.461023595184088">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T10:49:01Z</time>
      </trkpt>
      <trkpt lat="50.705218920484185" lon="6.461102971807122">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T10:49:08Z</time>
      </trkpt>
      <trkpt lat="50.705136442556977" lon="6.461201123893261">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T10:49:19Z</time>
      </trkpt>
      <trkpt lat="50.705090090632439" lon="6.461323918774724">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T10:49:29Z</time>
      </trkpt>
      <trkpt lat="50.705061005428433" lon="6.461489293724299">
        <ele>375.52999999999997</ele>
        <time>2012-12-03T10:49:39Z</time>
      </trkpt>
      <trkpt lat="50.705014485865831" lon="6.461605299264193">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T10:49:49Z</time>
      </trkpt>
      <trkpt lat="50.704953465610743" lon="6.461718622595072">
        <ele>373.61000000000001</ele>
        <time>2012-12-03T10:50:00Z</time>
      </trkpt>
      <trkpt lat="50.704947179183364" lon="6.461846698075533">
        <ele>372.17000000000002</ele>
        <time>2012-12-03T10:50:09Z</time>
      </trkpt>
      <trkpt lat="50.704870987683535" lon="6.461941916495562">
        <ele>371.69</ele>
        <time>2012-12-03T10:50:18Z</time>
      </trkpt>
      <trkpt lat="50.704823881387711" lon="6.462043840438128">
        <ele>370.73000000000002</ele>
        <time>2012-12-03T10:50:28Z</time>
      </trkpt>
      <trkpt lat="50.704771913588047" lon="6.462131598964334">
        <ele>370.24000000000001</ele>
        <time>2012-12-03T10:50:36Z</time>
      </trkpt>
      <trkpt lat="50.704714665189385" lon="6.462222207337618">
        <ele>370.73000000000002</ele>
        <time>2012-12-03T10:50:44Z</time>
      </trkpt>
      <trkpt lat="50.704659596085548" lon="6.462305188179016">
        <ele>367.36000000000001</ele>
        <time>2012-12-03T10:50:53Z</time>
      </trkpt>
      <trkpt lat="50.704608634114265" lon="6.462391521781683">
        <ele>365.92000000000002</ele>
        <time>2012-12-03T10:51:03Z</time>
      </trkpt>
      <trkpt lat="50.704585500061512" lon="6.462456313893199">
        <ele>364</ele>
        <time>2012-12-03T10:51:10Z</time>
      </trkpt>
      <trkpt lat="50.704543171450496" lon="6.462504593655467">
        <ele>364</ele>
        <time>2012-12-03T10:51:16Z</time>
      </trkpt>
      <trkpt lat="50.704491538926959" lon="6.462573744356632">
        <ele>364.95999999999998</ele>
        <time>2012-12-03T10:51:26Z</time>
      </trkpt>
      <trkpt lat="50.704479301348329" lon="6.462591765448451">
        <ele>365.44</ele>
        <time>2012-12-03T10:51:30Z</time>
      </trkpt>
      <trkpt lat="50.704425321891904" lon="6.462673656642437">
        <ele>365.44</ele>
        <time>2012-12-03T10:51:37Z</time>
      </trkpt>
      <trkpt lat="50.704361703246832" lon="6.462754374369979">
        <ele>365.44</ele>
        <time>2012-12-03T10:51:45Z</time>
      </trkpt>
      <trkpt lat="50.704292971640825" lon="6.462854454293847">
        <ele>366.88</ele>
        <time>2012-12-03T10:51:54Z</time>
      </trkpt>
      <trkpt lat="50.704234633594751" lon="6.462950175628066">
        <ele>367.83999999999997</ele>
        <time>2012-12-03T10:52:03Z</time>
      </trkpt>
      <trkpt lat="50.704182246699929" lon="6.463060732930899">
        <ele>370.24000000000001</ele>
        <time>2012-12-03T10:52:13Z</time>
      </trkpt>
      <trkpt lat="50.704134134575725" lon="6.463145222514868">
        <ele>371.20999999999998</ele>
        <time>2012-12-03T10:52:21Z</time>
      </trkpt>
      <trkpt lat="50.704087782651186" lon="6.463225856423378">
        <ele>371.20999999999998</ele>
        <time>2012-12-03T10:52:29Z</time>
      </trkpt>
      <trkpt lat="50.704035060480237" lon="6.463330378755927">
        <ele>370.24000000000001</ele>
        <time>2012-12-03T10:52:37Z</time>
      </trkpt>
      <trkpt lat="50.703982841223478" lon="6.463414449244738">
        <ele>371.69</ele>
        <time>2012-12-03T10:52:45Z</time>
      </trkpt>
      <trkpt lat="50.703976890072227" lon="6.463421992957592">
        <ele>370.73000000000002</ele>
        <time>2012-12-03T10:52:46Z</time>
      </trkpt>
      <trkpt lat="50.703927855938673" lon="6.463500531390309">
        <ele>370.24000000000001</ele>
        <time>2012-12-03T10:52:56Z</time>
      </trkpt>
      <trkpt lat="50.703918803483248" lon="6.463507656008005">
        <ele>369.27999999999997</ele>
        <time>2012-12-03T10:53:07Z</time>
      </trkpt>
      <trkpt lat="50.703876977786422" lon="6.463548811152577">
        <ele>368.31999999999999</ele>
        <time>2012-12-03T10:53:16Z</time>
      </trkpt>
      <trkpt lat="50.703861219808459" lon="6.463590553030372">
        <ele>367.83999999999997</ele>
        <time>2012-12-03T10:53:24Z</time>
      </trkpt>
      <trkpt lat="50.703815538436174" lon="6.463647717610002">
        <ele>367.36000000000001</ele>
        <time>2012-12-03T10:53:34Z</time>
      </trkpt>
      <trkpt lat="50.703777819871902" lon="6.463724663481116">
        <ele>365.44</ele>
        <time>2012-12-03T10:53:44Z</time>
      </trkpt>
      <trkpt lat="50.703760301694274" lon="6.463751988485456">
        <ele>363.51999999999998</ele>
        <time>2012-12-03T10:53:47Z</time>
      </trkpt>
      <trkpt lat="50.703736832365394" lon="6.463791634887457">
        <ele>362.06999999999999</ele>
        <time>2012-12-03T10:53:52Z</time>
      </trkpt>
      <trkpt lat="50.7037054002285" lon="6.463835220783949">
        <ele>361.58999999999997</ele>
        <time>2012-12-03T10:53:58Z</time>
      </trkpt>
      <trkpt lat="50.703640272840858" lon="6.463928343728185">
        <ele>359.19</ele>
        <time>2012-12-03T10:54:08Z</time>
      </trkpt>
      <trkpt lat="50.703612193465233" lon="6.463980143889785">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T10:54:15Z</time>
      </trkpt>
      <trkpt lat="50.703579252585769" lon="6.464046444743872">
        <ele>357.75</ele>
        <time>2012-12-03T10:54:22Z</time>
      </trkpt>
      <trkpt lat="50.703562740236521" lon="6.464093131944537">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T10:54:25Z</time>
      </trkpt>
      <trkpt lat="50.703528122976422" lon="6.46419539116323">
        <ele>357.75</ele>
        <time>2012-12-03T10:54:34Z</time>
      </trkpt>
      <trkpt lat="50.703490069136024" lon="6.464287675917149">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T10:54:41Z</time>
      </trkpt>
      <trkpt lat="50.703453859314322" lon="6.46440401673317">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:54:48Z</time>
      </trkpt>
      <trkpt lat="50.703419409692287" lon="6.464534858241677">
        <ele>357.75</ele>
        <time>2012-12-03T10:54:57Z</time>
      </trkpt>
      <trkpt lat="50.703376410529017" lon="6.464656731113792">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:55:05Z</time>
      </trkpt>
      <trkpt lat="50.703332992270589" lon="6.464763265103102">
        <ele>357.75</ele>
        <time>2012-12-03T10:55:13Z</time>
      </trkpt>
      <trkpt lat="50.703298877924681" lon="6.464919168502092">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:55:23Z</time>
      </trkpt>
      <trkpt lat="50.703278174623847" lon="6.464986559003592">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T10:55:33Z</time>
      </trkpt>
      <trkpt lat="50.7032460719347" lon="6.465018577873707">
        <ele>359.19</ele>
        <time>2012-12-03T10:55:43Z</time>
      </trkpt>
      <trkpt lat="50.703229308128357" lon="6.465039616450667">
        <ele>359.19</ele>
        <time>2012-12-03T10:55:54Z</time>
      </trkpt>
      <trkpt lat="50.70320357568562" lon="6.46502461284399">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:56:00Z</time>
      </trkpt>
      <trkpt lat="50.703204916790128" lon="6.465023439377546">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T10:56:01Z</time>
      </trkpt>
      <trkpt lat="50.703208185732365" lon="6.465038610622287">
        <ele>359.67000000000002</ele>
        <time>2012-12-03T10:56:06Z</time>
      </trkpt>
      <trkpt lat="50.703215897083282" lon="6.464959820732474">
        <ele>356.31</ele>
        <time>2012-12-03T10:56:13Z</time>
      </trkpt>
      <trkpt lat="50.703216651454568" lon="6.464920341968536">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T10:56:16Z</time>
      </trkpt>
      <trkpt lat="50.703208521008492" lon="6.464859321713448">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T10:56:21Z</time>
      </trkpt>
      <trkpt lat="50.703215394169092" lon="6.464766282588244">
        <ele>351.98000000000002</ele>
        <time>2012-12-03T10:56:29Z</time>
      </trkpt>
      <trkpt lat="50.703218495473266" lon="6.464761001989245">
        <ele>351.5</ele>
        <time>2012-12-03T10:56:31Z</time>
      </trkpt>
      <trkpt lat="50.703224278986454" lon="6.464717667549849">
        <ele>351.5</ele>
        <time>2012-12-03T10:56:35Z</time>
      </trkpt>
      <trkpt lat="50.703239031136036" lon="6.46461071446538">
        <ele>350.06</ele>
        <time>2012-12-03T10:56:43Z</time>
      </trkpt>
      <trkpt lat="50.703244395554066" lon="6.464508706703782">
        <ele>349.10000000000002</ele>
        <time>2012-12-03T10:56:51Z</time>
      </trkpt>
      <trkpt lat="50.7032460719347" lon="6.464482890442014">
        <ele>348.62</ele>
        <time>2012-12-03T10:56:52Z</time>
      </trkpt>
      <trkpt lat="50.703242467716336" lon="6.464440980926156">
        <ele>347.64999999999998</ele>
        <time>2012-12-03T10:56:54Z</time>
      </trkpt>
      <trkpt lat="50.703240791335702" lon="6.464380212128162">
        <ele>346.69</ele>
        <time>2012-12-03T10:56:58Z</time>
      </trkpt>
      <trkpt lat="50.703239366412163" lon="6.464253310114145">
        <ele>346.20999999999998</ele>
        <time>2012-12-03T10:57:06Z</time>
      </trkpt>
      <trkpt lat="50.703238528221846" lon="6.464234450832009">
        <ele>345.73000000000002</ele>
        <time>2012-12-03T10:57:07Z</time>
      </trkpt>
      <trkpt lat="50.703257890418172" lon="6.464075446128845">
        <ele>343.32999999999998</ele>
        <time>2012-12-03T10:57:16Z</time>
      </trkpt>
      <trkpt lat="50.703291250392795" lon="6.46399162709713">
        <ele>342.37</ele>
        <time>2012-12-03T10:57:23Z</time>
      </trkpt>
      <trkpt lat="50.703338272869587" lon="6.463862713426352">
        <ele>342.85000000000002</ele>
        <time>2012-12-03T10:57:32Z</time>
      </trkpt>
      <trkpt lat="50.703377332538366" lon="6.463762046769261">
        <ele>342.37</ele>
        <time>2012-12-03T10:57:40Z</time>
      </trkpt>
      <trkpt lat="50.703384876251221" lon="6.463755005970597">
        <ele>342.37</ele>
        <time>2012-12-03T10:57:41Z</time>
      </trkpt>
      <trkpt lat="50.703400634229183" lon="6.463628690689802">
        <ele>342.37</ele>
        <time>2012-12-03T10:57:49Z</time>
      </trkpt>
      <trkpt lat="50.703396694734693" lon="6.463602120056748">
        <ele>341.88999999999999</ele>
        <time>2012-12-03T10:57:51Z</time>
      </trkpt>
      <trkpt lat="50.703403232619166" lon="6.463457113131881">
        <ele>342.37</ele>
        <time>2012-12-03T10:57:58Z</time>
      </trkpt>
      <trkpt lat="50.703421924263239" lon="6.463259048759937">
        <ele>341.88999999999999</ele>
        <time>2012-12-03T10:58:08Z</time>
      </trkpt>
      <trkpt lat="50.703446483239532" lon="6.463098786771298">
        <ele>341.88999999999999</ele>
        <time>2012-12-03T10:58:17Z</time>
      </trkpt>
      <trkpt lat="50.703464169055223" lon="6.463018488138914">
        <ele>340.92000000000002</ele>
        <time>2012-12-03T10:58:23Z</time>
      </trkpt>
      <trkpt lat="50.703471293672919" lon="6.462887646630406">
        <ele>339.48000000000002</ele>
        <time>2012-12-03T10:58:32Z</time>
      </trkpt>
      <trkpt lat="50.703474478796124" lon="6.462817238643765">
        <ele>337.56</ele>
        <time>2012-12-03T10:58:39Z</time>
      </trkpt>
      <trkpt lat="50.703496607020497" lon="6.46277985535562">
        <ele>338.51999999999998</ele>
        <time>2012-12-03T10:58:47Z</time>
      </trkpt>
      <trkpt lat="50.703514544293284" lon="6.462664185091853">
        <ele>337.56</ele>
        <time>2012-12-03T10:58:54Z</time>
      </trkpt>
      <trkpt lat="50.703505408018827" lon="6.462617665529251">
        <ele>336.60000000000002</ele>
        <time>2012-12-03T10:59:01Z</time>
      </trkpt>
      <trkpt lat="50.703509012237191" lon="6.462536780163646">
        <ele>334.68000000000001</ele>
        <time>2012-12-03T10:59:10Z</time>
      </trkpt>
      <trkpt lat="50.703509179875255" lon="6.462518591433764">
        <ele>334.68000000000001</ele>
        <time>2012-12-03T10:59:11Z</time>
      </trkpt>
      <trkpt lat="50.703524686396122" lon="6.462456816807389">
        <ele>334.68000000000001</ele>
        <time>2012-12-03T10:59:19Z</time>
      </trkpt>
      <trkpt lat="50.703543797135353" lon="6.462452039122582">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T10:59:36Z</time>
      </trkpt>
      <trkpt lat="50.703528542071581" lon="6.462458074092865">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T10:59:37Z</time>
      </trkpt>
      <trkpt lat="50.703508006408811" lon="6.462416835129261">
        <ele>334.19999999999999</ele>
        <time>2012-12-03T10:59:43Z</time>
      </trkpt>
      <trkpt lat="50.703494427725673" lon="6.462342320010066">
        <ele>333.23000000000002</ele>
        <time>2012-12-03T10:59:50Z</time>
      </trkpt>
      <trkpt lat="50.703474897891283" lon="6.462330333888531">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T10:59:59Z</time>
      </trkpt>
      <trkpt lat="50.703439861536026" lon="6.462293788790703">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T11:00:06Z</time>
      </trkpt>
      <trkpt lat="50.703452350571752" lon="6.462262524291873">
        <ele>332.26999999999998</ele>
        <time>2012-12-03T11:00:14Z</time>
      </trkpt>
      <trkpt lat="50.703454529866576" lon="6.462268810719252">
        <ele>334.19999999999999</ele>
        <time>2012-12-03T11:00:17Z</time>
      </trkpt>
      <trkpt lat="50.703436341136694" lon="6.462267888709903">
        <ele>334.19999999999999</ele>
        <time>2012-12-03T11:00:24Z</time>
      </trkpt>
      <trkpt lat="50.70342343300581" lon="6.462226901203394">
        <ele>332.75</ele>
        <time>2012-12-03T11:00:33Z</time>
      </trkpt>
      <trkpt lat="50.703415889292955" lon="6.462226901203394">
        <ele>333.23000000000002</ele>
        <time>2012-12-03T11:00:40Z</time>
      </trkpt>
      <trkpt lat="50.703417398035526" lon="6.46222572773695">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T11:00:56Z</time>
      </trkpt>
      <trkpt lat="50.703411865979433" lon="6.462195720523596">
        <ele>332.26999999999998</ele>
        <time>2012-12-03T11:01:12Z</time>
      </trkpt>
      <trkpt lat="50.703416727483273" lon="6.462194630876184">
        <ele>330.82999999999998</ele>
        <time>2012-12-03T11:01:22Z</time>
      </trkpt>
      <trkpt lat="50.703433072194457" lon="6.462230002507567">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T11:01:31Z</time>
      </trkpt>
      <trkpt lat="50.703414548188448" lon="6.462240144610405">
        <ele>333.23000000000002</ele>
        <time>2012-12-03T11:01:40Z</time>
      </trkpt>
      <trkpt lat="50.703412117436528" lon="6.462191445752978">
        <ele>332.75</ele>
        <time>2012-12-03T11:01:55Z</time>
      </trkpt>
      <trkpt lat="50.703399293124676" lon="6.462147189304233">
        <ele>333.23000000000002</ele>
        <time>2012-12-03T11:02:07Z</time>
      </trkpt>
      <trkpt lat="50.703415470197797" lon="6.462216256186366">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T11:02:16Z</time>
      </trkpt>
      <trkpt lat="50.703419409692287" lon="6.462248358875513">
        <ele>334.19999999999999</ele>
        <time>2012-12-03T11:02:25Z</time>
      </trkpt>
      <trkpt lat="50.703429887071252" lon="6.46220619790256">
        <ele>333.23000000000002</ele>
        <time>2012-12-03T11:02:35Z</time>
      </trkpt>
      <trkpt lat="50.703425193205476" lon="6.462200246751308">
        <ele>334.19999999999999</ele>
        <time>2012-12-03T11:02:42Z</time>
      </trkpt>
      <trkpt lat="50.703401975333691" lon="6.462178202345967">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T11:03:02Z</time>
      </trkpt>
      <trkpt lat="50.703417649492621" lon="6.462172502651811">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T11:03:13Z</time>
      </trkpt>
      <trkpt lat="50.703422846272588" lon="6.462160181254149">
        <ele>333.23000000000002</ele>
        <time>2012-12-03T11:03:22Z</time>
      </trkpt>
      <trkpt lat="50.703416643664241" lon="6.462111230939627">
        <ele>331.31</ele>
        <time>2012-12-03T11:03:29Z</time>
      </trkpt>
      <trkpt lat="50.703414799645543" lon="6.46210502833128">
        <ele>332.75</ele>
        <time>2012-12-03T11:03:36Z</time>
      </trkpt>
      <trkpt lat="50.703432653099298" lon="6.462116511538625">
        <ele>331.79000000000002</ele>
        <time>2012-12-03T11:03:46Z</time>
      </trkpt>
      <trkpt lat="50.703435838222504" lon="6.462136125192046">
        <ele>332.26999999999998</ele>
        <time>2012-12-03T11:03:54Z</time>
      </trkpt>
      <trkpt lat="50.7034498360008" lon="6.462181471288204">
        <ele>332.75</ele>
        <time>2012-12-03T11:04:10Z</time>
      </trkpt>
      <trkpt lat="50.703471461310983" lon="6.462158001959324">
        <ele>332.26999999999998</ele>
        <time>2012-12-03T11:04:17Z</time>
      </trkpt>
      <trkpt lat="50.703461235389113" lon="6.462197564542294">
        <ele>333.70999999999998</ele>
        <time>2012-12-03T11:04:24Z</time>
      </trkpt>
      <trkpt lat="50.703450422734022" lon="6.462172502651811">
        <ele>334.19999999999999</ele>
        <time>2012-12-03T11:04:41Z</time>
      </trkpt>
      <trkpt lat="50.703424271196127" lon="6.462219441309571">
        <ele>334.19999999999999</ele>
        <time>2012-12-03T11:04:54Z</time>
      </trkpt>
      <trkpt lat="50.703436592593789" lon="6.462248610332608">
        <ele>334.68000000000001</ele>
        <time>2012-12-03T11:05:01Z</time>
      </trkpt>
      <trkpt lat="50.703436844050884" lon="6.462233187630773">
        <ele>335.63999999999999</ele>
        <time>2012-12-03T11:05:06Z</time>
      </trkpt>
      <trkpt lat="50.703429132699966" lon="6.462237210944295">
        <ele>335.63999999999999</ele>
        <time>2012-12-03T11:05:24Z</time>
      </trkpt>
      <trkpt lat="50.703433910384774" lon="6.462283143773675">
        <ele>335.63999999999999</ele>
        <time>2012-12-03T11:05:37Z</time>
      </trkpt>
      <trkpt lat="50.703463749960065" lon="6.462332010269165">
        <ele>336.60000000000002</ele>
        <time>2012-12-03T11:05:46Z</time>
      </trkpt>
      <trkpt lat="50.703483028337359" lon="6.462363107129931">
        <ele>336.60000000000002</ele>
        <time>2012-12-03T11:05:52Z</time>
      </trkpt>
      <trkpt lat="50.703488979488611" lon="6.462378278374672">
        <ele>336.12</ele>
        <time>2012-12-03T11:05:59Z</time>
      </trkpt>
      <trkpt lat="50.703488728031516" lon="6.462425636127591">
        <ele>336.60000000000002</ele>
        <time>2012-12-03T11:06:06Z</time>
      </trkpt>
      <trkpt lat="50.703499959781766" lon="6.462440472096205">
        <ele>336.60000000000002</ele>
        <time>2012-12-03T11:06:12Z</time>
      </trkpt>
      <trkpt lat="50.703507168218493" lon="6.462489254772663">
        <ele>337.56</ele>
        <time>2012-12-03T11:06:22Z</time>
      </trkpt>
      <trkpt lat="50.703517897054553" lon="6.462660329416394">
        <ele>339.48000000000002</ele>
        <time>2012-12-03T11:06:32Z</time>
      </trkpt>
      <trkpt lat="50.703474478796124" lon="6.462791841477156">
        <ele>340.44</ele>
        <time>2012-12-03T11:06:41Z</time>
      </trkpt>
      <trkpt lat="50.703459810465574" lon="6.462896447628737">
        <ele>341.41000000000003</ele>
        <time>2012-12-03T11:06:49Z</time>
      </trkpt>
      <trkpt lat="50.703454026952386" lon="6.463028630241752">
        <ele>343.32999999999998</ele>
        <time>2012-12-03T11:06:59Z</time>
      </trkpt>
      <trkpt lat="50.703436676412821" lon="6.463157879188657">
        <ele>343.32999999999998</ele>
        <time>2012-12-03T11:07:09Z</time>
      </trkpt>
      <trkpt lat="50.703437682241201" lon="6.463270112872124">
        <ele>343.81</ele>
        <time>2012-12-03T11:07:16Z</time>
      </trkpt>
      <trkpt lat="50.703453021124005" lon="6.463379329070449">
        <ele>344.76999999999998</ele>
        <time>2012-12-03T11:07:24Z</time>
      </trkpt>
      <trkpt lat="50.703436257317662" lon="6.463539255782962">
        <ele>343.32999999999998</ele>
        <time>2012-12-03T11:07:34Z</time>
      </trkpt>
      <trkpt lat="50.703405076637864" lon="6.463641179725528">
        <ele>344.76999999999998</ele>
        <time>2012-12-03T11:07:41Z</time>
      </trkpt>
      <trkpt lat="50.703385127708316" lon="6.463797921314836">
        <ele>345.73000000000002</ele>
        <time>2012-12-03T11:07:51Z</time>
      </trkpt>
      <trkpt lat="50.703374063596129" lon="6.463852152228355">
        <ele>345.25</ele>
        <time>2012-12-03T11:07:55Z</time>
      </trkpt>
      <trkpt lat="50.703350175172091" lon="6.463985592126846">
        <ele>345.25</ele>
        <time>2012-12-03T11:08:03Z</time>
      </trkpt>
      <trkpt lat="50.703328549861908" lon="6.464137639850378">
        <ele>346.69</ele>
        <time>2012-12-03T11:08:12Z</time>
      </trkpt>
      <trkpt lat="50.703313713893294" lon="6.464244341477752">
        <ele>347.17000000000002</ele>
        <time>2012-12-03T11:08:20Z</time>
      </trkpt>
      <trkpt lat="50.703311199322343" lon="6.464366549625993">
        <ele>348.62</ele>
        <time>2012-12-03T11:08:28Z</time>
      </trkpt>
      <trkpt lat="50.703304661437869" lon="6.464453302323818">
        <ele>348.62</ele>
        <time>2012-12-03T11:08:34Z</time>
      </trkpt>
      <trkpt lat="50.703271636739373" lon="6.464589927345514">
        <ele>351.01999999999998</ele>
        <time>2012-12-03T11:08:44Z</time>
      </trkpt>
      <trkpt lat="50.703241629526019" lon="6.464708028361201">
        <ele>353.89999999999998</ele>
        <time>2012-12-03T11:08:53Z</time>
      </trkpt>
      <trkpt lat="50.703230062499642" lon="6.464838199317455">
        <ele>354.86000000000001</ele>
        <time>2012-12-03T11:09:03Z</time>
      </trkpt>
      <trkpt lat="50.703216483816504" lon="6.464925957843661">
        <ele>356.31</ele>
        <time>2012-12-03T11:09:10Z</time>
      </trkpt>
      <trkpt lat="50.70320256985724" lon="6.46501530893147">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T11:09:17Z</time>
      </trkpt>
      <trkpt lat="50.703215226531029" lon="6.465140450745821">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T11:09:26Z</time>
      </trkpt>
      <trkpt lat="50.703195361420512" lon="6.46519367583096">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T11:09:30Z</time>
      </trkpt>
      <trkpt lat="50.703127048909664" lon="6.465260395780206">
        <ele>357.75</ele>
        <time>2012-12-03T11:09:38Z</time>
      </trkpt>
      <trkpt lat="50.703024286776781" lon="6.465305322781205">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T11:09:47Z</time>
      </trkpt>
      <trkpt lat="50.702995620667934" lon="6.465321751311421">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:09:50Z</time>
      </trkpt>
      <trkpt lat="50.702897803857923" lon="6.465379083529115">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T11:10:00Z</time>
      </trkpt>
      <trkpt lat="50.702892187982798" lon="6.465370617806912">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T11:10:01Z</time>
      </trkpt>
      <trkpt lat="50.702873999252915" lon="6.465350333601236">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T11:10:06Z</time>
      </trkpt>
      <trkpt lat="50.702854050323367" lon="6.465348489582539">
        <ele>358.23000000000002</ele>
        <time>2012-12-03T11:10:14Z</time>
      </trkpt>
      <trkpt lat="50.702853631228209" lon="6.465304652228952">
        <ele>360.63</ele>
        <time>2012-12-03T11:10:22Z</time>
      </trkpt>
      <trkpt lat="50.702839633449912" lon="6.465319907292724">
        <ele>357.75</ele>
        <time>2012-12-03T11:10:25Z</time>
      </trkpt>
      <trkpt lat="50.702835945412517" lon="6.465305993333459">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T11:10:29Z</time>
      </trkpt>
      <trkpt lat="50.702857738360763" lon="6.465322505682707">
        <ele>357.75</ele>
        <time>2012-12-03T11:10:45Z</time>
      </trkpt>
      <trkpt lat="50.70281364955008" lon="6.465359972789884">
        <ele>354.86000000000001</ele>
        <time>2012-12-03T11:10:53Z</time>
      </trkpt>
      <trkpt lat="50.702773416414857" lon="6.465377155691385">
        <ele>354.38</ele>
        <time>2012-12-03T11:11:01Z</time>
      </trkpt>
      <trkpt lat="50.702756987884641" lon="6.465401044115424">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T11:11:12Z</time>
      </trkpt>
      <trkpt lat="50.702766375616193" lon="6.465419065207243">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T11:11:22Z</time>
      </trkpt>
      <trkpt lat="50.702731087803841" lon="6.465462734922767">
        <ele>354.38</ele>
        <time>2012-12-03T11:11:28Z</time>
      </trkpt>
      <trkpt lat="50.702736284583807" lon="6.465459046885371">
        <ele>354.38</ele>
        <time>2012-12-03T11:11:39Z</time>
      </trkpt>
      <trkpt lat="50.702742654830217" lon="6.465416047722101">
        <ele>352.94</ele>
        <time>2012-12-03T11:11:50Z</time>
      </trkpt>
      <trkpt lat="50.702772494405508" lon="6.4654282014817">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T11:12:00Z</time>
      </trkpt>
      <trkpt lat="50.702725388109684" lon="6.465441947802901">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T11:12:13Z</time>
      </trkpt>
      <trkpt lat="50.7027124799788" lon="6.465486036613584">
        <ele>352.45999999999998</ele>
        <time>2012-12-03T11:12:20Z</time>
      </trkpt>
      <trkpt lat="50.702712228521705" lon="6.465526521205902">
        <ele>353.89999999999998</ele>
        <time>2012-12-03T11:12:24Z</time>
      </trkpt>
      <trkpt lat="50.70268364623189" lon="6.465599527582526">
        <ele>354.38</ele>
        <time>2012-12-03T11:12:31Z</time>
      </trkpt>
      <trkpt lat="50.702675599604845" lon="6.46557237021625">
        <ele>351.5</ele>
        <time>2012-12-03T11:12:37Z</time>
      </trkpt>
      <trkpt lat="50.702674426138401" lon="6.465574884787202">
        <ele>354.86000000000001</ele>
        <time>2012-12-03T11:12:38Z</time>
      </trkpt>
      <trkpt lat="50.702672498300672" lon="6.46555719897151">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T11:12:45Z</time>
      </trkpt>
      <trkpt lat="50.702676437795162" lon="6.465568263083696">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T11:12:50Z</time>
      </trkpt>
      <trkpt lat="50.702687921002507" lon="6.465547392144799">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T11:13:00Z</time>
      </trkpt>
      <trkpt lat="50.702664786949754" lon="6.465563485398889">
        <ele>353.89999999999998</ele>
        <time>2012-12-03T11:13:09Z</time>
      </trkpt>
      <trkpt lat="50.702670654281974" lon="6.465556109324098">
        <ele>352.45999999999998</ele>
        <time>2012-12-03T11:13:17Z</time>
      </trkpt>
      <trkpt lat="50.702711725607514" lon="6.465540267527103">
        <ele>352.45999999999998</ele>
        <time>2012-12-03T11:13:29Z</time>
      </trkpt>
      <trkpt lat="50.702716922387481" lon="6.465510930866003">
        <ele>354.38</ele>
        <time>2012-12-03T11:13:37Z</time>
      </trkpt>
      <trkpt lat="50.70271885022521" lon="6.465498693287373">
        <ele>354.38</ele>
        <time>2012-12-03T11:13:38Z</time>
      </trkpt>
      <trkpt lat="50.702729243785143" lon="6.465481007471681">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T11:13:46Z</time>
      </trkpt>
      <trkpt lat="50.702746342867613" lon="6.465423339977861">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T11:13:54Z</time>
      </trkpt>
      <trkpt lat="50.702806608751416" lon="6.465406240895391">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:14:02Z</time>
      </trkpt>
      <trkpt lat="50.702855223789811" lon="6.46535636857152">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:14:09Z</time>
      </trkpt>
      <trkpt lat="50.702884225174785" lon="6.465348489582539">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:14:17Z</time>
      </trkpt>
      <trkpt lat="50.702910209074616" lon="6.465333318337798">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:14:24Z</time>
      </trkpt>
      <trkpt lat="50.702916327863932" lon="6.46535444073379">
        <ele>357.75</ele>
        <time>2012-12-03T11:14:33Z</time>
      </trkpt>
      <trkpt lat="50.70293434895575" lon="6.465367265045643">
        <ele>356.31</ele>
        <time>2012-12-03T11:14:37Z</time>
      </trkpt>
      <trkpt lat="50.702974246814847" lon="6.46539350040257">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T11:14:44Z</time>
      </trkpt>
      <trkpt lat="50.702959913760424" lon="6.465349663048983">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T11:14:52Z</time>
      </trkpt>
      <trkpt lat="50.702936109155416" lon="6.465346561744809">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:14:56Z</time>
      </trkpt>
      <trkpt lat="50.702855475246906" lon="6.465322086587548">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:15:05Z</time>
      </trkpt>
      <trkpt lat="50.702913897112012" lon="6.465342789888382">
        <ele>356.31</ele>
        <time>2012-12-03T11:15:11Z</time>
      </trkpt>
      <trkpt lat="50.702971396967769" lon="6.465276405215263">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:15:19Z</time>
      </trkpt>
      <trkpt lat="50.70308631286025" lon="6.465232567861676">
        <ele>356.31</ele>
        <time>2012-12-03T11:15:29Z</time>
      </trkpt>
      <trkpt lat="50.703149177134037" lon="6.465187557041645">
        <ele>357.75</ele>
        <time>2012-12-03T11:15:36Z</time>
      </trkpt>
      <trkpt lat="50.703214472159743" lon="6.465097703039646">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T11:15:44Z</time>
      </trkpt>
      <trkpt lat="50.703282030299306" lon="6.465062331408262">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T11:15:52Z</time>
      </trkpt>
      <trkpt lat="50.703326370567083" lon="6.465020421892405">
        <ele>359.19</ele>
        <time>2012-12-03T11:16:00Z</time>
      </trkpt>
      <trkpt lat="50.703377835452557" lon="6.464972728863359">
        <ele>359.67000000000002</ele>
        <time>2012-12-03T11:16:06Z</time>
      </trkpt>
      <trkpt lat="50.703452099114656" lon="6.464890167117119">
        <ele>359.67000000000002</ele>
        <time>2012-12-03T11:16:15Z</time>
      </trkpt>
      <trkpt lat="50.703478502109647" lon="6.464843060821295">
        <ele>360.14999999999998</ele>
        <time>2012-12-03T11:16:23Z</time>
      </trkpt>
      <trkpt lat="50.703529883176088" lon="6.464732252061367">
        <ele>359.67000000000002</ele>
        <time>2012-12-03T11:16:33Z</time>
      </trkpt>
      <trkpt lat="50.703603392466903" lon="6.46464784629643">
        <ele>360.14999999999998</ele>
        <time>2012-12-03T11:16:42Z</time>
      </trkpt>
      <trkpt lat="50.703637087717652" lon="6.464606523513794">
        <ele>362.06999999999999</ele>
        <time>2012-12-03T11:16:47Z</time>
      </trkpt>
      <trkpt lat="50.703709674999118" lon="6.464555142447352">
        <ele>363.51999999999998</ele>
        <time>2012-12-03T11:16:56Z</time>
      </trkpt>
      <trkpt lat="50.703786117956042" lon="6.4644714910537">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T11:17:06Z</time>
      </trkpt>
      <trkpt lat="50.703850826248527" lon="6.464377362281084">
        <ele>365.92000000000002</ele>
        <time>2012-12-03T11:17:16Z</time>
      </trkpt>
      <trkpt lat="50.703931292518973" lon="6.46429899148643">
        <ele>368.31999999999999</ele>
        <time>2012-12-03T11:17:25Z</time>
      </trkpt>
      <trkpt lat="50.703990049660206" lon="6.464234702289105">
        <ele>368.31999999999999</ele>
        <time>2012-12-03T11:17:34Z</time>
      </trkpt>
      <trkpt lat="50.704050902277231" lon="6.464146105572581">
        <ele>369.75999999999999</ele>
        <time>2012-12-03T11:17:43Z</time>
      </trkpt>
      <trkpt lat="50.704076299443841" lon="6.464060861617327">
        <ele>369.75999999999999</ele>
        <time>2012-12-03T11:17:50Z</time>
      </trkpt>
      <trkpt lat="50.704127093777061" lon="6.463982909917831">
        <ele>370.24000000000001</ele>
        <time>2012-12-03T11:17:58Z</time>
      </trkpt>
      <trkpt lat="50.704166991636157" lon="6.463908143341541">
        <ele>371.20999999999998</ele>
        <time>2012-12-03T11:18:06Z</time>
      </trkpt>
      <trkpt lat="50.704239998012781" lon="6.463823905214667">
        <ele>372.64999999999998</ele>
        <time>2012-12-03T11:18:16Z</time>
      </trkpt>
      <trkpt lat="50.704311830922961" lon="6.46374779753387">
        <ele>373.13</ele>
        <time>2012-12-03T11:18:25Z</time>
      </trkpt>
      <trkpt lat="50.704388944432139" lon="6.463657272979617">
        <ele>373.61000000000001</ele>
        <time>2012-12-03T11:18:35Z</time>
      </trkpt>
      <trkpt lat="50.704453736543655" lon="6.463575968518853">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T11:18:43Z</time>
      </trkpt>
      <trkpt lat="50.704528335481882" lon="6.463476978242397">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T11:18:52Z</time>
      </trkpt>
      <trkpt lat="50.704544764012098" lon="6.463456358760595">
        <ele>376.00999999999999</ele>
        <time>2012-12-03T11:18:54Z</time>
      </trkpt>
      <trkpt lat="50.704602347686887" lon="6.463394081220031">
        <ele>375.05000000000001</ele>
        <time>2012-12-03T11:19:02Z</time>
      </trkpt>
      <trkpt lat="50.704688429832458" lon="6.46332023665309">
        <ele>376.00999999999999</ele>
        <time>2012-12-03T11:19:11Z</time>
      </trkpt>
      <trkpt lat="50.704712569713593" lon="6.463305819779635">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T11:19:13Z</time>
      </trkpt>
      <trkpt lat="50.704785492271185" lon="6.463235830888152">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:19:22Z</time>
      </trkpt>
      <trkpt lat="50.704830922186375" lon="6.463181097060442">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:19:30Z</time>
      </trkpt>
      <trkpt lat="50.704883309081197" lon="6.463117143139243">
        <ele>376.00999999999999</ele>
        <time>2012-12-03T11:19:39Z</time>
      </trkpt>
      <trkpt lat="50.704931169748306" lon="6.463062828406692">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:19:46Z</time>
      </trkpt>
      <trkpt lat="50.705002751201391" lon="6.462996527552605">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T11:19:53Z</time>
      </trkpt>
      <trkpt lat="50.705029405653477" lon="6.462975572794676">
        <ele>377.94</ele>
        <time>2012-12-03T11:19:56Z</time>
      </trkpt>
      <trkpt lat="50.705093359574676" lon="6.46290491335094">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T11:20:06Z</time>
      </trkpt>
      <trkpt lat="50.705144237726927" lon="6.462824698537588">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:20:17Z</time>
      </trkpt>
      <trkpt lat="50.705220261588693" lon="6.462744064629078">
        <ele>378.89999999999998</ele>
        <time>2012-12-03T11:20:26Z</time>
      </trkpt>
      <trkpt lat="50.705293184146285" lon="6.462660413235426">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:20:35Z</time>
      </trkpt>
      <trkpt lat="50.705364849418402" lon="6.462555304169655">
        <ele>379.38</ele>
        <time>2012-12-03T11:20:44Z</time>
      </trkpt>
      <trkpt lat="50.705405920743942" lon="6.46249889396131">
        <ele>379.38</ele>
        <time>2012-12-03T11:20:50Z</time>
      </trkpt>
      <trkpt lat="50.705467611551285" lon="6.462385570630431">
        <ele>379.38</ele>
        <time>2012-12-03T11:21:00Z</time>
      </trkpt>
      <trkpt lat="50.705511113628745" lon="6.462313318625093">
        <ele>379.86000000000001</ele>
        <time>2012-12-03T11:21:08Z</time>
      </trkpt>
      <trkpt lat="50.705564254894853" lon="6.46224626339972">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T11:21:17Z</time>
      </trkpt>
      <trkpt lat="50.705599039793015" lon="6.462206114083529">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T11:21:24Z</time>
      </trkpt>
      <trkpt lat="50.705651426687837" lon="6.462135706096888">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T11:21:31Z</time>
      </trkpt>
      <trkpt lat="50.705707669258118" lon="6.462054317817092">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T11:21:40Z</time>
      </trkpt>
      <trkpt lat="50.705779585987329" lon="6.461985083296895">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:21:48Z</time>
      </trkpt>
      <trkpt lat="50.705821914598346" lon="6.461975444108248">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T11:21:54Z</time>
      </trkpt>
      <trkpt lat="50.705896262079477" lon="6.461863461881876">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:22:05Z</time>
      </trkpt>
      <trkpt lat="50.705941691994667" lon="6.461768243461847">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:22:14Z</time>
      </trkpt>
      <trkpt lat="50.705957198515534" lon="6.461743181571364">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:22:16Z</time>
      </trkpt>
      <trkpt lat="50.706029785797" lon="6.461641006171703">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:22:26Z</time>
      </trkpt>
      <trkpt lat="50.70604202337563" lon="6.461602617055178">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:22:32Z</time>
      </trkpt>
      <trkpt lat="50.706057026982307" lon="6.461595660075545">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:22:38Z</time>
      </trkpt>
      <trkpt lat="50.706082424148917" lon="6.461563808843494">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:22:49Z</time>
      </trkpt>
      <trkpt lat="50.706101534888148" lon="6.461424920707941">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:22:58Z</time>
      </trkpt>
      <trkpt lat="50.706054177135229" lon="6.461401786655188">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:23:07Z</time>
      </trkpt>
      <trkpt lat="50.706080999225378" lon="6.4613804128021">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:23:17Z</time>
      </trkpt>
      <trkpt lat="50.70607228204608" lon="6.461414527148008">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:23:24Z</time>
      </trkpt>
      <trkpt lat="50.706206224858761" lon="6.461441768333316">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:23:32Z</time>
      </trkpt>
      <trkpt lat="50.706222653388977" lon="6.461424166336656">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:23:41Z</time>
      </trkpt>
      <trkpt lat="50.706249810755253" lon="6.46143464371562">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:24:00Z</time>
      </trkpt>
      <trkpt lat="50.706245368346572" lon="6.46141117438674">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:24:10Z</time>
      </trkpt>
      <trkpt lat="50.706157442182302" lon="6.46142341196537">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:24:19Z</time>
      </trkpt>
      <trkpt lat="50.706150820478797" lon="6.461426597088575">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:24:22Z</time>
      </trkpt>
      <trkpt lat="50.706157526001334" lon="6.461404887959361">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:24:31Z</time>
      </trkpt>
      <trkpt lat="50.706185018643737" lon="6.46136524155736">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:24:35Z</time>
      </trkpt>
      <trkpt lat="50.706298006698489" lon="6.461177570745349">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:24:49Z</time>
      </trkpt>
      <trkpt lat="50.706438068300486" lon="6.461103223264217">
        <ele>385.63</ele>
        <time>2012-12-03T11:25:03Z</time>
      </trkpt>
      <trkpt lat="50.706438738852739" lon="6.461098780855537">
        <ele>385.63</ele>
        <time>2012-12-03T11:25:04Z</time>
      </trkpt>
      <trkpt lat="50.706512834876776" lon="6.461011609062553">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:25:15Z</time>
      </trkpt>
      <trkpt lat="50.706599168479443" lon="6.46086442284286">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:25:28Z</time>
      </trkpt>
      <trkpt lat="50.706732356920838" lon="6.460732659325004">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:25:41Z</time>
      </trkpt>
      <trkpt lat="50.706845680251718" lon="6.460564518347383">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:25:55Z</time>
      </trkpt>
      <trkpt lat="50.706937126815319" lon="6.460420014336705">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:26:04Z</time>
      </trkpt>
      <trkpt lat="50.706997057422996" lon="6.460317252203822">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:26:13Z</time>
      </trkpt>
      <trkpt lat="50.707076266407967" lon="6.460198815912008">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:26:23Z</time>
      </trkpt>
      <trkpt lat="50.707082385197282" lon="6.460184482857585">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:26:24Z</time>
      </trkpt>
      <trkpt lat="50.707156648859382" lon="6.46004743874073">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:26:34Z</time>
      </trkpt>
      <trkpt lat="50.707222865894437" lon="6.45994626916945">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:26:43Z</time>
      </trkpt>
      <trkpt lat="50.707264523953199" lon="6.459866724908352">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:26:52Z</time>
      </trkpt>
      <trkpt lat="50.707279359921813" lon="6.459831604734063">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:26:55Z</time>
      </trkpt>
      <trkpt lat="50.707338955253363" lon="6.459702858701348">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:27:05Z</time>
      </trkpt>
      <trkpt lat="50.707388240844011" lon="6.459635635837913">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:27:14Z</time>
      </trkpt>
      <trkpt lat="50.70740332826972" lon="6.459605544805527">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:27:23Z</time>
      </trkpt>
      <trkpt lat="50.707412213087082" lon="6.459614848718047">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:27:32Z</time>
      </trkpt>
      <trkpt lat="50.707434928044677" lon="6.459622727707028">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:27:45Z</time>
      </trkpt>
      <trkpt lat="50.707431072369218" lon="6.459609819576144">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:28:01Z</time>
      </trkpt>
      <trkpt lat="50.707451356574893" lon="6.459537483751774">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:28:10Z</time>
      </trkpt>
      <trkpt lat="50.707480944693089" lon="6.459392979741097">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:28:19Z</time>
      </trkpt>
      <trkpt lat="50.707497792318463" lon="6.459209164604545">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:28:31Z</time>
      </trkpt>
      <trkpt lat="50.707507515326142" lon="6.459103552624583">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T11:28:37Z</time>
      </trkpt>
      <trkpt lat="50.707516316324472" lon="6.458895765244961">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T11:28:47Z</time>
      </trkpt>
      <trkpt lat="50.707545485347509" lon="6.458762241527438">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T11:28:55Z</time>
      </trkpt>
      <trkpt lat="50.707569792866707" lon="6.458640703931451">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T11:29:03Z</time>
      </trkpt>
      <trkpt lat="50.707584712654352" lon="6.458511874079704">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T11:29:11Z</time>
      </trkpt>
      <trkpt lat="50.707618491724133" lon="6.458406932651997">
        <ele>381.30000000000001</ele>
        <time>2012-12-03T11:29:18Z</time>
      </trkpt>
      <trkpt lat="50.707627376541495" lon="6.458324454724789">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:29:23Z</time>
      </trkpt>
      <trkpt lat="50.707668866962194" lon="6.458165030926466">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T11:29:33Z</time>
      </trkpt>
      <trkpt lat="50.707704992964864" lon="6.458050282672048">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:29:42Z</time>
      </trkpt>
      <trkpt lat="50.707709603011608" lon="6.45802253857255">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:29:44Z</time>
      </trkpt>
      <trkpt lat="50.70772921666503" lon="6.457880800589919">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:29:53Z</time>
      </trkpt>
      <trkpt lat="50.707753440365195" lon="6.457706373184919">
        <ele>385.63</ele>
        <time>2012-12-03T11:30:03Z</time>
      </trkpt>
      <trkpt lat="50.707765342667699" lon="6.457570334896445">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:30:11Z</time>
      </trkpt>
      <trkpt lat="50.7077790889889" lon="6.457423651590943">
        <ele>385.63</ele>
        <time>2012-12-03T11:30:20Z</time>
      </trkpt>
      <trkpt lat="50.707794930785894" lon="6.457259953022003">
        <ele>387.06999999999999</ele>
        <time>2012-12-03T11:30:30Z</time>
      </trkpt>
      <trkpt lat="50.707793002948165" lon="6.45711419172585">
        <ele>387.06999999999999</ele>
        <time>2012-12-03T11:30:38Z</time>
      </trkpt>
      <trkpt lat="50.707791829481721" lon="6.456990642473102">
        <ele>387.55000000000001</ele>
        <time>2012-12-03T11:30:46Z</time>
      </trkpt>
      <trkpt lat="50.707799037918448" lon="6.456858040764928">
        <ele>388.99000000000001</ele>
        <time>2012-12-03T11:30:54Z</time>
      </trkpt>
      <trkpt lat="50.707802642136812" lon="6.456713536754251">
        <ele>388.02999999999997</ele>
        <time>2012-12-03T11:31:03Z</time>
      </trkpt>
      <trkpt lat="50.707808677107096" lon="6.456601303070784">
        <ele>387.55000000000001</ele>
        <time>2012-12-03T11:31:10Z</time>
      </trkpt>
      <trkpt lat="50.707822507247329" lon="6.456516645848751">
        <ele>388.50999999999999</ele>
        <time>2012-12-03T11:31:17Z</time>
      </trkpt>
      <trkpt lat="50.707813035696745" lon="6.456394689157605">
        <ele>389.94999999999999</ele>
        <time>2012-12-03T11:31:24Z</time>
      </trkpt>
      <trkpt lat="50.707805994898081" lon="6.456288825720549">
        <ele>389.94999999999999</ele>
        <time>2012-12-03T11:31:32Z</time>
      </trkpt>
      <trkpt lat="50.707786045968533" lon="6.456159073859453">
        <ele>391.38999999999999</ele>
        <time>2012-12-03T11:31:40Z</time>
      </trkpt>
      <trkpt lat="50.707759726792574" lon="6.456040889024735">
        <ele>393.31999999999999</ele>
        <time>2012-12-03T11:31:48Z</time>
      </trkpt>
      <trkpt lat="50.707720248028636" lon="6.455913567915559">
        <ele>393.80000000000001</ele>
        <time>2012-12-03T11:31:56Z</time>
      </trkpt>
      <trkpt lat="50.707682110369205" lon="6.455745007842779">
        <ele>393.80000000000001</ele>
        <time>2012-12-03T11:32:07Z</time>
      </trkpt>
      <trkpt lat="50.707674734294415" lon="6.45568105392158">
        <ele>394.75999999999999</ele>
        <time>2012-12-03T11:32:11Z</time>
      </trkpt>
      <trkpt lat="50.707646068185568" lon="6.45548852160573">
        <ele>394.27999999999997</ele>
        <time>2012-12-03T11:32:22Z</time>
      </trkpt>
      <trkpt lat="50.707625532522798" lon="6.455337563529611">
        <ele>394.27999999999997</ele>
        <time>2012-12-03T11:32:31Z</time>
      </trkpt>
      <trkpt lat="50.707596531137824" lon="6.455260533839464">
        <ele>393.80000000000001</ele>
        <time>2012-12-03T11:32:38Z</time>
      </trkpt>
      <trkpt lat="50.707589909434319" lon="6.455247038975358">
        <ele>394.27999999999997</ele>
        <time>2012-12-03T11:32:44Z</time>
      </trkpt>
      <trkpt lat="50.707578174769878" lon="6.45521929487586">
        <ele>393.31999999999999</ele>
        <time>2012-12-03T11:32:50Z</time>
      </trkpt>
      <trkpt lat="50.707578510046005" lon="6.455214936286211">
        <ele>393.31999999999999</ele>
        <time>2012-12-03T11:32:51Z</time>
      </trkpt>
      <trkpt lat="50.70758312009275" lon="6.455241926014423">
        <ele>395.72000000000003</ele>
        <time>2012-12-03T11:32:58Z</time>
      </trkpt>
      <trkpt lat="50.707580521702766" lon="6.455180738121271">
        <ele>394.75999999999999</ele>
        <time>2012-12-03T11:33:06Z</time>
      </trkpt>
      <trkpt lat="50.707556549459696" lon="6.45506733097136">
        <ele>397.16000000000003</ele>
        <time>2012-12-03T11:33:12Z</time>
      </trkpt>
      <trkpt lat="50.707547999918461" lon="6.45502139814198">
        <ele>395.24000000000001</ele>
        <time>2012-12-03T11:33:15Z</time>
      </trkpt>
      <trkpt lat="50.707508269697428" lon="6.454871278256178">
        <ele>392.83999999999997</ele>
        <time>2012-12-03T11:33:24Z</time>
      </trkpt>
      <trkpt lat="50.707484381273389" lon="6.454744711518288">
        <ele>391.87</ele>
        <time>2012-12-03T11:33:32Z</time>
      </trkpt>
      <trkpt lat="50.707449093461037" lon="6.454575648531318">
        <ele>392.36000000000001</ele>
        <time>2012-12-03T11:33:42Z</time>
      </trkpt>
      <trkpt lat="50.707459906116128" lon="6.45456550642848">
        <ele>392.83999999999997</ele>
        <time>2012-12-03T11:33:51Z</time>
      </trkpt>
      <trkpt lat="50.707499133422971" lon="6.454343302175403">
        <ele>393.80000000000001</ele>
        <time>2012-12-03T11:34:01Z</time>
      </trkpt>
      <trkpt lat="50.707494774833322" lon="6.454248921945691">
        <ele>394.75999999999999</ele>
        <time>2012-12-03T11:34:09Z</time>
      </trkpt>
      <trkpt lat="50.707489578053355" lon="6.45411254838109">
        <ele>393.80000000000001</ele>
        <time>2012-12-03T11:34:18Z</time>
      </trkpt>
      <trkpt lat="50.707530146464705" lon="6.454066699370742">
        <ele>394.27999999999997</ele>
        <time>2012-12-03T11:34:25Z</time>
      </trkpt>
      <trkpt lat="50.707524446770549" lon="6.454030154272914">
        <ele>393.80000000000001</ele>
        <time>2012-12-03T11:34:33Z</time>
      </trkpt>
      <trkpt lat="50.707507850602269" lon="6.454105591401458">
        <ele>394.75999999999999</ele>
        <time>2012-12-03T11:34:44Z</time>
      </trkpt>
      <trkpt lat="50.707494858652353" lon="6.454102071002126">
        <ele>393.31999999999999</ele>
        <time>2012-12-03T11:34:51Z</time>
      </trkpt>
      <trkpt lat="50.707473987713456" lon="6.454091593623161">
        <ele>392.36000000000001</ele>
        <time>2012-12-03T11:34:55Z</time>
      </trkpt>
      <trkpt lat="50.707419756799936" lon="6.453978521749377">
        <ele>394.75999999999999</ele>
        <time>2012-12-03T11:35:05Z</time>
      </trkpt>
      <trkpt lat="50.707365106791258" lon="6.453877100721002">
        <ele>395.24000000000001</ele>
        <time>2012-12-03T11:35:15Z</time>
      </trkpt>
      <trkpt lat="50.707345241680741" lon="6.453832508996129">
        <ele>393.80000000000001</ele>
        <time>2012-12-03T11:35:18Z</time>
      </trkpt>
      <trkpt lat="50.707289837300777" lon="6.453720862045884">
        <ele>395.72000000000003</ele>
        <time>2012-12-03T11:35:25Z</time>
      </trkpt>
      <trkpt lat="50.707217417657375" lon="6.45358826033771">
        <ele>396.19999999999999</ele>
        <time>2012-12-03T11:35:35Z</time>
      </trkpt>
      <trkpt lat="50.707171401008964" lon="6.453483486548066">
        <ele>396.68000000000001</ele>
        <time>2012-12-03T11:35:44Z</time>
      </trkpt>
      <trkpt lat="50.707138543948531" lon="6.45339815877378">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:35:53Z</time>
      </trkpt>
      <trkpt lat="50.707099484279752" lon="6.453311573714018">
        <ele>400.52999999999997</ele>
        <time>2012-12-03T11:36:03Z</time>
      </trkpt>
      <trkpt lat="50.707059586420655" lon="6.453228341415525">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:36:12Z</time>
      </trkpt>
      <trkpt lat="50.706979287788272" lon="6.453099260106683">
        <ele>397.63999999999999</ele>
        <time>2012-12-03T11:36:23Z</time>
      </trkpt>
      <trkpt lat="50.706909215077758" lon="6.452987110242248">
        <ele>397.16000000000003</ele>
        <time>2012-12-03T11:36:33Z</time>
      </trkpt>
      <trkpt lat="50.706838555634022" lon="6.452888958156109">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:36:42Z</time>
      </trkpt>
      <trkpt lat="50.706774517893791" lon="6.452749818563461">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:36:52Z</time>
      </trkpt>
      <trkpt lat="50.706760520115495" lon="6.452719643712044">
        <ele>398.12</ele>
        <time>2012-12-03T11:36:57Z</time>
      </trkpt>
      <trkpt lat="50.706754568964243" lon="6.452653259038925">
        <ele>400.05000000000001</ele>
        <time>2012-12-03T11:37:00Z</time>
      </trkpt>
      <trkpt lat="50.706745600327849" lon="6.452542115002871">
        <ele>399.56999999999999</ele>
        <time>2012-12-03T11:37:07Z</time>
      </trkpt>
      <trkpt lat="50.706734787672758" lon="6.452487884089351">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:37:13Z</time>
      </trkpt>
      <trkpt lat="50.706727663055062" lon="6.452487967908382">
        <ele>402.44999999999999</ele>
        <time>2012-12-03T11:37:14Z</time>
      </trkpt>
      <trkpt lat="50.706712827086449" lon="6.452488722279668">
        <ele>402.93000000000001</ele>
        <time>2012-12-03T11:37:16Z</time>
      </trkpt>
      <trkpt lat="50.706682149320841" lon="6.452472796663642">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:37:27Z</time>
      </trkpt>
      <trkpt lat="50.706676449626684" lon="6.45247858017683">
        <ele>399.56999999999999</ele>
        <time>2012-12-03T11:37:28Z</time>
      </trkpt>
      <trkpt lat="50.706660440191627" lon="6.452500373125076">
        <ele>400.05000000000001</ele>
        <time>2012-12-03T11:37:30Z</time>
      </trkpt>
      <trkpt lat="50.706640994176269" lon="6.452521244063973">
        <ele>401.49000000000001</ele>
        <time>2012-12-03T11:37:32Z</time>
      </trkpt>
      <trkpt lat="50.706631690263748" lon="6.452511185780168">
        <ele>398.12</ele>
        <time>2012-12-03T11:37:35Z</time>
      </trkpt>
      <trkpt lat="50.706616267561913" lon="6.452504731714726">
        <ele>400.05000000000001</ele>
        <time>2012-12-03T11:37:45Z</time>
      </trkpt>
      <trkpt lat="50.706606209278107" lon="6.452469443902373">
        <ele>399.56999999999999</ele>
        <time>2012-12-03T11:37:57Z</time>
      </trkpt>
      <trkpt lat="50.706608640030026" lon="6.452463828027248">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:38:15Z</time>
      </trkpt>
      <trkpt lat="50.706603610888124" lon="6.452462151646614">
        <ele>394.75999999999999</ele>
        <time>2012-12-03T11:38:25Z</time>
      </trkpt>
      <trkpt lat="50.706604784354568" lon="6.452458798885346">
        <ele>394.75999999999999</ele>
        <time>2012-12-03T11:38:26Z</time>
      </trkpt>
      <trkpt lat="50.706606041640043" lon="6.452451422810555">
        <ele>398.12</ele>
        <time>2012-12-03T11:38:29Z</time>
      </trkpt>
      <trkpt lat="50.706611322239041" lon="6.452450081706047">
        <ele>396.68000000000001</ele>
        <time>2012-12-03T11:38:36Z</time>
      </trkpt>
      <trkpt lat="50.706609897315502" lon="6.452453350648284">
        <ele>400.52999999999997</ele>
        <time>2012-12-03T11:38:40Z</time>
      </trkpt>
      <trkpt lat="50.70660981349647" lon="6.452455194666982">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:38:41Z</time>
      </trkpt>
      <trkpt lat="50.706604700535536" lon="6.452470282092691">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:38:53Z</time>
      </trkpt>
      <trkpt lat="50.706618446856737" lon="6.452440358698368">
        <ele>398.12</ele>
        <time>2012-12-03T11:39:11Z</time>
      </trkpt>
      <trkpt lat="50.70662297308445" lon="6.452439352869988">
        <ele>397.16000000000003</ele>
        <time>2012-12-03T11:39:17Z</time>
      </trkpt>
      <trkpt lat="50.706606712192297" lon="6.452436586841941">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:39:33Z</time>
      </trkpt>
      <trkpt lat="50.706614758819342" lon="6.452470617368817">
        <ele>397.63999999999999</ele>
        <time>2012-12-03T11:39:43Z</time>
      </trkpt>
      <trkpt lat="50.706625990569592" lon="6.452462989836931">
        <ele>398.12</ele>
        <time>2012-12-03T11:39:53Z</time>
      </trkpt>
      <trkpt lat="50.706618530675769" lon="6.452461900189519">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:40:08Z</time>
      </trkpt>
      <trkpt lat="50.706626828759909" lon="6.452471204102039">
        <ele>397.63999999999999</ele>
        <time>2012-12-03T11:40:21Z</time>
      </trkpt>
      <trkpt lat="50.706636300310493" lon="6.452464750036597">
        <ele>400.05000000000001</ele>
        <time>2012-12-03T11:40:26Z</time>
      </trkpt>
      <trkpt lat="50.706636551767588" lon="6.452474473044276">
        <ele>399.56999999999999</ele>
        <time>2012-12-03T11:40:34Z</time>
      </trkpt>
      <trkpt lat="50.706645101308823" lon="6.452461061999202">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:40:43Z</time>
      </trkpt>
      <trkpt lat="50.706643341109157" lon="6.452422589063644">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:40:48Z</time>
      </trkpt>
      <trkpt lat="50.706647196784616" lon="6.452412446960807">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:40:56Z</time>
      </trkpt>
      <trkpt lat="50.706653064116836" lon="6.452488135546446">
        <ele>397.63999999999999</ele>
        <time>2012-12-03T11:41:02Z</time>
      </trkpt>
      <trkpt lat="50.706638479605317" lon="6.45249517634511">
        <ele>398.12</ele>
        <time>2012-12-03T11:41:08Z</time>
      </trkpt>
      <trkpt lat="50.706601096317172" lon="6.452527949586511">
        <ele>398.12</ele>
        <time>2012-12-03T11:41:13Z</time>
      </trkpt>
      <trkpt lat="50.706569328904152" lon="6.452553849667311">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:41:19Z</time>
      </trkpt>
      <trkpt lat="50.706554660573602" lon="6.452576816082001">
        <ele>400.05000000000001</ele>
        <time>2012-12-03T11:41:23Z</time>
      </trkpt>
      <trkpt lat="50.706531442701817" lon="6.452577654272318">
        <ele>396.19999999999999</ele>
        <time>2012-12-03T11:41:30Z</time>
      </trkpt>
      <trkpt lat="50.706552397459745" lon="6.452553262934089">
        <ele>397.63999999999999</ele>
        <time>2012-12-03T11:41:39Z</time>
      </trkpt>
      <trkpt lat="50.706617692485452" lon="6.452494254335761">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:41:47Z</time>
      </trkpt>
      <trkpt lat="50.706596989184618" lon="6.452508252114058">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:41:56Z</time>
      </trkpt>
      <trkpt lat="50.706592462956905" lon="6.452496014535427">
        <ele>398.60000000000002</ele>
        <time>2012-12-03T11:42:09Z</time>
      </trkpt>
      <trkpt lat="50.706582488492131" lon="6.452601626515389">
        <ele>399.07999999999998</ele>
        <time>2012-12-03T11:42:17Z</time>
      </trkpt>
      <trkpt lat="50.706543177366257" lon="6.452690726146102">
        <ele>396.68000000000001</ele>
        <time>2012-12-03T11:42:25Z</time>
      </trkpt>
      <trkpt lat="50.706519288942218" lon="6.452754177153111">
        <ele>395.24000000000001</ele>
        <time>2012-12-03T11:42:30Z</time>
      </trkpt>
      <trkpt lat="50.706495819613338" lon="6.452855179086328">
        <ele>394.75999999999999</ele>
        <time>2012-12-03T11:42:37Z</time>
      </trkpt>
      <trkpt lat="50.706439828500152" lon="6.45293639972806">
        <ele>394.27999999999997</ele>
        <time>2012-12-03T11:42:44Z</time>
      </trkpt>
      <trkpt lat="50.706415018066764" lon="6.452951906248927">
        <ele>391.87</ele>
        <time>2012-12-03T11:42:49Z</time>
      </trkpt>
      <trkpt lat="50.706393057480454" lon="6.452996749430895">
        <ele>392.36000000000001</ele>
        <time>2012-12-03T11:42:57Z</time>
      </trkpt>
      <trkpt lat="50.70638744160533" lon="6.453040670603514">
        <ele>391.38999999999999</ele>
        <time>2012-12-03T11:43:00Z</time>
      </trkpt>
      <trkpt lat="50.706354752182961" lon="6.453151311725378">
        <ele>389.94999999999999</ele>
        <time>2012-12-03T11:43:08Z</time>
      </trkpt>
      <trkpt lat="50.70635181851685" lon="6.453170254826546">
        <ele>389.94999999999999</ele>
        <time>2012-12-03T11:43:09Z</time>
      </trkpt>
      <trkpt lat="50.706329522654414" lon="6.453291373327375">
        <ele>389.94999999999999</ele>
        <time>2012-12-03T11:43:17Z</time>
      </trkpt>
      <trkpt lat="50.706317620351911" lon="6.45339036360383">
        <ele>390.43000000000001</ele>
        <time>2012-12-03T11:43:23Z</time>
      </trkpt>
      <trkpt lat="50.706266406923532" lon="6.453543500974774">
        <ele>389.47000000000003</ele>
        <time>2012-12-03T11:43:33Z</time>
      </trkpt>
      <trkpt lat="50.706251906231046" lon="6.453578202053905">
        <ele>389.47000000000003</ele>
        <time>2012-12-03T11:43:37Z</time>
      </trkpt>
      <trkpt lat="50.706230448558927" lon="6.453600497916341">
        <ele>390.43000000000001</ele>
        <time>2012-12-03T11:43:39Z</time>
      </trkpt>
      <trkpt lat="50.706161297857761" lon="6.45369429141283">
        <ele>388.02999999999997</ele>
        <time>2012-12-03T11:43:48Z</time>
      </trkpt>
      <trkpt lat="50.706120226532221" lon="6.45379395224154">
        <ele>388.02999999999997</ele>
        <time>2012-12-03T11:43:56Z</time>
      </trkpt>
      <trkpt lat="50.706094997003675" lon="6.453861007466912">
        <ele>386.11000000000001</ele>
        <time>2012-12-03T11:44:03Z</time>
      </trkpt>
      <trkpt lat="50.706076137721539" lon="6.453912304714322">
        <ele>386.58999999999997</ele>
        <time>2012-12-03T11:44:11Z</time>
      </trkpt>
      <trkpt lat="50.706090638414025" lon="6.453959997743368">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:44:18Z</time>
      </trkpt>
      <trkpt lat="50.706108994781971" lon="6.45400651730597">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:44:22Z</time>
      </trkpt>
      <trkpt lat="50.706102792173624" lon="6.454041721299291">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:44:30Z</time>
      </trkpt>
      <trkpt lat="50.706102289259434" lon="6.4541604090482">
        <ele>380.33999999999997</ele>
        <time>2012-12-03T11:44:38Z</time>
      </trkpt>
      <trkpt lat="50.706095499917865" lon="6.454215813428164">
        <ele>378.89999999999998</ele>
        <time>2012-12-03T11:44:46Z</time>
      </trkpt>
      <trkpt lat="50.706105139106512" lon="6.454301811754704">
        <ele>378.89999999999998</ele>
        <time>2012-12-03T11:44:52Z</time>
      </trkpt>
      <trkpt lat="50.706101283431053" lon="6.454370627179742">
        <ele>378.89999999999998</ele>
        <time>2012-12-03T11:44:57Z</time>
      </trkpt>
      <trkpt lat="50.706102205440402" lon="6.454482944682241">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:45:04Z</time>
      </trkpt>
      <trkpt lat="50.706124417483807" lon="6.454589394852519">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T11:45:12Z</time>
      </trkpt>
      <trkpt lat="50.706186862662435" lon="6.454654857516289">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:45:19Z</time>
      </trkpt>
      <trkpt lat="50.706261293962598" lon="6.454750830307603">
        <ele>377.94</ele>
        <time>2012-12-03T11:45:28Z</time>
      </trkpt>
      <trkpt lat="50.706298174336553" lon="6.454825261607766">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:45:34Z</time>
      </trkpt>
      <trkpt lat="50.706352321431041" lon="6.454919558018446">
        <ele>375.05000000000001</ele>
        <time>2012-12-03T11:45:41Z</time>
      </trkpt>
      <trkpt lat="50.706433290615678" lon="6.45504335872829">
        <ele>373.61000000000001</ele>
        <time>2012-12-03T11:45:49Z</time>
      </trkpt>
      <trkpt lat="50.706516187638044" lon="6.455141929909587">
        <ele>371.69</ele>
        <time>2012-12-03T11:45:58Z</time>
      </trkpt>
      <trkpt lat="50.706582823768258" lon="6.455246033146977">
        <ele>371.20999999999998</ele>
        <time>2012-12-03T11:46:06Z</time>
      </trkpt>
      <trkpt lat="50.706650549545884" lon="6.455366062000394">
        <ele>371.20999999999998</ele>
        <time>2012-12-03T11:46:14Z</time>
      </trkpt>
      <trkpt lat="50.70672020316124" lon="6.455504950135946">
        <ele>370.73000000000002</ele>
        <time>2012-12-03T11:46:23Z</time>
      </trkpt>
      <trkpt lat="50.706780971959233" lon="6.455636546015739">
        <ele>371.20999999999998</ele>
        <time>2012-12-03T11:46:31Z</time>
      </trkpt>
      <trkpt lat="50.706856492906809" lon="6.455802004784346">
        <ele>371.20999999999998</ele>
        <time>2012-12-03T11:46:42Z</time>
      </trkpt>
      <trkpt lat="50.70690929889679" lon="6.455944832414389">
        <ele>370.73000000000002</ele>
        <time>2012-12-03T11:46:50Z</time>
      </trkpt>
      <trkpt lat="50.706942323595285" lon="6.456040805205703">
        <ele>374.08999999999997</ele>
        <time>2012-12-03T11:46:56Z</time>
      </trkpt>
      <trkpt lat="50.706947604194283" lon="6.456056227907538">
        <ele>374.08999999999997</ele>
        <time>2012-12-03T11:46:57Z</time>
      </trkpt>
      <trkpt lat="50.707002086564898" lon="6.456154379993677">
        <ele>375.52999999999997</ele>
        <time>2012-12-03T11:47:04Z</time>
      </trkpt>
      <trkpt lat="50.707069560885429" lon="6.456282287836075">
        <ele>374.08999999999997</ele>
        <time>2012-12-03T11:47:14Z</time>
      </trkpt>
      <trkpt lat="50.707113901153207" lon="6.456363676115871">
        <ele>374.08999999999997</ele>
        <time>2012-12-03T11:47:21Z</time>
      </trkpt>
      <trkpt lat="50.707141058519483" lon="6.45643156953156">
        <ele>375.52999999999997</ele>
        <time>2012-12-03T11:47:26Z</time>
      </trkpt>
      <trkpt lat="50.707164527848363" lon="6.456525782123208">
        <ele>375.52999999999997</ele>
        <time>2012-12-03T11:47:36Z</time>
      </trkpt>
      <trkpt lat="50.707191936671734" lon="6.456624353304505">
        <ele>376.00999999999999</ele>
        <time>2012-12-03T11:47:43Z</time>
      </trkpt>
      <trkpt lat="50.707230996340513" lon="6.456791153177619">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:47:52Z</time>
      </trkpt>
      <trkpt lat="50.707263853400946" lon="6.456833984702826">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:47:58Z</time>
      </trkpt>
      <trkpt lat="50.707291094586253" lon="6.456942865625024">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:48:05Z</time>
      </trkpt>
      <trkpt lat="50.70733392611146" lon="6.457094242796302">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T11:48:14Z</time>
      </trkpt>
      <trkpt lat="50.707374159246683" lon="6.45719918422401">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T11:48:23Z</time>
      </trkpt>
      <trkpt lat="50.70740919560194" lon="6.457353746518493">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:48:32Z</time>
      </trkpt>
      <trkpt lat="50.707451440393925" lon="6.45753588527441">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T11:48:42Z</time>
      </trkpt>
      <trkpt lat="50.707497792318463" lon="6.45772104151547">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T11:48:53Z</time>
      </trkpt>
      <trkpt lat="50.70754162967205" lon="6.457847775891423">
        <ele>377.94</ele>
        <time>2012-12-03T11:49:01Z</time>
      </trkpt>
      <trkpt lat="50.707593346014619" lon="6.457998566329479">
        <ele>376.00999999999999</ele>
        <time>2012-12-03T11:49:10Z</time>
      </trkpt>
      <trkpt lat="50.707628130912781" lon="6.458141058683395">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T11:49:18Z</time>
      </trkpt>
      <trkpt lat="50.707641709595919" lon="6.458284389227629">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:49:27Z</time>
      </trkpt>
      <trkpt lat="50.707642128691077" lon="6.458319341763854">
        <ele>377.94</ele>
        <time>2012-12-03T11:49:29Z</time>
      </trkpt>
      <trkpt lat="50.707622934132814" lon="6.458411542698741">
        <ele>376.00999999999999</ele>
        <time>2012-12-03T11:49:36Z</time>
      </trkpt>
      <trkpt lat="50.707605080679059" lon="6.458503492176533">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T11:49:41Z</time>
      </trkpt>
      <trkpt lat="50.707582281902432" lon="6.458675488829613">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T11:49:50Z</time>
      </trkpt>
      <trkpt lat="50.707553448155522" lon="6.458855783566833">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T11:50:00Z</time>
      </trkpt>
      <trkpt lat="50.707530146464705" lon="6.459063570946455">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T11:50:11Z</time>
      </trkpt>
      <trkpt lat="50.707528553903103" lon="6.459186030551791">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T11:50:18Z</time>
      </trkpt>
      <trkpt lat="50.70752159692347" lon="6.45921871997416">
        <ele>377.44999999999999</ele>
        <time>2012-12-03T11:50:20Z</time>
      </trkpt>
      <trkpt lat="50.707479687407613" lon="6.459409659728408">
        <ele>376.97000000000003</ele>
        <time>2012-12-03T11:50:31Z</time>
      </trkpt>
      <trkpt lat="50.707438196986914" lon="6.459548212587833">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:50:40Z</time>
      </trkpt>
      <trkpt lat="50.707383127883077" lon="6.459669163450599">
        <ele>377.94</ele>
        <time>2012-12-03T11:50:48Z</time>
      </trkpt>
      <trkpt lat="50.707324035465717" lon="6.459787935018539">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:50:57Z</time>
      </trkpt>
      <trkpt lat="50.707315318286419" lon="6.459801681339741">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:50:58Z</time>
      </trkpt>
      <trkpt lat="50.70725723169744" lon="6.459920285269618">
        <ele>377.94</ele>
        <time>2012-12-03T11:51:08Z</time>
      </trkpt>
      <trkpt lat="50.707182548940182" lon="6.460040146484971">
        <ele>378.89999999999998</ele>
        <time>2012-12-03T11:51:17Z</time>
      </trkpt>
      <trkpt lat="50.707112727686763" lon="6.460171323269606">
        <ele>379.38</ele>
        <time>2012-12-03T11:51:26Z</time>
      </trkpt>
      <trkpt lat="50.707046259194613" lon="6.460280623286963">
        <ele>377.94</ele>
        <time>2012-12-03T11:51:34Z</time>
      </trkpt>
      <trkpt lat="50.706973671913147" lon="6.460403082892299">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:51:43Z</time>
      </trkpt>
      <trkpt lat="50.706896726042032" lon="6.460530236363411">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:51:52Z</time>
      </trkpt>
      <trkpt lat="50.706811817362905" lon="6.46065479144454">
        <ele>378.89999999999998</ele>
        <time>2012-12-03T11:52:02Z</time>
      </trkpt>
      <trkpt lat="50.706753730773926" lon="6.460757469758391">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:52:10Z</time>
      </trkpt>
      <trkpt lat="50.706674521788955" lon="6.460875906050205">
        <ele>379.86000000000001</ele>
        <time>2012-12-03T11:52:20Z</time>
      </trkpt>
      <trkpt lat="50.706621548160911" lon="6.460960730910301">
        <ele>380.33999999999997</ele>
        <time>2012-12-03T11:52:28Z</time>
      </trkpt>
      <trkpt lat="50.706627331674099" lon="6.461066259071231">
        <ele>380.33999999999997</ele>
        <time>2012-12-03T11:52:36Z</time>
      </trkpt>
      <trkpt lat="50.706692542880774" lon="6.461008004844189">
        <ele>379.38</ele>
        <time>2012-12-03T11:52:45Z</time>
      </trkpt>
      <trkpt lat="50.706752892583609" lon="6.46094061434269">
        <ele>379.38</ele>
        <time>2012-12-03T11:52:53Z</time>
      </trkpt>
      <trkpt lat="50.70683503523469" lon="6.460886048153043">
        <ele>380.33999999999997</ele>
        <time>2012-12-03T11:53:02Z</time>
      </trkpt>
      <trkpt lat="50.706934025511146" lon="6.460806420072913">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T11:53:12Z</time>
      </trkpt>
      <trkpt lat="50.706954309716821" lon="6.46078722551465">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:53:15Z</time>
      </trkpt>
      <trkpt lat="50.706975683569908" lon="6.460768114775419">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:53:18Z</time>
      </trkpt>
      <trkpt lat="50.707055982202291" lon="6.460704244673252">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:53:27Z</time>
      </trkpt>
      <trkpt lat="50.707148099318147" lon="6.460633166134358">
        <ele>381.77999999999997</ele>
        <time>2012-12-03T11:53:38Z</time>
      </trkpt>
      <trkpt lat="50.707270391285419" lon="6.460557729005814">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:53:50Z</time>
      </trkpt>
      <trkpt lat="50.70736963301897" lon="6.46050232462585">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:54:00Z</time>
      </trkpt>
      <trkpt lat="50.707474574446678" lon="6.460417080670595">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:54:11Z</time>
      </trkpt>
      <trkpt lat="50.707582365721464" lon="6.460364107042551">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:54:21Z</time>
      </trkpt>
      <trkpt lat="50.70766962133348" lon="6.460316916927695">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:54:29Z</time>
      </trkpt>
      <trkpt lat="50.707779340445995" lon="6.460255142301321">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:54:40Z</time>
      </trkpt>
      <trkpt lat="50.707847820594907" lon="6.460224045440555">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:54:48Z</time>
      </trkpt>
      <trkpt lat="50.707848742604256" lon="6.46022723056376">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:55:00Z</time>
      </trkpt>
      <trkpt lat="50.707904482260346" lon="6.460208622738719">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:55:06Z</time>
      </trkpt>
      <trkpt lat="50.708004981279373" lon="6.46018180064857">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:55:15Z</time>
      </trkpt>
      <trkpt lat="50.708115287125111" lon="6.460154559463263">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:55:25Z</time>
      </trkpt>
      <trkpt lat="50.708258198574185" lon="6.460152883082628">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:55:38Z</time>
      </trkpt>
      <trkpt lat="50.708360122516751" lon="6.46012413315475">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:55:47Z</time>
      </trkpt>
      <trkpt lat="50.708450647071004" lon="6.460097311064601">
        <ele>385.14999999999998</ele>
        <time>2012-12-03T11:55:57Z</time>
      </trkpt>
      <trkpt lat="50.708541423082352" lon="6.46007283590734">
        <ele>383.22000000000003</ele>
        <time>2012-12-03T11:56:06Z</time>
      </trkpt>
      <trkpt lat="50.708573441952467" lon="6.460064118728042">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:56:13Z</time>
      </trkpt>
      <trkpt lat="50.708639994263649" lon="6.460047774016857">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:56:20Z</time>
      </trkpt>
      <trkpt lat="50.708714090287685" lon="6.460042661055923">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:56:29Z</time>
      </trkpt>
      <trkpt lat="50.708721969276667" lon="6.460045175626874">
        <ele>384.66000000000003</ele>
        <time>2012-12-03T11:56:30Z</time>
      </trkpt>
      <trkpt lat="50.708815595135093" lon="6.460020951926708">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:56:39Z</time>
      </trkpt>
      <trkpt lat="50.708956159651279" lon="6.459999997168779">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:56:48Z</time>
      </trkpt>
      <trkpt lat="50.709069482982159" lon="6.459993794560432">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:56:57Z</time>
      </trkpt>
      <trkpt lat="50.709193116053939" lon="6.459997901692987">
        <ele>382.74000000000001</ele>
        <time>2012-12-03T11:57:07Z</time>
      </trkpt>
      <trkpt lat="50.709277521818876" lon="6.459971414878964">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:57:15Z</time>
      </trkpt>
      <trkpt lat="50.709403166547418" lon="6.459921794012189">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:57:26Z</time>
      </trkpt>
      <trkpt lat="50.709481118246913" lon="6.459904192015529">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:57:34Z</time>
      </trkpt>
      <trkpt lat="50.709572229534388" lon="6.459881560876966">
        <ele>383.69999999999999</ele>
        <time>2012-12-03T11:57:43Z</time>
      </trkpt>
      <trkpt lat="50.709668537601829" lon="6.459856918081641">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:57:52Z</time>
      </trkpt>
      <trkpt lat="50.709786890074611" lon="6.4598383102566">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:58:03Z</time>
      </trkpt>
      <trkpt lat="50.709896525368094" lon="6.459812493994832">
        <ele>384.18000000000001</ele>
        <time>2012-12-03T11:58:13Z</time>
      </trkpt>
      <trkpt lat="50.709987301379442" lon="6.459766728803515">
        <ele>382.25999999999999</ele>
        <time>2012-12-03T11:58:23Z</time>
      </trkpt>
      <trkpt lat="50.710031138733029" lon="6.459734374657273">
        <ele>380.81999999999999</ele>
        <time>2012-12-03T11:58:28Z</time>
      </trkpt>
      <trkpt lat="50.710133481770754" lon="6.459662206470966">
        <ele>380.33999999999997</ele>
        <time>2012-12-03T11:58:38Z</time>
      </trkpt>
      <trkpt lat="50.710229957476258" lon="6.459589619189501">
        <ele>380.81999999999999</ele>
        <time>2012-12-03T11:58:47Z</time>
      </trkpt>
      <trkpt lat="50.710324589163065" lon="6.459513260051608">
        <ele>379.86000000000001</ele>
        <time>2012-12-03T11:58:57Z</time>
      </trkpt>
      <trkpt lat="50.710417125374079" lon="6.459452407434583">
        <ele>379.86000000000001</ele>
        <time>2012-12-03T11:59:06Z</time>
      </trkpt>
      <trkpt lat="50.710479570552707" lon="6.459402283653617">
        <ele>379.38</ele>
        <time>2012-12-03T11:59:14Z</time>
      </trkpt>
      <trkpt lat="50.710557522252202" lon="6.459331875666976">
        <ele>378.89999999999998</ele>
        <time>2012-12-03T11:59:22Z</time>
      </trkpt>
      <trkpt lat="50.71063119918108" lon="6.459245877340436">
        <ele>378.42000000000002</ele>
        <time>2012-12-03T11:59:31Z</time>
      </trkpt>
      <trkpt lat="50.710704373195767" lon="6.45916448906064">
        <ele>377.94</ele>
        <time>2012-12-03T11:59:40Z</time>
      </trkpt>
      <trkpt lat="50.710774194449186" lon="6.459050076082349">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:59:48Z</time>
      </trkpt>
      <trkpt lat="50.710841417312622" lon="6.458964245393872">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T11:59:56Z</time>
      </trkpt>
      <trkpt lat="50.710921967402101" lon="6.45884639583528">
        <ele>376.49000000000001</ele>
        <time>2012-12-03T12:00:06Z</time>
      </trkpt>
      <trkpt lat="50.710964296013117" lon="6.458773305639625">
        <ele>375.05000000000001</ele>
        <time>2012-12-03T12:00:12Z</time>
      </trkpt>
      <trkpt lat="50.711048617959023" lon="6.458650175482035">
        <ele>375.52999999999997</ele>
        <time>2012-12-03T12:00:22Z</time>
      </trkpt>
      <trkpt lat="50.71111642755568" lon="6.458516987040639">
        <ele>374.08999999999997</ele>
        <time>2012-12-03T12:00:32Z</time>
      </trkpt>
      <trkpt lat="50.711169820278883" lon="6.458380194380879">
        <ele>374.56999999999999</ele>
        <time>2012-12-03T12:00:41Z</time>
      </trkpt>
      <trkpt lat="50.711238300427794" lon="6.458223117515445">
        <ele>375.05000000000001</ele>
        <time>2012-12-03T12:00:52Z</time>
      </trkpt>
      <trkpt lat="50.71130502037704" lon="6.45810660906136">
        <ele>373.61000000000001</ele>
        <time>2012-12-03T12:01:01Z</time>
      </trkpt>
      <trkpt lat="50.711366208270192" lon="6.457967301830649">
        <ele>373.61000000000001</ele>
        <time>2012-12-03T12:01:10Z</time>
      </trkpt>
      <trkpt lat="50.711416080594063" lon="6.457849116995931">
        <ele>373.61000000000001</ele>
        <time>2012-12-03T12:01:18Z</time>
      </trkpt>
      <trkpt lat="50.711496379226446" lon="6.457697991281748">
        <ele>370.73000000000002</ele>
        <time>2012-12-03T12:01:29Z</time>
      </trkpt>
      <trkpt lat="50.711532756686211" lon="6.457660272717476">
        <ele>372.17000000000002</ele>
        <time>2012-12-03T12:01:35Z</time>
      </trkpt>
      <trkpt lat="50.711582042276859" lon="6.457601683214307">
        <ele>371.69</ele>
        <time>2012-12-03T12:01:44Z</time>
      </trkpt>
      <trkpt lat="50.711623532697558" lon="6.457545356824994">
        <ele>370.73000000000002</ele>
        <time>2012-12-03T12:01:51Z</time>
      </trkpt>
      <trkpt lat="50.71162604726851" lon="6.457513840869069">
        <ele>370.24000000000001</ele>
        <time>2012-12-03T12:01:53Z</time>
      </trkpt>
      <trkpt lat="50.711661502718925" lon="6.457395069301128">
        <ele>368.31999999999999</ele>
        <time>2012-12-03T12:02:03Z</time>
      </trkpt>
      <trkpt lat="50.711647840216756" lon="6.457341425120831">
        <ele>369.75999999999999</ele>
        <time>2012-12-03T12:02:10Z</time>
      </trkpt>
      <trkpt lat="50.711679859086871" lon="6.457302533090115">
        <ele>369.75999999999999</ele>
        <time>2012-12-03T12:02:16Z</time>
      </trkpt>
      <trkpt lat="50.711691761389375" lon="6.457310160622001">
        <ele>369.75999999999999</ele>
        <time>2012-12-03T12:02:30Z</time>
      </trkpt>
      <trkpt lat="50.711719170212746" lon="6.457298761233687">
        <ele>369.75999999999999</ele>
        <time>2012-12-03T12:02:41Z</time>
      </trkpt>
      <trkpt lat="50.711725791916251" lon="6.457290211692452">
        <ele>367.83999999999997</ele>
        <time>2012-12-03T12:02:42Z</time>
      </trkpt>
      <trkpt lat="50.711749428883195" lon="6.457256600260735">
        <ele>369.75999999999999</ele>
        <time>2012-12-03T12:02:45Z</time>
      </trkpt>
      <trkpt lat="50.711832577362657" lon="6.45712835714221">
        <ele>367.36000000000001</ele>
        <time>2012-12-03T12:02:56Z</time>
      </trkpt>
      <trkpt lat="50.711886808276176" lon="6.457037329673767">
        <ele>367.36000000000001</ele>
        <time>2012-12-03T12:03:03Z</time>
      </trkpt>
      <trkpt lat="50.711929639801383" lon="6.456995671615005">
        <ele>368.80000000000001</ele>
        <time>2012-12-03T12:03:08Z</time>
      </trkpt>
      <trkpt lat="50.71197590790689" lon="6.456899279728532">
        <ele>369.27999999999997</ele>
        <time>2012-12-03T12:03:15Z</time>
      </trkpt>
      <trkpt lat="50.712004154920578" lon="6.456847731024027">
        <ele>367.83999999999997</ele>
        <time>2012-12-03T12:03:22Z</time>
      </trkpt>
      <trkpt lat="50.71206483989954" lon="6.456768438220024">
        <ele>366.88</ele>
        <time>2012-12-03T12:03:31Z</time>
      </trkpt>
      <trkpt lat="50.712130470201373" lon="6.456685960292816">
        <ele>365.92000000000002</ele>
        <time>2012-12-03T12:03:40Z</time>
      </trkpt>
      <trkpt lat="50.712195346131921" lon="6.456630052998662">
        <ele>364</ele>
        <time>2012-12-03T12:03:48Z</time>
      </trkpt>
      <trkpt lat="50.712225437164307" lon="6.456591077148914">
        <ele>364.48000000000002</ele>
        <time>2012-12-03T12:03:52Z</time>
      </trkpt>
      <trkpt lat="50.712270699441433" lon="6.456551933661103">
        <ele>363.51999999999998</ele>
        <time>2012-12-03T12:03:57Z</time>
      </trkpt>
      <trkpt lat="50.712355943396688" lon="6.456449422985315">
        <ele>362.55000000000001</ele>
        <time>2012-12-03T12:04:07Z</time>
      </trkpt>
      <trkpt lat="50.712394500151277" lon="6.456355042755604">
        <ele>361.58999999999997</ele>
        <time>2012-12-03T12:04:16Z</time>
      </trkpt>
      <trkpt lat="50.712418472394347" lon="6.456257645040751">
        <ele>361.58999999999997</ele>
        <time>2012-12-03T12:04:24Z</time>
      </trkpt>
      <trkpt lat="50.71244060061872" lon="6.456157062202692">
        <ele>361.11000000000001</ele>
        <time>2012-12-03T12:04:31Z</time>
      </trkpt>
      <trkpt lat="50.712519139051437" lon="6.456009792163968">
        <ele>360.14999999999998</ele>
        <time>2012-12-03T12:04:44Z</time>
      </trkpt>
      <trkpt lat="50.712573202326894" lon="6.455978779122233">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T12:04:51Z</time>
      </trkpt>
      <trkpt lat="50.712662972509861" lon="6.455893870443106">
        <ele>357.75</ele>
        <time>2012-12-03T12:05:03Z</time>
      </trkpt>
      <trkpt lat="50.712672779336572" lon="6.455890685319901">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T12:05:04Z</time>
      </trkpt>
      <trkpt lat="50.712761376053095" lon="6.455803513526917">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T12:05:15Z</time>
      </trkpt>
      <trkpt lat="50.71276506409049" lon="6.455801334232092">
        <ele>358.70999999999998</ele>
        <time>2012-12-03T12:05:16Z</time>
      </trkpt>
      <trkpt lat="50.712766237556934" lon="6.455791275948286">
        <ele>357.26999999999998</ele>
        <time>2012-12-03T12:05:20Z</time>
      </trkpt>
      <trkpt lat="50.712828934192657" lon="6.455741487443447">
        <ele>357.75</ele>
        <time>2012-12-03T12:05:31Z</time>
      </trkpt>
      <trkpt lat="50.712870424613357" lon="6.455661188811064">
        <ele>357.75</ele>
        <time>2012-12-03T12:05:39Z</time>
      </trkpt>
      <trkpt lat="50.712888445705175" lon="6.455605030059815">
        <ele>356.31</ele>
        <time>2012-12-03T12:05:44Z</time>
      </trkpt>
      <trkpt lat="50.712897162884474" lon="6.455571167171001">
        <ele>356.79000000000002</ele>
        <time>2012-12-03T12:05:46Z</time>
      </trkpt>
      <trkpt lat="50.712920716032386" lon="6.455437140539289">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T12:05:54Z</time>
      </trkpt>
      <trkpt lat="50.712922979146242" lon="6.455422639846802">
        <ele>355.33999999999997</ele>
        <time>2012-12-03T12:05:55Z</time>
      </trkpt>
      <trkpt lat="50.712910322472453" lon="6.455302946269512">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T12:06:03Z</time>
      </trkpt>
      <trkpt lat="50.71290235966444" lon="6.455266820266843">
        <ele>351.98000000000002</ele>
        <time>2012-12-03T12:06:06Z</time>
      </trkpt>
      <trkpt lat="50.712889200076461" lon="6.455228431150317">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T12:06:10Z</time>
      </trkpt>
      <trkpt lat="50.712884590029716" lon="6.455216193571687">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T12:06:11Z</time>
      </trkpt>
      <trkpt lat="50.712895486503839" lon="6.455152407288551">
        <ele>355.82999999999998</ele>
        <time>2012-12-03T12:06:15Z</time>
      </trkpt>
      <trkpt lat="50.712917195633054" lon="6.455094488337636">
        <ele>353.42000000000002</ele>
        <time>2012-12-03T12:06:19Z</time>
      </trkpt>
      <trkpt lat="50.712972935289145" lon="6.45506045781076">
        <ele>352.94</ele>
        <time>2012-12-03T12:06:29Z</time>
      </trkpt>
      <trkpt lat="50.712990537285805" lon="6.455054339021444">
        <ele>353.89999999999998</ele>
        <time>2012-12-03T12:06:37Z</time>
      </trkpt>
      <trkpt lat="50.713038733229041" lon="6.45510203205049">
        <ele>354.38</ele>
        <time>2012-12-03T12:06:45Z</time>
      </trkpt>
      <trkpt lat="50.713133616372943" lon="6.455161543563008">
        <ele>352.45999999999998</ele>
        <time>2012-12-03T12:06:56Z</time>
      </trkpt>
      <trkpt lat="50.713222129270434" lon="6.455178558826447">
        <ele>351.98000000000002</ele>
        <time>2012-12-03T12:07:05Z</time>
      </trkpt>
      <trkpt lat="50.713293878361583" lon="6.455215606838465">
        <ele>351.5</ele>
        <time>2012-12-03T12:07:13Z</time>
      </trkpt>
      <trkpt lat="50.71337191388011" lon="6.455288780853152">
        <ele>349.10000000000002</ele>
        <time>2012-12-03T12:07:24Z</time>
      </trkpt>
      <trkpt lat="50.713422205299139" lon="6.455344101414084">
        <ele>347.17000000000002</ele>
        <time>2012-12-03T12:07:32Z</time>
      </trkpt>
      <trkpt lat="50.713500827550888" lon="6.455457927659154">
        <ele>346.69</ele>
        <time>2012-12-03T12:07:42Z</time>
      </trkpt>
      <trkpt lat="50.713542653247714" lon="6.455549793317914">
        <ele>344.76999999999998</ele>
        <time>2012-12-03T12:07:50Z</time>
      </trkpt>
      <trkpt lat="50.713594537228346" lon="6.455684490501881">
        <ele>343.32999999999998</ele>
        <time>2012-12-03T12:07:59Z</time>
      </trkpt>
      <trkpt lat="50.713646505028009" lon="6.455881716683507">
        <ele>341.41000000000003</ele>
        <time>2012-12-03T12:08:10Z</time>
      </trkpt>
      <trkpt lat="50.713679445907474" lon="6.455999566242099">
        <ele>341.41000000000003</ele>
        <time>2012-12-03T12:08:19Z</time>
      </trkpt>
      <trkpt lat="50.713719930499792" lon="6.456140382215381">
        <ele>338.51999999999998</ele>
        <time>2012-12-03T12:08:30Z</time>
      </trkpt>
      <trkpt lat="50.713744657114148" lon="6.456197798252106">
        <ele>335.63999999999999</ele>
        <time>2012-12-03T12:08:35Z</time>
      </trkpt>
      <trkpt lat="50.713775167241693" lon="6.456299470737577">
        <ele>338.51999999999998</ele>
        <time>2012-12-03T12:08:43Z</time>
      </trkpt>
      <trkpt lat="50.713813053444028" lon="6.456426791846752">
        <ele>335.16000000000003</ele>
        <time>2012-12-03T12:08:53Z</time>
      </trkpt>
      <trkpt lat="50.713840881362557" lon="6.456557884812355">
        <ele>334.19999999999999</ele>
        <time>2012-12-03T12:09:03Z</time>
      </trkpt>
      <trkpt lat="50.713864769786596" lon="6.456632651388645">
        <ele>332.75</ele>
        <time>2012-12-03T12:09:08Z</time>
      </trkpt>
      <trkpt lat="50.713887820020318" lon="6.456765923649073">
        <ele>328.91000000000003</ele>
        <time>2012-12-03T12:09:18Z</time>
      </trkpt>
      <trkpt lat="50.713898213580251" lon="6.456845300272107">
        <ele>326.99000000000001</ele>
        <time>2012-12-03T12:09:23Z</time>
      </trkpt>
      <trkpt lat="50.713935345411301" lon="6.456991983577609">
        <ele>327.47000000000003</ele>
        <time>2012-12-03T12:09:32Z</time>
      </trkpt>
      <trkpt lat="50.713972812518477" lon="6.457168674096465">
        <ele>325.06</ele>
        <time>2012-12-03T12:09:44Z</time>
      </trkpt>
      <trkpt lat="50.713998209685087" lon="6.457333965227008">
        <ele>324.57999999999998</ele>
        <time>2012-12-03T12:09:55Z</time>
      </trkpt>
      <trkpt lat="50.714015811681747" lon="6.457443097606301">
        <ele>322.18000000000001</ele>
        <time>2012-12-03T12:10:05Z</time>
      </trkpt>
      <trkpt lat="50.714039700105786" lon="6.457549715414643">
        <ele>320.25999999999999</ele>
        <time>2012-12-03T12:10:14Z</time>
      </trkpt>
      <trkpt lat="50.714028971269727" lon="6.457708468660712">
        <ele>317.37</ele>
        <time>2012-12-03T12:10:25Z</time>
      </trkpt>
      <trkpt lat="50.714021427556872" lon="6.457851715385914">
        <ele>316.88999999999999</ele>
        <time>2012-12-03T12:10:34Z</time>
      </trkpt>
      <trkpt lat="50.714025367051363" lon="6.458010971546173">
        <ele>314.49000000000001</ele>
        <time>2012-12-03T12:10:43Z</time>
      </trkpt>
      <trkpt lat="50.714027797803283" lon="6.458090683445334">
        <ele>314.00999999999999</ele>
        <time>2012-12-03T12:10:47Z</time>
      </trkpt>
      <trkpt lat="50.714021846652031" lon="6.458315402269363">
        <ele>312.56999999999999</ele>
        <time>2012-12-03T12:10:57Z</time>
      </trkpt>
      <trkpt lat="50.714014722034335" lon="6.45845596678555">
        <ele>310.16000000000003</ele>
        <time>2012-12-03T12:11:05Z</time>
      </trkpt>
      <trkpt lat="50.714008435606956" lon="6.458584293723106">
        <ele>309.68000000000001</ele>
        <time>2012-12-03T12:11:13Z</time>
      </trkpt>
      <trkpt lat="50.714003406465054" lon="6.458741035312414">
        <ele>308.24000000000001</ele>
        <time>2012-12-03T12:11:23Z</time>
      </trkpt>
      <trkpt lat="50.714045902714133" lon="6.458926191553474">
        <ele>307.75999999999999</ele>
        <time>2012-12-03T12:11:32Z</time>
      </trkpt>
      <trkpt lat="50.714058894664049" lon="6.458966005593538">
        <ele>307.27999999999997</ele>
        <time>2012-12-03T12:11:35Z</time>
      </trkpt>
      <trkpt lat="50.714110527187586" lon="6.459078574553132">
        <ele>307.75999999999999</ele>
        <time>2012-12-03T12:11:44Z</time>
      </trkpt>
      <trkpt lat="50.714145312085748" lon="6.459072707220912">
        <ele>307.27999999999997</ele>
        <time>2012-12-03T12:11:52Z</time>
      </trkpt>
      <trkpt lat="50.71411807090044" lon="6.459095003083348">
        <ele>307.27999999999997</ele>
        <time>2012-12-03T12:12:07Z</time>
      </trkpt>
      <trkpt lat="50.714126201346517" lon="6.459098355844617">
        <ele>307.75999999999999</ele>
        <time>2012-12-03T12:12:21Z</time>
      </trkpt>
      <trkpt lat="50.714156711474061" lon="6.45918351598084">
        <ele>307.75999999999999</ele>
        <time>2012-12-03T12:12:25Z</time>
      </trkpt>
      <trkpt lat="50.714222760871053" lon="6.459328522905707">
        <ele>307.27999999999997</ele>
        <time>2012-12-03T12:12:34Z</time>
      </trkpt>
      <trkpt lat="50.714301383122802" lon="6.459480570629239">
        <ele>306.31999999999999</ele>
        <time>2012-12-03T12:12:45Z</time>
      </trkpt>
      <trkpt lat="50.714358631521463" lon="6.459595989435911">
        <ele>306.80000000000001</ele>
        <time>2012-12-03T12:12:55Z</time>
      </trkpt>
      <trkpt lat="50.714347399771214" lon="6.459519881755114">
        <ele>305.83999999999997</ele>
        <time>2012-12-03T12:13:03Z</time>
      </trkpt>
      <trkpt lat="50.714326947927475" lon="6.459328942000866">
        <ele>306.80000000000001</ele>
        <time>2012-12-03T12:13:15Z</time>
      </trkpt>
      <trkpt lat="50.714324852451682" lon="6.459138337522745">
        <ele>305.36000000000001</ele>
        <time>2012-12-03T12:13:26Z</time>
      </trkpt>
      <trkpt lat="50.71429593488574" lon="6.459088968113065">
        <ele>306.31999999999999</ele>
        <time>2012-12-03T12:13:35Z</time>
      </trkpt>
      <trkpt lat="50.714277075603604" lon="6.459119142964482">
        <ele>305.83999999999997</ele>
        <time>2012-12-03T12:13:38Z</time>
      </trkpt>
      <trkpt lat="50.714175906032324" lon="6.459177397191525">
        <ele>307.75999999999999</ele>
        <time>2012-12-03T12:13:48Z</time>
      </trkpt>
      <trkpt lat="50.714144473895431" lon="6.459111347794533">
        <ele>307.75999999999999</ele>
        <time>2012-12-03T12:13:54Z</time>
      </trkpt>
      <trkpt lat="50.714198620989919" lon="6.458955695852637">
        <ele>305.83999999999997</ele>
        <time>2012-12-03T12:14:04Z</time>
      </trkpt>
      <trkpt lat="50.714277410879731" lon="6.458804486319423">
        <ele>303.91000000000003</ele>
        <time>2012-12-03T12:14:16Z</time>
      </trkpt>
      <trkpt lat="50.714304400607944" lon="6.458686050027609">
        <ele>301.99000000000001</ele>
        <time>2012-12-03T12:14:24Z</time>
      </trkpt>
      <trkpt lat="50.714401546865702" lon="6.45859275944531">
        <ele>298.63</ele>
        <time>2012-12-03T12:14:35Z</time>
      </trkpt>
      <trkpt lat="50.714431302621961" lon="6.458558645099402">
        <ele>297.67000000000002</ele>
        <time>2012-12-03T12:14:43Z</time>
      </trkpt>
      <trkpt lat="50.714456113055348" lon="6.458502318710089">
        <ele>296.69999999999999</ele>
        <time>2012-12-03T12:14:51Z</time>
      </trkpt>
      <trkpt lat="50.714534567669034" lon="6.45840366370976">
        <ele>294.30000000000001</ele>
        <time>2012-12-03T12:15:02Z</time>
      </trkpt>
      <trkpt lat="50.714593576267362" lon="6.458369633182883">
        <ele>292.86000000000001</ele>
        <time>2012-12-03T12:15:13Z</time>
      </trkpt>
      <trkpt lat="50.714584020897746" lon="6.458407016471028">
        <ele>290.45999999999998</ele>
        <time>2012-12-03T12:21:12Z</time>
      </trkpt>
      <trkpt lat="50.714588463306427" lon="6.458403076976538">
        <ele>291.42000000000002</ele>
        <time>2012-12-03T12:21:16Z</time>
      </trkpt>
      <trkpt lat="50.714558288455009" lon="6.458450183272362">
        <ele>292.38</ele>
        <time>2012-12-03T12:21:27Z</time>
      </trkpt>
      <trkpt lat="50.714551834389567" lon="6.458469210192561">
        <ele>294.30000000000001</ele>
        <time>2012-12-03T12:21:36Z</time>
      </trkpt>
      <trkpt lat="50.714597934857011" lon="6.458478262647986">
        <ele>293.81999999999999</ele>
        <time>2012-12-03T12:21:44Z</time>
      </trkpt>
      <trkpt lat="50.714643364772201" lon="6.45847549661994">
        <ele>293.81999999999999</ele>
        <time>2012-12-03T12:21:54Z</time>
      </trkpt>
      <trkpt lat="50.714620733633637" lon="6.458446746692061">
        <ele>293.81999999999999</ele>
        <time>2012-12-03T12:22:02Z</time>
      </trkpt>
      <trkpt lat="50.71463456377387" lon="6.458404920995235">
        <ele>293.81999999999999</ele>
        <time>2012-12-03T12:22:11Z</time>
      </trkpt>
      <trkpt lat="50.714677143841982" lon="6.458411542698741">
        <ele>291.89999999999998</ele>
        <time>2012-12-03T12:22:19Z</time>
      </trkpt>
      <trkpt lat="50.71471905335784" lon="6.458441046997905">
        <ele>292.86000000000001</ele>
        <time>2012-12-03T12:22:29Z</time>
      </trkpt>
      <trkpt lat="50.714746210724115" lon="6.458438197150827">
        <ele>292.86000000000001</ele>
        <time>2012-12-03T12:22:40Z</time>
      </trkpt>
      <trkpt lat="50.714798094704747" lon="6.458408944308758">
        <ele>290.94</ele>
        <time>2012-12-03T12:22:48Z</time>
      </trkpt>
      <trkpt lat="50.714890044182539" lon="6.458431156352162">
        <ele>290.45999999999998</ele>
        <time>2012-12-03T12:22:57Z</time>
      </trkpt>
      <trkpt lat="50.714965229853988" lon="6.458456385880709">
        <ele>289.97000000000003</ele>
        <time>2012-12-03T12:23:04Z</time>
      </trkpt>
      <trkpt lat="50.715003870427608" lon="6.458451608195901">
        <ele>288.05000000000001</ele>
        <time>2012-12-03T12:23:10Z</time>
      </trkpt>
      <trkpt lat="50.715073775500059" lon="6.458442388102412">
        <ele>288.05000000000001</ele>
        <time>2012-12-03T12:23:17Z</time>
      </trkpt>
      <trkpt lat="50.715118031948805" lon="6.458405340090394">
        <ele>288.52999999999997</ele>
        <time>2012-12-03T12:23:22Z</time>
      </trkpt>
      <trkpt lat="50.715219285339117" lon="6.458358401432633">
        <ele>286.13</ele>
        <time>2012-12-03T12:23:30Z</time>
      </trkpt>
      <trkpt lat="50.715300505980849" lon="6.458348175510764">
        <ele>285.64999999999998</ele>
        <time>2012-12-03T12:23:38Z</time>
      </trkpt>
      <trkpt lat="50.715392371639609" lon="6.458372147753835">
        <ele>285.17000000000002</ele>
        <time>2012-12-03T12:23:47Z</time>
      </trkpt>
      <trkpt lat="50.715464036911726" lon="6.458434676751494">
        <ele>283.25</ele>
        <time>2012-12-03T12:23:55Z</time>
      </trkpt>
      <trkpt lat="50.71553167887032" lon="6.45842076279223">
        <ele>282.27999999999997</ele>
        <time>2012-12-03T12:24:00Z</time>
      </trkpt>
      <trkpt lat="50.715588759630919" lon="6.458407351747155">
        <ele>282.27999999999997</ele>
        <time>2012-12-03T12:24:07Z</time>
      </trkpt>
      <trkpt lat="50.715616000816226" lon="6.458385977894068">
        <ele>281.31999999999999</ele>
        <time>2012-12-03T12:24:18Z</time>
      </trkpt>
      <trkpt lat="50.715698227286339" lon="6.458289586007595">
        <ele>279.39999999999998</ele>
        <time>2012-12-03T12:24:27Z</time>
      </trkpt>
      <trkpt lat="50.71571541018784" lon="6.458278438076377">
        <ele>279.88</ele>
        <time>2012-12-03T12:24:31Z</time>
      </trkpt>
      <trkpt lat="50.715757319703698" lon="6.458225296810269">
        <ele>279.88</ele>
        <time>2012-12-03T12:24:36Z</time>
      </trkpt>
      <trkpt lat="50.715821608901024" lon="6.458118343725801">
        <ele>278.92000000000002</ele>
        <time>2012-12-03T12:24:44Z</time>
      </trkpt>
      <trkpt lat="50.715884556993842" lon="6.45804894156754">
        <ele>279.39999999999998</ele>
        <time>2012-12-03T12:24:51Z</time>
      </trkpt>
      <trkpt lat="50.71596896275878" lon="6.458008037880063">
        <ele>278.44</ele>
        <time>2012-12-03T12:24:59Z</time>
      </trkpt>
      <trkpt lat="50.71605060249567" lon="6.458017760887742">
        <ele>277.48000000000002</ele>
        <time>2012-12-03T12:25:07Z</time>
      </trkpt>
      <trkpt lat="50.716085387393832" lon="6.458000661805272">
        <ele>276.04000000000002</ele>
        <time>2012-12-03T12:25:10Z</time>
      </trkpt>
      <trkpt lat="50.716138025745749" lon="6.457962691783905">
        <ele>274.11000000000001</ele>
        <time>2012-12-03T12:25:16Z</time>
      </trkpt>
      <trkpt lat="50.716197704896331" lon="6.457952465862036">
        <ele>272.19</ele>
        <time>2012-12-03T12:25:25Z</time>
      </trkpt>
      <trkpt lat="50.716230310499668" lon="6.45795070566237">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:25:36Z</time>
      </trkpt>
      <trkpt lat="50.716329384595156" lon="6.457948610186577">
        <ele>269.31</ele>
        <time>2012-12-03T12:25:46Z</time>
      </trkpt>
      <trkpt lat="50.71641949005425" lon="6.458057323470712">
        <ele>272.19</ele>
        <time>2012-12-03T12:25:55Z</time>
      </trkpt>
      <trkpt lat="50.716441953554749" lon="6.458082720637322">
        <ele>273.14999999999998</ele>
        <time>2012-12-03T12:25:57Z</time>
      </trkpt>
      <trkpt lat="50.716528873890638" lon="6.458133431151509">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:26:06Z</time>
      </trkpt>
      <trkpt lat="50.716603472828865" lon="6.458221022039652">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:26:15Z</time>
      </trkpt>
      <trkpt lat="50.716672539710999" lon="6.458329819142819">
        <ele>272.19</ele>
        <time>2012-12-03T12:26:24Z</time>
      </trkpt>
      <trkpt lat="50.716738421469927" lon="6.458416990935803">
        <ele>272.67000000000002</ele>
        <time>2012-12-03T12:26:32Z</time>
      </trkpt>
      <trkpt lat="50.716795502230525" lon="6.458499720320106">
        <ele>273.63</ele>
        <time>2012-12-03T12:26:40Z</time>
      </trkpt>
      <trkpt lat="50.716862138360739" lon="6.458608936518431">
        <ele>274.58999999999997</ele>
        <time>2012-12-03T12:26:48Z</time>
      </trkpt>
      <trkpt lat="50.716939838603139" lon="6.458738939836621">
        <ele>275.06999999999999</ele>
        <time>2012-12-03T12:26:58Z</time>
      </trkpt>
      <trkpt lat="50.716996332630515" lon="6.458766600117087">
        <ele>275.56</ele>
        <time>2012-12-03T12:27:06Z</time>
      </trkpt>
      <trkpt lat="50.717029189690948" lon="6.458849245682359">
        <ele>275.56</ele>
        <time>2012-12-03T12:27:14Z</time>
      </trkpt>
      <trkpt lat="50.717070009559393" lon="6.458947816863656">
        <ele>276.04000000000002</ele>
        <time>2012-12-03T12:27:21Z</time>
      </trkpt>
      <trkpt lat="50.717145614326" lon="6.45903205499053">
        <ele>277.48000000000002</ele>
        <time>2012-12-03T12:27:31Z</time>
      </trkpt>
      <trkpt lat="50.717257261276245" lon="6.459079161286354">
        <ele>278.44</ele>
        <time>2012-12-03T12:27:41Z</time>
      </trkpt>
      <trkpt lat="50.717339068651199" lon="6.459126770496368">
        <ele>280.36000000000001</ele>
        <time>2012-12-03T12:27:50Z</time>
      </trkpt>
      <trkpt lat="50.717386594042182" lon="6.459190808236599">
        <ele>278.44</ele>
        <time>2012-12-03T12:27:59Z</time>
      </trkpt>
      <trkpt lat="50.717427916824818" lon="6.459274627268314">
        <ele>279.39999999999998</ele>
        <time>2012-12-03T12:28:10Z</time>
      </trkpt>
      <trkpt lat="50.717474520206451" lon="6.459343945607543">
        <ele>277.95999999999998</ele>
        <time>2012-12-03T12:28:20Z</time>
      </trkpt>
      <trkpt lat="50.717493044212461" lon="6.45940094254911">
        <ele>278.92000000000002</ele>
        <time>2012-12-03T12:28:27Z</time>
      </trkpt>
      <trkpt lat="50.717525398358703" lon="6.459543267264962">
        <ele>277.48000000000002</ele>
        <time>2012-12-03T12:28:36Z</time>
      </trkpt>
      <trkpt lat="50.717550376430154" lon="6.459616776555777">
        <ele>276.04000000000002</ele>
        <time>2012-12-03T12:28:43Z</time>
      </trkpt>
      <trkpt lat="50.717619694769382" lon="6.459727417677641">
        <ele>275.06999999999999</ele>
        <time>2012-12-03T12:28:52Z</time>
      </trkpt>
      <trkpt lat="50.717701921239495" lon="6.45981777459383">
        <ele>273.14999999999998</ele>
        <time>2012-12-03T12:29:00Z</time>
      </trkpt>
      <trkpt lat="50.717729749158025" lon="6.459858845919371">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:29:04Z</time>
      </trkpt>
      <trkpt lat="50.717802001163363" lon="6.459960518404841">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:29:14Z</time>
      </trkpt>
      <trkpt lat="50.717824632301927" lon="6.460075099021196">
        <ele>273.14999999999998</ele>
        <time>2012-12-03T12:29:21Z</time>
      </trkpt>
      <trkpt lat="50.717846257612109" lon="6.460176268592477">
        <ele>273.14999999999998</ele>
        <time>2012-12-03T12:29:29Z</time>
      </trkpt>
      <trkpt lat="50.717855729162693" lon="6.460194122046232">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:29:45Z</time>
      </trkpt>
      <trkpt lat="50.717866625636816" lon="6.460166545584798">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:29:51Z</time>
      </trkpt>
      <trkpt lat="50.717866122722626" lon="6.460150871425867">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:29:52Z</time>
      </trkpt>
      <trkpt lat="50.717854890972376" lon="6.460037128999829">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:30:00Z</time>
      </trkpt>
      <trkpt lat="50.71785950101912" lon="6.460019862279296">
        <ele>272.19</ele>
        <time>2012-12-03T12:30:01Z</time>
      </trkpt>
      <trkpt lat="50.717920018360019" lon="6.4600093010813">
        <ele>271.23000000000002</ele>
        <time>2012-12-03T12:30:08Z</time>
      </trkpt>
      <trkpt lat="50.717928903177381" lon="6.46001223474741">
        <ele>271.23000000000002</ele>
        <time>2012-12-03T12:30:09Z</time>
      </trkpt>
      <trkpt lat="50.718028228729963" lon="6.460054479539394">
        <ele>271.23000000000002</ele>
        <time>2012-12-03T12:30:18Z</time>
      </trkpt>
      <trkpt lat="50.718045076355338" lon="6.460082642734051">
        <ele>269.31</ele>
        <time>2012-12-03T12:30:25Z</time>
      </trkpt>
      <trkpt lat="50.718058990314603" lon="6.460066214203835">
        <ele>267.38</ele>
        <time>2012-12-03T12:30:31Z</time>
      </trkpt>
      <trkpt lat="50.71809059008956" lon="6.460023717954755">
        <ele>267.38</ele>
        <time>2012-12-03T12:30:36Z</time>
      </trkpt>
      <trkpt lat="50.718148928135633" lon="6.459901928901672">
        <ele>267.86000000000001</ele>
        <time>2012-12-03T12:30:46Z</time>
      </trkpt>
      <trkpt lat="50.718140043318272" lon="6.459879884496331">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:31:00Z</time>
      </trkpt>
      <trkpt lat="50.718150688335299" lon="6.459907963871956">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:31:13Z</time>
      </trkpt>
      <trkpt lat="50.718145743012428" lon="6.459900923073292">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:31:19Z</time>
      </trkpt>
      <trkpt lat="50.718150604516268" lon="6.459876112639904">
        <ele>269.31</ele>
        <time>2012-12-03T12:31:29Z</time>
      </trkpt>
      <trkpt lat="50.718143563717604" lon="6.459854738786817">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:31:42Z</time>
      </trkpt>
      <trkpt lat="50.718139205127954" lon="6.459826827049255">
        <ele>267.86000000000001</ele>
        <time>2012-12-03T12:31:56Z</time>
      </trkpt>
      <trkpt lat="50.718160243704915" lon="6.459834203124046">
        <ele>267.86000000000001</ele>
        <time>2012-12-03T12:32:11Z</time>
      </trkpt>
      <trkpt lat="50.718156974762678" lon="6.459855828434229">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:32:25Z</time>
      </trkpt>
      <trkpt lat="50.718157226219773" lon="6.459872843697667">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:32:39Z</time>
      </trkpt>
      <trkpt lat="50.718164350837469" lon="6.459885751828551">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:32:49Z</time>
      </trkpt>
      <trkpt lat="50.718219252303243" lon="6.459954399615526">
        <ele>269.31</ele>
        <time>2012-12-03T12:32:56Z</time>
      </trkpt>
      <trkpt lat="50.718254959210753" lon="6.459992956370115">
        <ele>267.38</ele>
        <time>2012-12-03T12:33:03Z</time>
      </trkpt>
      <trkpt lat="50.718289744108915" lon="6.4600317645818">
        <ele>267.38</ele>
        <time>2012-12-03T12:33:09Z</time>
      </trkpt>
      <trkpt lat="50.718306759372354" lon="6.460041822865605">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:33:11Z</time>
      </trkpt>
      <trkpt lat="50.718314303085208" lon="6.460038553923369">
        <ele>266.89999999999998</ele>
        <time>2012-12-03T12:33:14Z</time>
      </trkpt>
      <trkpt lat="50.718316733837128" lon="6.460032518953085">
        <ele>267.86000000000001</ele>
        <time>2012-12-03T12:33:16Z</time>
      </trkpt>
      <trkpt lat="50.71831539273262" lon="6.460013911128044">
        <ele>269.79000000000002</ele>
        <time>2012-12-03T12:33:26Z</time>
      </trkpt>
      <trkpt lat="50.718316230922937" lon="6.45998440682888">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:33:43Z</time>
      </trkpt>
      <trkpt lat="50.718311537057161" lon="6.459968481212854">
        <ele>269.31</ele>
        <time>2012-12-03T12:33:51Z</time>
      </trkpt>
      <trkpt lat="50.718303574249148" lon="6.459959093481302">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:34:00Z</time>
      </trkpt>
      <trkpt lat="50.718302149325609" lon="6.459936127066612">
        <ele>270.75</ele>
        <time>2012-12-03T12:34:16Z</time>
      </trkpt>
      <trkpt lat="50.718307346105576" lon="6.459976024925709">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:34:26Z</time>
      </trkpt>
      <trkpt lat="50.7183095254004" lon="6.460035117343068">
        <ele>269.79000000000002</ele>
        <time>2012-12-03T12:34:39Z</time>
      </trkpt>
      <trkpt lat="50.718304831534624" lon="6.460083480924368">
        <ele>269.31</ele>
        <time>2012-12-03T12:34:47Z</time>
      </trkpt>
      <trkpt lat="50.718331737443805" lon="6.460214573889971">
        <ele>269.31</ele>
        <time>2012-12-03T12:34:58Z</time>
      </trkpt>
      <trkpt lat="50.718370210379362" lon="6.460284981876612">
        <ele>270.26999999999998</ele>
        <time>2012-12-03T12:35:05Z</time>
      </trkpt>
      <trkpt lat="50.718426872044802" lon="6.460361843928695">
        <ele>270.75</ele>
        <time>2012-12-03T12:35:12Z</time>
      </trkpt>
      <trkpt lat="50.718521671369672" lon="6.460392856970429">
        <ele>272.19</ele>
        <time>2012-12-03T12:35:20Z</time>
      </trkpt>
      <trkpt lat="50.718541285023093" lon="6.46042856387794">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:35:24Z</time>
      </trkpt>
      <trkpt lat="50.718519659712911" lon="6.460479022935033">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:35:32Z</time>
      </trkpt>
      <trkpt lat="50.718532735481858" lon="6.46051942370832">
        <ele>273.63</ele>
        <time>2012-12-03T12:35:40Z</time>
      </trkpt>
      <trkpt lat="50.718528041616082" lon="6.460529398173094">
        <ele>273.63</ele>
        <time>2012-12-03T12:35:47Z</time>
      </trkpt>
      <trkpt lat="50.718527035787702" lon="6.460518753156066">
        <ele>270.26999999999998</ele>
        <time>2012-12-03T12:35:48Z</time>
      </trkpt>
      <trkpt lat="50.718526365235448" lon="6.460510371252894">
        <ele>266.42000000000002</ele>
        <time>2012-12-03T12:35:49Z</time>
      </trkpt>
      <trkpt lat="50.718528879806399" lon="6.460507018491626">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:35:50Z</time>
      </trkpt>
      <trkpt lat="50.718538435176015" lon="6.460443818941712">
        <ele>271.23000000000002</ele>
        <time>2012-12-03T12:35:55Z</time>
      </trkpt>
      <trkpt lat="50.718519492074847" lon="6.460423786193132">
        <ele>273.63</ele>
        <time>2012-12-03T12:36:06Z</time>
      </trkpt>
      <trkpt lat="50.718519994989038" lon="6.460418673232198">
        <ele>273.63</ele>
        <time>2012-12-03T12:36:24Z</time>
      </trkpt>
      <trkpt lat="50.718518067151308" lon="6.460431246086955">
        <ele>273.63</ele>
        <time>2012-12-03T12:36:36Z</time>
      </trkpt>
      <trkpt lat="50.718503650277853" lon="6.460398808121681">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:36:42Z</time>
      </trkpt>
      <trkpt lat="50.718464339151978" lon="6.460356814786792">
        <ele>270.75</ele>
        <time>2012-12-03T12:36:48Z</time>
      </trkpt>
      <trkpt lat="50.718382950872183" lon="6.460303254425526">
        <ele>269.79000000000002</ele>
        <time>2012-12-03T12:36:57Z</time>
      </trkpt>
      <trkpt lat="50.718352273106575" lon="6.460221195593476">
        <ele>270.75</ele>
        <time>2012-12-03T12:37:05Z</time>
      </trkpt>
      <trkpt lat="50.718360235914588" lon="6.460204096511006">
        <ele>269.79000000000002</ele>
        <time>2012-12-03T12:37:08Z</time>
      </trkpt>
      <trkpt lat="50.718397786840796" lon="6.460169814527035">
        <ele>269.79000000000002</ele>
        <time>2012-12-03T12:37:16Z</time>
      </trkpt>
      <trkpt lat="50.718447240069509" lon="6.460090521723032">
        <ele>266.42000000000002</ele>
        <time>2012-12-03T12:37:21Z</time>
      </trkpt>
      <trkpt lat="50.718453777953982" lon="6.460068728774786">
        <ele>266.42000000000002</ele>
        <time>2012-12-03T12:37:22Z</time>
      </trkpt>
      <trkpt lat="50.71847808547318" lon="6.460011145099998">
        <ele>264.98000000000002</ele>
        <time>2012-12-03T12:37:26Z</time>
      </trkpt>
      <trkpt lat="50.718479761853814" lon="6.459998991340399">
        <ele>265.45999999999998</ele>
        <time>2012-12-03T12:37:33Z</time>
      </trkpt>
      <trkpt lat="50.718481438234448" lon="6.459977785125375">
        <ele>267.38</ele>
        <time>2012-12-03T12:37:48Z</time>
      </trkpt>
      <trkpt lat="50.71848688647151" lon="6.459953729063273">
        <ele>269.31</ele>
        <time>2012-12-03T12:37:59Z</time>
      </trkpt>
      <trkpt lat="50.718490490689874" lon="6.459942413493991">
        <ele>269.31</ele>
        <time>2012-12-03T12:38:00Z</time>
      </trkpt>
      <trkpt lat="50.718507505953312" lon="6.459924643859267">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:38:02Z</time>
      </trkpt>
      <trkpt lat="50.718562658876181" lon="6.459839818999171">
        <ele>269.31</ele>
        <time>2012-12-03T12:38:10Z</time>
      </trkpt>
      <trkpt lat="50.718538435176015" lon="6.459906036034226">
        <ele>270.26999999999998</ele>
        <time>2012-12-03T12:38:23Z</time>
      </trkpt>
      <trkpt lat="50.718500213697553" lon="6.459960350766778">
        <ele>269.31</ele>
        <time>2012-12-03T12:38:31Z</time>
      </trkpt>
      <trkpt lat="50.7184839528054" lon="6.459975522011519">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:38:38Z</time>
      </trkpt>
      <trkpt lat="50.718480264768004" lon="6.459938893094659">
        <ele>266.89999999999998</ele>
        <time>2012-12-03T12:38:46Z</time>
      </trkpt>
      <trkpt lat="50.718466266989708" lon="6.459916094318032">
        <ele>266.42000000000002</ele>
        <time>2012-12-03T12:38:55Z</time>
      </trkpt>
      <trkpt lat="50.718453275039792" lon="6.45988566800952">
        <ele>266.42000000000002</ele>
        <time>2012-12-03T12:39:05Z</time>
      </trkpt>
      <trkpt lat="50.718446569517255" lon="6.459882147610188">
        <ele>267.38</ele>
        <time>2012-12-03T12:39:14Z</time>
      </trkpt>
      <trkpt lat="50.718446066603065" lon="6.45989547483623">
        <ele>267.38</ele>
        <time>2012-12-03T12:39:22Z</time>
      </trkpt>
      <trkpt lat="50.718456711620092" lon="6.45994576625526">
        <ele>266.89999999999998</ele>
        <time>2012-12-03T12:39:37Z</time>
      </trkpt>
      <trkpt lat="50.718490825966001" lon="6.460000751540065">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:39:44Z</time>
      </trkpt>
      <trkpt lat="50.718433912843466" lon="6.460124468430877">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:39:52Z</time>
      </trkpt>
      <trkpt lat="50.718421172350645" lon="6.460165036842227">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:39:57Z</time>
      </trkpt>
      <trkpt lat="50.718414383009076" lon="6.460182387381792">
        <ele>271.70999999999998</ele>
        <time>2012-12-03T12:40:02Z</time>
      </trkpt>
      <trkpt lat="50.718423519283533" lon="6.460162186995149">
        <ele>270.75</ele>
        <time>2012-12-03T12:40:04Z</time>
      </trkpt>
      <trkpt lat="50.718451598659158" lon="6.460087085142732">
        <ele>265.94</ele>
        <time>2012-12-03T12:40:08Z</time>
      </trkpt>
      <trkpt lat="50.718487054109573" lon="6.460004858672619">
        <ele>265.94</ele>
        <time>2012-12-03T12:40:17Z</time>
      </trkpt>
      <trkpt lat="50.718514127656817" lon="6.459950041025877">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:40:28Z</time>
      </trkpt>
      <trkpt lat="50.718545811250806" lon="6.459915256127715">
        <ele>268.35000000000002</ele>
        <time>2012-12-03T12:40:33Z</time>
      </trkpt>
      <trkpt lat="50.718594342470169" lon="6.459835208952427">
        <ele>267.38</ele>
        <time>2012-12-03T12:40:42Z</time>
      </trkpt>
      <trkpt lat="50.718614039942622" lon="6.459795227274299">
        <ele>267.86000000000001</ele>
        <time>2012-12-03T12:40:50Z</time>
      </trkpt>
      <trkpt lat="50.718595096841455" lon="6.459815176203847">
        <ele>268.82999999999998</ele>
        <time>2012-12-03T12:40:54Z</time>
      </trkpt>
      <trkpt lat="50.718520749360323" lon="6.45997216925025">
        <ele>269.31</ele>
        <time>2012-12-03T12:41:03Z</time>
      </trkpt>
      <trkpt lat="50.718460315838456" lon="6.45993797108531">
        <ele>267.86000000000001</ele>
        <time>2012-12-03T12:41:10Z</time>
      </trkpt>
      <trkpt lat="50.718407593667507" lon="6.459870915859938">
        <ele>266.42000000000002</ele>
        <time>2012-12-03T12:41:17Z</time>
      </trkpt>
      <trkpt lat="50.718386890366673" lon="6.459856331348419">
        <ele>264.98000000000002</ele>
        <time>2012-12-03T12:41:20Z</time>
      </trkpt>
      <trkpt lat="50.718361241742969" lon="6.459821378812194">
        <ele>263.06</ele>
        <time>2012-12-03T12:41:23Z</time>
      </trkpt>
      <trkpt lat="50.718328971415758" lon="6.459772596135736">
        <ele>261.13999999999999</ele>
        <time>2012-12-03T12:41:28Z</time>
      </trkpt>
      <trkpt lat="50.718283290043473" lon="6.45968827418983">
        <ele>258.25</ele>
        <time>2012-12-03T12:41:35Z</time>
      </trkpt>
      <trkpt lat="50.718246577307582" lon="6.459571849554777">
        <ele>256.32999999999998</ele>
        <time>2012-12-03T12:41:44Z</time>
      </trkpt>
      <trkpt lat="50.718229645863175" lon="6.459497418254614">
        <ele>253.93000000000001</ele>
        <time>2012-12-03T12:41:50Z</time>
      </trkpt>
      <trkpt lat="50.718225874006748" lon="6.459474200382829">
        <ele>253.44</ele>
        <time>2012-12-03T12:41:52Z</time>
      </trkpt>
      <trkpt lat="50.718184886500239" lon="6.459366828203201">
        <ele>250.56</ele>
        <time>2012-12-03T12:42:00Z</time>
      </trkpt>
      <trkpt lat="50.718149011954665" lon="6.459279404953122">
        <ele>252.47999999999999</ele>
        <time>2012-12-03T12:42:05Z</time>
      </trkpt>
      <trkpt lat="50.718139791861176" lon="6.459239842370153">
        <ele>249.59999999999999</ele>
        <time>2012-12-03T12:42:07Z</time>
      </trkpt>
      <trkpt lat="50.718136690557003" lon="6.459222575649619">
        <ele>249.59999999999999</ele>
        <time>2012-12-03T12:42:08Z</time>
      </trkpt>
      <trkpt lat="50.718124201521277" lon="6.45919818431139">
        <ele>250.08000000000001</ele>
        <time>2012-12-03T12:42:10Z</time>
      </trkpt>
      <trkpt lat="50.718124452978373" lon="6.459185359999538">
        <ele>248.63999999999999</ele>
        <time>2012-12-03T12:42:19Z</time>
      </trkpt>
      <trkpt lat="50.718150688335299" lon="6.459176978096366">
        <ele>248.16</ele>
        <time>2012-12-03T12:42:30Z</time>
      </trkpt>
      <trkpt lat="50.718127302825451" lon="6.459203800186515">
        <ele>249.12</ele>
        <time>2012-12-03T12:42:39Z</time>
      </trkpt>
      <trkpt lat="50.718108359724283" lon="6.459197597578168">
        <ele>250.08000000000001</ele>
        <time>2012-12-03T12:42:49Z</time>
      </trkpt>
      <trkpt lat="50.718088578432798" lon="6.459123166278005">
        <ele>248.16</ele>
        <time>2012-12-03T12:42:57Z</time>
      </trkpt>
      <trkpt lat="50.718060247600079" lon="6.458988804370165">
        <ele>245.75</ele>
        <time>2012-12-03T12:43:07Z</time>
      </trkpt>
      <trkpt lat="50.718048512935638" lon="6.458908673375845">
        <ele>244.31</ele>
        <time>2012-12-03T12:43:13Z</time>
      </trkpt>
      <trkpt lat="50.718012889847159" lon="6.458814963698387">
        <ele>243.34999999999999</ele>
        <time>2012-12-03T12:43:21Z</time>
      </trkpt>
      <trkpt lat="50.718012554571033" lon="6.458762912079692">
        <ele>243.34999999999999</ele>
        <time>2012-12-03T12:43:30Z</time>
      </trkpt>
      <trkpt lat="50.718003921210766" lon="6.458724271506071">
        <ele>242.38999999999999</ele>
        <time>2012-12-03T12:43:36Z</time>
      </trkpt>
      <trkpt lat="50.718007693067193" lon="6.458711195737124">
        <ele>242.38999999999999</ele>
        <time>2012-12-03T12:43:44Z</time>
      </trkpt>
      <trkpt lat="50.717966286465526" lon="6.458634082227945">
        <ele>242.87</ele>
        <time>2012-12-03T12:43:53Z</time>
      </trkpt>
      <trkpt lat="50.717950277030468" lon="6.458591753616929">
        <ele>241.43000000000001</ele>
        <time>2012-12-03T12:43:56Z</time>
      </trkpt>
      <trkpt lat="50.717922952026129" lon="6.458550849929452">
        <ele>239.99000000000001</ele>
        <time>2012-12-03T12:44:04Z</time>
      </trkpt>
      <trkpt lat="50.717893866822124" lon="6.458457978442311">
        <ele>238.53999999999999</ele>
        <time>2012-12-03T12:44:13Z</time>
      </trkpt>
      <trkpt lat="50.717852460220456" lon="6.458395114168525">
        <ele>237.58000000000001</ele>
        <time>2012-12-03T12:44:20Z</time>
      </trkpt>
      <trkpt lat="50.717818681150675" lon="6.458315905183554">
        <ele>238.53999999999999</ele>
        <time>2012-12-03T12:44:27Z</time>
      </trkpt>
      <trkpt lat="50.717780208215117" lon="6.458277264609933">
        <ele>238.06</ele>
        <time>2012-12-03T12:44:34Z</time>
      </trkpt>
      <trkpt lat="50.717776771634817" lon="6.458257902413607">
        <ele>237.58000000000001</ele>
        <time>2012-12-03T12:44:42Z</time>
      </trkpt>
      <trkpt lat="50.717779789119959" lon="6.458181878551841">
        <ele>235.66</ele>
        <time>2012-12-03T12:44:49Z</time>
      </trkpt>
      <trkpt lat="50.717782806605101" lon="6.458138460293412">
        <ele>234.69999999999999</ele>
        <time>2012-12-03T12:44:58Z</time>
      </trkpt>
      <trkpt lat="50.717788590118289" lon="6.458154218271375">
        <ele>236.62</ele>
        <time>2012-12-03T12:45:12Z</time>
      </trkpt>
      <trkpt lat="50.717786159366369" lon="6.458068303763866">
        <ele>235.66</ele>
        <time>2012-12-03T12:45:22Z</time>
      </trkpt>
      <trkpt lat="50.717785153537989" lon="6.458030166104436">
        <ele>234.22</ele>
        <time>2012-12-03T12:45:30Z</time>
      </trkpt>
      <trkpt lat="50.717767383903265" lon="6.457929918542504">
        <ele>233.25999999999999</ele>
        <time>2012-12-03T12:45:38Z</time>
      </trkpt>
      <trkpt lat="50.717794960364699" lon="6.457955986261368">
        <ele>232.78</ele>
        <time>2012-12-03T12:45:46Z</time>
      </trkpt>
      <trkpt lat="50.717738969251513" lon="6.457920530810952">
        <ele>233.25999999999999</ele>
        <time>2012-12-03T12:45:59Z</time>
      </trkpt>
      <trkpt lat="50.71770460344851" lon="6.457787090912461">
        <ele>230.37</ele>
        <time>2012-12-03T12:46:08Z</time>
      </trkpt>
      <trkpt lat="50.717717260122299" lon="6.457752138376236">
        <ele>229.88999999999999</ele>
        <time>2012-12-03T12:46:16Z</time>
      </trkpt>
      <trkpt lat="50.717698568478227" lon="6.457753060385585">
        <ele>229.88999999999999</ele>
        <time>2012-12-03T12:46:26Z</time>
      </trkpt>
      <trkpt lat="50.717658083885908" lon="6.457698326557875">
        <ele>230.37</ele>
        <time>2012-12-03T12:46:34Z</time>
      </trkpt>
      <trkpt lat="50.717655820772052" lon="6.457583662122488">
        <ele>227.49000000000001</ele>
        <time>2012-12-03T12:46:43Z</time>
      </trkpt>
      <trkpt lat="50.717655904591084" lon="6.457575280219317">
        <ele>227.49000000000001</ele>
        <time>2012-12-03T12:46:44Z</time>
      </trkpt>
      <trkpt lat="50.717648193240166" lon="6.457542758435011">
        <ele>227.00999999999999</ele>
        <time>2012-12-03T12:46:48Z</time>
      </trkpt>
      <trkpt lat="50.7175946328789" lon="6.45740638487041">
        <ele>226.53</ele>
        <time>2012-12-03T12:46:57Z</time>
      </trkpt>
      <trkpt lat="50.717565128579736" lon="6.457272777333856">
        <ele>224.12</ele>
        <time>2012-12-03T12:47:06Z</time>
      </trkpt>
      <trkpt lat="50.717534869909286" lon="6.457141181454063">
        <ele>223.63999999999999</ele>
        <time>2012-12-03T12:47:15Z</time>
      </trkpt>
      <trkpt lat="50.717538725584745" lon="6.45709902048111">
        <ele>223.16</ele>
        <time>2012-12-03T12:47:17Z</time>
      </trkpt>
      <trkpt lat="50.717522883787751" lon="6.457073958590627">
        <ele>223.16</ele>
        <time>2012-12-03T12:47:20Z</time>
      </trkpt>
      <trkpt lat="50.717468401417136" lon="6.457022409886122">
        <ele>222.68000000000001</ele>
        <time>2012-12-03T12:47:26Z</time>
      </trkpt>
      <trkpt lat="50.717370836064219" lon="6.456937082111836">
        <ele>222.19999999999999</ele>
        <time>2012-12-03T12:47:36Z</time>
      </trkpt>
      <trkpt lat="50.717316018417478" lon="6.456856951117516">
        <ele>221.72</ele>
        <time>2012-12-03T12:47:43Z</time>
      </trkpt>
      <trkpt lat="50.717310234904289" lon="6.45680632442236">
        <ele>220.28</ele>
        <time>2012-12-03T12:47:50Z</time>
      </trkpt>
      <trkpt lat="50.717306882143021" lon="6.456792829558253">
        <ele>220.28</ele>
        <time>2012-12-03T12:48:00Z</time>
      </trkpt>
      <trkpt lat="50.717289196327329" lon="6.456778161227703">
        <ele>219.80000000000001</ele>
        <time>2012-12-03T12:48:07Z</time>
      </trkpt>
      <trkpt lat="50.7172233145684" lon="6.456663915887475">
        <ele>219.31999999999999</ele>
        <time>2012-12-03T12:48:16Z</time>
      </trkpt>
      <trkpt lat="50.717173190787435" lon="6.456543048843741">
        <ele>220.75999999999999</ele>
        <time>2012-12-03T12:48:24Z</time>
      </trkpt>
      <trkpt lat="50.717168245464563" lon="6.456531565636396">
        <ele>220.28</ele>
        <time>2012-12-03T12:48:25Z</time>
      </trkpt>
      <trkpt lat="50.717156175523996" lon="6.456471383571625">
        <ele>219.31999999999999</ele>
        <time>2012-12-03T12:48:31Z</time>
      </trkpt>
      <trkpt lat="50.717136142775416" lon="6.456441879272461">
        <ele>219.31999999999999</ele>
        <time>2012-12-03T12:48:41Z</time>
      </trkpt>
      <trkpt lat="50.717094987630844" lon="6.456354707479477">
        <ele>219.31999999999999</ele>
        <time>2012-12-03T12:48:48Z</time>
      </trkpt>
      <trkpt lat="50.717023657634854" lon="6.456192769110203">
        <ele>218.84</ele>
        <time>2012-12-03T12:48:58Z</time>
      </trkpt>
      <trkpt lat="50.716984430328012" lon="6.456141388043761">
        <ele>217.88</ele>
        <time>2012-12-03T12:49:05Z</time>
      </trkpt>
      <trkpt lat="50.716923912987113" lon="6.45601280964911">
        <ele>217.40000000000001</ele>
        <time>2012-12-03T12:49:13Z</time>
      </trkpt>
      <trkpt lat="50.716835232451558" lon="6.455838298425078">
        <ele>218.36000000000001</ele>
        <time>2012-12-03T12:49:21Z</time>
      </trkpt>
      <trkpt lat="50.716815032064915" lon="6.45580661483109">
        <ele>217.40000000000001</ele>
        <time>2012-12-03T12:49:23Z</time>
      </trkpt>
      <trkpt lat="50.716779408976436" lon="6.455824803560972">
        <ele>216.91</ele>
        <time>2012-12-03T12:49:29Z</time>
      </trkpt>
      <trkpt lat="50.716714365407825" lon="6.455798065289855">
        <ele>215.47</ele>
        <time>2012-12-03T12:49:36Z</time>
      </trkpt>
      <trkpt lat="50.716616800054908" lon="6.455695303156972">
        <ele>215.47</ele>
        <time>2012-12-03T12:49:44Z</time>
      </trkpt>
      <trkpt lat="50.716570699587464" lon="6.455635372549295">
        <ele>215.47</ele>
        <time>2012-12-03T12:49:50Z</time>
      </trkpt>
      <trkpt lat="50.716525102034211" lon="6.455591367557645">
        <ele>214.50999999999999</ele>
        <time>2012-12-03T12:49:57Z</time>
      </trkpt>
      <trkpt lat="50.716519402340055" lon="6.455575358122587">
        <ele>214.99000000000001</ele>
        <time>2012-12-03T12:49:58Z</time>
      </trkpt>
      <trkpt lat="50.71650012396276" lon="6.455545434728265">
        <ele>214.03</ele>
        <time>2012-12-03T12:50:00Z</time>
      </trkpt>
      <trkpt lat="50.716464584693313" lon="6.455441918224096">
        <ele>213.55000000000001</ele>
        <time>2012-12-03T12:50:07Z</time>
      </trkpt>
      <trkpt lat="50.71642535738647" lon="6.455307891592383">
        <ele>213.06999999999999</ele>
        <time>2012-12-03T12:50:14Z</time>
      </trkpt>
      <trkpt lat="50.716415802016854" lon="6.455285511910915">
        <ele>214.50999999999999</ele>
        <time>2012-12-03T12:50:15Z</time>
      </trkpt>
      <trkpt lat="50.716405576094985" lon="6.455262377858162">
        <ele>214.50999999999999</ele>
        <time>2012-12-03T12:50:16Z</time>
      </trkpt>
      <trkpt lat="50.716399289667606" lon="6.455140169709921">
        <ele>214.03</ele>
        <time>2012-12-03T12:50:24Z</time>
      </trkpt>
      <trkpt lat="50.716359140351415" lon="6.454980075359345">
        <ele>213.06999999999999</ele>
        <time>2012-12-03T12:50:34Z</time>
      </trkpt>
      <trkpt lat="50.716328881680965" lon="6.454880498349667">
        <ele>212.59</ele>
        <time>2012-12-03T12:50:41Z</time>
      </trkpt>
      <trkpt lat="50.716326450929046" lon="6.454710932448506">
        <ele>211.63</ele>
        <time>2012-12-03T12:50:49Z</time>
      </trkpt>
      <trkpt lat="50.716273142024875" lon="6.454674219712615">
        <ele>211.15000000000001</ele>
        <time>2012-12-03T12:50:56Z</time>
      </trkpt>
      <trkpt lat="50.716256713494658" lon="6.454534409567714">
        <ele>210.19</ele>
        <time>2012-12-03T12:51:03Z</time>
      </trkpt>
      <trkpt lat="50.716214133426547" lon="6.454394515603781">
        <ele>209.22</ele>
        <time>2012-12-03T12:51:11Z</time>
      </trkpt>
      <trkpt lat="50.71618395857513" lon="6.454320587217808">
        <ele>208.74000000000001</ele>
        <time>2012-12-03T12:51:18Z</time>
      </trkpt>
      <trkpt lat="50.716177839785814" lon="6.454283371567726">
        <ele>209.22</ele>
        <time>2012-12-03T12:51:20Z</time>
      </trkpt>
      <trkpt lat="50.716177923604846" lon="6.454256800934672">
        <ele>209.22</ele>
        <time>2012-12-03T12:51:21Z</time>
      </trkpt>
      <trkpt lat="50.716146407648921" lon="6.454143393784761">
        <ele>208.25999999999999</ele>
        <time>2012-12-03T12:51:29Z</time>
      </trkpt>
      <trkpt lat="50.716127883642912" lon="6.454107686877251">
        <ele>207.78</ele>
        <time>2012-12-03T12:51:32Z</time>
      </trkpt>
      <trkpt lat="50.716124447062612" lon="6.454090587794781">
        <ele>207.30000000000001</ele>
        <time>2012-12-03T12:51:33Z</time>
      </trkpt>
      <trkpt lat="50.716120088472962" lon="6.454069213941693">
        <ele>207.78</ele>
        <time>2012-12-03T12:51:34Z</time>
      </trkpt>
      <trkpt lat="50.71609896607697" lon="6.453853212296963">
        <ele>208.25999999999999</ele>
        <time>2012-12-03T12:51:44Z</time>
      </trkpt>
      <trkpt lat="50.716067450121045" lon="6.453793281689286">
        <ele>207.78</ele>
        <time>2012-12-03T12:51:51Z</time>
      </trkpt>
      <trkpt lat="50.71606233716011" lon="6.453772243112326">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T12:51:52Z</time>
      </trkpt>
      <trkpt lat="50.716059403494" lon="6.453750366345048">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T12:51:53Z</time>
      </trkpt>
      <trkpt lat="50.716059571132064" lon="6.453725304454565">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T12:51:54Z</time>
      </trkpt>
      <trkpt lat="50.716059152036905" lon="6.453697895631194">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T12:51:55Z</time>
      </trkpt>
      <trkpt lat="50.716024870052934" lon="6.453574094921351">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T12:52:01Z</time>
      </trkpt>
      <trkpt lat="50.71601246483624" lon="6.453533861786127">
        <ele>207.78</ele>
        <time>2012-12-03T12:52:04Z</time>
      </trkpt>
      <trkpt lat="50.715988408774137" lon="6.453501591458917">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T12:52:09Z</time>
      </trkpt>
      <trkpt lat="50.71596996858716" lon="6.453463286161423">
        <ele>206.81999999999999</ele>
        <time>2012-12-03T12:52:13Z</time>
      </trkpt>
      <trkpt lat="50.715966867282987" lon="6.453440906479955">
        <ele>205.86000000000001</ele>
        <time>2012-12-03T12:52:14Z</time>
      </trkpt>
      <trkpt lat="50.71596653200686" lon="6.453368905931711">
        <ele>205.86000000000001</ele>
        <time>2012-12-03T12:52:17Z</time>
      </trkpt>
      <trkpt lat="50.715964939445257" lon="6.453314004465938">
        <ele>204.90000000000001</ele>
        <time>2012-12-03T12:52:21Z</time>
      </trkpt>
      <trkpt lat="50.715963346883655" lon="6.453294055536389">
        <ele>204.90000000000001</ele>
        <time>2012-12-03T12:52:22Z</time>
      </trkpt>
      <trkpt lat="50.715964436531067" lon="6.453273603692651">
        <ele>204.90000000000001</ele>
        <time>2012-12-03T12:52:23Z</time>
      </trkpt>
      <trkpt lat="50.715964687988162" lon="6.453250469639897">
        <ele>204.41999999999999</ele>
        <time>2012-12-03T12:52:24Z</time>
      </trkpt>
      <trkpt lat="50.715916827321053" lon="6.453118538483977">
        <ele>203.46000000000001</ele>
        <time>2012-12-03T12:52:31Z</time>
      </trkpt>
      <trkpt lat="50.715884808450937" lon="6.453011753037572">
        <ele>203.46000000000001</ele>
        <time>2012-12-03T12:52:38Z</time>
      </trkpt>
      <trkpt lat="50.71586737409234" lon="6.452935142442584">
        <ele>202.97999999999999</ele>
        <time>2012-12-03T12:52:44Z</time>
      </trkpt>
      <trkpt lat="50.715877432376146" lon="6.452896250411868">
        <ele>202.97999999999999</ele>
        <time>2012-12-03T12:52:46Z</time>
      </trkpt>
      <trkpt lat="50.715885730460286" lon="6.452695084735751">
        <ele>202.00999999999999</ele>
        <time>2012-12-03T12:52:55Z</time>
      </trkpt>
      <trkpt lat="50.71584097109735" lon="6.452579163014889">
        <ele>201.05000000000001</ele>
        <time>2012-12-03T12:53:04Z</time>
      </trkpt>
      <trkpt lat="50.715834433212876" lon="6.452559297904372">
        <ele>201.05000000000001</ele>
        <time>2012-12-03T12:53:05Z</time>
      </trkpt>
      <trkpt lat="50.715813562273979" lon="6.452487129718065">
        <ele>201.53</ele>
        <time>2012-12-03T12:53:08Z</time>
      </trkpt>
      <trkpt lat="50.715809874236584" lon="6.452445052564144">
        <ele>201.53</ele>
        <time>2012-12-03T12:53:10Z</time>
      </trkpt>
      <trkpt lat="50.715809790417552" lon="6.452425690367818">
        <ele>201.05000000000001</ele>
        <time>2012-12-03T12:53:11Z</time>
      </trkpt>
      <trkpt lat="50.715806353837252" lon="6.45240280777216">
        <ele>201.05000000000001</ele>
        <time>2012-12-03T12:53:12Z</time>
      </trkpt>
      <trkpt lat="50.715797217562795" lon="6.452254448086023">
        <ele>201.53</ele>
        <time>2012-12-03T12:53:21Z</time>
      </trkpt>
      <trkpt lat="50.715840384364128" lon="6.452244808897376">
        <ele>201.53</ele>
        <time>2012-12-03T12:53:28Z</time>
      </trkpt>
      <trkpt lat="50.715834768489003" lon="6.452258219942451">
        <ele>199.61000000000001</ele>
        <time>2012-12-03T12:53:33Z</time>
      </trkpt>
      <trkpt lat="50.71584340184927" lon="6.452302476391196">
        <ele>199.13</ele>
        <time>2012-12-03T12:53:39Z</time>
      </trkpt>
      <trkpt lat="50.715859159827232" lon="6.452341200783849">
        <ele>198.65000000000001</ele>
        <time>2012-12-03T12:53:45Z</time>
      </trkpt>
      <trkpt lat="50.715896291658282" lon="6.452375398948789">
        <ele>198.16999999999999</ele>
        <time>2012-12-03T12:53:52Z</time>
      </trkpt>
      <trkpt lat="50.715899141505361" lon="6.452393503859639">
        <ele>198.65000000000001</ele>
        <time>2012-12-03T12:53:53Z</time>
      </trkpt>
      <trkpt lat="50.715907355770469" lon="6.452412530779839">
        <ele>198.16999999999999</ele>
        <time>2012-12-03T12:53:54Z</time>
      </trkpt>
      <trkpt lat="50.715912217274308" lon="6.452431725338101">
        <ele>198.16999999999999</ele>
        <time>2012-12-03T12:53:55Z</time>
      </trkpt>
      <trkpt lat="50.715922191739082" lon="6.452478161081672">
        <ele>198.16999999999999</ele>
        <time>2012-12-03T12:54:01Z</time>
      </trkpt>
      <trkpt lat="50.715940045192838" lon="6.452573295682669">
        <ele>197.21000000000001</ele>
        <time>2012-12-03T12:54:09Z</time>
      </trkpt>
      <trkpt lat="50.715950354933739" lon="6.452595256268978">
        <ele>196.72999999999999</ele>
        <time>2012-12-03T12:54:10Z</time>
      </trkpt>
      <trkpt lat="50.715963682159781" lon="6.452616713941097">
        <ele>196.72999999999999</ele>
        <time>2012-12-03T12:54:11Z</time>
      </trkpt>
      <trkpt lat="50.71598069742322" lon="6.452634064480662">
        <ele>196.72999999999999</ele>
        <time>2012-12-03T12:54:12Z</time>
      </trkpt>
      <trkpt lat="50.715997377410531" lon="6.452655773609877">
        <ele>197.21000000000001</ele>
        <time>2012-12-03T12:54:13Z</time>
      </trkpt>
      <trkpt lat="50.716012045741081" lon="6.452676979824901">
        <ele>196.72999999999999</ele>
        <time>2012-12-03T12:54:14Z</time>
      </trkpt>
      <trkpt lat="50.716028390452266" lon="6.452692989259958">
        <ele>196.72999999999999</ele>
        <time>2012-12-03T12:54:15Z</time>
      </trkpt>
      <trkpt lat="50.716038448736072" lon="6.452706232666969">
        <ele>196.72999999999999</ele>
        <time>2012-12-03T12:54:16Z</time>
      </trkpt>
      <trkpt lat="50.716051273047924" lon="6.452722242102027">
        <ele>196.72999999999999</ele>
        <time>2012-12-03T12:54:17Z</time>
      </trkpt>
      <trkpt lat="50.716114724054933" lon="6.452796002849937">
        <ele>196.25</ele>
        <time>2012-12-03T12:54:24Z</time>
      </trkpt>
      <trkpt lat="50.716199213638902" lon="6.452857358381152">
        <ele>196.25</ele>
        <time>2012-12-03T12:54:31Z</time>
      </trkpt>
      <trkpt lat="50.716232908889651" lon="6.452869847416878">
        <ele>195.77000000000001</ele>
        <time>2012-12-03T12:54:39Z</time>
      </trkpt>
      <trkpt lat="50.716324187815189" lon="6.452942015603185">
        <ele>195.28</ele>
        <time>2012-12-03T12:54:47Z</time>
      </trkpt>
      <trkpt lat="50.716383028775454" lon="6.453001527115703">
        <ele>195.28</ele>
        <time>2012-12-03T12:54:54Z</time>
      </trkpt>
      <trkpt lat="50.716458298265934" lon="6.45316656678915">
        <ele>193.36000000000001</ele>
        <time>2012-12-03T12:55:04Z</time>
      </trkpt>
      <trkpt lat="50.716547649353743" lon="6.453267484903336">
        <ele>193.36000000000001</ele>
        <time>2012-12-03T12:55:13Z</time>
      </trkpt>
      <trkpt lat="50.716638760641217" lon="6.453386843204498">
        <ele>190.96000000000001</ele>
        <time>2012-12-03T12:55:22Z</time>
      </trkpt>
      <trkpt lat="50.716662062332034" lon="6.453415174037218">
        <ele>190.47999999999999</ele>
        <time>2012-12-03T12:55:24Z</time>
      </trkpt>
      <trkpt lat="50.716705312952399" lon="6.453498490154743">
        <ele>190.47999999999999</ele>
        <time>2012-12-03T12:55:31Z</time>
      </trkpt>
      <trkpt lat="50.716778822243214" lon="6.453563533723354">
        <ele>190</ele>
        <time>2012-12-03T12:55:39Z</time>
      </trkpt>
      <trkpt lat="50.716851577162743" lon="6.453645676374435">
        <ele>190</ele>
        <time>2012-12-03T12:55:46Z</time>
      </trkpt>
      <trkpt lat="50.716906730085611" lon="6.45374315790832">
        <ele>190</ele>
        <time>2012-12-03T12:55:55Z</time>
      </trkpt>
      <trkpt lat="50.716917039826512" lon="6.453788420185447">
        <ele>189.52000000000001</ele>
        <time>2012-12-03T12:56:04Z</time>
      </trkpt>
      <trkpt lat="50.716919805854559" lon="6.453786995261908">
        <ele>190</ele>
        <time>2012-12-03T12:56:16Z</time>
      </trkpt>
      <trkpt lat="50.716934306547046" lon="6.453765956684947">
        <ele>190.47999999999999</ele>
        <time>2012-12-03T12:56:32Z</time>
      </trkpt>
      <trkpt lat="50.716946795582771" lon="6.453760592266917">
        <ele>190.96000000000001</ele>
        <time>2012-12-03T12:56:33Z</time>
      </trkpt>
      <trkpt lat="50.717004965990782" lon="6.453825803473592">
        <ele>189.03999999999999</ele>
        <time>2012-12-03T12:56:39Z</time>
      </trkpt>
      <trkpt lat="50.717056766152382" lon="6.453815242275596">
        <ele>190</ele>
        <time>2012-12-03T12:56:49Z</time>
      </trkpt>
      <trkpt lat="50.717112924903631" lon="6.453952202573419">
        <ele>190.47999999999999</ele>
        <time>2012-12-03T12:56:57Z</time>
      </trkpt>
      <trkpt lat="50.717125833034515" lon="6.453978605568409">
        <ele>190</ele>
        <time>2012-12-03T12:56:59Z</time>
      </trkpt>
      <trkpt lat="50.717177800834179" lon="6.454050270840526">
        <ele>190.47999999999999</ele>
        <time>2012-12-03T12:57:07Z</time>
      </trkpt>
      <trkpt lat="50.717213172465563" lon="6.454092431813479">
        <ele>192.88</ele>
        <time>2012-12-03T12:57:13Z</time>
      </trkpt>
      <trkpt lat="50.717230523005128" lon="6.45410374738276">
        <ele>194.31999999999999</ele>
        <time>2012-12-03T12:57:22Z</time>
      </trkpt>
      <trkpt lat="50.717219207435846" lon="6.454095281660557">
        <ele>192.40000000000001</ele>
        <time>2012-12-03T12:57:30Z</time>
      </trkpt>
      <trkpt lat="50.717152068391442" lon="6.454006768763065">
        <ele>193.36000000000001</ele>
        <time>2012-12-03T12:57:40Z</time>
      </trkpt>
      <trkpt lat="50.717085851356387" lon="6.453961841762066">
        <ele>192.88</ele>
        <time>2012-12-03T12:57:48Z</time>
      </trkpt>
      <trkpt lat="50.717080235481262" lon="6.453949185088277">
        <ele>192.40000000000001</ele>
        <time>2012-12-03T12:57:49Z</time>
      </trkpt>
      <trkpt lat="50.717055005952716" lon="6.453896379098296">
        <ele>189.03999999999999</ele>
        <time>2012-12-03T12:57:53Z</time>
      </trkpt>
      <trkpt lat="50.717048803344369" lon="6.45388338714838">
        <ele>190</ele>
        <time>2012-12-03T12:57:54Z</time>
      </trkpt>
      <trkpt lat="50.717000104486942" lon="6.45380032248795">
        <ele>191.44</ele>
        <time>2012-12-03T12:58:02Z</time>
      </trkpt>
      <trkpt lat="50.716988537460566" lon="6.453751707449555">
        <ele>190.96000000000001</ele>
        <time>2012-12-03T12:58:06Z</time>
      </trkpt>
      <trkpt lat="50.716985184699297" lon="6.453645173460245">
        <ele>189.03999999999999</ele>
        <time>2012-12-03T12:58:14Z</time>
      </trkpt>
      <trkpt lat="50.716974958777428" lon="6.453571747988462">
        <ele>189.52000000000001</ele>
        <time>2012-12-03T12:58:18Z</time>
      </trkpt>
      <trkpt lat="50.716935060918331" lon="6.453457251191139">
        <ele>190</ele>
        <time>2012-12-03T12:58:25Z</time>
      </trkpt>
      <trkpt lat="50.716922488063574" lon="6.453428920358419">
        <ele>190.96000000000001</ele>
        <time>2012-12-03T12:58:33Z</time>
      </trkpt>
      <trkpt lat="50.716893905773759" lon="6.453381311148405">
        <ele>191.44</ele>
        <time>2012-12-03T12:58:40Z</time>
      </trkpt>
      <trkpt lat="50.716897509992123" lon="6.45332925952971">
        <ele>189.52000000000001</ele>
        <time>2012-12-03T12:58:47Z</time>
      </trkpt>
      <trkpt lat="50.71688175201416" lon="6.45327846519649">
        <ele>189.52000000000001</ele>
        <time>2012-12-03T12:58:51Z</time>
      </trkpt>
      <trkpt lat="50.716854762285948" lon="6.453210320323706">
        <ele>189.03999999999999</ele>
        <time>2012-12-03T12:58:54Z</time>
      </trkpt>
      <trkpt lat="50.716789551079273" lon="6.453021559864283">
        <ele>187.59</ele>
        <time>2012-12-03T12:59:01Z</time>
      </trkpt>
      <trkpt lat="50.716787539422512" lon="6.452999515458942">
        <ele>188.08000000000001</ele>
        <time>2012-12-03T12:59:02Z</time>
      </trkpt>
      <trkpt lat="50.716785946860909" lon="6.452978644520044">
        <ele>188.08000000000001</ele>
        <time>2012-12-03T12:59:03Z</time>
      </trkpt>
      <trkpt lat="50.716792065650225" lon="6.452934388071299">
        <ele>187.59</ele>
        <time>2012-12-03T12:59:09Z</time>
      </trkpt>
      <trkpt lat="50.716767925769091" lon="6.452876972034574">
        <ele>187.11000000000001</ele>
        <time>2012-12-03T12:59:15Z</time>
      </trkpt>
      <trkpt lat="50.716735320165753" lon="6.452770605683327">
        <ele>186.63</ele>
        <time>2012-12-03T12:59:23Z</time>
      </trkpt>
      <trkpt lat="50.71669215336442" lon="6.452633058652282">
        <ele>186.63</ele>
        <time>2012-12-03T12:59:29Z</time>
      </trkpt>
      <trkpt lat="50.71662275120616" lon="6.452488219365478">
        <ele>186.15000000000001</ele>
        <time>2012-12-03T12:59:36Z</time>
      </trkpt>
      <trkpt lat="50.716615123674273" lon="6.452385289594531">
        <ele>185.66999999999999</ele>
        <time>2012-12-03T12:59:43Z</time>
      </trkpt>
      <trkpt lat="50.716654937714338" lon="6.452296692878008">
        <ele>185.19</ele>
        <time>2012-12-03T12:59:49Z</time>
      </trkpt>
      <trkpt lat="50.716745965182781" lon="6.452341703698039">
        <ele>185.19</ele>
        <time>2012-12-03T12:59:56Z</time>
      </trkpt>
      <trkpt lat="50.716791562736034" lon="6.452419403940439">
        <ele>183.75</ele>
        <time>2012-12-03T13:00:03Z</time>
      </trkpt>
      <trkpt lat="50.716825760900974" lon="6.452473970130086">
        <ele>183.75</ele>
        <time>2012-12-03T13:00:06Z</time>
      </trkpt>
      <trkpt lat="50.716857360675931" lon="6.452502552419901">
        <ele>183.27000000000001</ele>
        <time>2012-12-03T13:00:08Z</time>
      </trkpt>
      <trkpt lat="50.716876722872257" lon="6.452518478035927">
        <ele>183.27000000000001</ele>
        <time>2012-12-03T13:00:09Z</time>
      </trkpt>
      <trkpt lat="50.716896085068583" lon="6.452536918222904">
        <ele>183.75</ele>
        <time>2012-12-03T13:00:10Z</time>
      </trkpt>
      <trkpt lat="50.716957356780767" lon="6.452604476362467">
        <ele>183.75</ele>
        <time>2012-12-03T13:00:16Z</time>
      </trkpt>
      <trkpt lat="50.71701854467392" lon="6.452652420848608">
        <ele>181.83000000000001</ele>
        <time>2012-12-03T13:00:25Z</time>
      </trkpt>
      <trkpt lat="50.717053329572082" lon="6.452561309561133">
        <ele>183.27000000000001</ele>
        <time>2012-12-03T13:00:32Z</time>
      </trkpt>
      <trkpt lat="50.717050060629845" lon="6.452530212700367">
        <ele>182.78999999999999</ele>
        <time>2012-12-03T13:00:38Z</time>
      </trkpt>
      <trkpt lat="50.71707034483552" lon="6.452494002878666">
        <ele>181.83000000000001</ele>
        <time>2012-12-03T13:00:45Z</time>
      </trkpt>
      <trkpt lat="50.717064561322331" lon="6.452494505792856">
        <ele>182.31</ele>
        <time>2012-12-03T13:00:52Z</time>
      </trkpt>
      <trkpt lat="50.717039331793785" lon="6.452474137768149">
        <ele>183.27000000000001</ele>
        <time>2012-12-03T13:00:54Z</time>
      </trkpt>
      <trkpt lat="50.716977976262569" lon="6.452382020652294">
        <ele>181.83000000000001</ele>
        <time>2012-12-03T13:01:02Z</time>
      </trkpt>
      <trkpt lat="50.716954423114657" lon="6.452330136671662">
        <ele>180.38</ele>
        <time>2012-12-03T13:01:08Z</time>
      </trkpt>
      <trkpt lat="50.716916536912322" lon="6.452279258519411">
        <ele>181.34999999999999</ele>
        <time>2012-12-03T13:01:20Z</time>
      </trkpt>
      <trkpt lat="50.716879153624177" lon="6.45220834761858">
        <ele>179.90000000000001</ele>
        <time>2012-12-03T13:01:27Z</time>
      </trkpt>
      <trkpt lat="50.71687538176775" lon="6.452192422002554">
        <ele>180.87</ele>
        <time>2012-12-03T13:01:28Z</time>
      </trkpt>
      <trkpt lat="50.716801369562745" lon="6.452046912163496">
        <ele>179.41999999999999</ele>
        <time>2012-12-03T13:01:38Z</time>
      </trkpt>
      <trkpt lat="50.716736074537039" lon="6.451926380395889">
        <ele>177.02000000000001</ele>
        <time>2012-12-03T13:01:48Z</time>
      </trkpt>
      <trkpt lat="50.71664035320282" lon="6.45174365490675">
        <ele>177.97999999999999</ele>
        <time>2012-12-03T13:01:59Z</time>
      </trkpt>
      <trkpt lat="50.71659198962152" lon="6.451626475900412">
        <ele>177.02000000000001</ele>
        <time>2012-12-03T13:02:07Z</time>
      </trkpt>
      <trkpt lat="50.716543374583125" lon="6.45154383033514">
        <ele>175.09999999999999</ele>
        <time>2012-12-03T13:02:14Z</time>
      </trkpt>
      <trkpt lat="50.716476319357753" lon="6.451397063210607">
        <ele>175.58000000000001</ele>
        <time>2012-12-03T13:02:22Z</time>
      </trkpt>
      <trkpt lat="50.716431308537722" lon="6.451270831748843">
        <ele>175.09999999999999</ele>
        <time>2012-12-03T13:02:30Z</time>
      </trkpt>
      <trkpt lat="50.71638286113739" lon="6.451169075444341">
        <ele>174.62</ele>
        <time>2012-12-03T13:02:38Z</time>
      </trkpt>
      <trkpt lat="50.71636039763689" lon="6.4511280041188">
        <ele>173.66</ele>
        <time>2012-12-03T13:02:41Z</time>
      </trkpt>
      <trkpt lat="50.716348243877292" lon="6.451093554496765">
        <ele>173.66</ele>
        <time>2012-12-03T13:02:43Z</time>
      </trkpt>
      <trkpt lat="50.716344052925706" lon="6.451072599738836">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:02:44Z</time>
      </trkpt>
      <trkpt lat="50.716292504221201" lon="6.450944188982248">
        <ele>173.16999999999999</ele>
        <time>2012-12-03T13:02:53Z</time>
      </trkpt>
      <trkpt lat="50.716278003528714" lon="6.450913846492767">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T13:02:55Z</time>
      </trkpt>
      <trkpt lat="50.716230813413858" lon="6.450798176229">
        <ele>171.25</ele>
        <time>2012-12-03T13:03:03Z</time>
      </trkpt>
      <trkpt lat="50.716191083192825" lon="6.450730701908469">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:03:09Z</time>
      </trkpt>
      <trkpt lat="50.716140121221542" lon="6.450619222596288">
        <ele>169.81</ele>
        <time>2012-12-03T13:03:17Z</time>
      </trkpt>
      <trkpt lat="50.716080022975802" lon="6.450446220114827">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T13:03:27Z</time>
      </trkpt>
      <trkpt lat="50.716022606939077" lon="6.450335076078773">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T13:03:35Z</time>
      </trkpt>
      <trkpt lat="50.715941973030567" lon="6.45017514936626">
        <ele>169.81</ele>
        <time>2012-12-03T13:03:46Z</time>
      </trkpt>
      <trkpt lat="50.715876175090671" lon="6.450081523507834">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T13:03:54Z</time>
      </trkpt>
      <trkpt lat="50.715831751003861" lon="6.450011702254415">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T13:04:00Z</time>
      </trkpt>
      <trkpt lat="50.71582680568099" lon="6.449994519352913">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T13:04:01Z</time>
      </trkpt>
      <trkpt lat="50.715731335803866" lon="6.449864683672786">
        <ele>168.37</ele>
        <time>2012-12-03T13:04:12Z</time>
      </trkpt>
      <trkpt lat="50.715676937252283" lon="6.449751863256097">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T13:04:21Z</time>
      </trkpt>
      <trkpt lat="50.715604852885008" lon="6.449649101123214">
        <ele>168.37</ele>
        <time>2012-12-03T13:04:30Z</time>
      </trkpt>
      <trkpt lat="50.715544167906046" lon="6.449548853561282">
        <ele>169.81</ele>
        <time>2012-12-03T13:04:38Z</time>
      </trkpt>
      <trkpt lat="50.715467054396868" lon="6.449444917961955">
        <ele>169.81</ele>
        <time>2012-12-03T13:04:47Z</time>
      </trkpt>
      <trkpt lat="50.715396394953132" lon="6.44935816526413">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T13:04:55Z</time>
      </trkpt>
      <trkpt lat="50.715380553156137" lon="6.449336037039757">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:04:57Z</time>
      </trkpt>
      <trkpt lat="50.715350462123752" lon="6.449298486113548">
        <ele>171.25</ele>
        <time>2012-12-03T13:05:01Z</time>
      </trkpt>
      <trkpt lat="50.715291537344456" lon="6.449192790314555">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:05:09Z</time>
      </trkpt>
      <trkpt lat="50.715275024995208" lon="6.449169237166643">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:05:11Z</time>
      </trkpt>
      <trkpt lat="50.715217357501388" lon="6.449125818908215">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:05:17Z</time>
      </trkpt>
      <trkpt lat="50.71516714990139" lon="6.449058763682842">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:05:25Z</time>
      </trkpt>
      <trkpt lat="50.71516077965498" lon="6.449039066210389">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:05:26Z</time>
      </trkpt>
      <trkpt lat="50.715149380266666" lon="6.449004197493196">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T13:05:28Z</time>
      </trkpt>
      <trkpt lat="50.715078050270677" lon="6.44886908121407">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:05:38Z</time>
      </trkpt>
      <trkpt lat="50.715033793821931" lon="6.448795991018415">
        <ele>169.81</ele>
        <time>2012-12-03T13:05:44Z</time>
      </trkpt>
      <trkpt lat="50.715017952024937" lon="6.448780735954642">
        <ele>171.25</ele>
        <time>2012-12-03T13:05:46Z</time>
      </trkpt>
      <trkpt lat="50.714968582615256" lon="6.448681745678186">
        <ele>172.69</ele>
        <time>2012-12-03T13:05:54Z</time>
      </trkpt>
      <trkpt lat="50.714968414977193" lon="6.448672022670507">
        <ele>169.81</ele>
        <time>2012-12-03T13:05:55Z</time>
      </trkpt>
      <trkpt lat="50.714966403320432" lon="6.448681242763996">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:06:00Z</time>
      </trkpt>
      <trkpt lat="50.714940084144473" lon="6.448628101497889">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:06:06Z</time>
      </trkpt>
      <trkpt lat="50.714857019484043" lon="6.448508994653821">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:06:15Z</time>
      </trkpt>
      <trkpt lat="50.714801531285048" lon="6.44840975292027">
        <ele>171.25</ele>
        <time>2012-12-03T13:06:23Z</time>
      </trkpt>
      <trkpt lat="50.714758113026619" lon="6.448354599997401">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:06:28Z</time>
      </trkpt>
      <trkpt lat="50.714746713638306" lon="6.448347475379705">
        <ele>171.25</ele>
        <time>2012-12-03T13:06:29Z</time>
      </trkpt>
      <trkpt lat="50.714735733345151" lon="6.44834035076201">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:06:30Z</time>
      </trkpt>
      <trkpt lat="50.714692398905754" lon="6.448240857571363">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:06:39Z</time>
      </trkpt>
      <trkpt lat="50.714733302593231" lon="6.448207246139646">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T13:06:48Z</time>
      </trkpt>
      <trkpt lat="50.714707570150495" lon="6.448198445141316">
        <ele>172.69</ele>
        <time>2012-12-03T13:06:56Z</time>
      </trkpt>
      <trkpt lat="50.714679574593902" lon="6.448168940842152">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:06:59Z</time>
      </trkpt>
      <trkpt lat="50.714671779423952" lon="6.448154523968697">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:07:00Z</time>
      </trkpt>
      <trkpt lat="50.714653674513102" lon="6.448129545897245">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:07:02Z</time>
      </trkpt>
      <trkpt lat="50.714645879343152" lon="6.448117392137647">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:07:03Z</time>
      </trkpt>
      <trkpt lat="50.714547894895077" lon="6.448003314435482">
        <ele>173.16999999999999</ele>
        <time>2012-12-03T13:07:13Z</time>
      </trkpt>
      <trkpt lat="50.71452995762229" lon="6.447829222306609">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:07:22Z</time>
      </trkpt>
      <trkpt lat="50.714530041441321" lon="6.447806088253856">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:07:23Z</time>
      </trkpt>
      <trkpt lat="50.714526269584894" lon="6.447777338325977">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:07:25Z</time>
      </trkpt>
      <trkpt lat="50.714528281241655" lon="6.44775009714067">
        <ele>173.66</ele>
        <time>2012-12-03T13:07:26Z</time>
      </trkpt>
      <trkpt lat="50.714531969279051" lon="6.447721431031823">
        <ele>171.25</ele>
        <time>2012-12-03T13:07:27Z</time>
      </trkpt>
      <trkpt lat="50.714532723650336" lon="6.447694525122643">
        <ele>173.16999999999999</ele>
        <time>2012-12-03T13:07:28Z</time>
      </trkpt>
      <trkpt lat="50.714531047269702" lon="6.447670888155699">
        <ele>176.06</ele>
        <time>2012-12-03T13:07:29Z</time>
      </trkpt>
      <trkpt lat="50.714525179937482" lon="6.447651442140341">
        <ele>176.06</ele>
        <time>2012-12-03T13:07:30Z</time>
      </trkpt>
      <trkpt lat="50.714503135532141" lon="6.447671558707953">
        <ele>172.69</ele>
        <time>2012-12-03T13:07:36Z</time>
      </trkpt>
      <trkpt lat="50.714503889903426" lon="6.447671391069889">
        <ele>174.62</ele>
        <time>2012-12-03T13:07:39Z</time>
      </trkpt>
      <trkpt lat="50.714521994814277" lon="6.447662841528654">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:07:41Z</time>
      </trkpt>
      <trkpt lat="50.71453339420259" lon="6.447670636698604">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:07:42Z</time>
      </trkpt>
      <trkpt lat="50.714545547962189" lon="6.447690920904279">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:07:43Z</time>
      </trkpt>
      <trkpt lat="50.714559629559517" lon="6.447693854570389">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:07:44Z</time>
      </trkpt>
      <trkpt lat="50.714571280404925" lon="6.447682874277234">
        <ele>172.69</ele>
        <time>2012-12-03T13:07:45Z</time>
      </trkpt>
      <trkpt lat="50.714583601802588" lon="6.447661835700274">
        <ele>175.09999999999999</ele>
        <time>2012-12-03T13:07:46Z</time>
      </trkpt>
      <trkpt lat="50.714593576267362" lon="6.447644149884582">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:07:47Z</time>
      </trkpt>
      <trkpt lat="50.714605310931802" lon="6.447630906477571">
        <ele>171.25</ele>
        <time>2012-12-03T13:07:48Z</time>
      </trkpt>
      <trkpt lat="50.714619308710098" lon="6.447622356936336">
        <ele>171.25</ele>
        <time>2012-12-03T13:07:49Z</time>
      </trkpt>
      <trkpt lat="50.714693320915103" lon="6.447558905929327">
        <ele>169.81</ele>
        <time>2012-12-03T13:07:57Z</time>
      </trkpt>
      <trkpt lat="50.71473715826869" lon="6.447533424943686">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:08:03Z</time>
      </trkpt>
      <trkpt lat="50.71474788710475" lon="6.447521103546023">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:08:04Z</time>
      </trkpt>
      <trkpt lat="50.714756939560175" lon="6.447513643652201">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:08:05Z</time>
      </trkpt>
      <trkpt lat="50.714766411110759" lon="6.44750970415771">
        <ele>169.81</ele>
        <time>2012-12-03T13:08:06Z</time>
      </trkpt>
      <trkpt lat="50.714779486879706" lon="6.447517834603787">
        <ele>173.66</ele>
        <time>2012-12-03T13:08:09Z</time>
      </trkpt>
      <trkpt lat="50.714804381132126" lon="6.447499310597777">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T13:08:14Z</time>
      </trkpt>
      <trkpt lat="50.714884009212255" lon="6.447410462424159">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:08:23Z</time>
      </trkpt>
      <trkpt lat="50.71490672416985" lon="6.447388418018818">
        <ele>175.58000000000001</ele>
        <time>2012-12-03T13:08:25Z</time>
      </trkpt>
      <trkpt lat="50.714920302852988" lon="6.44737827591598">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:08:26Z</time>
      </trkpt>
      <trkpt lat="50.715011665597558" lon="6.447306945919991">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:08:35Z</time>
      </trkpt>
      <trkpt lat="50.715080900117755" lon="6.447239890694618">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:08:42Z</time>
      </trkpt>
      <trkpt lat="50.715139070525765" lon="6.447200998663902">
        <ele>172.69</ele>
        <time>2012-12-03T13:08:48Z</time>
      </trkpt>
      <trkpt lat="50.715219620615244" lon="6.44712271168828">
        <ele>173.16999999999999</ele>
        <time>2012-12-03T13:08:57Z</time>
      </trkpt>
      <trkpt lat="50.715268068015575" lon="6.447069151327014">
        <ele>171.25</ele>
        <time>2012-12-03T13:09:05Z</time>
      </trkpt>
      <trkpt lat="50.715270834043622" lon="6.44706160761416">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:09:08Z</time>
      </trkpt>
      <trkpt lat="50.715290950611234" lon="6.447041993960738">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:09:16Z</time>
      </trkpt>
      <trkpt lat="50.715311150997877" lon="6.447026738896966">
        <ele>168.37</ele>
        <time>2012-12-03T13:09:20Z</time>
      </trkpt>
      <trkpt lat="50.715314168483019" lon="6.447023805230856">
        <ele>174.62</ele>
        <time>2012-12-03T13:09:22Z</time>
      </trkpt>
      <trkpt lat="50.715319449082017" lon="6.447023050859571">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:09:27Z</time>
      </trkpt>
      <trkpt lat="50.715331854298711" lon="6.447016512975097">
        <ele>171.25</ele>
        <time>2012-12-03T13:09:28Z</time>
      </trkpt>
      <trkpt lat="50.715424222871661" lon="6.446918779984117">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T13:09:36Z</time>
      </trkpt>
      <trkpt lat="50.715433275327086" lon="6.446905452758074">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T13:09:37Z</time>
      </trkpt>
      <trkpt lat="50.715444339439273" lon="6.44689355045557">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:09:38Z</time>
      </trkpt>
      <trkpt lat="50.715429000556469" lon="6.446889778599143">
        <ele>175.09999999999999</ele>
        <time>2012-12-03T13:09:41Z</time>
      </trkpt>
      <trkpt lat="50.715428162366152" lon="6.446907883509994">
        <ele>173.66</ele>
        <time>2012-12-03T13:09:48Z</time>
      </trkpt>
      <trkpt lat="50.715478537604213" lon="6.446904363110662">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:09:53Z</time>
      </trkpt>
      <trkpt lat="50.715488931164145" lon="6.446893801912665">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:09:54Z</time>
      </trkpt>
      <trkpt lat="50.715500079095364" lon="6.44688525237143">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:09:55Z</time>
      </trkpt>
      <trkpt lat="50.71562304161489" lon="6.446799840778112">
        <ele>171.25</ele>
        <time>2012-12-03T13:10:05Z</time>
      </trkpt>
      <trkpt lat="50.715689174830914" lon="6.446776539087296">
        <ele>173.66</ele>
        <time>2012-12-03T13:10:13Z</time>
      </trkpt>
      <trkpt lat="50.715687666088343" lon="6.446756087243557">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T13:10:20Z</time>
      </trkpt>
      <trkpt lat="50.715696383267641" lon="6.446741418913007">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T13:10:21Z</time>
      </trkpt>
      <trkpt lat="50.715707866474986" lon="6.446729097515345">
        <ele>171.25</ele>
        <time>2012-12-03T13:10:22Z</time>
      </trkpt>
      <trkpt lat="50.715733766555786" lon="6.446704035624862">
        <ele>173.16999999999999</ele>
        <time>2012-12-03T13:10:25Z</time>
      </trkpt>
      <trkpt lat="50.71576964110136" lon="6.446654247120023">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T13:10:29Z</time>
      </trkpt>
      <trkpt lat="50.715812388807535" lon="6.446639075875282">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:10:33Z</time>
      </trkpt>
      <trkpt lat="50.715855220332742" lon="6.446622395887971">
        <ele>173.16999999999999</ele>
        <time>2012-12-03T13:10:41Z</time>
      </trkpt>
      <trkpt lat="50.715854717418551" lon="6.44663454964757">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:10:48Z</time>
      </trkpt>
      <trkpt lat="50.715866954997182" lon="6.446612169966102">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:10:49Z</time>
      </trkpt>
      <trkpt lat="50.715881120413542" lon="6.446591718122363">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:10:50Z</time>
      </trkpt>
      <trkpt lat="50.715892184525728" lon="6.446571769192815">
        <ele>171.25</ele>
        <time>2012-12-03T13:10:51Z</time>
      </trkpt>
      <trkpt lat="50.71590299718082" lon="6.446553915739059">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:10:52Z</time>
      </trkpt>
      <trkpt lat="50.715913558378816" lon="6.446539498865604">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:10:53Z</time>
      </trkpt>
      <trkpt lat="50.715926885604858" lon="6.446527764201164">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:10:54Z</time>
      </trkpt>
      <trkpt lat="50.71603593416512" lon="6.446430031210184">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:11:04Z</time>
      </trkpt>
      <trkpt lat="50.716041466221213" lon="6.446417290717363">
        <ele>172.69</ele>
        <time>2012-12-03T13:11:05Z</time>
      </trkpt>
      <trkpt lat="50.716049345210195" lon="6.446402706205845">
        <ele>173.66</ele>
        <time>2012-12-03T13:11:06Z</time>
      </trkpt>
      <trkpt lat="50.716144479811192" lon="6.446309164166451">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:11:15Z</time>
      </trkpt>
      <trkpt lat="50.716199884191155" lon="6.446246718987823">
        <ele>171.25</ele>
        <time>2012-12-03T13:11:23Z</time>
      </trkpt>
      <trkpt lat="50.716271549463272" lon="6.446127109229565">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:11:33Z</time>
      </trkpt>
      <trkpt lat="50.716323852539062" lon="6.446030801162124">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T13:11:41Z</time>
      </trkpt>
      <trkpt lat="50.716380933299661" lon="6.446062317118049">
        <ele>168.37</ele>
        <time>2012-12-03T13:11:48Z</time>
      </trkpt>
      <trkpt lat="50.716395098716021" lon="6.446070363745093">
        <ele>167.88999999999999</ele>
        <time>2012-12-03T13:11:57Z</time>
      </trkpt>
      <trkpt lat="50.716396858915687" lon="6.446058042347431">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T13:12:14Z</time>
      </trkpt>
      <trkpt lat="50.716423764824867" lon="6.446059970185161">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T13:12:22Z</time>
      </trkpt>
      <trkpt lat="50.716426447033882" lon="6.446060976013541">
        <ele>168.37</ele>
        <time>2012-12-03T13:12:24Z</time>
      </trkpt>
      <trkpt lat="50.716420663520694" lon="6.446064915508032">
        <ele>168.84999999999999</ele>
        <time>2012-12-03T13:12:35Z</time>
      </trkpt>
      <trkpt lat="50.716372802853584" lon="6.446023005992174">
        <ele>171.25</ele>
        <time>2012-12-03T13:12:43Z</time>
      </trkpt>
      <trkpt lat="50.716329300776124" lon="6.446049157530069">
        <ele>171.25</ele>
        <time>2012-12-03T13:12:50Z</time>
      </trkpt>
      <trkpt lat="50.71631882339716" lon="6.446057120338082">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T13:12:51Z</time>
      </trkpt>
      <trkpt lat="50.716307675465941" lon="6.446066005155444">
        <ele>171.25</ele>
        <time>2012-12-03T13:12:52Z</time>
      </trkpt>
      <trkpt lat="50.716290744021535" lon="6.446071118116379">
        <ele>172.21000000000001</ele>
        <time>2012-12-03T13:12:53Z</time>
      </trkpt>
      <trkpt lat="50.716275069862604" lon="6.446072291582823">
        <ele>171.25</ele>
        <time>2012-12-03T13:12:54Z</time>
      </trkpt>
      <trkpt lat="50.716264424845576" lon="6.446074889972806">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:12:55Z</time>
      </trkpt>
      <trkpt lat="50.716252941638231" lon="6.446080757305026">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:12:56Z</time>
      </trkpt>
      <trkpt lat="50.716214552521706" lon="6.446059299632907">
        <ele>168.37</ele>
        <time>2012-12-03T13:13:00Z</time>
      </trkpt>
      <trkpt lat="50.716218408197165" lon="6.446055360138416">
        <ele>165.47999999999999</ele>
        <time>2012-12-03T13:13:08Z</time>
      </trkpt>
      <trkpt lat="50.716210445389152" lon="6.446059886366129">
        <ele>169.33000000000001</ele>
        <time>2012-12-03T13:13:12Z</time>
      </trkpt>
      <trkpt lat="50.716214636340737" lon="6.446056952700019">
        <ele>174.62</ele>
        <time>2012-12-03T13:13:13Z</time>
      </trkpt>
      <trkpt lat="50.716226035729051" lon="6.446074973791838">
        <ele>174.13999999999999</ele>
        <time>2012-12-03T13:13:21Z</time>
      </trkpt>
      <trkpt lat="50.716245230287313" lon="6.44608972594142">
        <ele>172.69</ele>
        <time>2012-12-03T13:13:23Z</time>
      </trkpt>
      <trkpt lat="50.716303484514356" lon="6.446069441735745">
        <ele>171.72999999999999</ele>
        <time>2012-12-03T13:13:28Z</time>
      </trkpt>
      <trkpt lat="50.716319577768445" lon="6.446061227470636">
        <ele>171.25</ele>
        <time>2012-12-03T13:13:29Z</time>
      </trkpt>
      <trkpt lat="50.716337766498327" lon="6.446052677929401">
        <ele>169.81</ele>
        <time>2012-12-03T13:13:31Z</time>
      </trkpt>
      <trkpt lat="50.716371797025204" lon="6.446052342653275">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:13:38Z</time>
      </trkpt>
      <trkpt lat="50.716382693499327" lon="6.446012612432241">
        <ele>170.28999999999999</ele>
        <time>2012-12-03T13:13:49Z</time>
      </trkpt>
      <trkpt lat="50.716398116201162" lon="6.445961399003863">
        <ele>170.77000000000001</ele>
        <time>2012-12-03T13:14:06Z</time>
      </trkpt>
    </trkseg>
  </trk>

  <wpt lat="50.716740014031529" lon="6.445579016581178">
    <ele>166.33448799999999</ele>
    <time>2012-12-03T09:12:28Z</time>
    <name>1107</name>
    <sym>Flag, Green</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.71627096273005" lon="6.445984030142427">
    <ele>166.125946</ele>
    <time>2012-12-03T09:20:08Z</time>
    <name>1108</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.715435035526752" lon="6.446907967329025">
    <ele>167.88145399999999</ele>
    <time>2012-12-03T09:26:12Z</time>
    <name>1109</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.715144015848637" lon="6.447166968137026">
    <ele>168.15205399999999</ele>
    <time>2012-12-03T09:27:56Z</time>
    <name>1110</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.714877974241972" lon="6.447410965338349">
    <ele>169.19809000000001</ele>
    <time>2012-12-03T09:28:49Z</time>
    <name>1111</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.712555013597012" lon="6.445330996066332">
    <ele>170.21160900000001</ele>
    <time>2012-12-03T09:39:17Z</time>
    <name>1112</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.712138013914227" lon="6.444818023592234">
    <ele>171.18963600000001</ele>
    <time>2012-12-03T09:40:18Z</time>
    <name>1113</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.711723025888205" lon="6.444288035854697">
    <ele>171.37829600000001</ele>
    <time>2012-12-03T09:41:47Z</time>
    <name>1114</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.709814969450235" lon="6.443385975435376">
    <ele>190.55445900000001</ele>
    <time>2012-12-03T09:46:06Z</time>
    <name>1115</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.708037000149488" lon="6.444257022812963">
    <ele>212.32429500000001</ele>
    <time>2012-12-03T09:51:49Z</time>
    <name>1116</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.705124959349632" lon="6.445977995172143">
    <ele>234.553696</ele>
    <time>2012-12-03T09:58:22Z</time>
    <name>1117</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.704392967745662" lon="6.448730025440455">
    <ele>262.27990699999998</ele>
    <time>2012-12-03T10:05:53Z</time>
    <name>1118</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.703430976718664" lon="6.453699991106987">
    <ele>356.14486699999998</ele>
    <time>2012-12-03T10:28:22Z</time>
    <name>1119</name>
    <sym>Civil</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.703589981421828" lon="6.454590987414122">
    <ele>362.58373999999998</ele>
    <time>2012-12-03T10:30:26Z</time>
    <name>1120</name>
    <sym>Civil</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.704368995502591" lon="6.4571029599756">
    <ele>365.72985799999998</ele>
    <time>2012-12-03T10:35:21Z</time>
    <name>1121</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.705507006496191" lon="6.459969989955425">
    <ele>374.96560699999998</ele>
    <time>2012-12-03T10:45:49Z</time>
    <name>1122</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.703490991145372" lon="6.462328992784023">
    <ele>333.95352200000002</ele>
    <time>2012-12-03T10:59:51Z</time>
    <name>1123</name>
    <sym>Civil</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.70286201313138" lon="6.465333988890052">
    <ele>356.68597399999999</ele>
    <time>2012-12-03T11:15:03Z</time>
    <name>1124</name>
    <sym>Civil</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.704764034599066" lon="6.463254019618034">
    <ele>376.72851600000001</ele>
    <time>2012-12-03T11:19:19Z</time>
    <name>1125</name>
    <sym>Civil</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.704793035984039" lon="6.463227029889822">
    <ele>376.66464200000001</ele>
    <time>2012-12-03T11:19:24Z</time>
    <name>1126</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.706075970083475" lon="6.461375970393419">
    <ele>385.22314499999999</ele>
    <time>2012-12-03T11:23:20Z</time>
    <name>1127</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.707497959956527" lon="6.459181001409888">
    <ele>381.78137199999998</ele>
    <time>2012-12-03T11:28:33Z</time>
    <name>1128</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.707701975479722" lon="6.455857995897532">
    <ele>392.98727400000001</ele>
    <time>2012-12-03T11:32:00Z</time>
    <name>1129</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.707140974700451" lon="6.456431988626719">
    <ele>375.53845200000001</ele>
    <time>2012-12-03T11:47:26Z</time>
    <name>1130</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.708279991522431" lon="6.460151039063931">
    <ele>384.06561299999998</ele>
    <time>2012-12-03T11:55:40Z</time>
    <name>1131</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.711571983993053" lon="6.457609981298447">
    <ele>371.56152300000002</ele>
    <time>2012-12-03T12:01:41Z</time>
    <name>1132</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.712889032438397" lon="6.455228012055159">
    <ele>355.67120399999999</ele>
    <time>2012-12-03T12:06:10Z</time>
    <name>1133</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.71532498113811" lon="6.457189964130521">
    <ele>256.60632299999997</ele>
    <time>2012-12-03T12:17:44Z</time>
    <name>1134</name>
    <sym>Crossing</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.714630959555507" lon="6.458407016471028">
    <ele>293.752411</ele>
    <time>2012-12-03T12:22:08Z</time>
    <name>1135</name>
    <sym>Crossing</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.718085980042815" lon="6.460031010210514">
    <ele>267.52175899999997</ele>
    <time>2012-12-03T12:30:35Z</time>
    <name>1136</name>
    <sym>Crossing</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.718301981687546" lon="6.459964960813522">
    <ele>268.561981</ele>
    <time>2012-12-03T12:34:24Z</time>
    <name>1137</name>
    <sym>Civil</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.718483030796051" lon="6.460007037967444">
    <ele>264.966431</ele>
    <time>2012-12-03T12:37:27Z</time>
    <name>1138</name>
    <sym>Civil</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.715784979984164" lon="6.452279007062316">
    <ele>201.485275</ele>
    <time>2012-12-03T12:53:19Z</time>
    <name>1139</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.716914022341371" lon="6.453784983605146">
    <ele>189.33273299999999</ele>
    <time>2012-12-03T12:56:00Z</time>
    <name>1140</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.716615961864591" lon="6.452357964590192">
    <ele>185.243866</ele>
    <time>2012-12-03T12:59:45Z</time>
    <name>1141</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.717014018446207" lon="6.452661976218224">
    <ele>181.95784</ele>
    <time>2012-12-03T13:00:25Z</time>
    <name>1142</name>
    <sym>Flag, Blue</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.716385040432215" lon="6.446000961586833">
    <ele>170.786407</ele>
    <time>2012-12-03T13:13:52Z</time>
    <name>1143</name>
    <sym>Flag, Red</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Wegpunkte_03-DEZ-12.gpx</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>

  <wpt lat="50.706732273101807" lon="6.452407836914063">
    <time>2012-12-03T18:16:33Z</time>
    <name>Eifelblick</name>
    <cmt>Eifelblick</cmt>
    <desc>Eifelblick</desc>
    <sym>Civil</sym>
    <type>user</type>
    <extensions>
      <gpxx:WaypointExtension>
        <gpxx:DisplayMode>SymbolAndName</gpxx:DisplayMode>
        <gpxx:Categories>
          <gpxx:Category>Ungelistete Daten</gpxx:Category>
        </gpxx:Categories>
      </gpxx:WaypointExtension>
    </extensions>
  </wpt>
</gpx>`;

    trainingData[3] = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<TrainingCenterDatabase xmlns="http://www.garmin.com/xmlschemas/TrainingCenterDatabase/v2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation
="http://www.garmin.com/xmlschemas/ActivityExtension/v2 http://www.garmin.com/xmlschemas/ActivityExtensionv2.xsd http://www.garmin.com/xmlschemas/TrainingCenterDat
abase/v2 http://www.garmin.com/xmlschemas/TrainingCenterDatabasev2.xsd">

  <Activities>
    <Activity Sport="Biking">
      <Id>2010-06-26T10:06:11Z</Id>
      <Lap StartTime="2010-06-26T10:06:11Z">
        <TotalTimeSeconds>906.1800000</TotalTimeSeconds>
        <DistanceMeters>9762.4433594</DistanceMeters>
        <MaximumSpeed>15.2404995</MaximumSpeed>
        <Calories>493</Calories>
        <AverageHeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
          <Value>179</Value>
        </AverageHeartRateBpm>
        <MaximumHeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
          <Value>194</Value>
        </MaximumHeartRateBpm>
        <Intensity>Active</Intensity>
        <Cadence>84</Cadence>
        <TriggerMethod>Location</TriggerMethod>
        <Track>
          <Trackpoint>
            <Time>2010-06-26T10:06:11Z</Time>
            <Position>
              <LatitudeDegrees>40.7780135</LatitudeDegrees>
              <LongitudeDegrees>-73.9665795</LongitudeDegrees>
            </Position>
            <AltitudeMeters>36.1867676</AltitudeMeters>
            <DistanceMeters>0.0629519</DistanceMeters>
            <HeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
              <Value>148</Value>
            </HeartRateBpm>
            <SensorState>Absent</SensorState>
          </Trackpoint>
          <Trackpoint>
            <Time>2010-06-26T10:06:12Z</Time>
            <Position>
              <LatitudeDegrees>40.7780136</LatitudeDegrees>
              <LongitudeDegrees>-73.9665778</LongitudeDegrees>
            </Position>
            <AltitudeMeters>35.2254639</AltitudeMeters>
            <DistanceMeters>0.1698548</DistanceMeters>
            <HeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
              <Value>148</Value>
            </HeartRateBpm>
            <SensorState>Absent</SensorState>
          </Trackpoint>
          <Trackpoint>
            <Time>2010-06-26T10:06:17Z</Time>
            <Position>
              <LatitudeDegrees>40.7780147</LatitudeDegrees>
              <LongitudeDegrees>-73.9665789</LongitudeDegrees>
            </Position>
            <AltitudeMeters>34.2641602</AltitudeMeters>
            <DistanceMeters>0.5907414</DistanceMeters>
            <HeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
              <Value>152</Value>
            </HeartRateBpm>
            <SensorState>Absent</SensorState>
          </Trackpoint>
          <Trackpoint>
            <Time>2010-06-26T10:06:24Z</Time>
            <Position>
              <LatitudeDegrees>40.7780246</LatitudeDegrees>
              <LongitudeDegrees>-73.9665919</LongitudeDegrees>
            </Position>
            <AltitudeMeters>34.7448730</AltitudeMeters>
            <DistanceMeters>1.9415363</DistanceMeters>
            <HeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
              <Value>147</Value>
            </HeartRateBpm>
            <SensorState>Absent</SensorState>
          </Trackpoint>
          <Trackpoint>
            <Time>2010-06-26T10:06:25Z</Time>
            <Position>
              <LatitudeDegrees>40.7780338</LatitudeDegrees>
              <LongitudeDegrees>-73.9665851</LongitudeDegrees>
            </Position>
            <AltitudeMeters>34.7448730</AltitudeMeters>
            <DistanceMeters>1.9993043</DistanceMeters>
            <HeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
              <Value>147</Value>
            </HeartRateBpm>
            <SensorState>Present</SensorState>
          </Trackpoint>
          <Trackpoint>
            <Time>2010-06-26T10:06:28Z</Time>
            <Position>
              <LatitudeDegrees>40.7780800</LatitudeDegrees>
              <LongitudeDegrees>-73.9665492</LongitudeDegrees>
            </Position>
            <AltitudeMeters>34.2641602</AltitudeMeters>
            <DistanceMeters>7.9581327</DistanceMeters>
            <HeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
              <Value>148</Value>
            </HeartRateBpm>
            <Cadence>1</Cadence>
            <SensorState>Present</SensorState>
            <Extensions>
              <TPX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2" CadenceSensor="Bike"/>
            </Extensions>
          </Trackpoint>
          <Trackpoint>
            <Time>2010-06-26T10:06:30Z</Time>
            <Position>
              <LatitudeDegrees>40.7781448</LatitudeDegrees>
              <LongitudeDegrees>-73.9665005</LongitudeDegrees>
            </Position>
            <AltitudeMeters>32.8222656</AltitudeMeters>
            <DistanceMeters>15.3775177</DistanceMeters>
            <HeartRateBpm xsi:type="HeartRateInBeatsPerMinute_t">
              <Value>151</Value>
            </HeartRateBpm>
            <Cadence>42</Cadence>
            <SensorState>Present</SensorState>
            <Extensions>
              <TPX xmlns="http://www.garmin.com/xmlschemas/ActivityExtension/v2" CadenceSensor="Bike"/>
            </Extensions>
          </Trackpoint>
        </Track>
      </Lap>
    </Activity>
  </Activities>

</TrainingCenterDatabase>`;

    trainingData[4] = [{
      "recording-rate": 5000,
      "sample-type": 1,
      "data": "0,100,102,97,97,101,103,106,96,89,88,87,98,108,113,112,114,115,118,121,121,121,121,123,117,119,122"
    }, {
      "recording-rate": 5000,
      "sample-type": 3,
      "data": "650,640,645,647,655,660,670,690,650,640,635,630,630,634,635,640,650,660,650,640,610,670,680,640,660,650,680"
    }, {
      "recording-rate": 5000,
      "sample-type": 9,
      "data": "22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22"
    }];

    console.log('Start dummy', trainingData);

    LocalDataProvider.save(datatypes['exercise'], trainingData);
  }
}

