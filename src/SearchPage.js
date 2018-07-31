import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

 class SearchPage extends Component {
   state = {
     query: '',
     queryBooks: []
   }

   updateQuery = (query) => {
     this.setState({ query: query })
     this.updateQueryBooks(query)
   }

   updateQueryBooks = (query) => {
     if (query) {
       BooksAPI.search(query).then((queryBooks) => {
         if (queryBooks.error) {
           this.setState({ queryBooks: [] })
         } else {
           this.setState({ queryBooks: queryBooks })
         }
       })
     } else {
       this.setState({ queryBooks: [] })
     }
   }

   render () {
     this.state.queryBooks.map((queryBook) => {
       queryBook.shelf = "none"
       this.props.books.map((book) => {
         queryBook.id === book.id ? queryBook.shelf = book.shelf : ""
       })
     })
     return (
       <div className="search-books">
         <div className="search-books-bar">
           <Link to="/" className="close-search">Close</Link>
           <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
           </div>
         </div>
         <div className="search-books-results">
            <ol className="books-grid">
              {this.state.queryBooks.map((queryBook) => {
                return (
                  <li key={queryBook.id}>
                    <Book
                      book={queryBook}
                      title={queryBook.title}
                      authors={queryBook.authors}
                      image={queryBook.imageLinks}
                      changeShelf={this.props.changeShelf}
                      currentShelf={queryBook.shelf}
                    />
                  </li>
                )
              })}
            </ol>
         </div>
       </div>
     );
   }
 }

 export default SearchPage;
