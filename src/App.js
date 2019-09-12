import React, { Component } from 'react';
import Quotes from './components/Quotes';
import AddQuotes from './components/AddQuotes';

class App extends Component {
  state = {
    quotes:[
      {quoteTitle: 'To know, or...', quoteContent: 'The only true wisdom is in knowing, you know nothing', author: 'Socrates', id: 1},
      {quoteTitle: 'A lovely country, it is', quoteContent: 'God bless Denmark', author: 'Queen Margrethe II', id: 2},
      {quoteTitle: 'Keep on dreaming', quoteContent: 'You may say i´m a dreamer, but im not the only one', author: 'John Lennon', id: 3},
      {quoteTitle: 'May the clouds be as soft as his mattresses', quoteContent: 'Goddag jeg hedder Lars Larsen...', author: 'Lars Larsen', id: 4},
      {quoteTitle: 'Imagination!', quoteContent: 'Squidward, we don´t need a television. Not as long as we have our...', author: 'Spongebob', id: 5}
    ]
  }
  render() {
    return (
      <div className="quotes-app">
        <header>
          <h1>Quotes</h1>
        </header>
        <main className="container">
          <Quotes quotes={this.state.quotes}/>
        </main>
      </div>
    );
  }
}

export default App
