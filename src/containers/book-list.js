import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

// when we create a container file, export the container
export default connect(mapStateToProps)(BookList);
