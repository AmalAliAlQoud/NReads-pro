import React, { Component } from "react";
import "./App.css";
import { getAllBooks } from "./Api";
//import Card from "./components/Card";
//import Movelist from "./components/Movelist";
import Shelfe from "./components/Shelfe";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  componentDidMount() {
   // this.setState({ title: "Amal" });
    //console.log(getAllBooks())
    // getAllBooks().then(res =>console.log(res))
    getAllBooks().then((res) => this.setState({ books: res }));
    // this.setState({booksArr:getAllBooks()})
  }
  render() {
    console.log(this.state.books);
    const shelvies = [
      { name: "curently read", value: "currentlyReading" },
      { name: "want to read", value: "wantToRead" },
      { name: "read", value: "read" },
    ];
    return (
      <div>
        <div className="books-list">
          <div className="books-list_title">
            <h1>NReads</h1>
          </div>
          <div className="books-list_content">
            <div>


              {shelvies.map((shelfe, index) => {
                return <Shelfe key={index} title={shelfe.name} shelfeValue={shelfe.value} />;
              })}

             
            </div>
          </div>
          <div className="search-btn">
            <button>Add a book</button>
          </div>
        </div>
      </div>
    );
  }
}
