import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import BookCreater from './BookCreater/BookCreater';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "Mistborn", author: "Brandon Sanderson"},
            {title: "The Night Angel Trilogy", author: "Brent Weeks"},
            {title: "The Black Prism", author: "Brent Weeks"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    createBook = (newBook) => {
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        });
    }

    render(){
        return(
            <div className = "container-fluid">
                <TitleBar />
                <BookViewer book = {this.books[this.state.bookNumber]} nextBook = {this.goToNextBook} previousBook = {this.goToPreviousBook}/>
                <BookCreater createBook = {this.createBook}/>
            </div>
        )
    }
}

export default App;