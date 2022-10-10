import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-hello',
  templateUrl: './user-hello.component.html',
  styleUrls: ['./user-hello.component.css']
})
export class UserHelloComponent implements OnInit {

  @Input() username: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  date = new Date;
}
