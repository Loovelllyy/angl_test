import { Component, OnInit } from '@angular/core';
import {CardServiceService} from "../../services/card-service.service";
import {ICard} from "../../Interfaces";

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.css']
})
export class CoinCardComponent implements OnInit {

  constructor(private cardService: CardServiceService) { }

  ngOnInit(): void {
    this.cardService.getCoinCard()
      .subscribe(d => this.cards = d);
  }
  cards: ICard[] = [];
}
