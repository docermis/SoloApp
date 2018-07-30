import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-player-listing',
	templateUrl: './player-listing.component.html',
	styleUrls: ['./player-listing.component.css']
})
export class PlayerListingComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	what() {
		alert('boo');
	}
}
