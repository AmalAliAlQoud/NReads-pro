import React from "react";
import "../App.css";
import Movelist from "./Movelist";

function Card(props) {
  return (
    <div>
      <li>
        <div className="book">
          <div className="book-position">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  'url("http://books.google.com/books/content?id=mDzDBQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")',
              }}
            ></div>
            <div className="shelf-shfiter">
              <Movelist />
            </div>
          </div>
          <div className="book-title">{props.title}</div>
          <div className="book-author">{props.author}</div>
        </div>
      </li>
    </div>
  );
}

export default Card;
