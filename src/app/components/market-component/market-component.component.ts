import { Component, OnInit } from '@angular/core';
import {CardServiceService} from "../../services/card-service.service";
import {ICard} from "../../Interfaces";

@Component({
  selector: 'app-market-component',
  templateUrl: './market-component.component.html',
  styleUrls: ['./market-component.component.css']
})

export class MarketComponentComponent implements OnInit {

  constructor(private cardService: CardServiceService) { }

  ngOnInit(): void {
    this.cardService.getCoinCard()
      .subscribe(d => this.cards = d);
  }

  cards: ICard[] = []
}
