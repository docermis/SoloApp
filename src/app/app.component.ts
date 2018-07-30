import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'my First Solo Web App';

	onClick() {
		if (true) {
			console.log('Hello World!');
		}
	}

}
