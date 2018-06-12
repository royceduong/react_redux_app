import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //flows action through all reducers

class BookList extends Component {
    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                onClick={()=> this.props.selectBook(book)}
                className="list-group-item">
                {book.title} </li>
            );
        });
    }
    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props
    //inside of BookList
    return {
        books: state.books
    };
}
//Anything returned from this unction will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch)
    // inside the container we can call this.props.selectBook
}
// Promote BookList from a component to a container - it needs to know about new dispatch method, selectBook.
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect takes function and component, produces container
//container is aware of state within redux. 