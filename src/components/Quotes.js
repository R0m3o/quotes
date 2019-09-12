import React from 'react'

const Quotes = ({quotes}) => {
    const quoteList = quotes.map(quote => {
        return (
            <div className="quote-card" key="quote.id">
                <h3>{ quote.quoteTitle }</h3>
                <p>{ quote.quoteContent }</p>
                <p>{ quote.author}</p>
            </div>
        )
    })
    return (
        <div className="quote-list">
            {quoteList}
        </div>
    )
}

export default Quotes
