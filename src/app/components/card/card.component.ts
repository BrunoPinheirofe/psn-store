import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
//card
	@Input()
	gameCover:string= ''

//card-label
	@Input()
	gameLabel:string = ''

//card-pricing
	@Input()
	gameType:string = "DIGITAL PS4"
	@Input()
	gamePricing:string = "399,29"

  constructor() { }

  ngOnInit(): void {
  }

}
