import React, { Component } from 'react';
import Book from './Book';

 class Shelf extends Component {
   render () {
     return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.name}</h2>
          <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books
                   .map(book => (
                      <li key ={book.id}>
                          <Book
                            book={book}
                            title={book.title}
                            authors={book.authors}
                            image={book.imageLinks}
                            currentShelf={book.shelf}
                            changeShelf={this.props.changeShelf}
                          />
                      </li>
                   )
                )}
              </ol>
          </div>
        </div>
     )
   }
 }

 export default Shelf;
