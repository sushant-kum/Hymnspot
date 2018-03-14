import { Component, OnInit, Input } from '@angular/core';
import { SongResult } from '../SongResult.class';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() result: SongResult;
  
  constructor() {}

  ngOnInit() {
  }

}
