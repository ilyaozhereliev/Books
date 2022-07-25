import { useState } from 'react';
import Modal from './Modal';
import style from './style.css';

const BookCard = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  return (
    <>
      {book.map((item) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount.toLocaleString();
        let title = item.volumeInfo.title;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <div
                key={item.id}
                className={'book-card'}
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{title}</h3>
                  <p className="amount">{amount} &#x20bd;</p>
                </div>
              </div>
              <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
            </>
          );
        }
      })}
    </>
  );
};

export default BookCard;
