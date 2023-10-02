
import axios from'axios';
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import "./Shop.css";
import axiosInstance from '../Instances/axiosInstance';

const Shop = () => {
  const [books, setBookData] = useState([]);
//   const [loading, setLoading] = useState(false);

  useEffect(() => {
    axiosInstance
    .get("/viewBySearch")
    .then((resp) => resp.data)
      .then((data) => {
        console.log("Data: ",data.result.result)
        // setBookData(data.result.result); 
        // setLoading(false);
        const booksWithLanguagesAndReviews = data.result.result.map((book) => {
          const languages = book.language;
          const reviews = book.reviews.map((review) => review.reviewContent);
          return {
            ...book, 
            languages,
            reviews,
          };
        });
        setBookData(booksWithLanguagesAndReviews);
      });
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, []);


  return (
    <div className="container">   
      
      <div className="row">
        
        {/* {loading === true && <h1>Loading...</h1>} */}
        {books.map((book) => (
            <Books
            key={book.id}
            id={book.id}
            title={book.title}
            ISBN={book.ISBN}
            author={book.author}
            genre={book.genre}
            stock={book.stock}
            pageCount = {book.pageCount}
            price={book.price}
            languages={book.languages.join(' , ')}
            rating={book.rating}
            reviews={book.reviews}
            img={book.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;