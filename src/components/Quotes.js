import React from 'react'

const Quotes = ({quotes, deleteQuotes}) => {
    const quoteList = quotes.length ? (
        quotes.map(quote => {
            return (
                <div className="quote-card card" key={ quote.id }>
                    <div className="quote-content-box">
                    <h3 className="quote-title">{ quote.title }</h3>
                        <div className="quote-box">
                            <p className="quote-text">"{ quote.content }"</p>
                            <p className="quote-author">- { quote.author }</p>
                        </div>
                    </div>
                    <div className="delete-quote-box">
                        <button className="delete-quote-btn" onClick={() => {deleteQuotes(quote.id)}}>Delete Quote</button>
                    </div>
                </div>
            )
        })
    ) : (
        <p>There are no quotes left</p>
    )
    return (
        <div className="quote-list">
            {quoteList}
        </div>
    )
}

export default Quotes
