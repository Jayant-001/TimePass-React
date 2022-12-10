import React from "react";
import './QuoteItem.css'

export const QuoteItem = ({ quoteText, updateAdvice, timeDate }) => {
  
    const handleClick = (e) => {
        e.preventDefault()
        updateAdvice()
    }

  return (
    <>
      <div className="container">
        <div className="my-5">
          <div className="card text-center">
            <div className="card-header">Free ka gyaan</div>
            <div className="card-body">
              <p className="card-text">{quoteText}</p>
              <a href="/" className="btn btn-primary" onClick={handleClick}>
                More Gyan
              </a>
            </div>
            <div className="card-footer text-muted">{timeDate}</div>
          </div>
        </div>
      </div>
    </>
  );
};
