import { Component } from '@angular/core';
import { BookSearchComponent } from "./book-search/book-search.component";

@Component({
  selector: 'app-root',
  imports: [BookSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-search-app';
}
