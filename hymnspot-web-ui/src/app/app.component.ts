import { Component } from '@angular/core';
import { AUDIO } from '../assets/js/visualizer.js';
import { SongResult } from './SongResult.class.js';

@Component({
  selector: 'app-recorder',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chk = false;
  songResult: SongResult = {
    albumArtUrl: "/assets/img/album_art/hybrid-theory.jpg",
    song: "Papercut",
    album: "Hybrid Theory",
    author: "Linkin Park"
  };
  chkchanged = (e) => {
    if (this.chk == true) {
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
    var logo = document.getElementById("logo");
    (<HTMLImageElement>logo).src = "assets/img/logo/hymnspot-full-min.png";
    logo.classList.add("result-section");
    logo.addEventListener("click", function (e) {
      location.href = "/";
    })
    this.songResult.albumArtUrl = "assets/img/album_art/hybrid-theory.jpg";
    this.songResult.song = "Papercut";
    this.songResult.album = "Hybrid Theory";
    this.songResult.author = "Linkin Park"
  }
  showMeta = (section) => {
    var metas = document.getElementsByClassName("meta");
    for (var i = 0; i < metas.length; i++) {
      (<HTMLElement>metas[i]).style.display = "none";
    }
    document.getElementById(section + "Meta").style.display = "block";
    var menus = document.getElementsByClassName("sidebar-menu-item");
    for (i = 0; i < menus.length; i++) {
      (<HTMLElement>menus[i]).classList.remove("w3-theme");
      (<HTMLElement>menus[i]).classList.remove("w3-text-white");
      (<HTMLElement>menus[i]).classList.add("w3-text-theme");
      (<HTMLElement>menus[i]).classList.add("w3-hover-theme");
      (<HTMLElement>menus[i]).classList.add("w3-hover-text-white");
    }
    var menu = document.getElementById(section + "Menu");
    menu.classList.add("w3-theme");
    menu.classList.add("w3-text-white");
    menu.classList.remove("w3-text-theme");
    menu.classList.remove("w3-hover-theme");
    menu.classList.remove("w3-hover-text-white");
  }
  closeMeta = (section) => {
    document.getElementById(section + "Meta").style.display = "none";
    var menus = document.getElementsByClassName("sidebar-menu-item");
    for (var i = 0; i < menus.length; i++) {
      (<HTMLElement>menus[i]).classList.remove("w3-theme");
      (<HTMLElement>menus[i]).classList.remove("w3-text-white");
      (<HTMLElement>menus[i]).classList.add("w3-text-theme");
      (<HTMLElement>menus[i]).classList.add("w3-hover-theme");
      (<HTMLElement>menus[i]).classList.add("w3-hover-text-white");
    }
  }
}
