import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
	selector: 'app-labs',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './labs.component.html',
	styleUrl: './labs.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabsComponent {
	title = 'Hola Bienvenido';
	array = signal([
		{ id: 1, name: 'Todo 1', completed: false },
		{ id: 2, name: 'Todo 2', completed: false },
		{ id: 3, name: 'Todo 3', completed: false }
	]);
	name = signal('Nicolas');
	age = 18;

	person = {
		name: 'Nicolas',
		age: 18
	};

	changeHandler(event: Event): void {
		this.name.set((event.target as HTMLInputElement).value);
	}
}
