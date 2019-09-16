import React, { Component } from 'react';
import Quotes from './components/Quotes';
import AddQuote from './components/AddQuote';

class App extends Component {
  state = {
    quotes:[
      {title: 'To know, or...', content: 'The only true wisdom is in knowing, you know nothing', author: 'Socrates', id: 1},
      {title: 'A lovely country, it is', content: 'God bless Denmark', author: 'Queen Margrethe II', id: 2},
      {title: 'Keep on dreaming', content: 'You may say i´m a dreamer, but im not the only one', author: 'John Lennon', id: 3},
      {title: 'May the clouds be as soft as his mattresses', content: 'Goddag jeg hedder Lars Larsen...', author: 'Lars Larsen', id: 4},
      {title: 'Imagination!', content: 'Squidward, we don´t need a television. Not as long as we have our...', author: 'Spongebob', id: 5}
    ]
  }

  deleteQuotes = (id) => {
    let quotes = this.state.quotes.filter(quote => {
      return quote.id !== id
    });
    this.setState({
      quotes: quotes
    })
  }

  addQuote = (quote) => {
    quote.id = this.state.quotes.length+1;
    let quotes = [...this.state.quotes, quote];
    this.setState({
      quotes: quotes
    })
  }

  render() {
    return (
      <div className="quotes-app">
        <header>
          <h1>Quotes</h1>
        </header>
        <main className="container">
          <Quotes quotes={this.state.quotes} deleteQuotes={this.deleteQuotes}/>
        </main>
        <footer>
          <AddQuote addQuote={this.addQuote}/>
        </footer>
      </div>
    );
  }
}

export default App
