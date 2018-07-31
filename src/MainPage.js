import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Shelf from './Shelf';

 class MainPage extends Component {
   render () {
     const shelves = [
       {
         id: 'currentlyReading',
         name: 'Currently Reading'
       },
       {
         id: 'wantToRead',
         name: 'Want to Read'
       },
       {
         id: 'read',
         name: 'Read'
       }
     ]

     return (
       <div className="list-books">
			    <div className="list-books-title">
					   <h1>MyReads</h1>
			    </div>
				  <div className="list-books-content">
             <div>
               {shelves.map(shelf => (
                  <Shelf
                     key={shelf.id}
                     name={shelf.name}
                     books={this.props.books.filter(book => book.shelf === shelf.id)}
                     changeShelf={this.props.changeShelf}/>
               ))}
             </div>
				  </div>
          <div className="open-search">
             <Link to="/search" className="close-search">Add a book</Link>
          </div>
       </div>
     );
   }
 }

 export default MainPage;
