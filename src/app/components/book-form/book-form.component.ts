import { Component } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  handleSubmit(event: SubmitEvent): void{
    event.preventDefault()
    console.log(event);
  }
}
