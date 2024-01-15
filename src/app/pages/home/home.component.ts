import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TaskModel } from '../../shared/models/task.model';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	task = signal<TaskModel[]>([
		{ id: Date.now(), title: 'Learn Angular', done: false },
		{ id: Date.now(), title: 'Build a Todo App', done: false },
		{ id: Date.now(), title: 'Take a break', done: false }
	]);

	changeHandler(event: Event): void {
		const input = event.target as HTMLInputElement;
		const newTask = input.value;
		this.addTask(newTask);
		input.value = '';
	}

	addTask(title: string): void {
		this.task.update((task) => [...task, { id: Date.now(), done: false, title }]);
	}

	deleteTask(index: number): void {
		this.task.update((tasks) => {
			tasks.splice(index, 1);
			return tasks;
		});
	}

	updateTask(index: number): void {
		this.task.update((t) => {
			t[index].done = !t[index].done;
			return t;
		});
	}
}
