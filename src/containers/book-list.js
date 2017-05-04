import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={ () => this.props.selectBook(book) }
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// "glue" between React and Redux
function mapStateToProps(state) {
  // whatever is returned from here
  // will show up as props
  // inside BookList
  // when app state changes, container will be re-rendered
  return {
    // returning "books" because I'm reading that from props above
    books: state.books
  };
}

// Anything returned from this function will end up
// as props on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result
  // should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// when we create a container file, export the container
// promote BookList from a component to a container
// it needs to know about this new dispatch method, selectBook
// make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
