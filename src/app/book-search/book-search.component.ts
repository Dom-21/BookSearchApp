import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  imports: [CommonModule, FormsModule, HttpClientModule],
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  searchTerm: string = '';  // The term entered by the user
  books: any[] = [];        // Array to store the books fetched from API
  loading: boolean = false; // For showing a loading indicator

  constructor(private http: HttpClient) {}

  // Method to search books based on the search term
  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.books = []; // Clear books if search term is empty
      return;
    }

    this.loading = true;

    // Google Books API URL for searching books
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}`;

    // Make HTTP request
    this.http.get<any>(url).subscribe(
      (response) => {
        this.books = response.items || []; // Assign books to the array
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching books', error);
        this.loading = false;
      }
    );
  }
}
