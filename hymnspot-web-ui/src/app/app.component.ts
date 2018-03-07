import { Component } from '@angular/core';
import { AUDIO } from '../assets/js/visualizer.js';

@Component({
  selector: 'app-recorder',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chk = false;

  chkchanged = (e) => {
    if(this.chk==true) {
      document.getElementById("record-btn-tooltiptext").style.visibility = "hidden";
      document.getElementsByClassName("record-container")[0].classList.remove("tooltip");
      AUDIO.VISUALIZER.getInstance({
        autoplay: true,
        loop: true,
        audio: 'myAudio',
        canvas: 'visualCanvas',
        style: 'lounge',
        barWidth: 2,
        barHeight: 2,
        barSpacing: 5,
        barColor: '#D71B7B',
        shadowBlur: 20,
        shadowColor: '#880669',
        font: ['12px', 'Helvetica']
      });
    }
  }

  resultFound = (e) => {
    var result = document.getElementsByTagName("app-result")[0];
    result.classList.remove("not-displayed");
    result.classList.add("displayed");
    document.getElementById("logo").classList.add("result-section");
  }
}
