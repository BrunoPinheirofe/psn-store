import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
	@Input()
	gameType:string = "DIGITAL PS4"
	@Input()
	gamePricing:string = "399,29"

  constructor() { }

  ngOnInit(): void {
  }

}
