import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'todoapp';
	array = [
		{ id: 1, name: 'Todo 1', completed: false },
		{ id: 2, name: 'Todo 2', completed: false },
		{ id: 3, name: 'Todo 3', completed: false }
	];
}
