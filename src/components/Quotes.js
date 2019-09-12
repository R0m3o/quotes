import React from 'react'

const Quotes = ({quotes, deleteQuotes}) => {
    const quoteList = quotes.length ? (
        quotes.map(quote => {
            return (
                <div className="quote-card" key={ quote.id }>
                    <h3>{ quote.title }</h3>
                    <p>{ quote.content }</p>
                    <p>{ quote.author }</p>
                    <button onClick={() => {deleteQuotes(quote.id)}}>Delete Quote</button>
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
