# 📚 Angular Book Search App

An Angular application that allows users to search for books using the **Google Books API**. Users can search by **title, author, or ISBN**, view book details, and access book thumbnails.

## 🚀 Features
- 🔎 **Book Search**: Search by title, author, or ISBN.
- 📖 **Detailed View**: Displays book titles, authors, descriptions, and thumbnails.
- ⚡ **Real-time API Fetching**: Uses **Google Books API** to retrieve book details dynamically.
- 🎨 **Responsive UI**: Designed with CSS for an intuitive and clean experience.
- 🔄 **Loading Indicator**: Displays a loading animation while fetching book results.
- ❌ **Error Handling**: Handles cases where no books are found or an API error occurs.

---

## 🛠️ Installation & Setup

1. **Clone the repository**:
   git clone https://github.com/Dom-21/BookSearchApp.git
   cd BookSearchApp

2. **Install dependencies:**
   npm install
3. **Run**
   ng serve
---
##📌 Usage
1. Open the application in your browser.
2. Enter a book title, author, or ISBN in the search bar.
3. Click the Search button.
4. View the results, including book titles, authors, and descriptions.
5. If no results are found, a "No books found" message is displayed.
---
##🔗 API Integration
This application uses the Google Books API to fetch book data dynamically.

**API Endpoint Used:**
https://www.googleapis.com/books/v1/volumes?q={searchTerm}
Example Request:
https://www.googleapis.com/books/v1/volumes?q=harry+potter
The response includes book details like title, author, description, and cover image.

##Project Structure
📂 book-search-app
 ├── 📁 src
 │   ├── 📁 app
 │   │   ├── 📁 book-search
 │   │   │   ├── 📄 book-search.component.ts
 │   │   │   ├── 📄 book-search.component.html
 │   │   │   ├── 📄 book-search.component.css
 │   │   ├── 📄 app.module.ts
 │   ├── 📄 index.html
 ├── 📄 package.json
 ├── 📄 angular.json
 ├── 📄 README.md
