import React, { Component } from 'react'

export class AddQuote extends Component {
    state = {
        title: null,
        content: null,
        author: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addQuote(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" onChange={this.handleChange} id="title"/>
                    <input type="text" placeholder="Author" onChange={this.handleChange} id="author"/>
                    <input type="text" placeholder="Quote" onChange={this.handleChange} id="content"/>
                    <button>Submit Quote</button>
                </form>
                
            </div>
        )
    }
}

export default AddQuote
