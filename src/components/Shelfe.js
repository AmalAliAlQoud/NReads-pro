import React, { Component } from 'react'
//import Card from './Card'
import Curentlyread from './Curentlyread'
export default class Shelfe extends Component {
    render() {
        return (
            <div>
                <div className="shelf">
                <h2 className="shelf-title">{this.props.title}</h2>
                <div className="shelf-books">
                  <ol className="books-box">
                    
                <Curentlyread />
                    
                  </ol>
                </div>
              </div>
            </div>
           
        )
    }
}
