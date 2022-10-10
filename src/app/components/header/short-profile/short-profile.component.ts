import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-short-profile',
  templateUrl: './short-profile.component.html',
  styleUrls: ['./short-profile.component.css']
})
export class ShortProfileComponent implements OnInit {
  @Input() username: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
